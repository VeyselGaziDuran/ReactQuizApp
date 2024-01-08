import './Modal.css'

const Modal = ({ score }) => {
    return (
        <div className='modal'>
            <div className='modal-title'>Skor: {score}</div>
            <div className='modal-btn'>Start Again</div>
        </div>
    )
}
export default Modal