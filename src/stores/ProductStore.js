import alt from '../Dispatcher';
import ProductActions from '../actions/ProductActions';
import ProductSource from '../sources/ProductSource';

class ProductStore {
  constructor() {
    this.bindActions(ProductActions);
    this.state = {
      products: null
    };
  }

  getProducts() {
    ProductSource.all()
      .then((products) => {
        this.setState({ products: products });
        this.emitChange();
      }).catch(() => {
        debugger;
      });
    return false;
  }
}

export default alt.createStore(ProductStore, 'ProductStore');
