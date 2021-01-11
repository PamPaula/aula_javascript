/*
comenta
varias linhas
*/

function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
    //console.log(document.getElementById("agradecimento"));
    //alert ("obrigado por clicar");
}

function redirecionar(){
    window.open("https://github.com/PamPaula");
    window.location.href = "https://github.com/PamPaula"
}

function trocar (elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado";
    elemento.innerHTML;
    //alert ("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passa aqui";
    elemento.innerHTML;
}

function load(){
    alert("pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

/*function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}
var idade = prompt("Qual a sua idade?");
console.log(validaIdade(idade));
*/

/*function soma(n1, n2){
    return n1 + n2;
}
//alert (soma(5, 10));
*/

/*
var d = new Date();
alert(d.getMonth()+1);
alert(d.getDay()+1);
alert(d.getHours()+1);
*/

/*
var count;
for(count=0; count <= 5; count++){
    alert(count);
}
*/

/*
var count = 0;
while (count <= 5){
    console.log(count);
    //alert(count);
    count = count + 1;
    //count++;
}
*/

/*
var idade = prompt("Qual sua idade?");
//var idade = 18;
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}
*/

//var comidas = [{nome: "nhoque", ingrediente: "batata"}, {nome: "batata-frita", ingrediente: "batata"},];
//console.log(comidas);
//console.log(comidas[1].nome);
//alert(comida.ingrediente);

//var comida = {nome: "nhoque", ingrediente: "batata"};
//console.log(comida);
//console.log(comida.nome);
//alert(comida.ingrediente);

//var lista = ["limão", "ameixa", "tomate"];
//lista.push("uva");
//lista.pop();
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.length);
//console.log(lista.reverse());
//console.log(lista.join(" - "));
//alert(lista[2]);


/*var nome = "Pam de Paula";
var n1 = 5;
var n2 = 3;
var frase = "O mundo é deveras cômico, mas a piada está na raça humana."
//alert(nome + " tem " + idade);
//alert ( n1 + n2)
console.log(nome);
console.log(n1 + n2);
console.log(frase.replace("raça humama", "em mim"));
//console.log(frase.toUpperCase());
console.log(frase.toLowerCase());
alert(frase.replace("raça humana", "em mim"));
*/