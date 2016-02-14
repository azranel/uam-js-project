import alt from '../Dispatcher';
import BasketActions from '../actions/BasketActions';
import _ from 'lodash';

class BasketStore {
  constructor() {
    this.bindActions(BasketActions);
    this.state = {
      products: []
    };
  }

  getProducts() {
    return this.state.products;
  }

  addProduct(product) {
    this.state.products.push(product);
    this.setState({ products: this.state.products });
  }

  removeProducts(productToRemove) {
    const products = this.state.products.filter(product => product != productToRemove);
    this.setState({ products: products });
  }

  changeNumberOfProducts(params) {
    const { product, number } = params;
    const products = _.filter(this.state.products, p => p !== product);
    _.times(number, () => { products.push(product); });
    this.setState({ products: products });
  }
}

export default alt.createStore(BasketStore, 'BasketStore');
