/*
const EntityBase = require('./entityBase')

console.log(new EntityBase({
    name: 'Everton Natã',
    gender: "male",
}).name)

console.log(new EntityBase({
    name: 'Josiane Silva',
    gender: "female",
}).name)
*/

const assert = require('assert')
const Employee = require('./employee')

const GENDER = {
    male: 'male',
    female: 'female'
}

{
    const employee = new Employee({
        name: 'Xuxa da Silva',
        gender: GENDER.female
    })

    assert.throws(() => employee.birthYear, { message: 'you must define age first!!'})
}

{
    const employee = new Employee({
        name: 'Joazinho22',
        age: 20,
        gender: GENDER.male
    })

    //assert.deepStrictEqual(employee.name, 'Mr. Joazinho')
    //assert.deepStrictEqual(employee.age, undefined)
    assert.deepStrictEqual(employee.grossPay, 0)
}

