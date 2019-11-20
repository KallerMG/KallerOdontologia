'use strict'

/*
|--------------------------------------------------------------------------
| AnamneseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class AnamneseSeeder {
  async run () {
    const user = await Factory.model('App/Models/anamnese').create()
    const usuario = await Database.table('anamnese')
    console.log(usuario)
    console.log(user)
  }
}

module.exports = AnamneseSeeder
