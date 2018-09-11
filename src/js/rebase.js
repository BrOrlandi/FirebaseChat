import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

import config from './config';

firebase.initializeApp(config);

export const auth = firebase.auth();

const database = firebase.database();

const rebase = Rebase.createClass(database);

export default rebase;
