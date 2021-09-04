import admin from '../firebase/index';

export const currentUser = async (req, res) => {
  const token = req.headers.token;
  try {
    const firebaseUser = await admin.auth().verifyIdToken(token);
    console.log('Server FirebaseUser Token verified', firebaseUser);
    res.json(firebaseUser);
  } catch (err) {
    console.log(err);
    res.status(401).json({
      err: 'Invalid or expired Token'
    });
  }
};
