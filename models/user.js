import db from '../lib/db';

const { users } = db;
class User {
  static find(id) {
  	const i = parseInt(id, 10);
    users.map(user => user.id === i);
  }

  static all() {

  }
}

export default User;
