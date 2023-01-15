import { FirebaseDB } from '@/firebase';
import { collection, getDocs } from 'firebase/firestore/lite';

export const loadNotes = async ( uid = '' ) => {
   if ( !uid ) throw new Error('The user UID doesnt exist');

   const collectionRef = collection(FirebaseDB, `${ uid }/journal/notes`);
   const docs = await getDocs( collectionRef );

   const notes = [];
   docs.forEach( doc => {
      notes.push({ id: doc.id, ...doc.data() });
   });

   return notes;
}