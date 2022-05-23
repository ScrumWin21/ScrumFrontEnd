import React from 'react'

const RegisterForm = () => {
  return (
    <>
    
        <div className='ContainerRegular'>
            <div className='FormSection'>
                <form action="">
                    <h1>Register</h1>
                    <p>Registering for this site allows you to access your order status and history.<br/> 
                        Just fill in the fields below, and we’ll get a new account set up for you in no<br/> 
                        time. We will only ask you for information necessary to make the purchase<br/> 
                        process faster and easier.</p>
                    <div className='label-input'>
                        <label htmlFor="">Username</label>
                        <span>*</span>
                        <input type="text" />
                    </div>
                    <div className='label-input'>
                        <label htmlFor="">Email address</label>
                        <span>*</span>
                        <input type="text" />
                    </div>
                    <div className='label-input'>
                        <label htmlFor="">Password</label>
                        <span>*</span>
                        <input type="text" />
                    </div>
                    <span>Your personal data will be used to support your experience<br/>
                        throughout this website, to manage access to your account,<br/>
                        and for other purposes described in our</span>
                    <span>privacy policy.</span>
                    <button>REGISTER</button>
                </form>
            </div>
        </div>
    
    </>
  )
}

export default RegisterForm