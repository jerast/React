export const HeroPoster = ({ hero }) => {
   return (
      <div className="HeroPoster animate__animated animate__fadeIn">
         <img 
            className="HeroPoster__image animate__animated animate__fadeInLeft" 
            src={`/images/heroes/${ hero.id }.jpg`} 
            alt={ hero.superhero } 
         />
         <div className="HeroPoster__body animate__animated animate__fadeIn animate__delay-1s">
            <p className="HeroPoster__info">
               <span>Alter Ego</span>
               <span>{ hero.alter_ego }</span>
            </p>
            <p className="HeroPoster__info">
               <span>Publisher</span>
               <span>{ hero.publisher }</span>
            </p>
            <p className="HeroPoster__info">
               <span>First Appearance</span>
               <span>{ hero.first_appearance }</span>
            </p>
            <p className="HeroPoster__info">
               <span>Characters</span>
               <span>{ hero.characters }</span>
            </p>
         </div>
      </div>
   )
}