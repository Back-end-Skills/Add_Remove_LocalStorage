<?php

    include_once "./connection.php";
    
    //var_dump($_SERVER);
    
    // Envio de cabeçalho json ao navegador
    //header("Content-Type:application/json");
    
    $contentType = isset($_SERVER["CONTENT_TYPE"]) ? $_SERVER["CONTENT_TYPE"] : "";

    if ($contentType === "application/json") {
        $conteudo = trim(file_get_contents("php://input"));
        //var_dump($conteudo);

        // Converter a string em Object
        $conteudo_dados = json_decode( $conteudo, true );
        //var_dump($conteudo_dados);

        // json é válido
        if (!is_array($conteudo_dados)) {
            http_response_code(400);
        
            // retorna um object json
            echo json_encode([
                "err" => "<p style='color:#f00'>Erro: Requisição Inválida!</p>" 
            ]);
        } else {
           foreach( $conteudo_dados as $key => $valor ) {
                //Query

                $user_query = "INSERT INTO users ( username, email ) VALUES (:username, :email) ";
                $user_cad = $conn->prepare($user_query);

                // Substituir link 
                $user_cad->bindParam(':username', $valor['username']);
                $user_cad->bindParam(':email', $valor['email']);

                $user_cad->execute();

            }

            http_response_code(200);
        
            // retorna um object json
            echo json_encode([
                "err" => "<p style='color:green'>Successo no Cadastro!</p>" 
            ]);
        }

    } else {
        http_response_code(400);
        
        // retorna um object json
        echo json_encode([
            "err" => "<p style='color:#f00'>Erro: Requisição Inválida!</p>" 
        ]);
        
    }