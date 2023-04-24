import { Router } from 'express';

type User = {
  name: string,
  id: number
}

const router = Router();

router.get('/', (req, res) => {
  res.send(`NAME: Daniel, ID: 2`)
});

router.post('/', (req, res) => {
  const { name, id } = req.body as User;
  res.send(`NAME: ${name}, ID: ${id}`);
});

export default router;