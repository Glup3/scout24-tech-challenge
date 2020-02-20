import { Router } from 'express';

const router = Router();

router.get('/', async (req, res, next) => {
  res.sendStatus(200);
});

export default router;
