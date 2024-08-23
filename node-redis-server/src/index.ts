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

  function getOrSetCache(
    key: string,
    callback: () => Promise<PhotoResItem | PhotoResItem[]>,
  ) {
    return new Promise(async (resolve, reject) => {
      try {
        const cachedData = await redisClient.get(key);
        if (cachedData) {
          return resolve(JSON.parse(cachedData));
        }
        const fetchedData = await callback();
        await redisClient.set(key, JSON.stringify(fetchedData));
        resolve(fetchedData);
      } catch (error) {
        reject(error);
      }
    });
  }

  app.get("/photos", async (req, res) => {
    const albumId = req.query.albumId;
    try {
      const photos = await getOrSetCache(
        `photos$album_${albumId}`,
        async function () {
          const { data } = await axios.get<PhotoResItem[]>(
            "https://jsonplaceholder.typicode.com/photos",
            {
              params: { albumId },
            },
          );
          return data;
        },
      );

      return res.status(200).json(photos);
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
      const photos = await getOrSetCache(
        `photo_id:${req.params.id}`,
        async function () {
          const { data } = await axios.get<PhotoResItem>(
            `https://jsonplaceholder.typicode.com/photos/${req.params.id}`,
          );
          return data;
        },
      );

      res.status(200).json(photos);
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
