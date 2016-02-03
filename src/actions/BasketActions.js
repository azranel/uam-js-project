import alt from '../Dispatcher';

class BasketActions {
  constructor() {
    this.generateActions(
      'addProduct',
      'getProducts',
      'removeProducts',
      'changeNumberOfProducts'
    );
  }
}

export default alt.createActions(BasketActions);
