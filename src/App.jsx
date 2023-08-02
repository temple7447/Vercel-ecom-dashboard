import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidemenu from './Component/Sidemenu'
import DarkModeSwitch from './Component/DarkModeSwitch'
import SearchButton from './Component/SearchButton'
import Unique from './Unique'
import { MyContextProvider } from './AppProvider'
import { Route, Routes } from 'react-router-dom'
import DashBoard from './Main/DashBoard'
import Store from './Main/Store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <MyContextProvider>
      <Routes>

        <Route path='/' element={< Unique />} >
          <Route index element={<DashBoard />} />
          <Route path='/Store' element={<Store />} />
        </Route>
      </Routes>


    </MyContextProvider>
  )
}

export default App
