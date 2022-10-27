const ApiService = require("./ApiService")

module.exports = class FormData {
    constructor(nome) {
        this.nome  = nome
    }

    store() {
        const apiService = new ApiService()
        apiService.save({ nome: this.nome })
    }
}