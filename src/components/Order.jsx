import React, {PropTypes} from 'react';
import _ from 'lodash';

import BasketStore from '../stores/BasketStore';
import OrderSource from '../sources/OrderSource';

export default class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: BasketStore.state.products,
      phoneNumber: '',
      street: '',
      remakrs: ''
    };
    this.productRows = this.productRows.bind(this);
    this.phoneNumberValid = this.phoneNumberValid.bind(this);
    this.streetValid = this.streetValid.bind(this);
    this.orderButton = this.orderButton.bind(this);
    this.sendOrder = this.sendOrder.bind(this);
  }

  productRows() {
    const products = this.state.products;
    return _.uniq(products).map((product, key) => {
      const sameProducts = _.filter(products, product);
      const count = sameProducts.length;
      const price = sameProducts.map(p => p.price).reduce((sum, price) => sum + price)
        .toFixed(2);
      return (
        <div className="row">
          <div className="product">
            <div className="count">{count}</div>
            <div className="name">{product.name}</div>
            <div className="price">{price}</div>
          </div>
        </div>
      );
    });
  }

  phoneNumberValid() {
    const phoneNumber = this.state.phoneNumber;
    return /^[0-9]{9}$/.test(phoneNumber);
  }

  streetValid() {
    return this.state.street.length > 0;
  }

  formValid() {
    return this.phoneNumberValid() && this.streetValid();
  }

  orderButton() {
    if(this.formValid()) {
      return (
        <div className="btn primary" onClick={this.sendOrder}>Send order</div>
      );
    } else {
      return (
        <div className="btn disabled">Form is not valid!</div>
      );
    }
  }

  sendOrder() {
    const { remarks, phoneNumber, street, products } = this.state;
    OrderSource.sendOrder({
      remarks, phoneNumber, street, products
    }).success((data) => {
      this.props.history.push(`/status/${data.id}`);
    }).fail(() => {
      alert('FAILED TO SEND ORDER');
    });
  }

  render() {
    const basketSum = this.state.products.map(product => product.price)
      .reduce((sum, price) => sum + price)
      .toFixed(2);
    const updateStreet = (e) => this.setState({ street: e.target.value });
    const updatePhoneNumber = (e) => this.setState({ phoneNumber: e.target.value });
    const updateRemarks = (e) => this.setState({ remarks: e.target.value });

    const phoneNumberValid = this.phoneNumberValid();
    const streetValid = this.streetValid();
    const formValid = phoneNumberValid && streetValid;
    return(
      <div className='index'>
        <header className='text-center'>
          <h2>Pizzeria Italiano</h2>
        </header>
        <div className="order">
          <div className="row">
            <h1>Basket summary - {basketSum}</h1>
          </div>
          {this.productRows()}
          <div className="form">
            <h2>Order form</h2>
            <div className="field">
              <label htmlFor="phoneNumber">Phone number</label>
              <input name='phoneNumber' type="text" onChange={updatePhoneNumber}/>
              { phoneNumberValid ? null :
                <div className="warning">
                  Phone number is not valid. It should be 9 digits.
                </div>
              }
            </div>
            <div className="field">
              <label htmlFor="street">Street</label>
              <input name='street' type="text" onChange={updateStreet}/>
              { streetValid ? null :
                <div className="warning">
                  Street is not valid.
                </div>
              }
            </div>
            <div className="field">
              <label htmlFor="remarks">Remarks</label>
              <textarea name="remarks" type="text" onChange={updateRemarks}/>
            </div>
            <div className="field">
              <div className="btn danger">Back</div>
              {this.orderButton()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Order.propTypes = {
};
