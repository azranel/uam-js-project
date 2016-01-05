import alt from '../Dispatcher';

class BasketActions {
  constructor() {
    this.generateActions(
      'addProduct',
      'getProducts'
    );
  }
}

export default alt.createActions(BasketActions);
