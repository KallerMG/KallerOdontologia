'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TokensSchema extends Schema {
  up () {
    this.create('anamnese', (table) => {
        table.integer('id_paciente').references('id').inTable('pacientes').unique()
        table.string('queixa_paciente', 500).notNullable()
        table.string('historico_doenca', 500).notNullable()
        table.string('antecedentes', 500).notNullable()
        table.timestamps()
    })
  }

  down () {
    this.drop('anamnese')
  }
}

module.exports = TokensSchema
