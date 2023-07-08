import Item from '../item.js'

describe('Teste dos Itens', () => {

    test('Deve ter 3 campos  : nome , valor , quantidade', () => {
        const item = new Item('Beterraba', 2.5, 10);

        expect(item.nome).toBe('Beterraba')
        expect(item.valor).toBe(2.5);
        expect(item.quantidade).toBe(10);


    })
})