import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Erling Haaland",
        bio: "Software developer with a passion for React and web technologies. Enjoys solving complex problems and creating user-friendly interfaces.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/commons/5/57/ManCity20240722-031_%28cropped%29.jpg",
        profession: "Front-end Developer"
      },
      shows: false,
      timeInterval: 0
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState(prevState => ({
        timeInterval: prevState.timeInterval + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  toggleShow = () => {
    this.setState(prevState => ({
      shows: !prevState.shows
    }));
  }

  render() {
    const { person, shows, timeInterval } = this.state;
    
    return (
      <div className="App">
        <header className="App-header">
          <h1>React Class Component Checkpoint</h1>
          
          <button onClick={this.toggleShow}>
            {shows ? 'Hide Profile' : 'Show Profile'}
          </button>
          
          {shows && (
            <div className="profile">
              <img height={110} width={110} src={person.imgSrc} alt={person.fullName} />
              <h2>{person.fullName}</h2>
              <h3>{person.profession}</h3>
              <p>{person.bio}</p>
            </div>
          )}
          
          <p>Time since component mounted: {timeInterval} seconds</p>
        </header>
      </div>
    );
  }
}

export default App;