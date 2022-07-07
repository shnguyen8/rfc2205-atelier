import ReactDOM from 'react-dom';
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

ReactDOM.render(<App />, document.getElementById('app'));