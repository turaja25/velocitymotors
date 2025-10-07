document.addEventListener("DOMContentLoaded", function () {
  // Preloader
  window.addEventListener("load", () => {
    document.getElementById("preloader").style.display = "none";
  });

  // Dark Mode Toggle
  const darkModeToggle = document.getElementById("darkModeToggle");
  darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
  });

  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
  }

  // Language Toggle
  const langToggle = document.getElementById("langToggle");
  let isSpanish = true;
  langToggle.addEventListener("click", () => {
    isSpanish = !isSpanish;
    langToggle.textContent = isSpanish ? "EN" : "ES";
  });

  // Cart functionality
  let cartCount = 0;
  const cartCountElement = document.querySelector(".cart-count");
  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
      cartCount++;
      cartCountElement.textContent = cartCount;
      alert("Producto agregado al carrito.");
    });
  });

  // AOS Animation
  AOS.init({
    duration: 1000,
    once: true
  });

  // Finance Calculator
  const calculateBtn = document.getElementById("calculateBtn");
  const loanAmountInput = document.getElementById("loanAmount");
  const monthsInput = document.getElementById("months");
  const resultDiv = document.getElementById("result");

  calculateBtn.addEventListener("click", () => {
    const loan = parseFloat(loanAmountInput.value);
    const months = parseInt(monthsInput.value);

    if (isNaN(loan) || isNaN(months)) {
      alert("Por favor, ingresa valores válidos.");
      return;
    }

    const monthlyPayment = (loan / months).toFixed(2);
    resultDiv.textContent = `Cuota mensual: $${monthlyPayment}`;
  });

  // Testimonials Carousel
  let testimonialIndex = 0;
  const testimonials = document.querySelectorAll(".testimonial");
  const nextBtn = document.getElementById("nextTestimonial");
  const prevBtn = document.getElementById("prevTestimonial");

  function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
      testimonial.classList.toggle("active", i === index);
    });
  }

  nextBtn.addEventListener("click", () => {
    testimonialIndex = (testimonialIndex + 1) % testimonials.length;
    showTestimonial(testimonialIndex);
  });

  prevBtn.addEventListener("click", () => {
    testimonialIndex = (testimonialIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(testimonialIndex);
  });

  showTestimonial(testimonialIndex);

  // Test Drive Form
  const testDriveForm = document.getElementById("testDriveForm");
  testDriveForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("¡Solicitud de prueba de manejo enviada! Te contactaremos pronto.");
    testDriveForm.reset();
  });

  // Newsletter Form
  const newsletterForm = document.getElementById("newsletterForm");
  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = newsletterForm.querySelector("input").value;
    alert(`¡Gracias por suscribirte con ${email}!`);
    newsletterForm.reset();
  });

  // Chatbot functionality
  const openChat = document.getElementById("openChat");
  const closeChat = document.getElementById("closeChat");
  const chatContainer = document.querySelector(".chatbot-container");
  const userInput = document.getElementById("userInput");
  const sendBtn = document.getElementById("sendBtn");
  const chatMessages = document.getElementById("chatMessages");

  openChat.addEventListener("click", () => {
    chatContainer.style.display = "flex";
  });

  closeChat.addEventListener("click", () => {
    chatContainer.style.display = "none";
  });

  sendBtn.addEventListener("click", sendMessage);
  userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
  });

  function sendMessage() {
    const message = userInput.value.trim();
    if (message) {
      appendMessage(message, "user");
      userInput.value = "";

      // Simulate bot response
      setTimeout(() => {
        appendMessage("Gracias por tu mensaje. ¿Puedo ayudarte con algo más?", "bot");
      }, 1000);
    }
  }

  function appendMessage(text, sender) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", sender);
    messageDiv.textContent = text;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  // Gallery 360 view (simulated)
  const view360Buttons = document.querySelectorAll(".view-360");
  view360Buttons.forEach(button => {
    button.addEventListener("click", () => {
      alert("Función 360° disponible en versión premium.");
    });
  });
});