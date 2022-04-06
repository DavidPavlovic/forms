import { useState } from "react";

const SimpleInput = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredEmailTouched, setEnteredEmailTouched] = useState('');
    const enteredNameIsValid = enteredName.trim() !== '';
    const enteredEmailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enteredEmail.trim());
    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
    const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;
    const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';
    const emailInputClasses = emailInputIsInvalid ? 'form-control invalid' : 'form-control';

    let formIsValid = false;

    if(enteredNameIsValid && enteredEmailIsValid) {
        formIsValid = true;
    }

    const nameInputChangeHandler = event => {
        setEnteredName(event.target.value);
    };

    const emailInputChangeHandler = event => {
        setEnteredEmail(event.target.value);
    };

    const nameInputBlurHandler = event => {
        setEnteredNameTouched(true);
    }

    const emailInputBlurHandler = event => {
        setEnteredEmailTouched(true);
    }

    const formSubmitHandler = event => {
        event.preventDefault();

        setEnteredNameTouched(true);
        setEnteredEmailTouched(true);

        if(!enteredNameIsValid || !enteredEmailIsValid) return;

        setEnteredName('');
        setEnteredEmail('');
        setEnteredEmailTouched(false);
    };
    
    return (
        <form onSubmit={formSubmitHandler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input
                    type='text'
                    id='name'
                    onChange={nameInputChangeHandler}
                    onBlur={nameInputBlurHandler}
                    value={enteredName}
                />
                {nameInputIsInvalid && <p className="error-text">Name must not be empty</p>}
            </div>

            <div className={emailInputClasses}>
                <label htmlFor='email'>Your Email</label>
                <input
                    type='email'
                    id='email'
                    onChange={emailInputChangeHandler}
                    onBlur={emailInputBlurHandler}
                    value={enteredEmail}
                />
                {emailInputIsInvalid && <p className="error-text">Email must be good</p>}
            </div>

            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
