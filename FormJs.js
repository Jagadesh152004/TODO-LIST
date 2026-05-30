
const form = document.getElementById("studentForm");
const popup = document.getElementById("popup");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const formData = new FormData(form);

    try{

        const response = await fetch(
            "http://localhost:8080/students/form",
            {
                method: "POST",
                body: formData
            }
        );

        if(response.ok){

            popup.textContent = "Data Saved Successfully!";
            popup.style.backgroundColor = "#22c55e";
            popup.style.display = "block";

            setTimeout(() => {
                popup.style.display = "none";
            }, 3000);

            form.reset();

        }else{

            popup.textContent = "Failed to Save Data!";
            popup.style.backgroundColor = "red";
            popup.style.display = "block";

            setTimeout(() => {
                popup.style.display = "none";
            }, 3000);
        }

    }catch(error){

        popup.textContent = "Server Connection Error!";
        popup.style.backgroundColor = "red";
        popup.style.display = "block";

        setTimeout(() => {
            popup.style.display = "none";
        }, 3000);

       // console.log(error);
    }
});