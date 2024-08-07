import { Button } from '@mui/material'
import { useQuestionsStore } from '../store/questions'

export const Start = () => {
   const fetchQuestions = useQuestionsStore(state => state.fetchQuestion)

   const handleClick = () => {
         fetchQuestions(5)
      }

   return (
      <>
         <Button onClick={handleClick} variant="contained" >
            Start
         </Button>
      </>
   )
}