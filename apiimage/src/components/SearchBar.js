import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  //Function that will run on button click
  onButtonClick() {
    /*Pass through the value of the search bar as "term", 
    which is the parameter value of the callback function in App*/
    if (this.state.term.length > 1) {
      this.props.onSubmit(this.state.term);
    } else {
      //Throw Error if search bar is empty
      alert("Please Enter A Search Term!");
    }
  }

  render() {
    return (
      <div className="fluid ui action input">
        <input
          type="text"
          placeholder="Search For Something"
          //On value change of search bar, update the state to equal the new value
          onChange={(e) => {
            this.setState({ term: e.target.value });
          }}
          value={this.state.term}
        />
        <button
          className="ui icon button"
          onClick={() => {
            this.onButtonClick();
          }}
        >
          <i className="search icon"></i>
        </button>
      </div>
    );
  }
}

export default SearchBar;
