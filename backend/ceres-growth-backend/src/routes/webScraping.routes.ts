import { Router } from 'express';

import GetInstagramContent from '../services/CreateInstagramUser';
import GetFacebookContent from '../services/CreateFacebookUser';
import ListInstagramUser from '../services/ListInstagramUser';
import ListFacebookUser from '../services/ListFacebookUser';

const webScraping = Router();

webScraping.get('/users/instagram', async (request, response) => {
  try {
    const list = new ListInstagramUser();
    const instagramUsers = await list.execute({
      username: `${request.query.username}`,
      take: Number(request.query.take) || 10,
      filter: `${request.query.filter}`,
    });
    return response.status(200).json(instagramUsers);
  } catch (err) {
    console.log(err);
    return response.status(err.statusCode).json(err.message);
  }
});

webScraping.post('/users/instagram', async (request, response) => {
  try {
    const instagramContent = new GetInstagramContent();
    const content = await instagramContent.execute({
      username: `${request.body.username?.toString()}`,
    });
    return response.status(200).json(content);
  } catch (err) {
    console.log(err);
    return response.status(err.statusCode).json(err.message);
  }
});

webScraping.get('/users/facebook', async (request, response) => {
  try {
    const list = new ListFacebookUser();
    const instagramUsers = await list.execute({
      username: `${request.query.username}`,
      take: Number(request.query.take) || 10,
      filter: `${request.query.filter}`,
    });
    return response.status(200).json(instagramUsers);
  } catch (err) {
    console.log(err);
    return response.status(err.statusCode).json(err.message);
  }
});
webScraping.post('/users/facebook', async (request, response) => {
  try {
    const facebookContent = new GetFacebookContent();
    const content = await facebookContent.execute({
      username: `${request.query.username?.toString()}`,
    });
    return response.status(200).json(content);
  } catch (err) {
    console.log(err);
    return response.status(err.statusCode).json(err.message);
  }
});
export default webScraping;
