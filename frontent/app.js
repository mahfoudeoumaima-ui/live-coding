const btnajouter = document.getElementById("btn-ajouter")
const divform = document.getElementById("div_form")
const formcat = document.getElementById("form-categorie")
const tbody = document.getElementById("tbody")
const nom = document.getElementById("nom")
const description = document.getElementById("description")
btnajouter.addEventListener('click',function(){
    divform.classList.remove("hidden")
})
function chargerCategories(){
    fetch("/backend/api.php")
    .then(respence=>respence.json())
    .then(categories=>{
        tbody.innerHTML="";
        categories.forEach(cat => {
            tbody.innerHTML += `
            <tr>
            <td>${cat.id}</td>
            <td>${cat.nom}</td>
            <td>${cat.description}</td>
            </tr>
            
            `
            
        });
    })
 
}
formcat.addEventListener("submit", function(event) {
    event.preventDefault();

    const categories = {
        nom: nom.value,
        description: description.value
    };

    fetch("/backend/api.php", {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(categories)
    })
    .then(respence => respence.json())
    .then(data => {
        chargerCategories();
        divform.classList.add("hidden");
        formcat.reset();
    })
    
})

chargerCategories()

