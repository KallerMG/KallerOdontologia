'use strict'
const User = use('App/Models/Anamnese')
const Database = use('Database')
class AuthController {
    
    async cadastrar({ request }){
        const data = request.only([ 'id_paciente','queixa_paciente', 'historico_doenca', 'antecedentes'])
    
         const user = await User.create(data)
            
        return user

    }

    async atualizar({ params, request, response }) {
        const user = await User.findOrFail(params.id);
        const data = request.only(["id_paciente","queixa_paciente", "historico_doenca", "antecedentes"]);
    
        user.merge(data);
        await user.save();

        return user
    }
    async deletar({ params }) {
        const user = await Database.table('anamnese').where('id_paciente', params.id).delete()
    }

    async mostraranam ({ params }) {
        //const user = await User.all();
        const user = await Database.table('pacientes').innerJoin('anamnese', 'pacientes.id', 'anamnese.id_paciente').where('pacientes.id',params.id)
    
        return user;
      
    }
    

    
}

module.exports = AuthController
