import { useState, useRef } from "react";

const SimpleInput = (props) => {
    const nameInputRef =  useRef();
    const [enteredName, setEnteredName] = useState('');
    const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);
    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
    const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';


    const nameInputChangeHandler = event => {
        setEnteredName(event.target.value);
    };

    const nameInputBlurHandler = event => {
        setEnteredNameTouched(true)
    }

    const formSubmitHandler = event => {
        event.preventDefault();

        setEnteredNameTouched(true)

        if(enteredName === '') {
            setEnteredNameIsValid(false)
            return;
        }

        setEnteredNameIsValid(true)

        const enteredValue = nameInputRef.current.value;
        console.log(enteredValue)

        setEnteredName('');
    };

    
    return (
        <form onSubmit={formSubmitHandler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input
                    ref={nameInputRef}
                    type='text'
                    id='name'
                    onChange={nameInputChangeHandler}
                    onBlur={nameInputBlurHandler}
                    value={enteredName}
                />
                {nameInputIsInvalid && <p className="error-text">Name must not be empty</p>}
            </div>
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
