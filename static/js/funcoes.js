/*Validar Formulário de Contato*/
function validarContato() {
    if(document.contato.usuario_nome.value == "") {
        window.alert("Por favor, preencha o campo Nome");
        document.contato.usuario_nome.focus();
        return false;
    }
    else if(document.contato.usuario_email.value == "") {
        window.alert("Por favor, informe o seu email");
        document.contato.usuario_email.focus();
        return false;
    }
    else if(document.contato.usuario_assunto.value == "") {
        window.alert("Por favor, informe o assunto");
        document.contato.usuario_assunto.focus();
        return false;
    }
    else if(document.contato.usuario_msg.value == "") {
        window.alert("Por favor, digite uma mensagem");
        document.contato.usuario_msg.focus();
        return false;
    }

    confirmar = confirm("Você deseja realmente enviar?");

    if (confirmar == true) {
        alert("Sua mensagem foi enviada com sucesso!")
        document.getElementById('form-contato').reset();
    }
}

/*Validar Formulário de Pré-Matrícula*/
function validarMatricula(){
    if(document.matricula.usuario_nome.value == "") {
        window.alert("Por favor, preencha o campo Nome");
        document.matricula.usuario_nome.focus();
        return false;
    }
    if(document.matricula.usuario_sexo.value == ""){
        window.alert("Por favor, informe seu sexo");
        document.matricula.usuario_sexo.focus();
        return false;
    }
    if(document.matricula.dataNasc.value == "") {
        window.alert("Por favor, informe sua data de nascimento");
        document.matricula.dataNasc.focus();
        return false;
    }
    if(document.matricula.usuario_cep.value == "") {
        window.alert("Por favor, informe seu CEP");
        document.matricula.usuario_cep.focus();
        return false;
    }
    if(document.matricula.usuario_end.value == "") {
        window.alert("Por favor, informe seu endereço");
        document.matricula.usuario_end.focus();
        return false;
    }
    if(document.matricula.endereco_num.value == "") {
        window.alert("Por favor, informe o número do endereço");
        document.matricula.endereco_num.focus();
        return false;
    }
    if(document.matricula.endereco_bairro.value == "") {
        window.alert("Por favor, informe seu bairro");
        document.matricula.endereco_bairro.focus();
        return false;
    }
    if(document.matricula.usuario_municipio.value == "") {
        window.alert("Por favor, informe seu municipio");
        document.matricula.usuario_municipio.focus();
        return false;
    }
    if(document.matricula.usuario_uf.value == "") {
        window.alert("Por favor, informe a UF");
        document.matricula.usuario_uf.focus();
        return false;
    }
    if(document.matricula.usuario_mail.value == "") {
        window.alert("Por favor, informe seu e-mail");
        document.matricula.usuario_mail.focus();
        return false;
    }
    if(document.matricula.usuario_tel.value == "") {
        window.alert("Por favor, informe um telefone para contato");
        document.matricula.usuario_tel.focus();
        return false;
    }
    if(document.matricula.curso.value == ""){
        window.alert("Por favor, informe o curso desejado");
        document.matricula.curso.focus();
        return false;
    }
    if(document.matricula.turno.value == ""){
        window.alert("Por favor, informe o turno desejado");
        document.matricula.turno.focus();
        return false;
    }

    confirmar = confirm("Você deseja realmente enviar?");

    if (confirmar == true) {
        alert("Sua pré-matricula foi realizada com sucesso!")
        document.getElementById('form-matricula').reset();
    }
}

/*Validar Formulário de Trabalhe Conosco*/
function validarCurriculo(){
    if(document.curriculo.usuario_nome.value == "") {
        window.alert("Por favor, preencha o campo Nome");
        document.curriculo.usuario_nome.focus();
        return false;
    }
    if(document.curriculo.usuario_cpf.value == "") {
        window.alert("Por favor, informe seu CPF");
        document.curriculo.usuario_cpf.focus();
        return false;
    }
    if(document.curriculo.usuario_email.value == "") {
        window.alert("Por favor, informe seu e-mail");
        document.curriculo.usuario_email.focus();
        return false;
    }
    if(document.curriculo.area_atuacao.value == ""){
        window.alert("Por favor, informe a área de atuação desejada");
        document.curriculo.area_atuacao.focus();
        return false;
    }
    if(document.curriculo.usuario_tel.value == "") {
        window.alert("Por favor, informe um telefone para contato");
        document.curriculo.usuario_tel.focus();
        return false;
    }
    if(document.curriculo.curriculo.value == "") {
        window.alert("Por favor, anexe o seu currículo");
        document.curriculo.curriculo.focus();
        return false;
    }

    confirmar = confirm("Você deseja realmente enviar?");

    if (confirmar == true) {
        alert("Seu currículo foi enviado com sucesso!")
        document.getElementById('form-curriculo').reset();
    }
}