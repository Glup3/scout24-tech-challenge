import cheerio from 'cheerio';

import { generateDoctypeString, getAllExternalLinks, getAllInternalLinks, getHeadersOfLevel, getInformationFromWebsite, getLargestAndBiggestImage } from './html-analyzer';
import { html, url, hostname } from '../test/html-example';

const $ = cheerio.load(html);

test('doctype should be html 5', () => {
  const result = generateDoctypeString(html);
  
  expect(result).toBe('<!DOCTYPE html>');
});

test('there should be two h1 tags', () => {
  const result = getHeadersOfLevel($, 1);

  expect(result.length).toBe(2);
});

test('there should be six h4 tags', () => {
  const result = getHeadersOfLevel($, 4);

  expect(result.length).toBe(6);
});

test('there should be zero h5 tags', () => {
  const result = getHeadersOfLevel($, 5);

  expect(result.length).toBe(0);
});

test('there should be 25 internal links', () => {
  const result = getAllInternalLinks($, url);

  expect(result.length).toBe(25);
});

test('there should be 7 external links', () => {
  const result = getAllExternalLinks($, hostname);

  expect(result.length).toBe(7);
});

test('should get the largest and biggest', async () => {
  const expected = {
    largestImage: {
      width: 469,
      height: 156,
      url: "https://webscraper.io/img/logo_white.svg"
    },
    biggestImage: {
      size: 16724,
      url: "https://webscraper.io/img/twicon.png"
    }
  };
  const result = await getLargestAndBiggestImage([
    'https://webscraper.io/img/logo_white.svg',
    'https://webscraper.io/images/test-sites/e-commerce/items/cart2.png',
    'https://webscraper.io/images/test-sites/e-commerce/items/cart2.png',
    'https://webscraper.io/images/test-sites/e-commerce/items/cart2.png',
    'https://webscraper.io/img/fbicon.png',
    'https://webscraper.io/img/twicon.png'
  ]);

  expect(result).toStrictEqual(expected);
})


test('should be the same', async () => {
  const expected = {
    h1: 2,
    h2: 1,
    h3: 0,
    h4: 6,
    h5: 0,
    h6: 0,
    domain: "https://webscraper.io",
    internalLinks: [
      "/",
      "#page-top",
      "/",
      "/cloud-scraper",
      "#section3",
      "/documentation",
      "/tutorials",
      "/test-sites",
      "/test-sites/e-commerce/allinone",
      "/test-sites/e-commerce/allinone/computers",
      "/test-sites/e-commerce/allinone/phones",
      "/test-sites/e-commerce/allinone/product/239",
      "/test-sites/e-commerce/allinone/product/240",
      "/test-sites/e-commerce/allinone/product/202",
      "/",
      "/pricing",
      "/contact",
      "/privacy-policy",
      "/jobs",
      "/blog",
      "/documentation",
      "/tutorials",
      "/screenshots",
      "/test-sites",
      "#"
    ],
    externalLinks: [
      "https://forum.webscraper.io/",
      "https://chrome.google.com/webstore/detail/web-scraper/jnhgnonknehpejjnehehllkliplmbmhn?hl=en",
      "https://cloud.webscraper.io/",
      "https://forum.webscraper.io/",
      "mailto:info@webscraper.io",
      "https://www.facebook.com/webscraperio/",
      "https://twitter.com/webscraperio"
    ],
    title: "Web Scraper Test Sites",
    images: 6,
    largestImage: {
      width: 469,
      height: 156,
      url: "https://webscraper.io/img/logo_white.svg"
    },
    biggestImage: {
      size: 16724,
      url: "https://webscraper.io/img/twicon.png"
    },
    documentVersion: "<!DOCTYPE html>"
  }
  const result = await getInformationFromWebsite(html, url);

  expect(result).toStrictEqual(expected);
})