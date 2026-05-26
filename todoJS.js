let h1 = document.querySelector(".head-1");

async function getStudent(){

    try{

        const response = await fetch("http://localhost:8080/students");

        if(response.ok){

           const data = await response.json();

            console.log(data);

            h1.textContent = "Got the List of Records";
            h1.style.color = "green";

        }else{

            throw new Error("Error happens")
        
        }

    }catch(error){

        h1.textContent = "Server Connection Failed";
        h1.style.color = "red";

        console.log(error);
    }
}

