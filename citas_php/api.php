<?php
// conexion con base de datos 
$con = mysqli_connect("localhost",'root',"","bdusuarios");

// declarar array para respuestas 
$response = array();

// validamos si hay conexion 
if($con){
    // insertamos cabeceras para permisos 
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
    header("Content-Type: JSON");
    //echo "Informacion".file_get_contents('php://input');

   $methodApi = $_SERVER['REQUEST_METHOD'];

   switch($methodApi){
       // metodo post 
       case 'POST':
        $_POST = json_decode(file_get_contents('php://input'),true);
        //echo "guardar informacion data: =>".json_encode($_POST);
        $sql = 'INSERT INTO data_user (name_user,pass_user,date_register) VALUES ("'.$_POST['name_user'].'","'.$_POST['pass_user'].'","'.$_POST['date_register'].'")';
        $result = mysqli_query($con,$sql);
            if($result)
                echo 'usuario registrado correctamente';
            else
                echo 'no se pudo registrar';
       break;
       // metodo get 
       case 'GET':
        // para obtener un registro especifico
        if(isset($_GET['id'])){
            $sql = 'select *from user where id="'.$_GET['id'].'"';
            $result = mysqli_query($con,$sql);
            $i=0;
            while($row = mysqli_fetch_assoc($result)){
                $response['user'] = $row['user'];
                $response['email'] = $row['email'];
                $i++;
            }
            echo json_encode($response,JSON_PRETTY_PRINT);
         }  else{
             // es para obtener todos los registros 
            $sql = 'select * from user';
            $result = mysqli_query($con,$sql);
            $i=0;
            while($row = mysqli_fetch_assoc($result)){
                $response[$i]['user'] = $row['user'];
                $response[$i]['email'] = $row['email'];
                $i++;
            }
            echo json_encode($response,JSON_PRETTY_PRINT);
         }
       break;
       case 'PUT':
        $_PUT = json_decode(file_get_contents('php://input'),true);
        $sql = 'UPDATE data_user SET name_user="'.$_PUT['name_user'].'",pass_user="'.$_PUT['pass_user'].'"  WHERE id='.$_GET['id'].'';
        $result = mysqli_query($con,$sql);
        if($result)
                echo 'usuario actualizado correctamente';
            else
                echo 'no se pudo actualizar';
       break;
       case 'DELETE':
            $sql = 'DELETE  from data_user where id='.$_GET['id'].'';
            $result = mysqli_query($con,$sql);
            if($result)
                echo "registro eliminado satisfactoriamente";
            else
                echo "no se pudo eliminar el registro";
       break;
   }
   
}else{
    echo "DB FOUND CONNECTED";
}
?>