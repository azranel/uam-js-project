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
    this.setState({ products: products.push(product) });
  }
}

export default alt.createStore(BasketStore, 'BasketStore');
