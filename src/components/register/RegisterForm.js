import React from 'react'

const RegisterForm = () => {
  return (
    <>
    
        <div className='bg-registerform'>
            <div className='ContainerRegular'>
                <div className='FormSection'>
                    <form action="">
                        <h1>REGISTER</h1>
                        <p>Registering for this site allows you to access your order status and history.<br/> 
                            Just fill in the fields below, and we’ll get a new account set up for you in no<br/> 
                            time. We will only ask you for information necessary to make the purchase<br/> 
                            process faster and easier.</p>
                        <div className='Label-input'>
                            <div className='Label-star'>
                                <label htmlFor="">Username</label>
                                <span>*</span>
                            </div>
                            <input type="text" />
                        </div>
                        <div className='Label-input'>
                            <div className='Label-star'>
                                <label htmlFor="">Email address</label>
                                <span>*</span>
                            </div>
                            <input type="text" />
                        </div>
                        <div className='Label-input'>
                            <div className='Label-star'>
                                <label htmlFor="">Password</label>
                                <span>*</span>
                            </div>
                            <input type="text" />
                        </div>
                        <span>Your personal data will be used to support your experience<br/>
                            throughout this website, to manage access to your account, and for<br />
                            other purposes described in our</span>
                        <span id="PrivacyPolicySpan">privacy policy.</span>
                        <button>REGISTER</button>
                    </form>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default RegisterForm