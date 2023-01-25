import React, { useState } from 'react'

export const useForm = (inicialState) => {

    const [state, setState] = useState(inicialState)

    const onChange = (value, field) => {
        setState({
            ...state,
            [field]: value
        })
    }


    return {
        ...state,
        form: state,
        onChange,
    }
}
