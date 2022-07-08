import { render } from 'react-dom';
import React from 'react';
import Ratings from './ratingsAndReviews/ratings.jsx';
import ProdOverview from './productOverview/overview.jsx';
import Related from './relatedItems/related.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }



  render() {
    return (
      <div>
        <ProdOverview/>
        <Ratings/>
        <Related/>
      </div>
    )
  }
 }

 const root = document.createElement("div");
 root.setAttribute("id", "root");
 document.body.appendChild(root);

render(<App />, root);