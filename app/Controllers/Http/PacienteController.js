'use strict'
const User = use('App/Models/Paciente')
const Database = use('Database')

class AuthController {
    
    async cadastrar({ request }){
        const data = request.only([ 'id','nome', 'email', 'endereco'])
    
         const user = await User.create(data)
            
        return user

    }

    async atualizar({ params, request, response }) {
        const user = await User.findOrFail(params.id);
        const data = request.only(["nome", "email","endereco"]);
    
        user.merge(data);
        await user.save();

        return user
    }
    async deletar({ params }) {
        const user2 = await Database.table('anamnese').where('id_paciente', params.id).delete()
        const user = await User.findOrFail(params.id);
        await user.delete();
    }

    async mostrar ({ params }) {
        const user = await User.all();
    
        return user;
      
      }
    
    
}

module.exports = AuthController
