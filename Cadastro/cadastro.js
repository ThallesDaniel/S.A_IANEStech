/*--------------------------------------------MASCARAR TELEFONE-------------------------------------------------------*/

var tel = document.querySelector("input[type=tel]");
tel.addEventListener('keyup', mask_tel);

function mask_tel(e) {

    var carac = e.target.value.replace(/\D/g,"");

    carac = carac.replace(/^(\d\d)(\d)/g,"($1) $2");
    carac = carac.replace(/(\d{5})(\d)/g,"$1-$2");


    e.target.value = carac;
}

/*--------------------------------------------MASCARAR CPF------------------------------------------------------------*/

var cpf = document.getElementById('cpf');
cpf.addEventListener('keyup', mask_cpf);

function mask_cpf(e) {

    var carac = e.target.value.replace(/\D/g,"");
    carac = carac.replace(/(\d{3})(\d)/,"$1.$2");
    carac = carac.replace(/(\d{3})(\d)/,"$1.$2");
    carac = carac.replace(/(\d{3})(\d{1,2})/,"$1-$2");

    e.target.value = carac;
}

/*--------------------------------------------VERIFICAR CAMPOS DOS INPUTS----------------------------------------------*/
function valida_input() {
        var nome = document.getElementById('nome').value;
        var tele = document.getElementById('tele').value;
        var cpf = document.getElementById('cpf').value;
        var endereco = document.getElementById('endereco').value;
        var email = document.getElementById('mail').value;
        var data_nasc = document.getElementById('nasc').value;
        var senha = document.getElementById('senha').value;
        var senha_confirm = document.getElementById('senha_confirm').value;

        if (nome == "") {
                document.getElementById('nome1').innerHTML = "Este campo precisa ser preenchido!";
                document.getElementById('nome').style.border = "#A00 1px solid";
                document.getElementById('alert1').style.display = "inline";
        } else {
                document.getElementById('alert1').style.display = "none";
                document.getElementById('nome1').innerHTML = "";  
                document.getElementById('nome').style.border = "#000 1px solid";
        }

        if (tele == "") {
                document.getElementById('alert1').style.display = "inline";
                document.getElementById('tele1').innerHTML = "Este campo precisa ser preenchido!";
                document.getElementById('tele').style.border = "#A00 1px solid";
        } else {
                document.getElementById('alert1').style.display = "none";
                document.getElementById('tele1').innerHTML = "";  
                document.getElementById('tele').style.border = "#000 1px solid";
        }

        if (email == "") {
                document.getElementById('alert1').style.display = "inline";
                document.getElementById('mail1').innerHTML = "Este campo precisa ser preenchido!";
                document.getElementById('mail').style.border = "#A00 1px solid";
        } else {
                document.getElementById('alert1').style.display = "none";
                document.getElementById('mail1').innerHTML = "";  
                document.getElementById('mail').style.border = "#000 1px solid";
        }

        if (cpf == "") {
                document.getElementById('alert1').style.display = "inline";
                document.getElementById('cpf1').innerHTML = "Este campo precisa ser preenchido!";
                document.getElementById('cpf').style.border = "#A00 1px solid";
        } else {
                document.getElementById('alert1').style.display = "none";
                document.getElementById('cpf1').innerHTML = "";  
                document.getElementById('cpf').style.border = "#000 1px solid";
        }

        if (endereco == "") {
                document.getElementById('alert1').style.display = "inline";
                document.getElementById('endereco1').innerHTML = "Este campo precisa ser preenchido!";
                document.getElementById('endereco').style.border = "#A00 1px solid";
        } else {
                document.getElementById('alert1').style.display = "none";
                document.getElementById('endereco1').innerHTML = "";  
                document.getElementById('endereco').style.border = "#000 1px solid";
        }

        if (data_nasc == "") {
                document.getElementById('alert1').style.display = "inline";
                document.getElementById('nasc1').innerHTML = "Este campo precisa ser preenchido!";
                document.getElementById('nasc').style.border = "#A00 1px solid";
        } else {
                document.getElementById('alert1').style.display = "none";
                document.getElementById('nasc1').innerHTML = "";  
                document.getElementById('nasc').style.border = "#000 1px solid";
        }

        if (senha == "") {
                document.getElementById('alert1').style.display = "inline";
                document.getElementById('senha1').innerHTML = "Este campo precisa ser preenchido!";
                document.getElementById('senha').style.border = "#A00 1px solid";
        } else {
                document.getElementById('alert1').style.display = "none";
                document.getElementById('senha1').innerHTML = "";  
                document.getElementById('senha').style.border = "#000 1px solid";
        }

        if (senha_confirm != senha) {
                document.getElementById('alert1').style.display = "inline";
                document.getElementById('confirm1').innerHTML = "Senhas não conferem";
                document.getElementById('senha_confirm').style.border = "#A00 1px solid";
        } else {
                document.getElementById('alert1').style.display = "none";
                document.getElementById('confirm1').innerHTML = "";  
                document.getElementById('senha_confirm').style.border = "#000 1px solid";
        }

        return false;
}

/*--------------------------------------------ARMAZENAR DADOS COM JSON-------------------------------------------------*/

function armazenar() {

        var nome = document.getElementById('nome').value;
        var tele = document.getElementById('tele').value;
        var cpf = document.getElementById('cpf').value;
        var mail = document.getElementById('mail').value;
        var nasc = document.getElementById('nasc').value;
        var senha = document.getElementById('senha').value;
        var senha_confirm = document.getElementById('senha_confirm').value;

        var uf = document.getElementById('uf').value;
        var cidade = document.getElementById('cidade').value;
        var bairro = document.getElementById('bairro').value;
        var rua = document.getElementById('rua').value;
        var numero = document.getElementById('numero').value;
        var cep = document.getElementById('cep').value;
        var complemento = document.getElementById('complemento').value;
}

/*--------------------------------------------MOSTRAR SENHA------------------------------------------------------------*/

function mostra_senha() {


}

/*--------------------------------------------SALVAR SENHA-------------------------------------------------------------*/



/*--------------------------------------------VALIDADOR DE CPF---------------------------------------------------------*/

function valida_cpf() {

    
     
}

/*--------------------------------------------VALIDADOR DE CARTÃO DE CRÉDITO-------------------------------------------*/

function valida_cc() {

        calculo_luhn();

        if (calculo_luhn()) {

                document.getElementById('cadastro').style.display = "none";
        }

        return false;

}

var num_cc = document.getElementById('numcc');
num_cc.addEventListener('keyup', forma);

function forma(e) {

        var carac = e.target.value.replace(/\D/g,"");
        e.target.value = carac;
}

function calculo_luhn() {

    var luhn = document.getElementById('numcc').value;
    


    if(luhn.length < 13) {
           return false;
    } else {

            var digit = 0;

            var mult = false;
    
            for(let i = luhn.length -1  ; i >= 0 ; i--) {
    
                    var digit1 =luhn.charAt(i);

                    

                    if (mult){ 
                            if(digit1 >= 5) {
                                    digit1 = (digit1 *2) - 9;
                            } else {digit1 *= 2;}

                            }
           
    

                    var intNum = parseInt(digit1);
    
    
                    digit += intNum;
    
                    mult = !mult;
      
            }
        }

    return digit % 10 == 0? true : false;     

    
}

/*--------------------------------------------DADOS DA PROVA-----------------------------------------------------------*/



/*--------------------------------------------DADOS DO CERTIFICADO-----------------------------------------------------*/



/*--------------------------------------------IMPRIMIR-----------------------------------------------------------------*/



/*--------------------------------------------DOWNLOAD-----------------------------------------------------------------*/