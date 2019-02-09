class Users {
  constructor() {
    this.i = 11;


    this.title= "cool";
    this.usersArray = [{
      id: 10,
      createdOn: 'date',
      createdBy: 'voter id',
      office: 'office voted id',
      candidate: 'candidate id'
    }, {
      id: 11,
      createdOn: 'date',
      createdBy: 'voter id',
      office: 'office voted id',
      candidate: 'candidate id'
    }];
  }

  getUsers() {
    return this.usersArray; 
  }

  getUsersb(id) {
    return this.usersArray.filter(element => (element.id == id));
  }

  addUser(createdOn, createdBy, office, candidate) {
    this.i += 1;
    this.usersArray = [...this.usersArray, {
    id: this.i,
    createdOn: createdOn,
    createdBy: createdBy,
    office: office,
    candidate: candidate
    }];
  }

  updateUser(id, createdOn, createdBy, office, candidate) {
    this.usersArray = this.usersArray.map((element) => {
    if (element.id == id) {
    return {
    id,
    createdOn: createdOn,
    createdBy: createdBy,
    office: office,
    candidate: candidate
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
