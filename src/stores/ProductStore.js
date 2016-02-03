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
      .done((products) => {
        this.setState({ products: products });
        this.emitChange();
      }).fail(() => {
        this.setState({ products: [] })
        this.emitChange();
      });
    return false;
  }
}

export default alt.createStore(ProductStore, 'ProductStore');
