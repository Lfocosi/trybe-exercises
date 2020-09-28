const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  function trocandoValores(objeto, chave, valor) {
      objeto[chave] = valor;
  }

  function listachave(objeto) {
      console.log(Object.keys(objeto));
  }

  function tamanhoObjeto(objeto) {
      console.log(Object.keys(objeto).length);
  }

  function listaValor(objeto) {
      console.log(Object.values(objeto));
  }