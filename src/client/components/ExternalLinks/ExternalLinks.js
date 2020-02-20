import React from 'react'

const ExternalLinks = ({ links }) => {
  return (
    <div>
      <h2>External Links ({links.length})</h2>
      {links.map((link, index) => 
        <li key={`el-${index}`}>
          <a href={link}>{link}</a>
        </li>
      )}
    </div>
  )
}

export default ExternalLinks
