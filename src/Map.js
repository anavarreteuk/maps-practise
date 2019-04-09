import React, { Component } from "react";
import { Map, Marker, InfoWindow, GoogleApiWrapper } from "google-maps-react";
const mapStyles = {
  width: "100%",
  height: "80%"
};
export class MapContainer extends Component {
  render() {
    const data = this.props.data;
    const center = this.props.center;

    return (
      <div className="map-container">
        <Map
          style={mapStyles}
          initialCenter={{ lat: 53, lng: 33 }}
          center={{
            lat: center.lat,
            lng: center.lng
          }}
          google={this.props.google}
          className={"map"}
          zoom={this.props.zoom}
        >
          {data &&
            data.map(item => (
              <Marker
                onClick={this.props.onMarkerClick}
                key={item.name}
                title={item.name}
                name={item.name}
                position={{ lat: item.lat, lng: item.lng }}
              />
            ))}

          <InfoWindow
            visible={true}
            position={{
              lat: this.props.selectedItem.lat,
              lng: this.props.selectedItem.lng
            }}
          >
            <div>
              <h1>{this.props.selectedItem.name}</h1>
              <h3>Capital: {this.props.selectedItem.capital}</h3>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyB30i5dScZQyu9A3hWzviaeSrkpc5xSqbU"
})(MapContainer);
