import Dropdown from '../../components/dropdown/Dropdown'
import './Introduce.css'

const Introduce = () => {
    const difficulty = ['easy', 'medium', 'hard']

    return (
        <div className='introduce'>
            <div className='introduce-container'>
                <img src="https://image.similarpng.com/very-thumbnail/2020/12/Lorem-ipsum-logo-isolated-clipart-PNG.png" alt="" />
                <Dropdown />
                <div className='introduce-btn'>Start Quiz</div>
            </div>
        </div>
    )
}
export default Introduce