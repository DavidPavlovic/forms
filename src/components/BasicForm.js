import useInput from '../hooks/use-input';

const BasicForm = (props) => {
    const { 
        value: firstName,
        isValid: firstNameIsValid,
        hasError: firstNameHasError,
        valueChangeHandler: firstNameChangedHandler,
        inputBlurHandler: firstNameBlurHandler,
        reset: resetFirstNameInput
    } = useInput(value => value.trim() !== '');

    const {
        value: lastName,
        isValid: lastNameIsValid,
        hasError: lastNameHasError,
        valueChangeHandler: lastNameChangedHandler,
        inputBlurHandler: lastNameBlurHandler,
        reset: resetLastNameInput
    } = useInput(value => value.trim() !== '');


    const {
        value: email,
        isValid: emailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailChangedHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput
    } = useInput(value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()));

    const firstNameClasses = firstNameHasError ? 'form-control invalid' : 'form-control';
    const lastNameClasses = lastNameHasError ?  'form-control invalid' : 'form-control';
    const emailClasses = emailHasError ?  'form-control invalid' : 'form-control';
    let formIsValid = false;

    if(firstName && lastName && email) formIsValid = true;

    const formSubmit = (e) => {
        e.preventDefault();

        if(!firstNameIsValid || !lastNameIsValid || !emailIsValid) return;

        resetFirstNameInput();
        resetLastNameInput();
        resetEmailInput();
    }


    return (
        <form onSubmit={formSubmit}>
            <div className='control-group'>
                <div className={firstNameClasses}>
                    <label htmlFor='name'>First Name</label>
                    <input type='text' id='name' onChange={firstNameChangedHandler} onBlur={firstNameBlurHandler} value={firstName}/>
                    {firstNameHasError && <p className="error-text">First Name must not be empty.</p>}
                </div>
                <div className={lastNameClasses}>
                    <label htmlFor='name'>Last Name</label>
                    <input type='text' id='name' onChange={lastNameChangedHandler} onBlur={lastNameBlurHandler} value={lastName}/>
                    {lastNameHasError && <p className="error-text">Last Name must not be empty.</p>}
                </div>
            </div>
            <div className={emailClasses}>
                <label htmlFor='name'>E-Mail Address</label>
                <input type='text' id='name' onChange={emailChangedHandler} onBlur={emailBlurHandler} value={email}/>
                {emailHasError && <p className="error-text">Please enter a valid email.</p>}
            </div>
            <div className='form-actions'>
                <button>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;
