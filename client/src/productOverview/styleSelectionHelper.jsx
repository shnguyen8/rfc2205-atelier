import React from 'react';
import { useEffect, useState } from 'react';
import StyleSelections from './styleSelections.jsx';

const StyleSelectionHelper = (props) => {
  // console.log(props.productStyles)

  const [style_id, setStyle_id] = useState('');



  if (props.productStyles.results !== undefined) {
    return (
      <React.Fragment>
        <section>
          {props.productStyles.results.map((styleVals, i) => {
            if (styleVals.photos[0].thumbnail_url !== null) {
              return <img
                      onClick={props.onThumbnailClick}
                      key={i}
                      src={styleVals.photos[0].thumbnail_url}
                      name={styleVals.name}
                      style_id={styleVals.style_id}
                     />
            }
          })}
        </section>
      </React.Fragment>
    )
  }
}

export default StyleSelectionHelper;