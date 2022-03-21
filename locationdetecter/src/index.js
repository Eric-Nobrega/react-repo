import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

/*
FUNCTIONAL COMPONENT
const App = () => {
  //Retrieve User's Current Location
  window.navigator.geolocation.getCurrentPosition(
    //Print The Position
    (position) => {
      console.log(position);
    },
    //Print The Error
    (err) => {
      console.log("Error: " + err.message);
    }
  );
  return <div>Latitude: </div>;
};
*/

//CLASS BASED COMPONENT
class App extends React.Component {
  //Constructor Function
  constructor(props) {
    super(props);
    //Initialize the state property
    //default state values set to null as they will hold integers later
    //Only time inwhich we will do direct assignment, otherwise we do setState
    this.state = { lat: null, long: null, errorMessage: "" };
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        //change state using setState()
        this.setState({ lat: position.coords.latitude });
        this.setState({ long: position.coords.longitude });
      },
      (err) => {
        this.setState({ errorMessage: "Error: " + err.message });
      }
    );
  }

  //Render must be defined
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>{this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat && this.state.long) {
      return (
        <div>
          <SeasonDisplay lat={this.state.lat} long={this.state.long} />
        </div>
      );
    }

    return (
      <div className="ui full">
        <div className="ui active dimmer">
          <div className="ui text loader">Awaiting User Geolocation</div>
        </div>
        <p></p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
