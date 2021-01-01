const db = require('../services/firestore');

module.exports = {
  // Used in our auth flow. Get a user if it matches the ID,
  getOrSetUser: async (newUser) => {
    const docRef = db.collection('users').doc(`${newUser.id}`);
    const doc = await docRef.get();

    // If user does not exist...
    if (!doc.exists) {
      await db
        .collection('users')
        .doc(`${newUser.id}`)
        .set(JSON.parse(JSON.stringify(newUser)));
    } else {
      // else, the user exists... so return newUser?
      // this is a placeholder comment
      // for future revision
    }
    return newUser;
  },

  // Get a single user with a matching ID
  getUser: async (id) => {
    const docRef = db.collection('users').doc(`${id}`);
    const doc = await docRef.get();

    if (!doc.exists) {
      // return `User is not logged in or cannot be found with a Google id of ${id}`;
      return false;
    }

    return doc.data();
  },

  // Create a new user
  setUser: async (newUser) => {
    await db
      .collection('users')
      .doc(`${newUser.id}`)
      .set(JSON.parse(JSON.stringify(newUser)));
  },
};
