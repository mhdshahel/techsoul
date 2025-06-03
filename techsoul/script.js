function submitForm(event) {
  event.preventDefault();
  alert("Thank you! Your message has been sent.");
}

    function submitForm(event) {
      event.preventDefault();
      alert("Thank you for contacting us!");
    }

    window.addEventListener("load", () => {
      const loadingScreen = document.getElementById("loading-screen");
      loadingScreen.classList.add("fade-out");
      setTimeout(() => {
        loadingScreen.style.display = "none";
      }, );
    });
  
   
  function submitForm(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    console.log('Submitted:', { name, email, message });
    alert("Thanks for contacting us!");
    form.reset();
  }


  function submitForm(event) {
      event.preventDefault();
      alert("Form submitted successfully!");
    }
