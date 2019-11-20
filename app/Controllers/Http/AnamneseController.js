'use strict'
const User = use('App/Models/Anamnese')

class AuthController {
    
    async cadastrar({ request }){
        const data = request.only([ 'id_paciente','queixa_paciente', 'historico_doenca', 'antecedentes'])
    
         const user = await User.create(data)
            
        return user

    }
    

    
}

module.exports = AuthController
