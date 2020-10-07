import { Router } from 'express';

import GetInstagramContent from '../services/CreateInstagramUser';

const webScraping = Router();

webScraping.get('/users/instagram', async (request, response) => {
  try {
    const instagramContent = new GetInstagramContent();
    const content = await instagramContent.execute();
    return response.status(200).json(content);
  } catch (err) {
    console.log(err);
    return response.status(err.statusCode).json(err.message);
  }
});

export default webScraping;
