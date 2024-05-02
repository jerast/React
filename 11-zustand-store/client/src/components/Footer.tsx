import { Button } from '@mui/material'
import { useQuestionsData } from '../hooks/useQuestionsData'
import { useQuestionsStore } from '../store/questions'

export const Footer = () => {
   const { correct, incorrect, unanswered } = useQuestionsData()
   const reset = useQuestionsStore(state => state.reset)

   return (
      <footer style={{ marginTop: 16 }}>
         <strong style={{ fontSize: 12, opacity: .5 }}>{`✅ ${correct} correctas -  ❌ ${incorrect} incorrectas - ❓ ${unanswered} sin responder`}</strong>

         <div style={{ marginTop: 16 }}>
            <Button onClick={reset}>
               Resetear Juego
            </Button>
         </div>
      </footer>
   )
}