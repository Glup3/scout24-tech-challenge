import React from 'react'

const InternalLinks = ({ links, domain }) => {
  return (
    <div>
      <h2>Internal Links ({links.length})</h2>
      {links.map((link, index) => 
        <li key={`il-${index}`}>
          <a href={`${domain}${link}`}>{domain}{link}</a>
        </li>
      )}
    </div>
  )
}

export default InternalLinks
