require('normalize.css');
require('styles/App.scss');

import React from 'react';
import ProductStore from '../stores/ProductStore';
import ProductActions from '../actions/ProductActions';

import Product from './products/product';
import Basket from './basket';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          'id': 1,
          'name': 'Margherita',
          'ingredients': [
            'Sos',
            'Ser'
          ],
          'price': 14.9
        },
        {
          'id': 2,
          'name': 'Funghi ',
          'ingredients': [
            'Sos',
            'Ser',
            'Pieczarki'
          ],
          'price': 16.9
        },
        {
          'id': 3,
          'name': 'Vesuvio',
          'ingredients': [
            'Sos',
            'Ser',
            'Szynka'
          ],
          'price': 17.9
        },
        {
          'id': 4,
          'name': 'Salami',
          'ingredients': [
            'Sos',
            'Ser',
            'Salami'
          ],
          'price': 17.9
        }
      ]
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
          <h2>Pizzeria Italiano</h2>
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
