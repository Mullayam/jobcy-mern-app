import { instance } from "./api.instance"

export const Login = async  (email, password) => {     
    return await instance.post('/login',{
        email,password
    })
} 
export const Register = async  (data) => {     
    return await instance.post('/register',data)
} 
export const ForgetPassword = async  (data) => {  
    return await instance.post('/forget-password',{email:data})
} 
export const CurrrentUser = async  (id) => {  
    return await instance.get('/current-user/id',)
} 