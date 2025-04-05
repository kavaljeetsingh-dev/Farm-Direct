// Slideshow functionality
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.querySelectorAll('.slide');
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }    
  slides[slideIndex - 1].style.display = "block";  
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Contact Form Submission
function submitContactForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  console.log('Contact Form Submitted', { name, email, subject, message });

  // Optionally, you can send this data to a backend service or API
  alert('Message Sent Successfully!');
  document.getElementById('contact-form').reset(); // Clear form after submission
  return false; // Prevent default form submission behavior
}

// Add to Cart Functionality
let cart = [];

function addToCart(product, price) {
  cart.push({ product, price });
  alert(`${product} has been added to your cart!`);
  updateCartCount();
}

function updateCartCount() {
  const cartCountElement = document.getElementById('cart-count');
  if (cartCountElement) {
    cartCountElement.innerText = cart.length;
  }
}

// Checkout Functionality
function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty.");
    return;
  }
  
  let totalAmount = cart.reduce((total, item) => total + item.price, 0);
  alert(`Total: ₹${totalAmount}. Proceeding to payment...`);
  
  // Optionally, you can add payment gateway integration here
}

// Loan Application Submission
function submitLoanApplication() {
  const bankDetails = document.getElementById('bank-details').value;
  const amount = document.getElementById('amount').value;
  const reason = document.getElementById('reason').value;
  const name = document.getElementById('name').value;
  const id = document.getElementById('id').value;
  const state = document.getElementById('state').value;
  const address = document.getElementById('address').value;
  const aadhar = document.getElementById('aadhar').value;
  const pan = document.getElementById('pan').value;

  console.log('Loan Application Submitted', {
    bankDetails, amount, reason, name, id, state, address, aadhar, pan
  });

  alert('Loan Application Submitted! Please wait for approval.');
  
  // Optionally, send the loan application data to a backend API for processing
  return false; // Prevent default form submission behavior
}

// Login Validation
function validateLoginForm() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (!username || !password) {
    alert('Please enter both username and password.');
    return false;
  }

  alert('Login Successful');
  // Optionally, you can redirect the user to a dashboard or home page after successful login
  return true;
}

// Back to Top Button Functionality
let backToTopButton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

backToTopButton.addEventListener("click", function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

letcart = [];

// Toggle Cart Sidebar
function toggleCart() {
  const cartSidebar = document.getElementById('cart-sidebar');
  cartSidebar.classList.toggle('open');
}

// Add to Cart Functionality
function addToCart(product, price, image) {
  const existingItem = cart.find(item => item.product === product);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ product, price, image, quantity: 1 });
  }

  updateCart();
  toggleCart(); // Open cart when item is added
}

// Update Cart UI
function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  const cartCount = document.getElementById('cart-count');

  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    total += item.price * item.quantity;

    const cartItemDiv = document.createElement('div');
    cartItemDiv.classList.add('cart-item');

    const productImage = document.createElement('img');
    productImage.src = item.image;
    productImage.alt = item.product;

    const itemInfoDiv = document.createElement('div');
    itemInfoDiv.classList.add('item-info');
    itemInfoDiv.innerHTML = `<strong>${item.product}</strong><br>₹${item.price}`;

    const quantityDiv = document.createElement('div');
    quantityDiv.classList.add('quantity');
    quantityDiv.innerHTML = `Qty: <input type="number" min="1" value="${item.quantity}" onchange="changeQuantity('${item.product}', this.value)">`;

    cartItemDiv.appendChild(productImage);
    cartItemDiv.appendChild(itemInfoDiv);
    cartItemDiv.appendChild(quantityDiv);

    cartItems.appendChild(cartItemDiv);
  });

  cartTotal.innerText = total;
  cartCount.innerText = cart.length;
}

// Update quantity
function changeQuantity(product, quantity) {
  const item = cart.find(item => item.product === product);
  if (item) {
    item.quantity = parseInt(quantity, 10);
    updateCart();
  }
}

// Checkout (Placeholder)
function checkout() {
  if (cart.length === 0) {
    alert('Your cart is empty!');
    return;
  }

  alert(`Proceeding to checkout. Total: ₹${document.getElementById('cart-total').innerText}`);
}
