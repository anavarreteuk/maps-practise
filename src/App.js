import React, { Component } from "react";
import MapContainer from "./Map";
import CityList from "./CityList";
import "./styles.css";

class App extends Component {
  state = {
    selectedItem: { lat: 0, lng: 0 },
    data: null
  };
  componentDidMount() {
    this.dataRequest();
  }

  dataRequest = () => {
    fetch("https://s3-eu-west-1.amazonaws.com/omnifi/techtests/locations.json")
      .then(function(response) {
        return response.json();
      })
      .then(response => this.dataTransformation(response));
  };

  dataTransformation = response => {
    const transformed = response.map(
      ({ latitude, longitude, name, capital }) => ({
        lat: latitude,
        lng: longitude,
        name: name,
        capital: capital
      })
    );
    this.setState({ data: transformed });
  };

  showInfo = (e, selectedItem) => {
    this.setState({ selectedItem: selectedItem });
  };

  onMarkerClick = props => {
    this.setState({
      selectedItem: {
        name: props.name,
        capital: props.name,
        lat: props.position.lat,
        lng: props.position.lng
      }
    });
  };

  render() {
    return (
      <React.Fragment>
        <CityList items={this.state.data} onclick={this.showInfo} />
        <MapContainer
          onMarkerClick={this.onMarkerClick}
          center={this.state.selectedItem}
          zoom={4}
          data={this.state.data}
          selectedItem={this.state.selectedItem}
        />
      </React.Fragment>
    );
  }
}

export default App;
