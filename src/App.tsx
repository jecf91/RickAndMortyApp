import React from "react";
import { Store } from "./Store";
import { Link } from "@reach/router";


export default function App(props :any): JSX.Element {

  const { state } = React.useContext(Store)
  
  return (
    <React.Fragment>
      <header className="header">
        <div>
          <h1>Rick and Morty</h1>
          <p>Pick your favorite episode!</p>
        </div>
        <div>
          <Link to="/" style={{fontSize:'15px', textDecoration:'none', color:'inherit'}}>Home</Link>
          <Link to="/favs" style={{marginLeft:'10px',fontSize:'15px', textDecoration:'none', color:'inherit'}}>Favourite(s): {state.favourites.length}</Link>
        </div>
      </header>
      {props.children}
    </React.Fragment>
  );
}
