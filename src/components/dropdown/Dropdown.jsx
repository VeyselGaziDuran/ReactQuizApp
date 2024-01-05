import './Dropdown.css';

const Dropdown = ({ data, setDifficultyChange }) => {

    const difficultyHandler = (e) => {
        setDifficultyChange(e.target.value)
        console.log(e.target.value)
    }

    return (
        <div className='dropdown'>
            <select onChange={e => difficultyHandler(e)} name="" id="">
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
