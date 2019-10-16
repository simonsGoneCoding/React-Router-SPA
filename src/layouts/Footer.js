import React from "react";
import { Route } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div>
      <h2>Footer</h2>
      <Route
        path="/"
        exact
        render={() => (
          <p>
            You're in the <span>main</span> content of this page{" "}
          </p>
        )}
      />

      <Route
        path="/:page"
        // exact
        render={props => {
          console.log(props);
          return (
            <p>
              You're in the <span>{props.match.params.page}</span> content of
              this page
            </p>
          );
        }}
      />
    </div>
  );
};

export default Footer;
