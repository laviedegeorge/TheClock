import React from 'react';
import Clock from './components/Clock'
import Footer from './components/Footer'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: Date.now()
    };
  }

  tick = ()=>{    
    this.setState({     
      time: Date.now()
    });  
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <Clock time={this.state.time} />
        <Footer />
      </div>
    );
  }
}

export default App;
