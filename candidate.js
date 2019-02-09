class Users {
  constructor() {
    this.i = 11;


    this.title= "cool";
    this.usersArray = [{
      id: 10,
      office: 'office id',
      party: 'party id',
      candidate: 'cand number'
    }, {
      id: 11,
      office: 'office id',
      party: 'party id',
      candidate: 'candidate id'
    }];
  }

  getUsers() {
    return this.usersArray; 
  }

  getUsersb(id) {
    return this.usersArray.filter(element => (element.id == id));
  }

  addUser(office_id, party_id, candidate_id) {
    this.i += 1;
    this.usersArray = [...this.usersArray, {
    id: this.i,
    office: office_id,
    party: party_id,
    candidate: candidate_id,
    }];
  }

  updateUser(id, office_id, party_id, candidate_id) {
    this.usersArray = this.usersArray.map((element) => {
    if (element.id == id) {
    return {
    id,
    office: office_id,
    party: party_id,
    candidate: candidate_id,
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
