export const demoUser = {
   uid: 'ACB123',
   email: 'demo@google.com',
   displayName: 'Demo User',
   photoURL: 'https://demo.jpg'
};

export const initialState = {
   status: 'checking',
   uid: null,
   email: null,
   displayName: null,
   photoURL: null,
   errorMessage: null,
};

export const authenticatedState = {
   status: 'authenticated',
   uid: demoUser.uid,
   email: demoUser.email,
   displayName: demoUser.displayName,
   photoURL: demoUser.photoURL,
   errorMessage: null,
};

export const notAuthenticatedState = {
   status: 'not-authenticated',
   uid: null,
   email: null,
   displayName: null,
   photoURL: null,
   errorMessage: null,
};

