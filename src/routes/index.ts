
import { Router } from 'express';
import routerUser from './user';
import routerSession from './session';
import routerSpotify from './spotify';

const router = Router();

/**
 * All routes
 */
router.use('/user', routerUser);
router.use('/session', routerSession);
router.use('/spotify', routerSpotify);

export default router