document.addEventListener("DOMContentLoaded", function () {
  var productsContainer = document.getElementById("products");
  var productListContainer = document.querySelector(".product-list");
  var costListContainer = document.querySelector(".product-list1");
  var totalContainer = document.querySelector(".total");

  var totalAmount = 0;

  function addToCart(productName, productPrice) {
    var productItem = document.createElement("div");
    productItem.textContent = productName;

    productListContainer.appendChild(productItem);

    var costItem = document.createElement("div");

    var cleanedPrice = parseFloat(productPrice.replace(/[^\d.]/g, ""));
    costItem.textContent = "₹ " + cleanedPrice.toLocaleString();

    totalAmount += cleanedPrice;

    totalContainer.textContent = "₹ " + totalAmount.toLocaleString();

    costListContainer.appendChild(costItem);
  }

  // HTML code for the  create a new cards
  var coffeeTable =
    '<div class="card">' +
    '<div class="product-name">' +
    '<div class="name">Coffee Tables</div>' +
    '<div class="price"> ₹ 4,000 </div>' +
    "</div>" +
    "<div>" +
    '<div class="add_cart"> Add to Cart</div>' +
    "</div>" +
    "</div>";

  var tv =
    '<div class="card">' +
    '<div class="product-name">' +
    '<div class="name">Tv</div>' +
    '<div class="price"> ₹ 8,000 </div>' +
    "</div>" +
    "<div>" +
    '<div class="add_cart"> Add to Cart</div>' +
    "</div>" +
    "</div>";

  var ac =
    '<div class="card">' +
    '<div class="product-name">' +
    '<div class="name">Ac</div>' +
    '<div class="price"> ₹ 10,000 </div>' +
    "</div>" +
    "<div>" +
    '<div class="add_cart"> Add to Cart</div>' +
    "</div>" +
    "</div>";

  var bed =
    '<div class="card">' +
    '<div class="product-name">' +
    '<div class="name">Bed</div>' +
    '<div class="price"> ₹ 70,000 </div>' +
    "</div>" +
    "<div>" +
    '<div class="add_cart"> Add to Cart</div>' +
    "</div>" +
    "</div>";

  var fan =
    '<div class="card">' +
    '<div class="product-name">' +
    '<div class="name">Fan</div>' +
    '<div class="price"> ₹ 13,000 </div>' +
    "</div>" +
    "<div>" +
    '<div class="add_cart"> Add to Cart</div>' +
    "</div>" +
    "</div>";
  var cobord =
    '<div class="card">' +
    '<div class="product-name">' +
    '<div class="name">Cobord</div>' +
    '<div class="price"> ₹ 40,00,000 </div>' +
    "</div>" +
    "<div>" +
    '<div class="add_cart"> Add to Cart</div>' +
    "</div>" +
    "</div>";
  var cooker =
    '<div class="card">' +
    '<div class="product-name">' +
    '<div class="name">Cooker</div>' +
    '<div class="price"> ₹ 2,500 </div>' +
    "</div>" +
    "<div>" +
    '<div class="add_cart"> Add to Cart</div>' +
    "</div>" +
    "</div>";
  var dressingTable =
    '<div class="card">' +
    '<div class="product-name">' +
    '<div class="name">Dressing Table</div>' +
    '<div class="price"> ₹ 97,000 </div>' +
    "</div>" +
    "<div>" +
    '<div class="add_cart"> Add to Cart</div>' +
    "</div>" +
    "</div>";

  // Insert the product card HTML into the #products div
  productsContainer.insertAdjacentHTML("beforeend", coffeeTable);
  productsContainer.insertAdjacentHTML("beforeend", tv);
  productsContainer.insertAdjacentHTML("beforeend", ac);
  productsContainer.insertAdjacentHTML("beforeend", bed);
  productsContainer.insertAdjacentHTML("beforeend", fan);
  productsContainer.insertAdjacentHTML("beforeend", cobord);
  productsContainer.insertAdjacentHTML("beforeend", cooker);
  productsContainer.insertAdjacentHTML("beforeend", dressingTable);

  // Add event listener for "Add to Cart" buttons
  document.querySelectorAll(".add_cart").forEach(function (button) {
    button.addEventListener("click", function () {
      var productName =
        this.closest(".card").querySelector(".name").textContent;
      var productPrice =
        this.closest(".card").querySelector(".price").textContent;

      addToCart(productName, productPrice);
    });
  });

  // Function to filter products based on search input
  function filterProducts() {
    var searchBoxValue = document
      .getElementById("searchBox")
      .value.toLowerCase();

    document
      .querySelectorAll(".product-name")
      .forEach(function (productNameElement) {
        var productName = productNameElement.textContent.toLowerCase();
        var productCard = productNameElement.closest(".card");

        if (productName.includes(searchBoxValue)) {
          productCard.style.display = "flex";
        } else {
          productCard.style.display = "none";
        }
      });
  }

  document
    .getElementById("searchBox")
    .addEventListener("input", filterProducts);
});
