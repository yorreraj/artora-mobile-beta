import { gql } from "apollo-boost";

export const MUTATION_CREATE_USER = gql`
    mutation($name:String!, $phone:String, $mail:String, $password:String!){
        createUser(user:{
            name:$name
            mail:$mail
            phone:$phone
            password:$password
        }){
            id, 
            name
        }
    }
`