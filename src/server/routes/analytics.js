import { Router } from 'express';
import request from 'request';

import { getInformationFromWebsite } from '../core/html-analyzer';
import { isValidURL } from '../util/url-helper';

const router = Router();

router.get('/', async (req, res, next) => {
  res.sendStatus(200);
});

router.post('/', async (req, res, next) => {
  const url = req.body.url;
  
  if (!isValidURL(url)) {  
    return res.sendStatus(404);
  }

  request({ url, time: true }, async (err, resp, html) => {
    if (!err && resp.statusCode === 200) {
      const loadingTime = resp.timings.end;
      
      const result = await getInformationFromWebsite(html, url);
      result.loadingTime = loadingTime;
      result.url = url;
      
      res.status(200).send(result);
    }
    else {
      res.sendStatus(500);
    }
  })
});

export default router;
