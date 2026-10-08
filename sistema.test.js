const {verificarMaioridade, calcularIMC, formatarNome, ehPar, celsiusParaFahrenheit, adicionarHobby, dividir, criarAluno, aplicarDesconto, validarTamanhoSenha} = require('./sistema');

const verificarMaioridade = require('./sistema');
test('Deve verificar se é maior de 18 anos ou não', () => {
    expect(verificarMaioridade(15)).toBe(false);
    expect(verificarMaioridade(18)).toBe(true);
    expect(verificarMaioridade(21)).toBe(true);
});

const calcularIMC = require('./sistema');
test('Deve calcular o IMC corretamente', () => {
    expect(calcularIMC(70, 1.75)).toBeCloseTo(22.86);
    expect(calcularIMC(80, 1.8)).toBeCloseTo(24.69);
    expect(calcularIMC(60, 1.6)).toBeCloseTo(23.44);
});

const formatarNome = require('./sistema');
test('Deve formatar o nome corretamente', () => {
    expect(formatarNome('Lucas', 'Silva')).toBe('Silva, Lucas');
    expect(formatarNome('Maria', 'Souza')).toBe('Souza, Maria');
    expect(formatarNome('Pedro', 'Almeida')).toBe('Almeida, Pedro');
});

const ehPar = require('./sistema');
test('Deve verificar se o número é par', () => {
    expect(ehPar(4)).toBe(true);
    expect(ehPar(7)).toBe(false);
    expect(ehPar(0)).toBe(true);
});

const celsiusParaFahrenheit = require('./sistema');
test('Deve converter Celsius para Fahrenheit corretamente', () => {
    expect(celsiusParaFahrenheit(0)).toBe(32);
    expect(celsiusParaFahrenheit(100)).toBe(212);
    expect(celsiusParaFahrenheit(-40)).toBe(-40);
});

const adicionarHobby = require('./sistema');
test('Deve adicionar um hobby à lista', () => {
    expect(adicionarHobby(['futebol', 'leitura'], 'cinema')).toEqual(['futebol', 'leitura', 'cinema']);
    expect(adicionarHobby('pintura')).toEqual(['pintura']);
    expect(adicionarHobby(['jogar videogame'], 'cozinhar')).toEqual(['jogar videogame', 'cozinhar']);
});

const dividir = require('./sistema');
test('Deve dividir dois números corretamente', () => {
    expect(dividir(10, 2)).toBe(5);
    expect(dividir(15, 3)).toBe(5);
    expect(() => dividir(10, 0)).toThrow('Divisão por zero não permitida');
});

const criarAluno = require('./sistema');
test('Deve criar um objeto aluno corretamente', () => {
    expect(criarAluno('Lucas', 'Engenharia')).toEqual({ nome: 'Lucas', curso: 'Engenharia', ativo: true });
    expect(criarAluno('Maria', 'Medicina')).toEqual({ nome: 'Maria', curso: 'Medicina', ativo: false });
    expect(criarAluno('Pedro', 'Direito')).toEqual({ nome: 'Pedro', curso: 'Direito', ativo: true });
});

const aplicarDesconto = require('./sistema');
test('Deve aplicar desconto corretamente', () => {
    expect(aplicarDesconto(100, 10)).toBe(90);
    expect(aplicarDesconto(200, 25)).toBe(150);
    expect(aplicarDesconto(50, 0)).toBe(50);
});

const validarTamanhoSenha = require('./sistema');
test('Deve validar o tamanho da senha corretamente', () => {
    expect(validarTamanhoSenha('12345678')).toBe(true);
    expect(validarTamanhoSenha('12345')).toBe(false);
    expect(validarTamanhoSenha('1234567890')).toBe(true);
    expect(validarTamanhoSenha('15428645')).toBe(false);
});