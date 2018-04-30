import React from 'react';

class CustomBuild extends React.Component {
  render() {
    return (
      <div style={styles.text}>
      Time to Build
      </div>
    )
  }
}

const styles = {
  text: {
    color: "white",
    textAlign: "center",
  },
}

export default CustomBuild;
