import React, {PropTypes} from 'react';
import _ from 'lodash';
import { Link } from 'react-router';

import Product from './basket/product';

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
    const productRows = _.uniq(this.state.products).map(product => {
      return (
        <Product product={product} />
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
        <Link to='/order'>
          <span className="btn primary">
            Order!
          </span>
        </Link>
      </div>
    );
  }
}

Basket.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string),
    price: PropTypes.number.isRequired
  }))
};
