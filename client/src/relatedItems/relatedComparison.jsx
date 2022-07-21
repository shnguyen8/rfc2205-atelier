import React from 'react';
import Table from 'react-bootstrap/Table';

function ComparisonTable(props) {

  const { curRelatedProduct, curProduct } = props;

  let filteredArr = []
  let filteredValues = []
  let uniqueCurProduct = []
  let uniqueRelated = []
  props.curProduct.features.forEach(element => {
    let pushed = false
    props.curRelatedProduct.features.forEach(relElement => {
      if (element.value === relElement.value) {
        element.shared = true
        relElement.shared = true
        filteredArr.push(element)
        filteredValues.push(element.value)
        pushed = true
      }
    })
  }
  )

  props.curProduct.features.forEach(obj => {
    if(!filteredValues.includes(obj.value)) {
      uniqueCurProduct.push(obj)
    }
  })

  props.curRelatedProduct.features.forEach(obj => {
    if(!filteredValues.includes(obj.value)) {
      uniqueRelated.push(obj)
    }
  })

  return (
    <>

      <Table>
        <thead>
          <tr>
            {/* {props.relatedData.length > 0 ? props.relatedData.map((product, index) => (
              <th>Hello</th>)): null} */}
            <th>{props.curRelatedProduct.name}</th>
            <th>CHARACTERISTICS</th>
            <th>{props.curProduct.name}</th>
          </tr>
        </thead>
        <tbody>
          {filteredArr.map(obj => <tr><td>✅</td><td>{obj.value}</td><td>✅</td></tr>)}
            {uniqueCurProduct.map(obj=><tr><td>✅</td><td>{obj.value}</td><td></td></tr>)}
            {uniqueRelated.map(obj=><tr><td></td><td>{obj.value}</td><td></td>✅</tr>)}
        </tbody>
      </Table>

    </>
  )
}

export default ComparisonTable