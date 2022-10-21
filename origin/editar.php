<?php

// Incluir a conexão com banco de dados
include_once "./conexao.php";

// Envia o cabeçalho http json ao navegador
//header("Content-Type: application/json");

// Informação do servidor e ambiente de execução
//var_dump($_SERVER);
$contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : "";

// Acessa o IF quando no corpo da solicitação contém uma string JSON
if ($contentType === "application/json") {

    // Ler os dados enviados via POST na requisição HTTP
    $conteudo = trim(file_get_contents("php://input"));
    // var_dump($conteudo);

    // Converter a string em objeto
    $conteudo_dados = json_decode($conteudo, true);
    //var_dump($conteudo_dados);

    // Acessa o IF quando o JSON é inválido
    if (!is_array($conteudo_dados)) {

        // Código 400, indica que a solicitação está incorreta
        http_response_code(400);
        echo json_encode(['msg' => "<p style='color: #f00'>Erro: Requisição inválida!</p>"]);
    } else {

        // Laço de repetição para ler os registro
        foreach ($conteudo_dados as $chave => $valor) {

            // QUERY para cadastrar no banco de dados com PDO
            $query_usuario = "INSERT INTO usuarios (nome_usuario, email_usuario) VALUES (:nome_usuario, :email_usuario)";

            // Preparar a QUERY com PDO
            $cad_usuario = $conn->prepare($query_usuario);

            // Substituir o link da QUERY pelo valor
            $cad_usuario->bindParam(':nome_usuario', $valor['nome_usuario']);
            $cad_usuario->bindParam(':email_usuario', $valor['email_usuario']);

            // Executar a QUERY para cadastrar no banco de dados
            $cad_usuario->execute();
        }

        // Código 200, indica que a solicitação está correta
        http_response_code(200);
        echo json_encode(['msg' => "<p style='color: green'>Sincronizado com sucesso!</p>"]);
    }
} else {
    // Código 400, indica que a solicitação está incorreta
    http_response_code(400);
    echo json_encode(['msg' => "<p style='color: #f00'>Erro: Requisição inválida!</p>"]);
}
