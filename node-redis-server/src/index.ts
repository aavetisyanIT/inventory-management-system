import express from "express";
import axios from "axios";
import { createClient } from "redis";

const DEFAULT_EXPIRATION = 3600;

const app = express();
const port = 3000;

type PhotoResItem = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

(async () => {
  const redisClient = await createClient()
    .on("error", err => console.log("Redis Client Error", err))
    .connect();

  app.get("/photos", async (req, res) => {
    const albumId = req.query.albumId;
    try {
      const photos = await redisClient.get(`photos$album_${albumId}`);
      if (!photos) {
        const { data } = await axios.get<PhotoResItem[]>(
          "https://jsonplaceholder.typicode.com/photos",
          {
            params: { albumId },
          },
        );
        await redisClient.set(`photos$album_${albumId}`, JSON.stringify(data));
        return res.status(200).json(data);
      }
      return res.status(200).json(JSON.parse(photos));
    } catch (err) {
      if (axios.isAxiosError(err)) {
        res.status(err.response?.status || 500).json({ error: err.message });
      } else {
        // Generic error handling
        console.error("Unknown error:", err);
        res.status(500).json({ error: "An unexpected error occurred" });
      }
    }
  });

  app.get("/photos/:id", async (req, res) => {
    try {
      const { data } = await axios.get<PhotoResItem>(
        `https://jsonplaceholder.typicode.com/photos/${req.params.id}`,
      );

      res.status(200).json(data);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        res.status(err.response?.status || 500).json({ error: err.message });
      } else {
        // Generic error handling
        console.error("Unknown error:", err);
        res.status(500).json({ error: "An unexpected error occurred" });
      }
    }
  });

  app.listen(port, () => console.log(`Server is listening on port: ${port}`));
})();
