import React from 'react'
import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
    const [values, setValues] = useState({
        regUsername: '',
        regEmail: '',
        regPassword: ''
    });

    const [errors, setErrors] = useState({
        regUsernameError: '',
        regEmailError: '',
        regPasswordError: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setValues ({
            ...values,
            [name]: value 
        });
        
        setErrors(validate(values));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validate(values));
        setIsSubmitted(true);
    }

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitted){
            callback();
        }
    }, [errors, callback, isSubmitted]);

    return { handleChange, handleSubmit, values, errors }
}

export default useForm