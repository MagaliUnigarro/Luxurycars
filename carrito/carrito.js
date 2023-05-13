function formatoCOP(precio) {
  // Añadir separador de miles
  const precioSeparado = precio.toLocaleString("es-CO");

  // Añadir símbolo de moneda COP
  const precioFormateado = `$${precioSeparado} COP`;

  return precioFormateado;
}

const calcularTotal = (cart) => {
  let total = 0;
  cart.forEach((product) => {
    total += product.price * product.quantity;
  });
  return total;
};

const removeFromCart = (event, idProduct) => {
    event.preventDefault()
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    // Buscar el índice del producto en el carrito
    const index = cart.findIndex((item) => item.id == idProduct);
  
    if (index !== -1) {
      // Si el producto existe en el carrito, eliminarlo
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
       alert("Producto eliminado del carrito");
    } else {
      alert("El producto no está en el carrito");
    }
  };
  

const OpenCart = () => {
  document.querySelector(".completecart .cart").style.display = "flex";
  document.querySelector(".completecart .cart").style.overflow = "auto"; //auto para que se pueda bajar
  document.querySelector("body").style.overflow = "hidden"; //hidden para no bajar

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart.length <= 0) return;

  const listContainer = document.querySelector("#productList");
  const totalsContainer = document.querySelector("#total");

  listContainer.innerHTML = "";
  totalsContainer.innerHTML = "";

  cart.forEach((product) => {
    const productContainer = document.createElement("li");
    productContainer.classList.add("productContainer");
    productContainer.innerHTML = `
        <div class="product">
          <img src="${product.img}" alt="" />
          <div class="product__info">
            <h5>${product.name}</h5>
            <p>Cantidad: ${product.quantity}</p>
            <p>${formatoCOP(product.price)}</p>
          </div>
        </div>
        <div class="product__actions">
          <button class="btn btn--delete" onclick="removeFromCart(event, ${product.id})">Eliminar</button>
        </div>
      `;
    listContainer.appendChild(productContainer);
  });

  // Agregar el total
  const totalContainer = document.createElement("p");
  totalContainer.classList.add("totalContainer");
  totalContainer.innerHTML = `
    <div>
        <h5>Total</h5>
        <p>${formatoCOP(calcularTotal(cart))}</p>
    </div>`;
    totalsContainer.appendChild(totalContainer);
};

const Closecart = () => {
  document.querySelector(".completecart .cart").style.display = "none";
  document.querySelector("body").style.overflow = "auto"; //auto para bajar otra vez
  document.querySelector(".container_body").style.opacity = "1";
};

const addToCart = (idProduct) => {
  let localStorageData = JSON.parse(localStorage?.getItem("Cars"));
  let product = localStorageData.find((product) => product.id == idProduct);
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Verificar si el producto ya está en el carrito
  const index = cart.findIndex((item) => item.id == idProduct);
  if (index !== -1) {
    // Si el producto ya está en el carrito, aumentar la cantidad en 1
    cart[index].quantity += 1;
  } else {
    // Si el producto no está en el carrito, agregarlo con una cantidad de 1
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Producto agregado al carrito");
};
