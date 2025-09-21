import './App.css'
import Pages from './pages/index.jsx'
import { Toaster } from './components/ui/toaster.jsx' // use relative path

function App() {
  return (
    <>
      <Pages />
      <Toaster />
    </>
  )
}

export default App
