import React from 'react';
import Table from 'react-bootstrap/Table';

function ComparisonTable(props, {productSpecs}) {

const {name} = props;
  return(
    <>

      <Table>
        <thead>
        <tr>
          <th>RELATED PRODUCT NAME</th>
          <th>CHARACTERISTICS</th>
          <th>{props.name}</th>
        </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>


    </>
  )
}

export default ComparisonTable