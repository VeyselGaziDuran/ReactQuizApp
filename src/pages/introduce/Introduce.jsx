import Dropdown from '../../components/dropdown/Dropdown'
import './Introduce.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Introduce = () => {
    const difficulty = ['easy', 'medium', 'hard']
    const [difficultyChange, setDifficultyChange] = useState('')
    const navigate = useNavigate()
    const TOTAL_QUESTIONS = 10

    const startQuiz = () => {
        if (difficultyChange) {
            navigate(`/quiz/${difficultyChange}/${TOTAL_QUESTIONS}`)
        }
    }

    return (
        <div className='introduce'>
            <div className='introduce-container'>
                <img src="https://image.similarpng.com/very-thumbnail/2020/12/Lorem-ipsum-logo-isolated-clipart-PNG.png" alt="" />
                <Dropdown data={difficulty} setDifficultyChange={setDifficultyChange} />
                <div onClick={startQuiz} className='introduce-btn'>Start Quiz</div>
            </div>
        </div>
    )
}
export default Introduce