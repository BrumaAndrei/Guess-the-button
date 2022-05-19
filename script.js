function verifyValue() {
   let nrBottons = document.getElementById("nrBtn").value;
   if (isNaN(nrBottons)) {
      alertMessage.innerHTML = "This is not a number!";
   } else if (nrBottons < 3) {
      alertMessage.innerHTML = "Choose at least 3 buttons!";
      return;
   } else if (nrBottons > 99) {
      alertMessage.innerHTML = "Too many buttons; maximum 99";
      return;
   } else {
      document.getElementById("btn").setAttribute("disabled", "");
      generateBut();
   }
}

function generateBut() {
   let gameActive = true;
   let nrBottons = document.getElementById("nrBtn").value;
   let rand = Math.floor(Math.random() * nrBottons) + 1;
   for (let i = 1; i <= nrBottons; i++) {
      let createButton = document.createElement("button");
      createButton.innerHTML = "Button " + i;
      createButton.setAttribute("id", i);
      createButton.setAttribute("class", "Nbutt");
      addBtn.appendChild(createButton);
      createButton.onclick = function add() {
         if (rand == i && gameActive == true) {
            alertMessage.innerHTML = "Congratulations! You have chosen the winning button!";
         } else if (gameActive == true) {
            alertMessage.innerHTML = "You lost! The winning button was: " + rand;
         }
         gameActive = false;
      }
   }
}