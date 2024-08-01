import { chatReducerTypes } from "./chatReducer.types"

export const chatReducer = ( state, action ) => {
  switch (action.type) {

    case chatReducerTypes.loadedUsers:
      return {
        ...state,
        users: action.payload
      }

    case chatReducerTypes.activedChat:
      return {
        ...state,
        activeChat: action.payload
      }

    case chatReducerTypes.loadMessages:
      return {
        ...state,
        messages: action.payload
      }

    case chatReducerTypes.newMessage: 
      return (state.activeChat === action.payload.from || state.activeChat === action.payload.to)
        ? {
          ...state,
          messages: [...state.messages, action.payload]
        } : {
          ...state
        }

    case chatReducerTypes.clearState:
      return {
        activeChat: null,
        users: [],
        messages: [],
        error: null
      }

    default:
      return state
      
  }
}