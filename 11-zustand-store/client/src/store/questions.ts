import { create } from 'zustand'
import { type Question } from '../types'
import { persist } from 'zustand/middleware'
import confetti from 'canvas-confetti'

interface State {
   questions: Question[]
   currentQuestion: number
   fetchQuestion: (limit: number) => Promise<void>
   selectAnswer: (questionId: number, answerIndex: number) => void
   goNextQuestion: () => void
   goPreviousQuestion: () => void
   reset: () => void
}

export const useQuestionsStore = create<State>()(
   persist(
      (set, get) => ({
         questions: [],
         currentQuestion: 0,

         fetchQuestion: async (limit: number) => {
            const response = await fetch('http://localhost:5173/data.json')
            const json = await response.json()
            const questions = json.sort(() => Math.random() - 0.5).slice(0, limit)
            set({ questions })
         },
         selectAnswer: (questionId: number, answerIndex: number) => {
            const { questions } = get()

            const newQuestions = structuredClone(questions)

            const questionIndex = newQuestions.findIndex(question => question.id === questionId)
            const questionInfo = newQuestions[questionIndex]
            const isCorrectAnswer = questionInfo.correctAnswer === answerIndex

            if (isCorrectAnswer) confetti()


            newQuestions[questionIndex] = {
               ...questionInfo,
               userSelectedAnswer: answerIndex,
               isCorrectAnswer
            }

            set({ questions: newQuestions })
         },
         goNextQuestion: () => {
            const { currentQuestion, questions } = get()
            const nextQuestion = currentQuestion + 1

            if (nextQuestion <= questions.length) {
               set({ currentQuestion: nextQuestion })
            }
         },
         goPreviousQuestion: () => {
            const { currentQuestion } = get()
            const previousQuestion = currentQuestion - 1

            if (previousQuestion >= 0) {
               set({ currentQuestion: previousQuestion })
            }
         },
         reset: () => {
            set({
               questions: [],
               currentQuestion: 0,
            })
         }
      }),
      { 
         name: 'questions' 
      }
   )
)