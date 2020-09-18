let estados = ["Acre (AC)", "Alagoas (AL)", "Amapá (AP)", "Amazonas (AM)", "Bahia (BA)", "Ceará (CE)", "Distrito Federal (DF)", "Espírito Santo (ES)", "Goiás (GO)", "Maranhão (MA)", "Mato Grosso (MT)", "Mato Grosso do Sul (MS)", "Minas Gerais (MG)", "Pará (PA)", "Paraíba (PB)", "Paraná (PR)", "Pernambuco (PE)", "Piauí (PI)", "Rio de Janeiro (RJ)", "Rio Grande do Norte (RN)", "Rio Grande do Sul (RS)", "Rondônia (RO)", "Roraima (RR)", "Santa Catarina (SC)", "São Paulo (SP)", "Sergipe (SE)", "Tocantins (TO)"];
let locestados = document.getElementById('Estado');
let locdia = document.getElementById('Dia');
let locmes = document.getElementById('Mes');
let locano = document.getElementById('Ano');
function criando() {
  for (let numero = 0; numero < estados.length; numero += 1) {
    let option = document.createElement("option");
    option.value = estados[numero];
    option.innerText = estados[numero];
    locestados.appendChild(option);
  }
}

function criandoD() {
  for (let dia = 01; dia <= 31; dia += 1) {
    let optd = document.createElement("option");
    optd.value = dia;
    optd.innerText = dia;
    locdia.appendChild(optd);
  }
}

function criandoM() {
  for (let mes = 01; mes <= 12; mes += 1) {
    let optm = document.createElement("option");
    optm.value = mes;
    optm.innerText = mes;
    locmes.appendChild(optm);
  }
}

function criandoA() {
  for (let ano = 2020; ano >= 1600; ano -= 1) {
    let opta = document.createElement("option");
    opta.value = ano;
    opta.innerText = ano;
    locano.appendChild(opta);
  }
}

window.onload = function () {
  criando();
  criandoA();
  criandoD();
  criandoM();
};
