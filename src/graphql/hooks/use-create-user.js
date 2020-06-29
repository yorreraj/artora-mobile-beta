import { useMutation } from "@apollo/react-hooks"
import { MUTATION_CREATE_USER } from "../mutations/mutation-create-user";
import { useState } from "react";

const regexPattern = {
    name:/(^[a-zA-Z][a-z]+)((\s[a-zA-Z][a-z]+){0,1})$/,
    mail:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    phone:/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
    password:/^.{8,16}$/
}

const checkInputData = (data) => {
    const {name, login, password} = data
    const errors = {}

    if(!regexPattern.name.test(name))
        errors.name = "Le nom ne doit pas contenir que de lettre minuscule sauf le premier lettre. (Exemple: Jean Claude)"
    else if(name.length > 30)
        errors.name = "Le nom doit contenir au maximal 30 caractères."
    
    if(!regexPattern.mail.test(login) && !regexPattern.phone.test(login))
        errors.login = "Entrez un numero mobile ou e-mail valide."
    
    if(!regexPattern.password.test(password))
        errors.password = "Le mot de passe doit contenir au moins 8 caractères et au max 16."
    
    return errors
}

export const useCreateUser = (data, onCompleted ) => {
    const [create, { loading }] = useMutation(MUTATION_CREATE_USER, { onCompleted })
    const [errors, setErrors] = useState({})

    const handleCreate = () => {
        const { name, login, password } = data

        const checkInputDataOutput = checkInputData(data)
        setErrors(checkInputDataOutput)

        if(Object.keys(checkInputDataOutput).length < 1)
            create({
                variables:{ 
                    name, 
                    password,
                    ...(regexPattern.phone.test(login)&&{ phone:login }),
                    ...(regexPattern.mail.test(login)&&{ mail:login })
                }
            })
    }

    return [handleCreate, { errors, loading }]
}