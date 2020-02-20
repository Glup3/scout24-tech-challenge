import React from 'react';

import HeaderTable from '../HeaderTable/HeaderTable';
import InternalLinks from '../InternalLinks/InternalLinks';
import ExternalLinks from '../ExternalLinks/ExternalLinks';
import LargestPictures from '../LargestPictures/LargestPictures';


const WebsiteInformation = ({ data }) => {
  if (data == null) {
    return <h1>No Data</h1>
  }

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.url} (loaded in {data.loadingTime}ms)</p>
      <p>{data.documentVersion}</p>
      <HeaderTable data={data} />
      <InternalLinks links={data.internalLinks} domain={data.domain} />  
      <ExternalLinks links={data.externalLinks} />
      <LargestPictures images={data.images} largestImage={data.largestImage} biggestImage={data.biggestImage} />
    </div>
  )
}

export default WebsiteInformation
