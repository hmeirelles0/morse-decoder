let campoMorse = document.getElementById("campoMorse");
let campoResultado = document.getElementById("campoResultado");
let frag;
let helper;

let alfabetoMorse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-","-.-","...","-","..-","...-",".--","-..-","-.--","--..",".----","..---","...--","....-",".....","-....","--...","---..","----.","-----"];

let alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "1", "2", "3", "4", "5","6", "7", "8", "9", "0"];

let palavra = "";
let frase = "";

function decodeMorse() {
    frase = "";
    let envio = campoMorse.value;
    if (envio == "") {
        alert("Favor, envie um código a ser decifrado.");
    } else {
        let vet = envio.split("   ");
        for (i = 0; i < vet.length ; i++) {
            palavra = "";
            helper = vet[i].split(" ");
            /*
                FORMANDO A PALAVRA
            */
            for (aloha = 0; aloha < helper.length; aloha++) {
                for (aux = 0; aux < alfabetoMorse.length; aux++) {
                    if (helper[aloha] == alfabetoMorse[aux]) {
                        palavra += alfabeto[aux]; 
                    }
                }
            }
            frase += palavra + " ";
        }
        campoResultado.value = frase;
    }
}