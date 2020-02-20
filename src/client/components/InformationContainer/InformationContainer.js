import React, { useState } from 'react'
import WebsiteInformation from '../WebsiteInformation/WebsiteInformation'

const InformationContainer = () => {
  const [url, setUrl] = useState('https://styled-components.com/docs/basics#installation');

  const sendUrl = () => {
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
      console.log(data.url);
    })
    .catch(err => {
      console.error(err);
    });
  }

  return (
    <div>
      <input value={url} onChange={e => setUrl(e.target.value)} placeholder="URI" />
      <button onClick={() => sendUrl()}>Send</button>

      <WebsiteInformation />
    </div>
  )
}

export default InformationContainer
