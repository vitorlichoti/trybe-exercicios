const uppercase = require('./exercicio6');

it ('Testa se a função callback transforma letras de uma palavra em maiúsculas', (done) => {
  uppercase('teste', (str) => {
    try {
      expect(str).toBe('TESTE');
      done();
    } catch (error) {
      done(error);
    }
  });
});
