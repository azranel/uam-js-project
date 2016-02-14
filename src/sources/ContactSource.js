import $ from 'jquery';

const address = "http://localhost:8080";

export default class ContactSource {
  static getContactInfo() {
    return $.get(address + '/contact');
  }
}
