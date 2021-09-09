import admin from '../firebase/index';
import User from '../models/user';

export const findOrCreateUser = async (req, res, next) => {
  try {
    // take user from firebase auth and check to see if it is in db by email
    const { token } = req.headers;
    const firebaseUser = await admin.auth().verifyIdToken(token);
    const user = await User.findOne({ email: firebaseUser.email });

    if (user) {
      // send back the user
      req.currentUser = user;
      next();
    } else {
      // make a new instance in the db then save it
      let newUser = await new User({
        email: firebaseUser.email,
        name: firebaseUser.name,
        picture: firebaseUser.picture ? firebaseUser.picture : null
      }).save();
      console.log(`Created New User ${newUser}`);
      req.currentUser = newUser;
      next();
    }
  } catch (err) {
    console.log(err);
    res.status(401).json({
      err: 'Invalid or expired Token'
    });
  }
};
