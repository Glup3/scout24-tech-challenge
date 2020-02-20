import React, { useState } from 'react'
import WebsiteInformation from '../WebsiteInformation/WebsiteInformation'

const InformationContainer = () => {
  const [url, setUrl] = useState('https://webscraper.io/test-sites/e-commerce/allinone');
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  const onSubmit = e => {
    e.preventDefault();

    setIsLoading(true);
    fetch('http://localhost:4000/api/v1/analytics', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ url: url })
    })
    .then(res => res.json())
    .then(data => {
      setData(data);
      console.log(data);
      
    })
    .catch(err => {
      console.error(err);
    })
    .finally(() => {
      setIsLoading(false);
    });
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={url} onChange={e => setUrl(e.target.value)} placeholder="URL" />
        <button>Send</button>
      </form>

      {isLoading ? <div>Loading...</div> : <WebsiteInformation data={data} />}
    </div>
  )
}

export default InformationContainer
