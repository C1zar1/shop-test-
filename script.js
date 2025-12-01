// Products Data
const productsData = [
  {
    id: 1,
    name: "Wireless Earbuds Pro",
    price: 199,
    salePrice: 159,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    description: "Premium wireless earbuds with active noise cancellation",
    specs: [
      "30-hour battery life",
      "Active noise cancellation",
      "IPX7 water resistant"
    ],
    reviews: [
      { author: "John D.", rating: 5, text: "Amazing sound quality and battery life!", date: "2025-11-28", helpful: 12 },
      { author: "Sarah M.", rating: 4, text: "Great earbuds, fit could be better", date: "2025-11-25", helpful: 8 }
    ]
  },
  {
    id: 2,
    name: "Smart Watch Elite",
    price: 299,
    salePrice: null,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    description: "Advanced fitness tracker with health monitoring",
    specs: [
      "AMOLED display",
      "Heart rate monitor",
      "7-day battery"
    ],
    reviews: [
      { author: "Mike T.", rating: 5, text: "Perfect for tracking workouts!", date: "2025-11-27", helpful: 15 }
    ]
  },
  {
    id: 3,
    name: "USB-C Hub",
    price: 79,
    salePrice: 59,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&h=500&fit=crop",
    description: "7-in-1 USB-C hub with multiple ports",
    specs: [
      "7 ports",
      "4K video output",
      "100W power delivery"
    ],
    reviews: [
      { author: "Alex P.", rating: 4, text: "Works great with my laptop", date: "2025-11-26", helpful: 9 }
    ]
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    price: 149,
    salePrice: null,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1587829191301-4d41d1a13103?w=500&h=500&fit=crop",
    description: "RGB mechanical keyboard with custom switches",
    specs: [
      "Cherry MX switches",
      "RGB lighting",
      "Wireless & wired"
    ],
    reviews: [
      { author: "Pro Gamer", rating: 5, text: "Best keyboard for gaming!", date: "2025-11-24", helpful: 22 }
    ]
  },
  {
    id: 5,
    name: "Portable SSD 1TB",
    price: 129,
    salePrice: 99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&h=500&fit=crop",
    description: "Fast and compact external storage",
    specs: [
      "1TB capacity",
      "550MB/s read speed",
      "Rugged design"
    ],
    reviews: [
      { author: "Designer", rating: 5, text: "Perfect for storing large files", date: "2025-11-23", helpful: 11 }
    ]
  },
  {
    id: 6,
    name: "Webcam 4K",
    price: 189,
    salePrice: null,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&h=500&fit=crop",
    description: "Professional 4K webcam for streaming",
    specs: [
      "4K resolution",
      "Auto-focus",
      "Built-in microphone"
    ],
    reviews: [
      { author: "Streamer", rating: 4, text: "Great quality for the price", date: "2025-11-22", helpful: 7 }
    ]
  },
  {
    id: 7,
    name: "Monitor Stand",
    price: 49,
    salePrice: 39,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1586253408340-ab9e5fe5dd2e?w=500&h=500&fit=crop",
    description: "Ergonomic monitor stand with storage",
    specs: [
      "Adjustable height",
      "Storage drawer",
      "Supports up to 25kg"
    ],
    reviews: [
      { author: "Office Worker", rating: 4, text: "Good quality, improved my setup", date: "2025-11-21", helpful: 5 }
    ]
  },
  {
    id: 8,
    name: "Mouse Pad XL",
    price: 29,
    salePrice: null,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&h=500&fit=crop",
    description: "Large premium mouse pad with RGB",
    specs: [
      "900x400mm size",
      "RGB lighting",
      "Non-slip base"
    ],
    reviews: [
      { author: "Gamer", rating: 5, text: "Perfect size and quality!", date: "2025-11-20", helpful: 10 }
    ]
  },
  {
    id: 9,
    name: "Phone Stand",
    price: 19,
    salePrice: 14,
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&h=500&fit=crop",
    description: "Adjustable phone stand for desk",
    specs: [
      "Adjustable angle",
      "Universal fit",
      "Aluminum build"
    ],
    reviews: [
      { author: "User123", rating: 4, text: "Sturdy and reliable", date: "2025-11-19", helpful: 6 }
    ]
  },
  {
    id: 10,
    name: "Cable Organizer",
    price: 9,
    salePrice: null,
    rating: 4.1,
    image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&h=500&fit=crop",
    description: "Cable management clips set",
    specs: [
      "5 pack",
      "Silicone material",
      "Multiple sizes"
    ],
    reviews: [
      { author: "Organizer", rating: 4, text: "Great for cable mess", date: "2025-11-18", helpful: 4 }
    ]
  },
  {
    id: 11,
    name: "LED Desk Lamp",
    price: 69,
    salePrice: 49,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1565636192335-14c01fdf68cc?w=500&h=500&fit=crop",
    description: "Smart LED desk lamp with USB charging",
    specs: [
      "Adjustable brightness",
      "USB charging port",
      "Touch control"
    ],
    reviews: [
      { author: "Student", rating: 5, text: "Perfect for studying", date: "2025-11-17", helpful: 13 }
    ]
  },
  {
    id: 12,
    name: "Laptop Cooler",
    price: 59,
    salePrice: null,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1621905251313-28f5bab23e2f?w=500&h=500&fit=crop",
    description: "Cooling pad with dual fans",
    specs: [
      "Dual fans",
      "USB powered",
      "Supports up to 17 inch laptops"
    ],
    reviews: [
      { author: "Developer", rating: 4, text: "Keeps laptop cool during work", date: "2025-11-16", helpful: 9 }
    ]
  }
];

// State Management
let cart = [];
let currentProduct = null;
let selectedRating = 0;
let filteredProducts = [...productsData];

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  initializeApp();
});

function initializeApp() {
  renderProducts();
  setupEventListeners();
  updateCartBadge();
}

// Event Listeners
function setupEventListeners() {
  // Navigation
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = e.target.dataset.page;
      navigateToPage(page);
    });
  });

  // Cart icon
  document.querySelector('.cart-icon-btn').addEventListener('click', () => {
    navigateToPage('cart');
  });

  // Shop Now button
  document.getElementById('shopNowBtn').addEventListener('click', () => {
    navigateToPage('products');
  });

  // Back button
  document.getElementById('backBtn').addEventListener('click', () => {
    navigateToPage('products');
  });

  // Search
  document.getElementById('searchInput').addEventListener('input', (e) => {
    handleSearch(e.target.value);
  });

  // Review form
  document.getElementById('reviewForm').addEventListener('submit', handleReviewSubmit);

  // Star rating
  document.querySelectorAll('.star-btn').forEach(star => {
    star.addEventListener('click', (e) => {
      selectedRating = parseInt(e.target.dataset.rating);
      updateStarRating();
    });
  });

  // Modal
  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.getElementById('continueShoppingBtn').addEventListener('click', () => {
    closeModal();
    navigateToPage('products');
  });
  document.getElementById('completeOrderBtn').addEventListener('click', handleCompleteOrder);

  // Newsletter form
  document.querySelector('.newsletter-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
    e.target.reset();
  });
}

// Navigation
function navigateToPage(pageName) {
  // Update active nav link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.dataset.page === pageName) {
      link.classList.add('active');
    }
  });

  // Show selected page
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });

  const pageMap = {
    'home': 'homePage',
    'products': 'productsPage',
    'cart': 'cartPage',
    'about': 'aboutPage'
  };

  const pageId = pageMap[pageName];
  if (pageId) {
    document.getElementById(pageId).classList.add('active');
  }

  if (pageName === 'products') {
    renderAllProducts();
  } else if (pageName === 'cart') {
    renderCart();
  }

  window.scrollTo(0, 0);
}

// Search
function handleSearch(query) {
  const searchTerm = query.toLowerCase().trim();
  
  if (searchTerm === '') {
    filteredProducts = [...productsData];
  } else {
    filteredProducts = productsData.filter(product => 
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm)
    );
  }
  
  renderProducts();
  renderAllProducts();
}

// Render Products
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  grid.innerHTML = '';
  
  filteredProducts.forEach(product => {
    const card = createProductCard(product);
    grid.appendChild(card);
  });
}

function renderAllProducts() {
  const grid = document.getElementById('allProductsGrid');
  grid.innerHTML = '';
  
  filteredProducts.forEach(product => {
    const card = createProductCard(product);
    grid.appendChild(card);
  });
}

function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card';
  
  const displayPrice = product.salePrice || product.price;
  const stars = generateStars(product.rating);
  
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}" class="product-image">
    <div class="product-info">
      <h3 class="product-name">${product.name}</h3>
      <div class="product-price">
        <span class="price-current">$${displayPrice}</span>
        ${product.salePrice ? `<span class="price-original">$${product.price}</span>` : ''}
      </div>
      <div class="product-rating">
        <span class="stars">${stars}</span>
        <span class="rating-value">${product.rating}</span>
      </div>
      <div class="product-actions">
        <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
        <button class="btn btn-outline" onclick="viewProductDetail(${product.id})">View Details</button>
      </div>
    </div>
  `;
  
  return card;
}

function generateStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  let stars = '★'.repeat(fullStars);
  if (hasHalfStar) stars += '☆';
  return stars.padEnd(5, '☆');
}

// Product Detail
function viewProductDetail(productId) {
  currentProduct = productsData.find(p => p.id === productId);
  if (!currentProduct) return;
  
  renderProductDetail();
  renderReviews();
  
  document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
  document.getElementById('productDetailPage').classList.add('active');
  window.scrollTo(0, 0);
}

function renderProductDetail() {
  const detail = document.getElementById('productDetail');
  const displayPrice = currentProduct.salePrice || currentProduct.price;
  const stars = generateStars(currentProduct.rating);
  
  detail.innerHTML = `
    <img src="${currentProduct.image}" alt="${currentProduct.name}" class="product-detail-image">
    <div class="product-detail-info">
      <h2>${currentProduct.name}</h2>
      <div class="product-detail-price">
        <span class="price-current">$${displayPrice}</span>
        ${currentProduct.salePrice ? `<span class="price-original">$${currentProduct.price}</span>` : ''}
      </div>
      <div class="product-rating">
        <span class="stars">${stars}</span>
        <span class="rating-value">${currentProduct.rating} (${currentProduct.reviews.length} reviews)</span>
      </div>
      <p class="product-detail-description">${currentProduct.description}</p>
      <div class="product-specs">
        <h4>Specifications</h4>
        <ul>
          ${currentProduct.specs.map(spec => `<li>${spec}</li>`).join('')}
        </ul>
      </div>
      <div class="quantity-selector">
        <label>Quantity:</label>
        <div class="quantity-controls">
          <button class="quantity-btn" onclick="changeQuantity(-1)">-</button>
          <span class="quantity-value" id="quantityValue">1</span>
          <button class="quantity-btn" onclick="changeQuantity(1)">+</button>
        </div>
      </div>
      <button class="btn btn-primary add-to-cart-detail" onclick="addToCartFromDetail()">Add to Cart</button>
    </div>
  `;
}

let detailQuantity = 1;

function changeQuantity(delta) {
  detailQuantity = Math.max(1, detailQuantity + delta);
  document.getElementById('quantityValue').textContent = detailQuantity;
}

function addToCartFromDetail() {
  addToCart(currentProduct.id, detailQuantity);
  detailQuantity = 1;
  document.getElementById('quantityValue').textContent = detailQuantity;
}

// Reviews
function renderReviews() {
  const reviewsList = document.getElementById('reviewsList');
  reviewsList.innerHTML = '';
  
  currentProduct.reviews.forEach((review, index) => {
    const reviewCard = document.createElement('div');
    reviewCard.className = 'review-card';
    const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
    
    reviewCard.innerHTML = `
      <div class="review-header">
        <span class="review-author">${review.author}</span>
        <span class="review-date">${review.date}</span>
      </div>
      <div class="review-rating">${stars}</div>
      <p class="review-text">${review.text}</p>
      <div class="review-helpful">
        <button class="helpful-btn" onclick="markHelpful(${index})">
          👍 Helpful (${review.helpful})
        </button>
      </div>
    `;
    
    reviewsList.appendChild(reviewCard);
  });
  
  // Reset review form
  document.getElementById('reviewForm').reset();
  selectedRating = 0;
  updateStarRating();
}

function markHelpful(reviewIndex) {
  currentProduct.reviews[reviewIndex].helpful++;
  renderReviews();
}

function handleReviewSubmit(e) {
  e.preventDefault();
  
  if (selectedRating === 0) {
    alert('Please select a rating');
    return;
  }
  
  const name = document.getElementById('reviewName').value || 'Anonymous';
  const text = document.getElementById('reviewText').value;
  
  const newReview = {
    author: name,
    rating: selectedRating,
    text: text,
    date: new Date().toISOString().split('T')[0],
    helpful: 0
  };
  
  currentProduct.reviews.unshift(newReview);
  
  // Update product rating
  const totalRating = currentProduct.reviews.reduce((sum, r) => sum + r.rating, 0);
  currentProduct.rating = (totalRating / currentProduct.reviews.length).toFixed(1);
  
  renderReviews();
  renderProducts();
  renderAllProducts();
  
  alert('Thank you for your review!');
}

function updateStarRating() {
  document.querySelectorAll('.star-btn').forEach((star, index) => {
    if (index < selectedRating) {
      star.classList.add('active');
      star.textContent = '★';
    } else {
      star.classList.remove('active');
      star.textContent = '☆';
    }
  });
}

// Cart Functions
function addToCart(productId, quantity = 1) {
  const product = productsData.find(p => p.id === productId);
  if (!product) return;
  
  const existingItem = cart.find(item => item.id === productId);
  
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({
      ...product,
      quantity: quantity
    });
  }
  
  updateCartBadge();
  showNotification(`${product.name} added to cart!`);
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCartBadge();
  renderCart();
}

function updateCartQuantity(productId, delta) {
  const item = cart.find(item => item.id === productId);
  if (item) {
    item.quantity = Math.max(1, item.quantity + delta);
    updateCartBadge();
    renderCart();
  }
}

function updateCartBadge() {
  const badge = document.getElementById('cartBadge');
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  badge.textContent = totalItems;
}

function renderCart() {
  const cartContent = document.getElementById('cartContent');
  
  if (cart.length === 0) {
    cartContent.innerHTML = `
      <div class="empty-cart">
        <div class="empty-cart-icon">🛒</div>
        <h3>Your cart is empty</h3>
        <p>Add some amazing products to your cart!</p>
        <button class="btn btn-primary" onclick="navigateToPage('products')">Start Shopping</button>
      </div>
    `;
    return;
  }
  
  const subtotal = cart.reduce((sum, item) => {
    const price = item.salePrice || item.price;
    return sum + (price * item.quantity);
  }, 0);
  
  const tax = subtotal * 0.1;
  const total = subtotal + tax;
  
  cartContent.innerHTML = `
    <div class="cart-items">
      ${cart.map(item => createCartItem(item)).join('')}
    </div>
    <div class="cart-summary">
      <h3>Order Summary</h3>
      <div class="summary-row">
        <span>Subtotal:</span>
        <span>$${subtotal.toFixed(2)}</span>
      </div>
      <div class="summary-row">
        <span>Tax (10%):</span>
        <span>$${tax.toFixed(2)}</span>
      </div>
      <div class="summary-row">
        <span>Total:</span>
        <span>$${total.toFixed(2)}</span>
      </div>
      <button class="btn btn-primary checkout-btn" onclick="openCheckoutModal()">Proceed to Checkout</button>
    </div>
  `;
}

function createCartItem(item) {
  const price = item.salePrice || item.price;
  const itemTotal = price * item.quantity;
  
  return `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-image">
      <div class="cart-item-info">
        <h3>${item.name}</h3>
        <p class="cart-item-price">$${price}</p>
      </div>
      <div class="cart-item-actions">
        <div class="cart-item-quantity">
          <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, -1)">-</button>
          <span class="quantity-value">${item.quantity}</span>
          <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, 1)">+</button>
        </div>
        <p class="cart-item-price">$${itemTotal.toFixed(2)}</p>
        <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
      </div>
    </div>
  `;
}

// Checkout Modal
function openCheckoutModal() {
  const modal = document.getElementById('checkoutModal');
  const summary = document.getElementById('checkoutSummary');
  
  const subtotal = cart.reduce((sum, item) => {
    const price = item.salePrice || item.price;
    return sum + (price * item.quantity);
  }, 0);
  
  const tax = subtotal * 0.1;
  const total = subtotal + tax;
  
  summary.innerHTML = `
    <div>
      <h4>Your Order</h4>
      ${cart.map(item => {
        const price = item.salePrice || item.price;
        return `
          <div class="summary-row">
            <span>${item.name} x${item.quantity}</span>
            <span>$${(price * item.quantity).toFixed(2)}</span>
          </div>
        `;
      }).join('')}
      <div class="summary-row">
        <span>Subtotal:</span>
        <span>$${subtotal.toFixed(2)}</span>
      </div>
      <div class="summary-row">
        <span>Tax:</span>
        <span>$${tax.toFixed(2)}</span>
      </div>
      <div class="summary-row" style="font-weight: bold; color: var(--color-primary);">
        <span>Total:</span>
        <span>$${total.toFixed(2)}</span>
      </div>
    </div>
  `;
  
  modal.classList.add('active');
}

function closeModal() {
  document.getElementById('checkoutModal').classList.remove('active');
}

function handleCompleteOrder() {
  alert('Order completed! Thank you for shopping with Cosmic Shop!');
  cart = [];
  updateCartBadge();
  closeModal();
  navigateToPage('home');
}

// Notification
function showNotification(message) {
  // Create a simple notification
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: var(--color-primary);
    color: var(--cosmic-darker);
    padding: 16px 24px;
    border-radius: 8px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
    z-index: 3000;
    font-weight: 600;
    animation: slideIn 0.3s ease;
  `;
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => notification.remove(), 300);
  }, 2000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from { transform: translateX(400px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  @keyframes slideOut {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(400px); opacity: 0; }
  }
`;
document.head.appendChild(style);