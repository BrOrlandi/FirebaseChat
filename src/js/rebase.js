import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

import config from './config';

firebase.initializeApp(config);

export const auth = firebase.auth();
// const user = {
//   displayName: 'Bruno',
//   uid: '123',
//   photoURL: 'https://lh5.googleusercontent.com/-IKZ8DoozZXk/AAAAAAAAAAI/AAAAAAAAZsI/oRkN7kef-84/photo.jpg',
// };
// export const auth = {
//   currentUser: user,

// };

const database = firebase.database();

const rebase = Rebase.createClass(database);

export default rebase;
