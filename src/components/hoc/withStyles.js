import React from "react";

const withStyles = (Component) => {
  const styles = {
    border: "5px solid black",
    color: "red",
    fontSize: "30px",
    background: "#ccc",
  };
  /*   const NewComponent = (props) => {
    return (
      <div style={styles}>
        <Component {...props} style={styles} />
      </div>
    );
  };

  return NewComponent; */

  return (props) => {
    return (
      <div style={styles}>
        <Component {...props} style={styles} />
      </div>
    );
  };
};

export default withStyles;
