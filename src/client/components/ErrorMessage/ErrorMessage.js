import React from 'react';
import styled from 'styled-components';

const Error = styled.h1`
  color: red;
`;

const ErrorMessage = ({ errorMessage }) => {
  return (
    <Error>
      {errorMessage}
    </Error>
  )
}

export default ErrorMessage
