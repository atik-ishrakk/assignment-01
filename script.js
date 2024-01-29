const cartItems = [];

  function addToCart(productId) {
    const product = document.querySelector(`[data-id="${productId}"]`);
    const productName = product.dataset.name;
    const productPrice = parseFloat(product.dataset.price);

    const existingItem = cartItems.find(item => item.id === productId);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cartItems.push({
        id: productId,
        name: productName,
        price: productPrice,
        quantity: 1
      });
    }

    updateCart();
  }

  function removeFromCart(productId) {
    const index = cartItems.findIndex(item => item.id === productId);

    if (index !== -1) {
      cartItems.splice(index, 1);
      updateCart();
    }
  }

  function updateCart() {
    const cartList = document.getElementById('cartItems');
    cartList.innerHTML = '';

    cartItems.forEach(item => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `${item.name} - $${item.price.toFixed(2)} x ${item.quantity} 
                            <button onclick="removeFromCart(${item.id})">Remove</button>`;
      cartList.appendChild(listItem);
    });
  }