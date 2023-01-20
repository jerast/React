import { useAuthStore } from "@/hooks"

export const Navbar = () => {

   const { user, startLogout } = useAuthStore();

   return (
      <>
         <div className="navbar navbar-dark bg-dark mb-4 px-4">
            <span className="navbar-brand">
               <i className="fas fa-calendar-alt mr-3 me-3" />
               { user.name }
            </span>
            <button className="btn btn-dark" onClick={ startLogout } >
               <i className="fas fa-sign-out-alt me-2" />
               <span>Logout</span>
            </button>
         </div>
      </>
   )
}