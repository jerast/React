// import { IconButton, Stack } from '@mui/material'
import { Card, IconButton, List, ListItem, ListItemButton, ListItemText, Stack, Typography } from '@mui/material'
import { useQuestionsStore } from '../store/questions'
import { type Question as QuestionType } from '../types'
import  SyntaxHighlighter from 'react-syntax-highlighter'
import { gruvboxDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material'
import { Footer } from './Footer'

const setBackgroundColor = (index: number, questionInfo: QuestionType) => {
   const { userSelectedAnswer, correctAnswer } = questionInfo

   // No se ha seleccionado nada
   if (userSelectedAnswer === undefined) return 'transparent'

   // una vez seleccionada una opción, sí o sí debe mostrar cuál era la correcta
   if (correctAnswer === index) return 'green'   
   
   // Si la respuesta seleccionada es incorrecta
   if (userSelectedAnswer === index && correctAnswer !== index) return 'red'
}

const Question = ({ info }: { info: QuestionType }) => {
   const selectAnswer = useQuestionsStore(state => state.selectAnswer)

   const createHandleClick = (answerIndex: number) => () => {
      selectAnswer(info.id, answerIndex)
   }

   return (
      <Card variant="outlined" sx={{ textAlign: 'left', p: 2, bgcolor: '#222', marginTop: 4 }}>
         <Typography variant="h5">
            { info.question }
         </Typography>
         <SyntaxHighlighter language="javascript" style={gruvboxDark} customStyle={{ fontSize: 13, marginBottom: 36, marginTop: 36 }}>
            { info.code }
         </SyntaxHighlighter>
         <List sx={{ bgcolor: '#333' }} disablePadding>
            { 
               info.answers.map((answer, index) => (
                  <ListItem key={index} disablePadding divider>
                     <ListItemButton onClick={createHandleClick(index)} sx={{ backgroundColor: setBackgroundColor(index, info) }} disabled={info.userSelectedAnswer !== undefined}>
                        <ListItemText primary={answer} sx={{ textAlign: 'center' }}/>
                     </ListItemButton>
                  </ListItem>
               ))
            }
         </List>
      </Card>
   )
}

export const Game = () => {
   const questions = useQuestionsStore(state => state.questions )
   const currentQuestion = useQuestionsStore(state => state.currentQuestion )
   const goNextQuestion = useQuestionsStore(state => state.goNextQuestion)
   const goPreviousQuestion = useQuestionsStore(state => state.goPreviousQuestion)

   return (
      <>
         <Stack direction="row" gap={2} alignItems="center" justifyContent="center">
            <IconButton onClick={goPreviousQuestion} disabled={currentQuestion === 0}>
               <ArrowBackIosNew />
            </IconButton>
            { currentQuestion + 1 } / { questions.length }
            <IconButton onClick={goNextQuestion} disabled={currentQuestion >= questions.length - 1}>
               <ArrowForwardIos />
            </IconButton>
         </Stack>
         <Question info={questions[currentQuestion]} />
         <Footer />
      </>
   )
}