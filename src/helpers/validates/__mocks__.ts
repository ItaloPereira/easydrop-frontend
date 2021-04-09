export const isValidEmail: Array<[string, boolean]> = [
  ['wrioejworwoeijr', false],
  ['24329efjsdofjsteste.br', false],
  ['teste@teste.com', true],
  ['teste@teste2.com.br', true],
];

export const isEmpty: Array<[any, boolean]> = [
  ['', true],
  ['null', false],
  [null, true],
  [undefined, true],
  [[], true],
  [{}, true],
  [0, false],
  [[''], false],
  [{ a: '' }, false],
];
