<?php
$con = mysqli_connect("localhost",'root',"","bdusuarios");
$response = array();
$_POST = json_decode(file_get_contents('php://input'),true);
print_r($_POST);
$user = $_POST['user'];
$pass = $_POST['pass'];
if($con){ 
   $sql = 'select *from data_user where name_user="'.$user.'" and pass_user="'.$pass.'"';
   $result = mysqli_query($con,$sql);
    if($result){
        header('Access-Control-Allow-Origin: *');
        header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
        header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
        header("Content-Type: JSON");
        $i=0;
        while($row = mysqli_fetch_assoc($result)){
            $response['name_user'] = $row['name_user'];
            $response['message'] = 'Usuario logueado';
            $i++;
        }
        echo json_encode($response,JSON_PRETTY_PRINT);
    
    }
}else{
    echo "DB FOUND CONNECTED";
}
?>