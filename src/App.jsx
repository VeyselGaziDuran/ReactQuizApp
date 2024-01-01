import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<div className='introduce'>Introduce</div>} />
          <Route path='/quiz' element={<div className='quiz'>Quiz</div>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
