import React, { useState } from 'react';
import  { useEffect } from 'react';

import './relatedCarousel.css'

function RelatedCarousel(props) {
  const { children } = props

  const [currentIndex, setCurrentIndex] = useState(0)
  const [length, setLength] = useState(children.length)

  useEffect(() => {
    setLength(children.length)
}, [children])

const next = () => {
  if (currentIndex < (length - 1)) {
      setCurrentIndex(prevState => prevState + 1)
  }
}

const prev = () => {
  if (currentIndex > 0) {
      setCurrentIndex(prevState => prevState - 1)
  }
}

  return (
    <div>
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <div className="carousel-content-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }} >
          <div className="carousel-content">
            {children}
          </div>
        </div>
      </div>
    </div>

<div className="carousel-wrapper">
{/* You can alwas change the content of the button to other things */}
{ currentIndex > 0 &&
<button onClick={prev} className="left-arrow">
    &lt;
</button>
}

<div/>

<div className="carousel-content-wrapper">
    { /*...*/ }
</div>
{/* You can alwas change the content of the button to other things */}
{ currentIndex <(length - 1) &&
<button onClick={next} className="right-arrow">
    &gt;
</button>
}

</div>
</div>

  )

}

export default RelatedCarousel