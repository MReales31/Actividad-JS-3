const boton = document.querySelector("#login"); 
const form = document.querySelector("#form");

form.addEventListener("focusout", validarCampo);

function validarCampo(ev){
  const input = ev.target;
  let mensaje = "";
  input.classList.remove("is-valid", "is-invalid");
  input.nextElementSibling.classList.add("d-none");
  switch (input.type) {
    case "text":
      if (!input.value.includes("@")) {
        mensaje = "El usuario debe contener @";
	  }
	  if (mensaje.length != 0) {
        input.classList.add("is-invalid");
        input.nextElementSibling.innerText = mensaje;
        input.nextElementSibling.classList.remove("d-none");
        return;
	  } else { 
        	input.classList.add("is-valid");
      	}
      break;
    case "password":
		if (input.value.length < 6) {
			mensaje ="Debe ingresar más de 6 caracteres"
			input.classList.add("is-invalid");
        	input.nextElementSibling.innerText = mensaje;
        	input.nextElementSibling.classList.remove("d-none");
        	return;
		} 
		else {
			input.classList.add("is-valid");
		}			  
    }

}

boton.addEventListener("mouseover", () =>{
	const camposrequeridos = Array.from( document.querySelectorAll("#form input[required]"));
	if (camposrequeridos.every((e) => e.classList.contains("is-valid"))) {
		boton.removeAttribute("disabled");
	  }
});