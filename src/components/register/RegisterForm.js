import validate from './Validation';
import UseForm from './UseForm';

const RegisterForm = () => {

    const { handleChange, values, handleSubmit, errors } = UseForm(submit, validate)

        function submit() {
            console.log(Object.keys(errors))
            window.location.reload();
        }


  return (
    <>
    
        <div className='Bg-registerform'>
            <div className='ContainerRegular'>
                <div className='FormSection'>
                    <form action="" onSubmit={handleSubmit} noValidate>
                        <h1>REGISTER</h1>
                        <p>Registering for this site allows you to access your order status and history.<br/> 
                            Just fill in the fields below, and we’ll get a new account set up for you in no<br/> 
                            time. We will only ask you for information necessary to make the purchase<br/> 
                            process faster and easier.</p>
                        <div className='Label-input'>
                            <div className='Label-star'>
                                <label htmlFor='username'>Username</label>
                                <span>*</span>
                            </div>
                            <input id='regUsername' name='regUsername' type="text" value={values.regUsername} onChange={handleChange} onKeyUp={handleChange}/>
                            <span id='error-username' className='Error-message'>{errors.regUsernameError}</span>
                        </div>
                        <div className='Label-input'>
                            <div className='Label-star'>
                                <label htmlFor='regEmail'>Email address</label>
                                <span>*</span>
                            </div>
                            <input id='regEmail' name='regEmail' type="text" value={values.regEmail} onChange={handleChange} onKeyUp={handleChange} />
                            <span id='error-email' className='Error-message'>{errors.regEmailError}</span>
                        </div>
                        <div className='Label-input'>
                            <div className='Label-star'>
                                <label htmlFor='regPassword'>Password</label>
                                <span>*</span>
                            </div>
                            <input id='regPassword' name='regPassword' type="password" value={values.regPassword} onChange={handleChange} onKeyUp={handleChange} />
                            <span id='error-password' className='Error-message'>{errors.regPasswordError}</span>
                        </div>
                        <span id='policySpan'>Your personal data will be used to support your experience<br/>
                            throughout this website, to manage access to your account, and for<br />
                            other purposes described in our</span>
                        <span id="privacyPolicySpan">privacy policy.</span>
                        <button type='submit'>REGISTER</button>
                    </form>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default RegisterForm