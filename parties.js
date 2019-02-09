class Users {
  constructor() {
    this.i = 11;
    this.usersArray = [{
      id: 10,
      name: 'Blue party',
      hqAddress: 'Kigali R',
      logoUrl: 'image'
    }, {
      id: 11,
      name: 'Red party',
      hqAddress: 'Kigali R',
      logoUrl: 'image'
    }];
  }

  getUsers() {
    return this.usersArray;
  }

  getUsersb(id) {
    return this.usersArray.filter(element => (element.id == id));
  }

  addUser(p_name, p_adress, image_logo) {
    this.i += 1;

    this.usersArray = [...this.usersArray, {
      id: this.i,
      name: p_name,
      hqAddress: p_adress,
      logoUrl: image_logo
    }];
  }

  updateUser(id, p_name, p_adress, image_logo) {
    this.usersArray = this.usersArray.map((element) => {
      if (element.id == id) {
      return {
      id,
      name: p_name,
      hqAddress: p_adress,
      logoUrl: image_logo
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
