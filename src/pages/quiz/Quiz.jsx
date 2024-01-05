import { useEffect, useState } from 'react'
import './Quiz.css'
import { useParams } from 'react-router-dom'
import fetchQuizData from '../../api/api'

const Quiz = () => {
    const { difficulty, amount } = useParams()
    const [questionsData, setQuestionsData] = useState([])

    useEffect(() => {
        const getData = async () => {
            const data = await fetchQuizData(difficulty, amount)
            setQuestionsData(data)
        }
        getData()
    }, [difficulty, amount])

    return (
        <div className='quiz'>
            {difficulty} - {amount}
        </div>
    )
}
export default Quiz