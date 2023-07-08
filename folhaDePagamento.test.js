import { somaHorasExtras } from './src/index.js'
import { calculaDescontos } from './src/index.js'

describe('Teste dos calculos de folha', () => {
    test('Deve retornar a soma das horas extras', () => {
        const esperado = 2500;
        const retornado = somaHorasExtras(2000, 500);

        expect(retornado).toBe(esperado)
    });

    test('Deve retornar o calculo do desconto', () => {
        const esperado = 2300;
        const retornado = calculaDescontos(2500, 200)

        expect(retornado).toBe(esperado)
    });
})
