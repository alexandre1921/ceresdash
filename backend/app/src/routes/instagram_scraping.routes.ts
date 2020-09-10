import { Router } from "express";

const instagram_scraping = Router();

instagram_scraping.get("/", (request, response) => {
  return response.json({ message: "Hello World" });
});

export default instagram_scraping;
