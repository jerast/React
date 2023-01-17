import { startNewNote, startLoadingNotes, startSaveNote, startUploadingFiles, startDeletingNote } from '@/store/journal/journal.Thunks';
import { startSaving, finishSaving, addNewEmptyNote, setActiveNote, clearActiveNote, updateActiveNote, setPhotosToActiveNote, setNotes, resetState, deleteNoteById  } from '@/store/journal/journal.Slice';
import { emptyNote } from '@test/fixtures/journalFixtures';
import { FirebaseDB } from '@/firebase/config';
import { collection, deleteDoc, getDocs } from 'firebase/firestore/lite';

describe('Testing on journal.Thunks', () => {

   const dispatch = jest.fn();
   const getState = jest.fn();

   const deleteTestNotes = async (uid) => {
      const collectionRef = collection(FirebaseDB, `${ uid }/journal/notes`);
      const docs = await getDocs( collectionRef );

      const deletePromises = [];
      docs.forEach( doc => deletePromises.push( deleteDoc( doc.ref ) ));
      await Promise.all( deletePromises );
   };

   test('startNewNote should create a new blank note', async () => {
      const uid = 'TEST-UID';
      getState.mockReturnValue({ auth: { uid } });

      await startNewNote()( dispatch, getState );

      expect( dispatch ).toHaveBeenCalledWith( startSaving() );
      expect( dispatch ).toHaveBeenCalledWith( addNewEmptyNote(emptyNote) );
      expect( dispatch ).toHaveBeenCalledWith( setActiveNote(emptyNote) );
      expect( dispatch ).toHaveBeenCalledWith( finishSaving() );

      await deleteTestNotes( uid );
   });

});