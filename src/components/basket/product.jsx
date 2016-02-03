import React, {PropTypes} from 'react';
import BasketActions from '../../actions/BasketActions';
import BasketStore from '../../stores/BasketStore';

const _ = require('lodash');

export default class BasketProduct extends React.Component {
  constructor(props) {
    super(props);
    this.removeThisFromBasket = this.removeThisFromBasket.bind(this);
    this.changeNumberOfProducts = this.changeNumberOfProducts.bind(this);
  }

  removeThisFromBasket(e) {
    BasketActions.removeProducts(this.props.product);
  }

  changeNumberOfProducts(e) {
    const numberOfProducts = e.target.value;
    BasketActions.changeNumberOfProducts({
      product: this.props.product,
      number: numberOfProducts
    });
  }

  render() {
    const product = this.props.product;
    const numberOfProducts = _.where(BasketStore.state.products, { id: product.id }).length;

    return(
      <div className="product">
        <input type='number' onChange={this.changeNumberOfProducts}  value={numberOfProducts}/>
        {product.name} - {product.price}
        <span className="btn danger" onClick={this.removeThisFromBasket}>
          Delete
        </span>
      </div>
    );
  }
}

BasketProduct.propTypes = {
  product: PropTypes.object.isRequired
};
