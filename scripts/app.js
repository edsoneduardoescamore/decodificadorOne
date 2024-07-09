let area_input = document.getElementById('area_input');
let output_area = document.getElementById('output_area');
let output = '';


function criptografarTexto() {
    let texto = area_input.value;
    let textoCripto = texto.replace(/a|e|i|o|u/g, (sub) => {
        switch (sub) {
            case "a":
                return "ai";
            case "e":
                return "enter";
            case "i":
                return "imes";
            case "o":
                return "ober";
            case "u":
                return "ufat";
            default:
                return sub;
        }
    })


    if(isEmptyString(texto)){
        alert('Por favor preencha o campo com um valor válido')
      }else{
          output = textoCripto;
          limpar();
          mostrarResultado();
       
      }
  
 
}

function descriptografarTexto() {

    let texto = area_input.value;
    let textoUncripto = texto.replace(/ai|enter|imes|ober|ufat/g, (sub) => {
        switch (sub) {
            case "ai":
                return "a";
            case "enter":
                return "e";
            case "imes":
                return "i";
            case "ober":
                return "o";
            case "ufat":
                return "u";
            default:
                return sub;
        }
    })

    if(isEmptyString(texto)){
      alert('Por favor preencha o campo com um valor válido')
    }else{
        output = textoUncripto;
        limpar();
        mostrarResultado();
     
    }



}

function mostrarResultado() {

    let area_inicial = document.getElementById('secao-output-inicial');
    let botao_copia = document.getElementById('botao_copia');
    area_inicial.style.display = "none";
    output_area.style.display = "block";
    botao_copia.style.display = "block";
    output_area.textContent = output;

}

function copiarTexto() {

    let copia = output_area.textContent;
    navigator.clipboard.writeText(copia);
    alert('O texto foi copiado com sucesso para área de transferência.');
    area_input.focus();
    let area_inicial = document.getElementById('secao-output-inicial');
    let botao_copia = document.getElementById('botao_copia');
    area_inicial.style.display = "block";
    output_area.style.display = "none";
    botao_copia.style.display = "none";


}

function limpar() {
    area_input = document.getElementById('area_input');
    area_input.value = '';
}

function isEmptyString(string) {
    return (!string || string.trim().length === 0);
}