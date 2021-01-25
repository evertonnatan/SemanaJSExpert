const Employee = require("./employee")
const Util = require("./util")
const util = require("./util")

class Manager extends Employee {
    #bonuses = 2000
    get bonuses () {
        return Util.formatCurrency(this.#bonuses)
    }
    get netPay(){
        const finalValue = util.unFormatCurrency(super.netPay) + Util.unFormatCurrency(this.bonuses)

        return Util.formatCurrency(finalValue)
    }
}

module.exports = Manager