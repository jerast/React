import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { AppRoutes } from '@/routes'
import { store } from '@/store'

export const App = () => {
   return (
      <Provider store={ store }>
         <BrowserRouter>
            <AppRoutes />
         </BrowserRouter>
      </Provider>
   )
}