import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

type PhotoResItem = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

app.get("/photos", async (req, res) => {
  const albumId = req.query.albumId;
  try {
    const { data } = await axios.get<PhotoResItem[]>(
      "https://jsonplaceholder.typicode.com/photos",
      {
        params: { albumId },
      },
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
