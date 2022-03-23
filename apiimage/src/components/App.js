//This Application Has Been Built Using SemanticUI

import React from "react";
import unsplash from "../api/unsplash.js";
import SearchBar from "./SearchBar.js";
import ImageList from "./ImageList.js";

class App extends React.Component {
  //Image State set to empty array
  //The API will return an array of image objects
  state = { images: [] };

  //CallBack Function that allows SearchBar component to pass data to parent component (App)
  onSearchSubmit = async (term) => {
    const result = await unsplash.get("/search/photos", {
      params: { query: term },
    });

    //Set the state's value to the array of retrieved results
    this.setState({
      images: result.data.results,
    });
  };

  render() {
    return (
      <div
        className="ui container"
        style={{
          marginTop: "10px",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        {/* SearchBar has been given the callback function as a prop */}
        <SearchBar onSubmit={this.onSearchSubmit} />

        <h3>Found: {this.state.images.length} Images</h3>

        {/* ImageList component has been passed images as a prop,
        this is the current state which should be an array of objects,
        that will later be iterated through*/}
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
