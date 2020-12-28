import firebase from './firebase';

const firestore = firebase.firestore();

export function createTest(data) {
  return firestore
    .collection('users')
    .doc()
    .set({ ...data });
}
