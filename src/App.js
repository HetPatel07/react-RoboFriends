import React from "react";
import CardList from "./cardArray";
// import { robots } from "./robots";
import "./app.css";
import SearchBox from "./searchBox";
import Scroll from "./Scroll";
import ErrorBoundry from "./ErrorBoundry";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: [],
      searchField: "",
    };
  }

  onSearchChange = (event) => {
    //   console.log(event.target.value);
    //   this.setState({searchFiels: event.target.value});
    this.setState({ searchField: event.target.value });

    // this.setState({ robots: filteredRobots });

    // console.log(filteredRobots);
    //   this.setState({
    //       robots:
    //       {
    //           robots.filter()
    //       },
    //       searchField: event.target.value});
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({
          robots: users,
        });
      });
  }
  render() {
    const filteredRobots = this.state.robots.filter((robots) => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="f1"> Robo Friends </h1>
        <SearchBox searchChange={this.onSearchChange} searchField="" />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default App;
