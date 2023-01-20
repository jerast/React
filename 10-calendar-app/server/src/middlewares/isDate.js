import moment from 'moment';

export const isDate = ( value ) => {
   
   if ( !value ) return false;

   if ( !moment( value ).isValid() ) return false;

   return true;
};