import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
  table, th, td {
    border: 1px solid black;
    border-collapse: collapse;
  }

  th, td {
    padding: 5px;
  }
`;

const HeaderTable = ({ data }) => {
  return (
    <Table>
        <thead>
          <tr>
            <th></th>
            <th>H1</th>
            <th>H2</th>
            <th>H3</th>
            <th>H4</th>
            <th>H5</th>
            <th>H6</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Count</th>
            <td>{data.h1}</td>
            <td>{data.h2}</td>
            <td>{data.h3}</td>
            <td>{data.h4}</td>
            <td>{data.h5}</td>
            <td>{data.h6}</td>
          </tr>
        </tbody>
      </Table>
  )
}

export default HeaderTable
