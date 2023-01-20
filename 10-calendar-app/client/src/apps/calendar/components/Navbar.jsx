export const Navbar = () => {
   return (
      <>
         <div className="navbar navbar-dark bg-dark mb-4 px-4">
            <span className="navbar-brand">
               <i className="fas fa-calendar-alt mr-3 me-3" />
               Fernando
            </span>
            <button className="btn btn-dark">
               <i className="fas fa-sign-out-alt me-2" />
               <span>Logout</span>
            </button>
         </div>
      </>
   )
}