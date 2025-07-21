document.addEventListener("DOMContentLoaded", function () {
  // Popup messages for product images
  const imageMessages = [
    "Every sole has a story. Let us help yours shine again!",
    "We use only premium, shoe-safe products to preserve quality.",
    "Gentle techniques and eco-friendly tools for spotless sneakers!"
  ];

  const productImages = document.querySelectorAll('.product-card img');

  productImages.forEach((img, index) => {
    img.addEventListener('click', () => {
      // Hide all other popups
      document.querySelectorAll('.popup').forEach(p => p.classList.remove('show'));

      // Show popup near clicked image
      const popup = img.closest('.product-card').querySelector('.popup');
      if (popup) {
        popup.textContent = imageMessages[index] || "Great shoes deserve great care!";
        popup.classList.add('show');

        setTimeout(() => {
          popup.classList.remove('show');
        }, 6000);
      }
    });
  });

  // Toggle Read More / Read Less
  const readMoreLinks = document.querySelectorAll(".read-more");

  readMoreLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const moreText = this.previousElementSibling;
      
      if (moreText && moreText.classList.contains('more-text')) {
        const isHidden = moreText.classList.contains("hidden");
        moreText.classList.toggle("hidden", !isHidden);
        this.textContent = isHidden ? "Read Less" : "Read More";
      }
    });
  });
});
