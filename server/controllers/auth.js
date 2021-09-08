import admin from '../firebase/index';

export const currentUser = async (req, res) => {
  const token = req.headers.token;
  try {
    const firebaseUser = await admin.auth().verifyIdToken(token);
    res.json(firebaseUser);
  } catch (err) {
    console.log(err);
    res.status(401).json({
      err: 'Invalid or expired Token'
    });
  }
};

export const privateRoute = async (req, res) => {
  console.log('req headers token in server: ', req.headers.token);
  res.json({ status: true });
};
