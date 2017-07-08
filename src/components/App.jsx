import React from 'react';
import YourSide from './YourSide.jsx';
import TheirSide from './TheirSide.jsx';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      yours: {
        name: '',
        image: '',
        body: '',
      },
      theirs: {
        name: '',
        image: '',
        body: '',
      }
    }

    this.getEventData = this.getEventData.bind(this);
  }

  render() {
    return (
      <div>
        <div className='row'>
          <YourSide name image body />
          <TheirSide name image body />
        </div>
        <div className='row text-center'>
          <button id='accept' className='btn btn-success'>Accept this agreement</button>
        </div>
      </div>
    );
  }

  getEventData() {
    // Request to server
    // Update state
  }
};