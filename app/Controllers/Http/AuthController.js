'use strict'
const User = use('App/Models/User')

class AuthController {
    
    async register({ request }){
        var clas = 'aluno'
        const data = request.only(['username', 'email', 'password', 'classe'])
    
         const user = await User.create(data)
            
        return "sucesso"

    }

    async registerprof({ request }){
        
        const data = request.only(['username', 'email', 'password', 'classe'])
    
         const user = await User.create(data)
            
        return "sucesso"

    }
    
    async authenticate({ request, auth }){
        var url= {url :"inicio"};
        const{ email, password} = request.all()
        if (  request.classe = "professor"){
            const token = await auth.attempt(email, password)

            return {token ,classe: request.classe, url}
        }else{
            return {token ,classe: request.classe}
       }
   }

    

    async atualizar({ params, request, response }) {
        const user = await User.findOrFail(params.id);
        const data = request.only(["username", "email"]);
    
        user.merge(data);
        await user.save();

        return user
    }
    async deletar({ params }) {
        const user = await User.findOrFail(params.id);
        await user.delete();
    }

    
}

module.exports = AuthController

