import { useReducer, useCallback } from 'react'
import { chatReducer } from '@chat/reducer/chatReducer'
import { chatReducerTypes } from '@chat/reducer/chatReducer.types'
import { apiFetch } from '@app/helpers/fetch'

const chatInitState = {
  activeChat: null, // UID del usuario al que yo quiero enviar mensajes
  users: [], // Todos los usuarios conectados de la base de datos
  messages: [], // el chat seleccionado
  error: null
}

export const useChat = () => {
  const [chat, dispatch] = useReducer(chatReducer, chatInitState)
  
  const onLoadUsers = useCallback((users) => {
    dispatch({
      type: chatReducerTypes.loadedUsers,
      payload: users
    })
  }, [])

  const onActiveChat = useCallback((userId) => {        
    dispatch({
      type: chatReducerTypes.activedChat,
      payload: userId
    })
  }, [])

  const onNewMessage = useCallback((newMessage) => {
    dispatch({
      type: chatReducerTypes.newMessage,
      payload: newMessage
    })
  }, [chat])

  const onLoadUserChat = useCallback(async (receiver) => {
    const token = localStorage.getItem('socket-chat-token')

    // if token
    const { ok, messages, error } = await apiFetch({
      method: 'GET',
      endpoint: `/messages/${receiver}`,
      token
    })

    if (!ok) return

    dispatch({
      type: chatReducerTypes.loadMessages,
      payload: messages
    })
  }, [])

  const onClearState = () => {
    dispatch({
      type: chatReducerTypes.clearState,
    })
  }

  return {
    chat,
    onLoadUsers,
    onActiveChat,
    onNewMessage,
    onLoadUserChat,
    onClearState,
  }
}