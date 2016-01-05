import React, {PropTypes} from 'react';
import _ from 'lodash';

import BasketActions from '../actions/BasketActions';
import BasketStore from '../stores/BasketStore';

export default class Basket extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
    BasketActions.getProducts();
    this._onChange = this._onChange.bind(this);
    this.basketValue = this.basketValue.bind(this);
    this.products = this.products.bind(this);
  }

  componentDidMount() {
    BasketStore.listen(this._onChange);
  }

  componentWillUnmount() {
    BasketStore.unlisten(this._onChange);
  }

  _onChange(store) {
    this.setState({ products: store.products });
  }

  basketValue() {
    return _.round(_.sum(this.state.products, 'price'), 2);
  }

  products() {
    const productRows = this.state.products.map(product => {
      return (
        <div className="product">
          {product.name} - {product.price}
        </div>
      );
    });
    return (
      <div className="products">
        {productRows}
      </div>
    );
  }

  render() {
    return(
      <div className="basket">
        <h3 className='number text-center'>
          Number of products: {this.state.products.length}
        </h3>
        {this.products()}
        <h3 className='value text-center'>
          Basket value: {this.basketValue()}
        </h3>
      </div>
    );
  }
}

Basket.propTypes = {
};
