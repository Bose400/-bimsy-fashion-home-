// Automatic slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000);
}

// Smooth scroll and Paystack integration
function payWithPaystack() {
  let handler = PaystackPop.setup({
    key: 'YOUR_PUBLIC_KEY', // replace with your Paystack public key
    email: 'customer@email.com',
    amount: 500000, // in kobo (₦5000)
    currency: 'NGN',
    callback: function (response) {
      alert('Payment complete! Reference: ' + response.reference);
    },
    onClose: function () {
      alert('Payment window closed.');
    }
  });
  handler.openIframe();
}

document.addEventListener("DOMContentLoaded", function() {
  alert("👗 Welcome to Bimsy Fashion Home & Aso-Ebi! 💖");
});
