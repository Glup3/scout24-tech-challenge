import { Router } from 'express';

const router = Router();

router.get('/', async (req, res, next) => {
  res.sendStatus(200);
});

router.post('/', async (req, res, next) => {
  const url = req.body.url;
  
  res.send({ url });
});

export default router;
