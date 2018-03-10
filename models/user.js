import db from '../db.js';

const { users } = db;
class User {
  static find(i) {
  	i = parseInt(i, 10);
    users.map((user) => {
    	if (user.id === i) { return user; }
    });
  }

  static all() {

  }
}
