/*Тут буде описана логіка веб сторінки*/
// Робимо плавний перехід при кліку
document.querySelectorAll('.nav-item').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // блокуємо стандартний різкий перехід
    const targetId = this.getAttribute('href').substring(1); // видаляємо #
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 100, // відступ для navbar
        behavior: "smooth"
      });
    }
  });
});

// Ціни для різних магазинів
const prices = {
  zhivchik: {
    "АТБ": 35.99,
    "Рукавичка": 37.5,
    "Мирослава": 36.2
  },
  revo: {
    "АТБ": 50,
    "Рукавичка": 52,
    "Мирослава": 49.5
  }
};

// відкриття dropdown
document.querySelectorAll(".dropdown-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.parentElement.classList.toggle("show");
  });
});

// вибір магазину
document.querySelectorAll(".dropdown-content p").forEach(option => {
  option.addEventListener("click", () => {
    const product = option.closest(".custom-dropdown").getAttribute("data-product");
    const shop = option.getAttribute("data-shop");
    const btn = option.closest(".custom-dropdown").querySelector(".dropdown-btn");
    btn.textContent = shop;
    
    const priceElement = document.getElementById(product + "-price");
    priceElement.textContent = prices[product][shop] + " грн";
    option.closest(".custom-dropdown").classList.remove("show");
  });
});
