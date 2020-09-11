import { Router } from 'express';
import userContent from '../routes/userContent.json';

const instagram_scraping = Router();

instagram_scraping.get('/', (request, response) => {
  return response.json(userContent);
});

export default instagram_scraping;
