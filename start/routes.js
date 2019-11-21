'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')



Route.post('/criar', 'AuthController.register');
Route.post('/authenticate', 'AuthController.authenticate');
Route.get('/app', "AppController.index" ).middleware(["auth"]);
Route.get('/', ({ view }) => {
  return view.render('pagina')
})
Route.get('/criar', ({ view }) => {
  return view.render('criar')
})
Route.post('/pasciente', 'PacienteController.cadastrar');
Route.post('/anamnese', 'AnamneseController.cadastrar');
Route.put('/user/:id', 'AuthController.atualizar');
Route.delete('/user/:id', 'AuthController.deletar');
Route.get('/pasciente', 'PacienteController.mostrar');
Route.delete('/pasciente/:id', 'PacienteController.deletar');
Route.put('/pasciente/:id', 'PacienteController.atualizar');
Route.get('/anamnese/:id', 'AnamneseController.mostraranam');
Route.delete('/anamnese/:id', 'AnamneseController.deletar');