import { render } from 'react-dom';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render () {
    return (
      <h1>This is my React app!</h1>
    )
  }
 }

 const root = document.createElement("div");
 root.setAttribute("id", "root");
 document.body.appendChild(root);

render(<App />, root);