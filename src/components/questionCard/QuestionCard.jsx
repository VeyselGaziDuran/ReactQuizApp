import './QuestionCard.css'
import { useState } from 'react'



const QuestionCard = ({ questionsData, score, setScore, count, setCount, modal, setModal }) => {

    const [timer, setTimer] = useState(30)


    const approvedChoice = (e) => {
        console.log(e.currentTarget.value);
        const checlAnswer = e.currentTarget.value == questionsData[count]?.correct_answer
        console.log(checlAnswer);
    }

    return (
        <div className='questionCard'>
            <div className='questionCard-timer'>{timer}</div>
            <div className='questionCard-title'>
                {count + 1}/10 - {questionsData[count]?.question}
            </div>
            {
                questionsData[count]?.answers?.map((answer, i) => (
                    <button onClick={approvedChoice} key={i} value={answer}>{answer}</button>
                ))
            }
        </div>
    )
}
export default QuestionCard