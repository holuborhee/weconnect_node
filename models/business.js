import db from '../lib/db';
import Helper from '../lib/helpers';
import Review from './review';

const { businesses } = db;

class Business {
  constructor(props) {
    const required = ['id', 'name', 'user', 'category', 'latitude', 'longitude', 'address'];
    if (!props) {
      throw new Error('Undefined Props for Business');
    } else if (Helper.propsNotIn(props, required).length > 0) {
      throw new Error('Some required not found');
    } else {
      this.id = props.id;
      this.name = props.name;
      this.user = props.user;
      this.category = props.category;
      this.latitude = props.latitude;
      this.longitude = props.longitude;
      this.address = props.address;
    }
  }

  get review() {
    return new Review(this.id);
  }

  static create(props) {
    const b = props;
    b.id = businesses.length + 1;
    businesses.push(b);
    return new Business(b);
  }

  static find(i) {
    i = parseInt(i, 10);
    const business = businesses.find(b => b.id === i);
    return (business && new Business(business)) || null;
  }

  static all() {
  	return businesses;
  }

  static at(location) {

  }

  static under(category) {
  	category = parseInt(category, 10);
  	const filtered = businesses.filter(b => b.category === category);
  	return filtered;
  }

  static nameHas(query) {

  }
}

export default Business;
