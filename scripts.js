document.addEventListener("DOMContentLoaded", function() {
    // Sample data for featured books
    const featuredBooksData = [
        { title: "Book Title 1", author: "Author Name 1", price: "$10.99", imageUrl: "https://m.media-amazon.com/images/I/91liAp+oaQL._AC_UF894,1000_QL80_.jpg" },
        { title: "Book Title 2", author: "Author Name 2", price: "$12.99", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUu38Te4vBx601WSIDDDhMSwzxNCTdWHylNRNEQ4BFVQ&s" },
        { title: "Book Title 3", author: "Author Name 3", price: "$14.99", imageUrl: "https://m.media-amazon.com/images/I/71OXQZezcnL._AC_UF1000,1000_QL80_.jpg" },
        // Add more featured book data as needed
    ];

    // Function to display featured books
    function displayFeaturedBooks() {
        const featuredBooksContainer = document.getElementById("featuredBooks");
        featuredBooksData.forEach(book => {
            const bookElement = document.createElement("div");
            bookElement.classList.add("book");
            bookElement.innerHTML = `
                <img src="${book.imageUrl}" alt="${book.title}">
                <h3>${book.title}</h3>
                <p>Author: ${book.author}</p>
                <p>Price: ${book.price}</p>
            `;
            featuredBooksContainer.appendChild(bookElement);
        });
    }

    // Sample data for products
    const productsData = [
        { title: "Book Title 1", author: "Author Name 1", price: "$10.99", imageUrl: "https://m.media-amazon.com/images/I/91liAp+oaQL._AC_UF894,1000_QL80_.jpg" },
        { title: "Book Title 2", author: "Author Name 2", price: "$12.99", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUu38Te4vBx601WSIDDDhMSwzxNCTdWHylNRNEQ4BFVQ&s" },
        { title: "Book Title 3", author: "Author Name 3", price: "$14.99", imageUrl: "https://m.media-amazon.com/images/I/71OXQZezcnL._AC_UF1000,1000_QL80_.jpg" },
        { title: "Book Title 4", author: "Author Name 4", price: "$7.99", imageUrl: "https://m.media-amazon.com/images/I/91liAp+oaQL._AC_UF894,1000_QL80_.jpg" },
        { title: "Book Title 5", author: "Author Name 5", price: "$17.99", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUu38Te4vBx601WSIDDDhMSwzxNCTdWHylNRNEQ4BFVQ&s" },
        { title: "Book Title 6", author: "Author Name 6", price: "$22.99", imageUrl: "https://m.media-amazon.com/images/I/71OXQZezcnL._AC_UF1000,1000_QL80_.jpg" },
        { title: "Book Title 7", author: "Author Name 7", price: "$10.99", imageUrl: "https://m.media-amazon.com/images/I/91liAp+oaQL._AC_UF894,1000_QL80_.jpg" },
        { title: "Book Title 8", author: "Author Name 8", price: "$12.99", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUu38Te4vBx601WSIDDDhMSwzxNCTdWHylNRNEQ4BFVQ&s" },
        { title: "Book Title 9", author: "Author Name 9", price: "$14.99", imageUrl: "https://m.media-amazon.com/images/I/71OXQZezcnL._AC_UF1000,1000_QL80_.jpg" },
        { title: "Book Title 10", author: "Author Name 10", price: "$7.99", imageUrl: "https://m.media-amazon.com/images/I/91liAp+oaQL._AC_UF894,1000_QL80_.jpg" },
        { title: "Book Title 11", author: "Author Name 11", price: "$17.99", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUu38Te4vBx601WSIDDDhMSwzxNCTdWHylNRNEQ4BFVQ&s" },
        { title: "Book Title 12", author: "Author Name 12", price: "$22.99", imageUrl: "https://m.media-amazon.com/images/I/71OXQZezcnL._AC_UF1000,1000_QL80_.jpg" },
        // Add more product data as needed
    ];

    // Function to display products
    function displayProducts() {
        const productsContainer = document.getElementById("productsList");
        productsData.forEach(product => {
            const productElement = document.createElement("div");
            productElement.classList.add("product");
            productElement.innerHTML = `
                <img src="${product.imageUrl}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p>Author: ${product.author}</p>
                <p>Price: ${product.price}</p>
                <button>Add to Cart</button>
            `;
            productsContainer.appendChild(productElement);
        });
    }

    // Call the functions to display featured books and products
    if (document.getElementById("featuredBooks")) {
        displayFeaturedBooks();
    }

    if (document.getElementById("productsList")) {
        displayProducts();
    }

    // Handle form submission for the contact page
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();
        });
    }
});
