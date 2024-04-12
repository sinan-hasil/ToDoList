let input = document.getElementById("list-input");
let row = document.getElementById("row");

function toDoApp() {
    input.addEventListener("keypress", function(event) {
        if (event.key == "Enter" && input.value.trim() !== "") {
            let newDiv = document.createElement("div");            
            newDiv.className = "new-div";
            newDiv.innerHTML = `
                <p>${input.value}</p>
            `;
            row.appendChild(newDiv);
            input.value = "";

            newDiv.querySelector("p").addEventListener("click", function() {
                newDiv.querySelector("p").style.textDecoration = "line-through";
            });
        }
    });
}

toDoApp();

document.getElementById("submit").addEventListener("click", function submit(e){
    let newDiv = document.createElement("div");
    newDiv.className = "new-div";
    newDiv.innerHTML = `
        <p>${input.value}</p><button type="button" class="reset-btn btn btn-danger">temizle</button>
    `;
    row.appendChild(newDiv);
    input.value = "";

    newDiv.querySelector("p").addEventListener("click", function() {
        newDiv.querySelector("p").style.textDecoration = "line-through";
    });

    newDiv.querySelector(".reset-btn").addEventListener("click", function (){
        newDiv.style.display = "none";
    });
});


document.getElementById("formId").addEventListener("submit", function(event) {
    event.preventDefault();
});

document.getElementById("reset").addEventListener("click", function (){
   row.innerHTML = "";
})