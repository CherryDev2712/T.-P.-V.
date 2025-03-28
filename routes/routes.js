import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.render('inicio',
        {titulo: 'TPV | inicio'}
    )
});

export default router;
