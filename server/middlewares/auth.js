import admin from '../firebase/index';
import User from '../models/user';

/**
 * @param findOrCreateUser {string}
 *  logic flow - get token - verify token is in firebase - use verifiedToken to get userID(uid) out of firebase auth - this gives you the user account
 *  pt.2 - save user account in database(without user account dont have access to name prop) - make currentUser aviable on the req
 */

export const findOrCreateUser = async (req, res, next) => {
  // take user from firebase auth and check to see if it is in db by email
  try {
    const { token } = req.headers;
    const firebaseUser = await admin.auth().verifyIdToken(token);
    const completeUserProfile = await admin.auth().getUser(firebaseUser.uid);
    const { displayName, email, photoURL } =
      completeUserProfile.providerData[0];
    // console.log(`completeUserProfile:`, displayName, email, photoURL);
    const user = await User.findOne({ email });

    if (user) {
      // send back the user
      req.currentUser = user;
      next();
    } else {
      // make a new instance in the db then save it
      let newUser = await new User({
        email: email,
        name: displayName,
        picture: photoURL ? photoURL : null
      }).save();
      console.log(`Created New User ${newUser}`);
      req.currentUser = newUser;
      next();
    }
  } catch (err) {
    console.log(err);
    res.status(401).json({
      err
    });
  }
};
