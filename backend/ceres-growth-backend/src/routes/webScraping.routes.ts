import { Router } from 'express';

import GetInstagramContent from '../services/GetInstagramContent';

const webScraping = Router();

webScraping.get('/users/instagram', async (request, response) => {
  try {
    const instagramContent = new GetInstagramContent();
    const content = await instagramContent.execute();
    return response.json(content);
  } catch (err) {
    return response.status(err.statusCode).json(err.message);
  }
});

export default webScraping;
