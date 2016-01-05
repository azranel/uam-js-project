import alt from '../Dispatcher';

class ProductActions {
  constructor() {
    this.generateActions(
      'getProducts'
    );
  }
}

export default alt.createActions(ProductActions);
