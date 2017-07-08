import React from 'react';
import YourSide from './YourSide.jsx';
import TheirSide from './TheirSide.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div className='row'>
          <YourSide />
          <TheirSide />
        </div>
        <div className='row text-center'>
          <button id='accept' className='btn btn-success'>Accept this agreement</button>
        </div>
      </div>
    );
  }
};