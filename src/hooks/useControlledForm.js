import React, {useState} from 'react';


export const useControlledForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return {
        email, 
        password, 
        onChangeEmail: (value) => setEmail(value),
        onChangePassword: (value) => setPassword(value)
    }
}