let form = document.getElementById("form");
form.addEventListener("submit", send);

function send(event) {
    event.preventDefault();
    
    let firstName = document.querySelector('[name="fname"]');
    let lastName = document.querySelector('[name="lname"]');
    console.log(`Imie: ${firstName.value}, Nazwisko: ${lastName.value}`);
}

