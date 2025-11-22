import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router/router.tsx'
import { ThemeProvider } from '@emotion/react'
import { theme } from './Components/theme.tsx'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Provider } from 'react-redux'
import { persistor, store } from './Redux/Store.ts'
import { PersistGate } from 'redux-persist/integration/react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <RouterProvider router={router}/>
          </PersistGate>
        </Provider>
      </LocalizationProvider>
    </ThemeProvider>
  </StrictMode>,
)
