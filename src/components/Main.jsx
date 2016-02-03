require('normalize.css');
require('styles/App.scss');

import React from 'react';
import ProductStore from '../stores/ProductStore';
import ProductActions from '../actions/ProductActions';

import Product from './products/product';
import Basket from './basket';

import { Link } from 'react-router';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    ProductActions.getProducts();
    this._onProductChange = this._onProductChange.bind(this);
  }

  componentDidMount() {
    ProductStore.listen(this._onProductChange);
  }

  componentWillUnmount() {
    ProductStore.unlisten(this._onProductChange);
  }

  _onProductChange(store) {
    this.setState({ products: store.products });
  }

  products() {
    const productRows = this.state.products.map(product => <Product key={product.id} product={product} />);
    return (
      <div className='menu'>
        <div className='products'>
          {productRows}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className='index'>
        <header className='text-center'>
          <h2>Pizzeria</h2>
          <Link to="/contact"><p>Contact</p></Link>
        </header>
        <div className='row'>
          {this.products()}
          <Basket />
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
