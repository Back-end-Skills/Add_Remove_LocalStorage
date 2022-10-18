<?php

    include_once "./connection.php";
    
    //var_dump($_SERVER);
    
    // Envio de cabeçalho json ao navegador
    header("Content-Type:application/json");
    
    $contentType = isset($_SERVER["CONTENT_TYPE"]) ? $_SERVER["CONTENT_TYPE"] : "";

    if ($contentType === "application/jsons") {

    } else {
        http_response_code(400);
        
        // retorna um object json
        /*echo json_encode([
            "err" => "<p style='color:#f00'>Erro: Requisição Inválida!</p>" 
        ]);*/
        echo json_encode(['err' => "<p style='color: #f00'>Erro: Requisição inválida!</p>"]);
    }