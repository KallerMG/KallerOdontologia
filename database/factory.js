'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Hash = use('Hash')


Factory.blueprint('App/Models/paciente', () => {
    return {
        id: 1,
        nome: 'Marcela',
        endereco: 'Pelotas',
        email: 'luisfrancisco@terra.com'
    }
})

Factory.blueprint('App/Models/anamnese', () => {
    return {
        id_paciente: 1,
        queixa_paciente: 'dor de sizo cronica',
        historico_doenca: 'familia sofre desse mal  ',
        antecedentes: 'ja tive esse problema mas hj estou curado'
    }
})
