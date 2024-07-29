let cartCount = 0;

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        console.log('Product added to cart!');
        // Increment the cart count
        cartCount++;
        // Update the cart count display
        document.getElementById('cart-count').textContent = cartCount;
        // Example of making the button interactive by changing its text and disabling it after being clicked
        button.textContent = 'Added to Cart';
        button.disabled = true;
        button.style.backgroundColor = '#888';
    });
});

const searchInput = document.getElementById('searchInput');
const searchSuggestions = document.getElementById('searchSuggestions');

const categories = ['Shirts', 'Pants', 'Shoes', 'Watches', 'Kurtas', 'Coats'];

searchInput.addEventListener('input', () => {
    const value = searchInput.value.toLowerCase();
    searchSuggestions.innerHTML = '';
    if (value) {
        const filteredCategories = categories.filter(category => category.toLowerCase().includes(value));
        if (filteredCategories.length > 0) {
            searchSuggestions.style.display = 'block';
            const ul = document.createElement('ul');
            filteredCategories.forEach(category => {
                const li = document.createElement('li');
                li.textContent = category;
                li.addEventListener('click', () => {
                    window.location.href = `#${category.toLowerCase()}`;
                });
                ul.appendChild(li);
            });
            searchSuggestions.appendChild(ul);
        } else {
            searchSuggestions.style.display = 'none';
        }
    } else {
        searchSuggestions.style.display = 'none';
    }
});

document.getElementById('searchForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const searchValue = searchInput.value.toLowerCase();
    if (categories.map(category => category.toLowerCase()).includes(searchValue)) {
        window.location.href = `#${searchValue}`;
    } else {
        alert('Category not found');
    }
});

document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});
