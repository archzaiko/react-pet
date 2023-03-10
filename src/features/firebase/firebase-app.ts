import { FirebaseApp, initializeApp } from 'firebase/app';

import { firebaseConfig } from './firebase-config';

export const firebaseApp: FirebaseApp = initializeApp(firebaseConfig);
