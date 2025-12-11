// Smooth scroll
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Countdown Timer
const countdownDate = new Date("Dec 25, 2025 23:59:59").getTime();
const timer = setInterval(() => {
  const now = new Date().getTime();
  const distance = countdownDate - now;
  if (distance < 0) {
    clearInterval(timer);
    document.getElementById("timer").innerText = "Sale Ended!";
    return;
  }
  const days = Math.floor(distance / (1000*60*60*24));
  const hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
  const minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
  const seconds = Math.floor((distance % (1000*60)) / 1000);
  document.getElementById("timer").innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);

// Featured Products (CMS-like)
const products = [
  { name: "Festive Red Scarf", image: "assets/images/redscarf.jpg" },
  { name: "Golden Ornament", image: "assets/images/goldornament.jpg" },
  { name: "Luxury Gift Box", image: "assets/images/luxurygb.jpg" }
];

const grid = document.getElementById("product-grid");
products.forEach(prod => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <img src="${prod.image}" alt="${prod.name}">
    <h3>${prod.name}</h3>
  `;
  grid.appendChild(card);
});

// Snowflakes
function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.className = 'snowflake';
  snowflake.style.left = Math.random() * window.innerWidth + 'px';
  snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
  snowflake.innerText = '❄';
  document.body.appendChild(snowflake);

  setTimeout(() => {
    snowflake.remove();
  }, 10000);
}

setInterval(createSnowflake, 200);
