const db = require('../services/firestore');

module.exports = {
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
      // else, the user exists.
      // this is a placeholder comment
      // for future revision
    }
    return newUser;
  },

  getUser: async (id) => {
    const docRef = db.collection('users').doc(`${id}`);
    const doc = await docRef.get();
    if (!doc.exists) {
      return false;
    }
    console.log('Document data:', doc.data());
    return true;
  },

  setUser: async (newUser) => {
    await db
      .collection('users')
      .doc(`${newUser.id}`)
      .set(JSON.parse(JSON.stringify(newUser)));
  },
};
