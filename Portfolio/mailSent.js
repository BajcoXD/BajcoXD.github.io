const form = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: formData
    });

    const result = await response.json(); // now safe, backend returns valid JSON

    if (result.success) {
      formMessage.style.color = "green";
      formMessage.textContent = result.message || "Message sent!";
      form.reset();
      setTimeout(() => {
        formMessage.textContent = "";
      }, 5000);
    } else {
      formMessage.style.color = "red";
      formMessage.textContent = result.message || "Failed to send email.";
    }

  } catch (error) {
    console.error("Error submitting form:", error);
    formMessage.style.color = "red";
    formMessage.textContent = "Something went wrong. Please try again.";
  }
});
