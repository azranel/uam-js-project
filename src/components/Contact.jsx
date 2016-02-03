require('normalize.css');
require('styles/App.scss');

import React from 'react';
import ContactSource from '../sources/ContactSource';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    ContactSource.getContactInfo().done((data) => {
      this.setState(data);
    }).fail(() => {
      this.setState({ name: 'FAIL' });
    });
  }

  render() {
    const data = this.state;
    if(data === null) {
      return null;
    }
    const address = `${data.address.street}, ${data.address.city}`;
    return (
      <div className='index'>
        <header className='text-center'>
          <h2>Pizzeria Italiano</h2>
        </header>
        <div className='row'>
          <div className="contact-info">
            <h1 className="name">{data.name}</h1>
            <h2 className="phone">{data.phone}</h2>
            <h2 className="hours">{data.hours}</h2>
            <div className="address">
              {address}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
