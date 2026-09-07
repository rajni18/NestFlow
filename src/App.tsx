import MainPageLayout from "./layout/MainPageLayout"
import { ThemeContext } from "./context/ThemeContext"
import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { FeedPage } from "./pages/FeedPage"

const App = () => {
  const [theme, setTheme] = useState<string>("light")
  const toggleTheme  = ()=>{
    setTheme(prev => prev === "light" ? "dark" : "light")
  }
  return (
    <ThemeContext.Provider value={{theme , toggleTheme }} >
      <BrowserRouter>
        <Routes>
          <Route element={<MainPageLayout />}>
            <Route index element={<FeedPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  )
}

export default App