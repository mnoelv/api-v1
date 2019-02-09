class Users {
  constructor() {
    this.i = 11;
    this.usersArray = [{
      id: 10,
      type: 'type of office',
      name: 'Office name'
    }, {
      id: 11,
      type: 'type of office',
      name: 'Office name'
    }];
  }

  getUsers() {
    return this.usersArray;
  }

  getUsersb(id) {
    return this.usersArray.filter(element => (element.id == id));
  }

  addUser(office_type, office_name) {
    this.i += 1;

    this.usersArray = [...this.usersArray, {
    id: this.i,
    type: office_type,
    name: office_name,
    }];
  }

  updateUser(id, office_type, office_name) {
    this.usersArray = this.usersArray.map((element) => {
    if (element.id == id) {
    return {
    id,
    type: office_type,
    name: office_name,
    };
    }
    return element;
    });
  }

  deleteUser(id) {
    this.usersArray = this.usersArray.filter(element => (element.id != id));
  }
}

module.exports = Users;
