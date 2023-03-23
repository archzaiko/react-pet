import { FirebaseApp, FirebaseOptions, initializeApp } from 'firebase/app';

export const firebaseConfig: FirebaseOptions = {
  appId: 'react-pet-1480a',
  apiKey: 'AIzaSyCyoOdB612gSqPf-aYxP1MM1amCTPDCmp8',
};

export const useApp = (): FirebaseApp => {
  return initializeApp(firebaseConfig);
};
