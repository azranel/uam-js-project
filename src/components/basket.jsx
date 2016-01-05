import React, {PropTypes} from 'react';
import _ from 'lodash';

import BasketActions from '../actions/BasketActions';
import BasketStore from '../stores/BasketStore';

export default class Basket extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
    BasketActions.getProducts();
  }

  componentDidMount() {
    BasketStore.listen(this._onChange);
  }

  componentWillUnmount() {
    BasketStore.unlisten(this._onChange);
  }

  _onChange(store) {
    this.setState({ products: store.products });
  }

  basketValue() {
    return _.sum(this.props.products.map(product => price));
  }

  products() {
    const productRows = this.state.products.map(product => {
      return <p>{product.name}</p>;
    });
    return (
      <div className="products">
        {productRows}
      </div>
    );
  }

  render() {
    return(
      <div className="basket">
        <h3 className='number text-center'>
          Number of products: {this.state.products.length}
        </h3>
        {this.products.bind(this)}
        <h3 className='value text-center'>
          Basket value: {this.basketValue.bind(this)}
        </h3>
      </div>
    );
  }
}

Basket.propTypes = {
};
