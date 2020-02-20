import cheerio from 'cheerio';
import jsdom from 'jsdom';
import probe from 'probe-image-size';

const { JSDOM } = jsdom;

const getHeadersOfLevel = ($, level) => {
  return $(`h${level}`).toArray();
}

const getAllInternalLinks = ($, url) => {
  const internalLinks = $("a[href^='" + url + "'], a[href^='/'], a[href^='./'], a[href^='../'], a[href^='#']");

  return internalLinks.toArray().map(l => $(l).attr('href')).filter(l => l != null);
}

const getAllExternalLinks = ($, hostname) => {
  const externalLinks = $('a:not([href^="' + hostname + '"]):not([href^="#"]):not([href^="/"])');

  return externalLinks.toArray().map(l => $(l).attr('href')).filter(l => l != null);
}

/**
 * large = dimensions
 * big = file size
 * images: string[]
 */
const getLargestAndBiggestImage = async (images) => {
  const biggestImage = {
    size: 0,
    url: ''
  };
  const largestImage = {
    width: 0,
    height: 0,
    url: ''
  };
  
  for (let img of images) {
    const res = await probe(img);

    if (res.width * res.height > largestImage.width * largestImage.height) {
      largestImage.width = res.width;
      largestImage.height = res.height;
      largestImage.url = res.url;
    } 

    if (res.length > biggestImage.size) {
      biggestImage.size = res.length;
      biggestImage.url = res.url;
    }
  }

  return {
    largestImage,
    biggestImage
  }
}

const generateDoctypeString = (html) => {
  const node = new JSDOM(html).window.document.doctype;

  return "<!DOCTYPE "
    + node.name
    + (node.publicId ? ' PUBLIC "' + node.publicId + '"' : '')
    + (!node.publicId && node.systemId ? ' SYSTEM' : '') 
    + (node.systemId ? ' "' + node.systemId + '"' : '')
    + '>';
}

const getInformationFromWebsite = async (html, url) => {
  const $ = cheerio.load(html);
  const uri = new URL(url);
  
  const pageTitle = $('title').text();
  const images = $('img').toArray();
  const h1Headers = getHeadersOfLevel($, '1').length;
  const h2Headers = getHeadersOfLevel($, '2').length;
  const h3Headers = getHeadersOfLevel($, '3').length;
  const h4Headers = getHeadersOfLevel($, '4').length;
  const h5Headers = getHeadersOfLevel($, '5').length;
  const h6Headers = getHeadersOfLevel($, '6').length;

  const largestBiggestImages = await getLargestAndBiggestImage(images.map(i => {
    let imgUrl = $(i).attr('src');

    if (!imgUrl.includes(uri.origin)) {
      imgUrl = uri.origin + imgUrl;
    }

    return imgUrl;
  }));
  
  return {
    h1: h1Headers,
    h2: h2Headers,
    h3: h3Headers,
    h4: h4Headers,
    h5: h5Headers,
    h6: h6Headers,
    internalLinks: getAllInternalLinks($, url),
    externalLinks: getAllExternalLinks($, uri.hostname),
    title: pageTitle,
    images: images.length,
    largestImage: largestBiggestImages.largestImage,
    biggestImage: largestBiggestImages.biggestImage,
    documentVersion: generateDoctypeString(html),
  };
}

export {
  getInformationFromWebsite, 
  getHeadersOfLevel, 
  getAllExternalLinks, 
  getAllInternalLinks, 
  getLargestAndBiggestImage, 
  generateDoctypeString
};
