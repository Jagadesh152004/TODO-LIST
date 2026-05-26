
function getStudent(){
fetch("http://localhost:8080/students")
.then((response) => response.json())
.then((data) => console.log(data))
.catch((error) => console.log(error));
}