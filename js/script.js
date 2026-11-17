function genererContenu() {
  // Obtenir l'élément avec l'id démo et lui ajouter des éléments h2 et p
  let qty = document.getElementById("qty").value
  let titre = document.getElementById("titre").value
  let contenu = document.getElementById("contenu").value
  let parent = document.getElementById("demo")
  parent.textContent = ""
  for(let i = 0; i < Number(qty); i++){
    let h2 = document.createElement("h2")
    h2.textContent = titre + " " + i
    h2.setAttribute("monId", "Id" + i)
    h2.addEventListener("mousedown", function(event){
      console.log(event)
      console.log(event.target)
      console.log(event.target.getAttribute("monId"))
      if(event.target.style.backgroundColor === "gray"){
        event.target.style.backgroundColor = "white"
      }
      else{
        event.target.style.backgroundColor = "gray"
      }
     })
    parent.appendChild(h2)
    let aside = document.createElement("aside")
    aside.textContent = "Plus de détails à propos de: " + i
    parent.appendChild(aside)
    h2.addEventListener("mouseenter", function(event){
      aside.classList.add("show")
     })
     h2.addEventListener("mouseleave", function(event){
      aside.classList.remove("show")
     })
    let p = document.createElement("p")
    p.textContent = contenu + " " + i
    parent.appendChild(p)
  }
}
  
function changerStyle() {
  // Obtenir les éléments p qui sont sous le div demo et changer la couleur spécifiée dans l'input
  let couleur = document.getElementById("couleur").value
  let liste = document.querySelectorAll("#demo p")
  for(let p of liste){
    p.style.color = couleur
  }
}
  
function changerClassBoutons() {
  // Obtenir les éléments boutons et changer leur className pour celui qui est spécifié dans l'input
  let btnClass = document.getElementById("btnClass").value
  let liste = document.querySelectorAll("button")
  for(let btn of liste){
    btn.className = btnClass
  }
}