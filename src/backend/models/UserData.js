const db = require('../services/firestore');

const getUser = async () => {
  const dbRef = db.collection('users').doc('test');
  const user = await dbRef.get();
  // console.log(user);
  return user;
};

async function writeUserData(newUser) {
  // const dbRef = db.ref(`users/${newUser.id}`);
  // await dbRef.set(newUser);
  // await dbRef.set(newUser);
  // console.log('new user');
  await db.collection('users').doc(`${newUser.id}`).set(newUser);
  // console.log('new user');
  // console.log(newUser);
  return true;
}

module.exports = writeUserData;
module.exports = getUser;
