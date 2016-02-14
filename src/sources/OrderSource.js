import $ from 'jquery';
import _ from 'lodash';

const address = "http://localhost:8080";

export default class OrderSource {
  static sendOrder(params) {
    const data = this._prepareRequest(params);
    // return $.post(address + '/order', data, () => { debugger; }, 'json');
    return $.ajax({
      url: address + '/order',
      data: JSON.stringify(data),
      type: 'POST',
      contentType: 'application/json',
    });

  }

  static _prepareRequest(params) {
    let orderInfo = {
      phoneNumber: params.phoneNumber,
      street: params.street,
      remarks: params.remarks
    };
    let extras = [];
    let order = [];
    _.uniq(params.products).forEach(product => {
      const { id } = product;
      const quantity = _.filter(params.products, product).length;
      order.push({ id, quantity });
    });

    return {
      order: order,
      extras: extras,
      orderInfo: orderInfo
    };
  }
}
