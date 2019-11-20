'use strict'
const User = use('App/Models/Paciente')

class AuthController {
    
    async cadastrar({ request }){
        const data = request.only([ 'id','nome', 'email', 'endereco'])
    
         const user = await User.create(data)
            
        return user

    }
    
    async authenticate({ request, auth }){
        const{ email, password} = request.all()

        const token = await auth.attempt(email, password)

        return token + "logou caralhooooo"
    } 
    
}

module.exports = AuthController
