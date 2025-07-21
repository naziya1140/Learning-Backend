import { renderMainPage } from '../controllers/index.js';
import express from 'express';

const mainRouter = express.Router();

//handlers.
mainRouter.get('/', renderMainPage);

export default mainRouter;
