import { Router } from 'express';

import GetInstagramContent from '../services/CreateInstagramUser';
import GetFacebookContent from '../services/CreateFacebookUser';

const webScraping = Router();

webScraping.post('/users/instagram', async (request, response) => {
  try {
    const instagramContent = new GetInstagramContent();
    const content = await instagramContent.execute({
      username: request.query.username?.toString(),
      id: request.query.id?.toString(),
    });
    return response.status(200).json(content);
  } catch (err) {
    console.log(err);
    return response.status(err.statusCode).json(err.message);
  }
});
 webScraping.post('/users/facebook', async (request, response) => {
  try {
    const facebookContent = new GetFacebookContent();
    const content = await facebookContent.execute({
      name: request.query.name?.toString(),
      id: request.query.id?.toString(),
    });
    return response.status(200).json(content);
  } catch (err) {
    console.log(err);
    return response.status(err.statusCode).json(err.message);
  }
});

export default webScraping;
