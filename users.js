class Users {
  constructor() {
    this.i = 11;
    this.usersArray = [{
      id: 10,
      firstname: 'First name',
      lastname: 'Last name',
      othername: 'othe rname',
      email: 'email',
      phoneNumber: 'contact',
      passportUrl: 'pass link',
      isAdmin: 'Yes/No'
    }, {
      id: 11,
      firstname: 'First name',
      lastname: 'Last name',
      othername: 'othe rname',
      email: 'email',
      phoneNumber: 'contact',
      passportUrl: 'pass link',
      isAdmin: 'Yes/No'
    }];
  }

  getUsers() {
    return this.usersArray;
  }

  getUsersb(id) {
    return this.usersArray.filter(element => (element.id == id));
  }

  addUser(first_name, last_name, other_name, emails, phone_Number, passport_Url, Yes_or_No) {
    this.i += 1;

    this.usersArray = [...this.usersArray, {
    id: this.i,
    firstname: first_name,
    lastname: last_name,
    othername: other_name,
    email: emails,
    phoneNumber: phone_Number,
    passportUrl: passport_Url,
    isAdmin: Yes_or_No,
    }];
  }

  updateUser(id, first_name, last_name, other_name, emails, phone_Number, passport_Url, Yes_or_No) {
    this.usersArray = this.usersArray.map((element) => {
    if (element.id == id) {
    return {
    id,
    firstname: first_name,
    lastname: last_name,
    othername: other_name,
    email: emails,
    phoneNumber: phone_Number,
    passportUrl: passport_Url,
    isAdmin: Yes_or_No,
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
