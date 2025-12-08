document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".faq-card");

  cards.forEach(card => {
    const question = card.querySelector(".faq-question");

    question.addEventListener("click", () => {
      card.classList.toggle("active");
    });
  });
});
