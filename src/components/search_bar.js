import React, { Component } from 'react';

//This component implements searching feature.
class SearchBar extends Component{
  constructor(props) {
    super(props);
    this.state = { term: ''};
  }
  //rendering the search-bar
  render(){
    return(
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />;
      </div>
    );
  }
  //fires this method whenver the search term changes.
  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}
export default SearchBar;
