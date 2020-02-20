import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
  border: black solid 1px;
`;

const LargestPictures = ({ images, largestImage, biggestImage }) => {
  return (
    <div>
      <h2>Images found: {images}</h2>
      <figure>
        <Image src={largestImage.url} alt="largest" />
        <figcaption>Largest (Dimensions): {largestImage.width}px * {largestImage.height}px</figcaption>
      </figure>
      <figure>
        <Image src={biggestImage.url} alt="biggest" />
        <figcaption>Biggest (File Size): {biggestImage.size / 1024} KB</figcaption>
      </figure>
    </div>
  )
}

export default LargestPictures
