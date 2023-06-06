const somaHorasExtras = (salario, valorHorasExtra) => salario + valorHorasExtra;

const calculaDescontos = (salario, desconto) => salario - desconto


const verifique = (valor) => {
    const assercoes = {
        exatamenteIgual(esperado) {
            if (valor !== esperado) {
                throw {};
            }
        }
    }
    return assercoes
}

const teste = (titulo, funcaoDeTeste) => {
    try {
        funcaoDeTeste();
        console.log(`${titulo} passou!`)
    }
    catch {
        console.error(`${titulo} não passou!`)
    }
}

teste('SomaHorasExtras', () => {
    const esperado = 2500;
    const retornado = somaHorasExtras(2000, 500)
    verifique(retornado).exatamenteIgual(esperado)
})
teste('calculaDesconto', () => {
    const esperado = 2300;
    const retornado = somaHorasExtras(2000, 500)
    verifique(retornado).exatamenteIgual(esperado)
})