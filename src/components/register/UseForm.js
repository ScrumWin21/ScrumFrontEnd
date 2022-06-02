import { toBeEmpty } from '@testing-library/jest-dom/dist/matchers';
import { wait } from '@testing-library/user-event/dist/utils';
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

    const [submitError, setSubmitError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
        setErrors(validate(values));
        setSubmitError("");
        setIsSubmitted(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validate(values));
        setIsSubmitted(true);
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitted) {
            setIsSubmitted(false);
            callback();
        }
    }, [errors, callback, isSubmitted]);

    return { handleChange, handleSubmit, setSubmitError, setIsSubmitted, setValues, values, errors, submitError }
}

export default useForm