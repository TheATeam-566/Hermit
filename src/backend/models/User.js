// This is our User "schema" that we use when creating a new user.
// It is persisted to firestore

class User {
  constructor(data) {
    this.id = data.id ? data.id : 0;
    this.fName = data.fName ? data.fName : null;
    this.lName = data.lName ? data.lName : null;
    this.email = data.email ? data.email : null;
    this.address = data.address ? data.address : null;
    this.image = data.image ? data.image : null;
    this.auth = data.auth ? data.auth : null;
    this.accessToken = data.accessToken ? data.accessToken : null;
    this.dateUserCreated = data.dateUserCreated;
  }
}

module.exports = User;
