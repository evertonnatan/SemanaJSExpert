const { describe, it, before, afterEach, } = require('mocha')
const { expect } = require('chai')
const TodoService = require('../src/todoService')
const { createSandbox } = require('sinon')

describe('todoService', () => {
    let sandbox
    before(() => {
        sandbox = createSandbox()
    })

    describe('#list', () => {
        const mockDatabase = [
            {
              name: 'Xuxa Da Silva',
              age: 92,
              meta: { revision: 0, created: 1611430896007, version: 0 },
              '$loki': 1
            },
        ]
        let todoService

        beforeEach(() => {
            const dependencies = {
                todoRepository: {
                    list: sandbox.stub().returns(mockDatabase)
                }
            }
            todoService = new TodoService(dependencies)
        })
        it('should return data on a specific format', () => {
            const result = todoService.list()
            const [{ meta, $loki, ...expected }] = mockDatabase
            expect(result).to.be.deep.equal(expected)
        })
    })
})
