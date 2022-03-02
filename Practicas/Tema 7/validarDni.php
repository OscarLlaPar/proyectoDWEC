<?php
    require_once "../../core/libreriaValidacion.php";
    $valido=false;
    if(isset($_REQUEST['dni'])){
        if(is_null(validacionFormularios::validarDni($_REQUEST['dni']))){
            $valido=true;
        }
    }

    $respuesta=[
        "valido"=>$valido
    ];

    echo json_encode($respuesta);
