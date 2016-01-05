import React, {PropTypes} from 'react';

import BasketActions from '../../actions/BasketActions';

export default class Product extends React.Component {
  ingredients() {
    const ingredientRows = this.props.product.ingredients.
      map(ingredient => <li key={ingredient} className='ingredient'>{ingredient}</li>);
    return (
      <ul className="ingredients">
        {ingredientRows}
      </ul>
    )
  }

  addProductToBasket() {
    const product = this.props.product;
    BasketActions.addProduct(product);
  }

  render() {
    const { product } = this.props;
    return(
      <div className="product">
        <div className="name">
          { product.name }
        </div>
        {this.ingredients()}
        <div className="price">
          Price: { product.price }
        </div>
        <div className="btn add-to-basket text-center" onClick={this.addProductToBasket.bind(this)}>
          Add to basket
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  })
};
