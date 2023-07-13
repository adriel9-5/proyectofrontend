function enviarMsj() {
    let nameInput = document.getElementById("name");
    let emailInput = document.getElementById("email");
    let subjectInput = document.getElementById("subject");
    let messageInput = document.getElementById("message");

    let nameValue = nameInput.value;
    let emailValue = emailInput.value;
    let subjectValue = subjectInput.value;
    let messageValue = messageInput.value;

    if (nameValue !== "" && emailValue !== "" && subjectValue !== "" && messageValue !== "") {
      console.log(alert("Formulario enviado"));
      
      nameInput.value = "";
      emailInput.value = "";
      subjectInput.value = "";
      messageInput.value = "";
    }
}