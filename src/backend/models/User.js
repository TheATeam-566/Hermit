const db = require('../services/firestore');

const getUser = async () => {
  const dbRef = db.collection('users').doc('test');
  const user = await dbRef.get();
  return user;
  // console.log(user);
};
getUser();
