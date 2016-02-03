import jquery from 'jquery';

const address = "http://localhost:8080";

export default class ContactSource {
  static getContactInfo() {
    return jquery.get(address + '/contact');
  }
}
