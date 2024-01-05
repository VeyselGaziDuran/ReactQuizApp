import './Dropdown.css';

const Dropdown = ({ data, onSetDifficultyChange }) => {

    const difficultyHandler = (e) => {
        onSetDifficultyChange(e.target.value)
        console.log(e.target.value)
    }

    return (
        <div className='dropdown'>
            <select defaultValue={data[0]} onChange={e => difficultyHandler(e)} name="" id="">
                {
                    data.map((dt, i) => (
                        <option key={i} value={dt}>{dt}</option>
                    ))
                }
            </select>
        </div>
    );
}

export default Dropdown;
