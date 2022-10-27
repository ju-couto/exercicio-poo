const FormData = require("./FormData")

/**
 * Suponha que essa função é executa quando um usuário
 * clica no botão "enviar formulário" de um site qualquer
 */


function onSubmit() {
    // qualquer código aqui...

    const formData = new FormData("Lucas")
    formData.store()

    // qualquer código aqui...
}