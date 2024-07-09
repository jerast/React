export const getLocalAgentUser = () => JSON.parse(localStorage.getItem('ticket-app-session'))

export const setLocalAgentUser = ({ agent, desktop }) => localStorage.setItem('ticket-app-session', JSON.stringify({ agent, desktop }))

export const removeLocalAgentUser = () => localStorage.removeItem('ticket-app-session')