//Titulo e subtitulo
const header = document.createElement("header");
const h1 = document.createElement("h1");
const subtitulo = document.createElement("p");

h1.textContent = "Irineu Store";
subtitulo.textContent = "Bem-vindo à Irineu Store";
header.append(h1, subtitulo);

document.body.appendChild(header);

// Eletronicos
const section = document.createElement("section");
const h2 = document.createElement("h2");
const sub2 = document.createElement("p");
const sub3 = document.createElement("p");
const sub4 = document.createElement("p");

h2.textContent = "Eletronicos";
sub2.textContent = "Marca: DeLL";
sub3.textContent = "Preço: $3200";
sub4.textContent = "Disponível: True";
section.append(h2, sub2, sub3, sub4);

// Celular
const section2 = document.createElement("section");
const h2Section2 = document.createElement("h2");
const sub5 = document.createElement("p");
const sub6 = document.createElement("p");
const sub7 = document.createElement("p");

h2Section2.textContent = "Celular";
sub5.textContent = "Marca: Apple";
sub6.textContent = "Preço: $5200";
sub7.textContent = "Disponível: False";
section2.append(h2Section2, sub5, sub6, sub7);

// Acessórios
const section3 = document.createElement("section");
const h2Section3 = document.createElement("h2");
const sub8 = document.createElement("p");
const sub9 = document.createElement("p");
const sub10 = document.createElement("p");

h2Section3.textContent = "Acessórios";
sub8.textContent = "Marca: Microsoft";
sub9.textContent = "Preço: $200";
sub10.textContent = "Disponível: True";
section3.append(h2Section3, sub8, sub9, sub10);

//Adicionar todas as sections no body
document.body.append(section, section2, section3);

//Separar os itens da loja
const separar = document.querySelectorAll("section");
separar.forEach(section => {
    section.style.display = "inline-block";
    section.style.width = "32%";
});