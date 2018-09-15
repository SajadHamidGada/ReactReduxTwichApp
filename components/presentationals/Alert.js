import React from 'react';

//Presentational React Component
class Alert extends React.Component {
  componentDidMount () {
    alert(this.props.error);
  }

render() {
    return (
      <div>
        oops server not found
      </div>
    )
  }
}

export default Alert