// This is our User "schema" that we use when creating a new user.
// It is persisted to firestore

class User {
  constructor(data) {
    this.id = data.id ? data.id : 0;
    this.fName = data.fName ? data.fName : '';
    this.lName = data.lName ? data.lName : '';
    this.email = data.email ? data.email : '';
    this.address = data.address ? data.address : '';
    this.city = data.city ? data.city : '';
    this.image = data.image ? data.image : '';
    this.auth = data.auth ? data.auth : '';
    this.accessToken = data.accessToken ? data.accessToken : '';
    this.refreshToken = data.refreshToken ? data.refreshToken : '';
    this.dateUserCreated = data.dateUserCreated ? data.dateUserCreated : '';
    this.lastUpdated = data.lastUpdated ? data.lastUpdated : '';
  }
}

module.exports = User;
