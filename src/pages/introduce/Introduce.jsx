import Dropdown from '../../components/dropdown/Dropdown'
import './Introduce.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const TOTAL_QUESTIONS = 10

const Introduce = () => {
    const difficulty = ['select a value', 'easy', 'medium', 'hard']
    const [difficultyChange, setDifficultyChange] = useState('')
    const navigate = useNavigate()


    const startQuiz = () => {

        console.log('sadsadas');
        console.log(difficultyChange);
        if (difficultyChange === 'select a value' || difficultyChange === '') {
            alert('Please select a value')

        }
        else {
            navigate(`/quiz/${difficultyChange}/${TOTAL_QUESTIONS}`)
        }

    }

    return (
        <div className='introduce'>
            <div className='introduce-container'>
                <img src="https://image.similarpng.com/very-thumbnail/2020/12/Lorem-ipsum-logo-isolated-clipart-PNG.png" alt="" />
                <Dropdown data={difficulty} onSetDifficultyChange={setDifficultyChange} />
                <div onClick={e => startQuiz()} className='introduce-btn'>Start Quiz</div>
            </div>
        </div>
    )
}
export default Introduce