/*--------------------------------------------MASCARAR TELEFONE-------------------------------------------------------*/

var tel = document.querySelector("input[type=tel]");
tel.addEventListener('keyup', mask_tel);

function mask_tel(e) {

        let carac = e.target.value.replace(/\D/g, "");

        carac = carac.replace(/^(\d\d)(\d)/g, "($1) $2");
        carac = carac.replace(/(\d{5})(\d)/g, "$1-$2");


        e.target.value = carac;
}

/*--------------------------------------------MASCARAR CPF------------------------------------------------------------*/

var cpf = document.getElementById('cpf');
cpf.addEventListener('keyup', mask_cpf);
/*
var cpf1 = document.getElementById('cpf1');
cpf1.addEventListener('keyup', mask_cpf);*/



function mask_cpf(e) {

        let carac = e.target.value.replace(/\D/g, "");
        carac = carac.replace(/(\d{3})(\d)/, "$1.$2");
        carac = carac.replace(/(\d{3})(\d)/, "$1.$2");
        carac = carac.replace(/(\d{3})(\d{1,2})/, "$1-$2");

        e.target.value = carac;
}

/*--------------------------------------------VERIFICAR CAMPOS DOS INPUTS----------------------------------------------*/

function valida_input() {
        var nome = document.getElementById('nome').value == "";
        var tele = document.getElementById('tele').value == "";
        var cpf = document.getElementById('cpf').value == "";
        var rua = document.getElementById('rua').value == "";
        /*  var uf = document.getElementById('uf').value == "";*/
        var cidade = document.getElementById('cidade').value == "";
        var bairro = document.getElementById('bairro').value == "";
        var numero = document.getElementById('numero').value == "";
        var email = document.getElementById('mail').value == "";
        var data_nasc = document.getElementById('nasc').value == "";
        var senha = document.getElementById('senha').value == "";
        var vsenha = document.getElementById('senha').value;
        var senha_confirm = document.getElementById('senha_confirm').value;

        if (nome) {
                document.getElementById('nome').style.border = "#A00 1px solid";
        } else {
                document.getElementById('nome').style.border = "#000 1px solid";
        }

        if (tele) {
                document.getElementById('tele').style.border = "#A00 1px solid";
        } else {
                document.getElementById('tele').style.border = "#000 1px solid";
        }

        if (email) {
                document.getElementById('mail').style.border = "#A00 1px solid";
        } else {
                document.getElementById('mail').style.border = "#000 1px solid";
        }

        if (cpf) {
                document.getElementById('cpf').style.border = "#A00 1px solid";
        } else {
                document.getElementById('cpf').style.border = "#000 1px solid";
        }

        if (rua) {
                document.getElementById('rua').style.border = "#A00 1px solid";
        } else {
                document.getElementById('rua').style.border = "#000 1px solid";
        }

        /* if (uf) {                
                 document.getElementById('uf').style.border = "#A00 1px solid";
         } else {
                document.getElementById('uf').style.border = "#000 1px solid";
         }*/

        if (cidade) {
                document.getElementById('cidade').style.border = "#A00 1px solid";
        } else {
                document.getElementById('cidade').style.border = "#000 1px solid";
        }

        if (bairro) {
                document.getElementById('bairro').style.border = "#A00 1px solid";
        } else {
                document.getElementById('bairro').style.border = "#000 1px solid";
        }

        if (numero) {
                document.getElementById('numero').style.border = "#A00 1px solid";
        } else {
                document.getElementById('numero').style.border = "#000 1px solid";
        }

        if (data_nasc) {
                document.getElementById('nasc').style.border = "#A00 1px solid";
        } else {
                document.getElementById('nasc').style.border = "#000 1px solid";
        }

        if (senha) {
                document.getElementById('senha').style.border = "#A00 1px solid";
        } else {
                document.getElementById('senha').style.border = "#000 1px solid";
        }

        if (senha_confirm != vsenha) {
                document.getElementById('senha_confirm').style.border = "#A00 1px solid";
        } else {
                document.getElementById('senha_confirm').style.border = "#000 1px solid";
        }

        return false;
}

/*--------------------------------------------ARMAZENAR DADOS COM JSON-------------------------------------------------*/

function armazenar() {

        var key = Math.floor(Math.random() * 151);
        var nome = document.getElementById('nome').value;
        var tele = document.getElementById('tele').value;
        var cpf = document.getElementById('cpf').value;
        var mail = document.getElementById('mail').value;
        var nasc = document.getElementById('nasc').value;
        var senha = document.getElementById('senha').value;

        var uf = document.getElementById('uf');
        var cidade = document.getElementById('cidade').value;
        var bairro = document.getElementById('bairro').value;
        var rua = document.getElementById('rua').value;
        var numero = document.getElementById('numero').value;

        /* var comentario = document.getElementById('comentario').value;*/

        var user = {
                a_nome: nome,
                a_tel: tele,
                a_cpf: cpf,
                a_mail: mail,
                a_nasc: nasc,
                a_senha: senha,

                a_uf: uf,
                a_cidade: cidade,
                a_bairro: bairro,
                a_rua: rua,
                a_numero: numero,

                /*a_comentario: comentario*/
        };

        if (nome.length == 0 || tele.length == 0 || cpf.length == 0 || mail.length == 0 || nasc.length == 0
                || senha.length == 0 || cidade.length == 0 || bairro.length == 0 || rua.length == 0 || numero.length == 0) {
                valida_input();
        } else if (!calculo_cpf()) {
                document.getElementById('cpf').style.border = "#A00 3px solid";
        } else {
                document.getElementById('cpf').style.border = "#000 3px solid";
                localStorage.setItem(key, JSON.stringify(user));
                window.location = "../Pagamento/metpagamento.html";
        }






}

/*--------------------------------------------MOSTRAR SENHA------------------------------------------------------------*/

function mostrar_senha() {
        var input = document.getElementById('senhalogin');

        if (input.type == 'text') {
                input.type = 'password';
        } else {
                input.type = 'text';
        }
}

/*--------------------------------------------VALIDAR SENHA------------------------------------------------------------*/

function valida_senha() {

        var email = document.getElementById('maillogin').value;
        var senha = document.getElementById('senhalogin').value;

        for (let i = 0; i < localStorage.length; i++) {

                let id = localStorage.key(i);
                let dados = localStorage.getItem(id);
                var user_cad = JSON.parse(dados);

                if ((email == user_cad.a_mail) && (senha == user_cad.a_senha)) {

                        window.location = "../Menucurso/menudocurso.html";
                }

                break;
        }
}

/*--------------------------------------------VALIDADOR DE CPF---------------------------------------------------------*/


function calculo_cpf() {

        var cpf = document.getElementById('cpf').value;

        var cpf2 = cpf.substring(0, 3) + cpf.substring(4, 7) + cpf.substring(8, 11) + cpf.substring(12);

        var soma1 = cpf.substring(0, 3) + cpf.substring(4, 7) + cpf.substring(8, 11);
        var soma2 = cpf.substring(0, 3) + cpf.substring(4, 7) + cpf.substring(8, 11) + cpf.substring(12, 13);

        var digit1 = 10;
        var digit2 = 11;

        sum1 = 0;
        sum2 = 0;

        let i = 0;
        while (i < soma1.length) {

                var aqui = cpf2.charAt(i);
                var num = parseInt(aqui);

                sum1 += num * digit1;

                digit1--;
                i++;
        }

        let k = 0;
        while (k < soma2.length) {

                var aqui2 = cpf2.charAt(k);
                var num2 = parseInt(aqui2);;

                sum2 += num2 * digit2;

                digit2--;
                k++;
        }

        sum1 = (sum1 * 10) % 11;
        sum2 = (sum2 * 10) % 11;

        return (cpf2.charAt(9) == sum1) && (cpf2.charAt(10) == sum2) ? true : false;

}

/*--------------------------------------------VALIDADOR DE CARTÃO DE CRÉDITO-------------------------------------------*/

var num_cc = document.getElementById('numcartao');
num_cc.addEventListener('keyup', forma);

function forma(e) {

        let carac = e.target.value.replace(/\D/g, "");
        e.target.value = carac;
}

function valida_cc() {

        calculo_luhn();

        if (!calculo_luhn()) {

                document.getElementById('numcartao').style.border = "2px solid #A00";
        } else {

                window.location = "../Menucurso/menudocurso.html";
        }

        return false;
}



function calculo_luhn() {

        var luhn = document.getElementById('numcartao').value;

        if (luhn.length < 13) {
                return false;
        } else {

                var digit = 0;

                var mult = false;

                for (let i = luhn.length - 1; i >= 0; i--) {

                        var digit1 = luhn.charAt(i);

                        if (mult) {
                                if (digit1 >= 5) {
                                        digit1 = (digit1 * 2) - 9;
                                } else { digit1 *= 2; }

                        }

                        var intNum = parseInt(digit1);

                        digit += intNum;

                        mult = !mult;
                }
        }

        return digit % 10 == 0 ? true : false;


}

function finalizar() {
        confirm("Deseja efetuar o pagamento?");
}

/*--------------------------------------------VOLTAR-------------------------------------------------------------------*/


function vefmet1() {
        document.getElementById("metodopagamento").style.display = "none";
        document.getElementById("boleto").style.display = "table";
}

function vefmet2() {

        document.getElementById("metodopagamento").style.display = "none";
        document.getElementById("cartao").style.display = "table";
}

function voltar1() {
        document.getElementById("metodopagamento").style.display = "table";
        document.getElementById("boleto").style.display = "none";
}

function voltar2() {
        document.getElementById("metodopagamento").style.display = "table";
        document.getElementById("cartao").style.display = "none";
}

/*--------------------------------------------VERIFICAR ACERTOS DA PROVA-----------------------------------------------------*/

function prova() {
        
        var q1 = document.getElementById('q1').checked;
        var q2 = document.getElementById('q2').checked;
        var q3 = document.getElementById('q3').checked;
        var q4 = document.getElementById('q4').checked;
        var q5 = document.getElementById('q5').checked;
        var q6 = document.getElementById('q6').checked;
        var q7 = document.getElementById('q7').checked;
        var q8 = document.getElementById('q8').checked;
        var q9 = document.getElementById('q9').checked;
        var q10 = document.getElementById('q10').checked;
        var q11 = document.getElementById('q11').checked;
        var q12 = document.getElementById('q12').checked;
        var q13 = document.getElementById('q13').checked;
        var q14 = document.getElementById('q14').checked;

        var aprovado = 0;


       if (q1 == true) {
        aprovado++;
       }

       if (q2 == true) {
        aprovado++;
       }

       if (q3 == true) {
        aprovado++;
       }

       if (q4 == true) {
        aprovado++;
       }

       if (q5 == true) {
        aprovado++;
       }

       if (q6 == true) {
        aprovado++;
       }

       if (q7 == true) {
        aprovado++;
       }

       if (q8 == true) {
        aprovado++;
       }

       if (q9 == true) {
        aprovado++;
       }

       if (q10 == true) {
        aprovado++;
       }

       if (q11 == true) {
        aprovado++;
       }

       if (q12 == true) {
        aprovado++;
       }

       if (q13 == true) {
        aprovado++;
       }

       if (q14 == true) {
        aprovado++;
       }

       if (aprovado > 9){
        alert("Parabéns!!! Você atingiu os 70% de requisito mínimo.");
        window.location = "../Menucurso/menudocurso.html";
       } else {
        alert("Que pena!!! Você não atingiu o requisito mínimo. Faça novamente!")
        window.location = "../Prova/prova.html";
       }
}

function prova1() {
                 alert("Você estourou o limite de tentativas!!");
                 window.location = "../Menucurso/menudocurso.html";
}


/*--------------------------------------------DADOS DA PROVA-----------------------------------------------------------*/

function certificado() {

        var btnn_c = document.getElementById('btnn_certificado');
        /*btnn_c.disabled = false;*/

        window.location = "../Menucurso/menudocurso.html";
}

function bt_c() {

        window.location = "../Certificado/certificado.html";

}

/*--------------------------------------------DADOS DO CERTIFICADO-----------------------------------------------------*/

function check() {

        for (i = 0; i < localStorage.length; i++) {

                let id = localStorage.key(i);
                let dados = localStorage.getItem(id);
                var users = JSON.parse(dados);

                document.getElementById("nome_alt").innerHTML = users.a_nome;
                document.getElementById("cpf_alt").innerHTML = users.a_cpf;
        }

        document.getElementById("gerar").style.display = "none";

}


/*--------------------------------------------IMPRIMIR-----------------------------------------------------------------*/
function funcao_pdf() {
        var pegar_dados = document.getElementById('cert').innerHTML;
        janela = window.open('', '', 'width=600,height=400');
        janela.document.write('<htm> <head>');
        janela.document.write('<body>');
        janela.document.write(pegar_dados);
        janela.document.write('</body></html>');
        janela.document.close();
        janela.print();
}



