import React from 'react';
import StyleSelections from './styleSelections.jsx';

const StyleSelectionHelper = (props) => {


  if (props.productStyles.results !== undefined) {
    return (
      <React.Fragment>
        <section>
          {props.productStyles.results.map((styleVals, j) => {
            return <p key={j}> Sytle > {styleVals.name}</p>
          })}
        </section>
        <section>
          {props.productStyles.results.map((styleVals, i) => {
            if (styleVals.photos[0].thumbnail_url !== null) {
              return <img key={i} src={styleVals.photos[0].thumbnail_url} />
            }

          })}
        </section>
      </React.Fragment>
    )
  }
}

export default StyleSelectionHelper;