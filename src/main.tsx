import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoutes from './components/routes/AppRoutes.tsx'
import NavBar from './components/nav/NavBar.tsx'
import Footer from './components/Footer/Footer.tsx'
import { createStore } from 'redux'
import rootReducer from './redux/reducers'
import { Provider } from 'react-redux'

const store = createStore(rootReducer)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <NavBar />
      <AppRoutes />
      <Footer/>
    </Provider>
  </StrictMode>,
)
