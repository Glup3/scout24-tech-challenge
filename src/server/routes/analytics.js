import { Router } from 'express';
import request from 'request';

import { getInformationFromWebsite } from '../core/html-analyzer';

const router = Router();

router.get('/', async (req, res, next) => {
  res.sendStatus(200);
});

router.post('/', async (req, res, next) => {
  const url = req.body.url;
  
  request({ url, time: true }, async (err, resp, html) => {
    if (!err && resp.statusCode === 200) {
      const loadingTime = resp.timings.end;
      
      const result = await getInformationFromWebsite(html, url);
      result.loadingTime = loadingTime;
      result.url = url;
      
      res.status(200).send(result);
    }
    else if (resp.statusCode === 404) {
      res.status(404).send({
        message: 'URL could not be found.',
        error: err
      });
    }
    else {
      res.status(500).send({
        message: 'There was an error.',
        error: err
      });
    }
  })
});

export default router;
