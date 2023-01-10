import { types } from "@/auth";

describe('Testing on types', () => {

   test('should return this types', () => {
      expect( types ).toEqual({ 
         login: '[Auth] Login', 
         logout: '[Auth] Logout' 
      });

   });

})