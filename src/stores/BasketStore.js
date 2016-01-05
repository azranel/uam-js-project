import alt from '../Dispatcher';
import BasketActions from '../actions/BasketActions';

class BasketStore {
  constructor() {
    this.bindActions(BasketActions);
    this.state = {
      products: []
    };
  }

  addProduct(product) {
    this.state.products.push(product);
    this.setState({ products: this.state.products });
  }
}

export default alt.createStore(BasketStore, 'BasketStore');
