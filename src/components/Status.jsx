import React, {PropTypes} from 'react';

export default class Status extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const orderId = this.props.params.orderId;
    return (
      <div className='index'>
        <header className='text-center'>
          <h2>Pizzeria Italiano</h2>
        </header>
        <div className='row'>
          <h1>SUCCESS!</h1>
          <p>Your order have id {orderId}</p>
        </div>
      </div>
    );
  }
}

Status.propTypes = {
};
