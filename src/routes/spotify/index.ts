import { Router } from "express";
import { loginSpotify, refreshTokenSpotify } from "../../controller/spotify";
const router = Router();

router.post('/login', loginSpotify);
router.get('/refresh', refreshTokenSpotify)
export default router;