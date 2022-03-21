Aula 14.2 - Mocks e Inputs

Mock -  Simulação de função. Mockar significa fazer uma simulação.

jest.fn(); - Transforma em um mock
jest.mock(); - Mocka todo um pacote de dependências ou módulo de uma vez.
jest.spyOn(); - Ele "espia" a chamada da função simulada, enquanto deixa a implementação original ativa.



Situações

function = jest.fn(); - Transforma em um mock
function(); - Chama a função
expect(function).toHaveBeenCalled(); - Confirma se a função foi chamada

function = jest.fn().mockReturnValue('Retorno Esperado'); - Define o retorno do mock
expect(function()).toBe('Retorno Esperado')

function  = jest.fn();
function(); - Chama a função uma vez
expect(function).toHaveBeenCalledTimes(1) - Especifica quantas vezes a função é chamada (Uma).

* O mockReturnValue define um valor padrão de retorno. Já o mockReturnValueOnce retorna o valor definido apenas uma vez, e é importante, pois pode ser encadeado para que chamadas sucessivas retornem valores diferentes.

jest.mock('./pasta');
const pasta = ('./pasta');
mockImplementation(func) - Ele aceita uma função que deve ser usada como implementação.

jest.spyOn();
test('#função',() => {
    const mockFuncao = jest.spyOn(pasta, funçao);
})

* mock.mockClear()
Útil quando você deseja limpar os dados de uso de uma simulação entre dois expects;

* mock.mockReset()
Faz o que o mockClear() faz;
Remove qualquer retorno estipulado ou implementação;
Útil quando você deseja resetar uma simulação para seu estado inicial;

* mock.mockRestore()
Faz tudo que mockReset() faz;
Restaura a implementação original;
Útil para quando você quer simular funções em certos casos de teste e restaurar a implementação original em outros;

Exemplo de teste com utilização de API

afterEach(() => jest.clearAllMocks());

it('fetches a joke', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(joke),
  }));

  render(<App />);
  const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
  expect(renderedJoke).toBeInTheDocument();
  expect(global.fetch).toBeCalledTimes(1);
  expect(global.fetch).toBeCalledWith('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } });
}); 