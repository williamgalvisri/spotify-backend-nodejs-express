import { Router } from "express";
import { signup } from "../../controller/user";
const router = Router();

router.post('/user-signup', signup);

export default router;