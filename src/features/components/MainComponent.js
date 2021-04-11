import { React, Component } from "react";
import AffinitySection from "./AffinitySection";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";

class MainComponent extends Component {

  render() {
    return (
      <>
        <NavBar />
        <div className="container">
          <SearchBar />
          <AffinitySection/>
        </div>
      </>
    )
  }
}

export default MainComponent