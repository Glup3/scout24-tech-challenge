import React from 'react'
import WebsiteInformation from '../WebsiteInformation/WebsiteInformation'

const InformationContainer = () => {
  return (
    <div>
      <input placeholder="URI" />
      <button>Send</button>

      <WebsiteInformation />
    </div>
  )
}

export default InformationContainer
