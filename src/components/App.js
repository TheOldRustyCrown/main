import React, { Component } from 'react';

let hey = 'wow'

class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h2>My React App {hey}!</h2>
          <p>Здесь мог быть рыбный текст {hey}</p>
        </div>
      </div>
    </div>
)}}

export default App;
