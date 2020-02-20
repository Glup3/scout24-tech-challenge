import React, { useState } from 'react'
import WebsiteInformation from '../WebsiteInformation/WebsiteInformation'
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const InformationContainer = () => {
  const [url, setUrl] = useState('https://webscraper.io/test-sites/e-commerce/allinone');
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const onSubmit = e => {
    e.preventDefault();

    setIsLoading(true);
    setData(null);
    setError(null);

    fetch('http://localhost:4000/api/v1/analytics', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ url: url })
    })
    .then(res => {
      if (!res.ok) {
        throw Error(res.statusText);
      }

      return res.json();
    })
    .then(data => {
      setData(data);
      
    })
    .catch(err => {
      setError(err);
    })
    .finally(() => {
      setIsLoading(false);
    });
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={url} onChange={e => setUrl(e.target.value)} placeholder="URL" />
        <button>Send</button>
      </form>

      {error != null && <ErrorMessage errorMessage={error.toString()} />}

      {(error == null && data != null) && <WebsiteInformation data={data} />}
      
    </div>
  )
}

export default InformationContainer
