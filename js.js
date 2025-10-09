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


// ... código anterior ...

// Cuenta regresiva mejorada
const countdownElement = document.getElementById("countdown");
const today = new Date();
const futureDate = new Date(today);
futureDate.setDate(today.getDate() + 87);

function updateCountdown() {
  const now = new Date().getTime();
  const distance = futureDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  if (days > 0) {
    countdownElement.textContent = `Faltan ${days} días`;
    countdownElement.style.color = "#e94560";
  } else {
    countdownElement.textContent = "¡Oferta finalizada!";
    countdownElement.style.color = "#ff6b6b";
  }
}

updateCountdown();
setInterval(updateCountdown, 86400000); // Actualiza cada día



// Botón flotante "Volver arriba"
const scrollTopBtn = document.createElement("button");
scrollTopBtn.classList.add("scroll-top");
scrollTopBtn.innerHTML = "↑";
scrollTopBtn.style.display = "none";
document.body.appendChild(scrollTopBtn);

window.onscroll = () => {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Contador de clientes
const counter1 = document.getElementById("counter1");
const counter2 = document.getElementById("counter2");
const counter3 = document.getElementById("counter3");

const counters = [
  { element: counter1, target: 5000 },
  { element: counter2, target: 2000 },
  { element: counter3, target: 25 }
];

const animateCounter = (element, target) => {
  let count = 0;
  const interval = setInterval(() => {
    if (count < target) {
      count += 50;
      element.textContent = count.toLocaleString();
    } else {
      element.textContent = target.toLocaleString();
      clearInterval(interval);
    }
  }, 20);
};

// Ejecutar contador al hacer scroll hacia la sección
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      counters.forEach(counter => animateCounter(counter.element, counter.target));
      observer.disconnect();
    }
  });
}, { threshold: 0.5 });

const counterSection = document.querySelector(".counter");
if (counterSection) {
  observer.observe(counterSection);
}

// Animación de scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


// Carrito funcional
let cart = [];
const cartCountElement = document.querySelector(".cart-count");
const cartModal = document.getElementById("cartModal");
const cartItemsContainer = document.getElementById("cartItems");
const cartTotalElement = document.getElementById("cartTotal");
const closeCart = document.getElementById("closeCart");
const cartOverlay = document.createElement("div");
cartOverlay.classList.add("cart-overlay");
document.body.appendChild(cartOverlay);

// Abrir carrito
document.querySelector(".cart-btn").addEventListener("click", () => {
  cartModal.classList.add("active");
  cartOverlay.classList.add("active");
});

// Cerrar carrito
closeCart.addEventListener("click", () => {
  cartModal.classList.remove("active");
  cartOverlay.classList.remove("active");
});

// Cerrar carrito al hacer clic en el overlay
cartOverlay.addEventListener("click", () => {
  cartModal.classList.remove("active");
  cartOverlay.classList.remove("active");
});

// Agregar productos al carrito
document.querySelectorAll(".add-to-cart").forEach(button => {
  button.addEventListener("click", () => {
    const card = button.closest(".card");
    const title = card.querySelector("h3").textContent;
    const price = parseFloat(card.querySelector(".price").textContent.replace("$", ""));
    const image = card.querySelector("img").src;

    const item = { title, price, image };
    cart.push(item);
    updateCart();
    showNotification(`${title} agregado al carrito`);
  });
});

function updateCart() {
  cartCountElement.textContent = cart.length;

  // Limpiar carrito visual
  cartItemsContainer.innerHTML = "";

  let total = 0;

  cart.forEach(item => {
    total += item.price;

    const cartItemElement = document.createElement("div");
    cartItemElement.classList.add("cart-item");

    cartItemElement.innerHTML = `
      <div class="cart-item-info">
        <img src="${item.image}" alt="${item.title}">
        <div>
          <h4>${item.title}</h4>
          <p>$${item.price}</p>
        </div>
      </div>
      <button class="remove-item" data-title="${item.title}">×</button>
    `;

    cartItemsContainer.appendChild(cartItemElement);
  });

  cartTotalElement.textContent = `$${total.toFixed(2)}`;

  // Añadir funcionalidad para eliminar items
  document.querySelectorAll(".remove-item").forEach(btn => {
    btn.addEventListener("click", () => {
      const title = btn.getAttribute("data-title");
      cart = cart.filter(item => item.title !== title);
      updateCart();
    });
  });
}

function showNotification(message) {
  const notification = document.createElement("div");
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #e94560;
    color: white;
    padding: 1rem;
    border-radius: 5px;
    z-index: 1000;
    animation: slideIn 0.3s, fadeOut 0.5s 2.5s forwards;
  `;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 3000);
}

// Animación para notificación
const style = document.createElement("style");
style.textContent = `
  @keyframes slideIn {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  @keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
  }
`;
document.head.appendChild(style);
