class Users {
  constructor() {
    this.i = 11;


    this.title= "cool";
    this.usersArray = [{
      id: 10,
      createdOn: 'date',
      createdBy: 'voter id',
      office: 'office voted id',
      body: 'information'
    }, {
      id: 11,
      createdOn: 'date',
      createdBy: 'voter id',
      office: 'office voted id',
      body: 'information'
    }];
  }

  getUsers() {
    return this.usersArray; 
  }

  getUsersb(id) {
    return this.usersArray.filter(element => (element.id == id));
  }

  addUser(createdOn, createdBy, office, body) {
    this.i += 1;
    this.usersArray = [...this.usersArray, {
    id: this.i,
    createdOn: createdOn,
    createdBy: createdBy,
    office: office,
    body: body
    }];
  }

  updateUser(id, createdOn, createdBy, office, body) {
    this.usersArray = this.usersArray.map((element) => {
    if (element.id == id) {
    return {
    id,
    createdOn: createdOn,
    createdBy: createdBy,
    office: office,
    body: body
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
