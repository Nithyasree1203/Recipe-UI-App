const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const recipeContainer = document.querySelector('.recipe-container');
const homeButton = document.getElementById('home-button');
const flavorFusion = document.querySelector('.flavor-fusion');
const recipeCards = Array.from(document.querySelectorAll('.recipe-card'));

searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value.toLowerCase();
  let found = false;

  recipeCards.forEach(card => {
    const recipeTitle = card.querySelector('.recipe-title').textContent.toLowerCase();
    const ingredients = Array.from(card.querySelectorAll('.recipe-ingredients li')).map(li => li.textContent.toLowerCase());

    // Check if the search term is in the recipe title or ingredients
    if (recipeTitle.includes(searchTerm) || ingredients.some(ingredient => ingredient.includes(searchTerm))) {
      card.style.display = 'block'; 
      found = true;
    } else {
      card.style.display = 'none'; 
    }
  });

  if (!found) {
    recipeContainer.innerHTML = '<p style="font-size: 2em; text-align: center; padding: 20px;">Oops! No recipes found 😢</p>';
  }


  flavorFusion.style.display = 'block';
});

homeButton.addEventListener('click', () => {
  searchInput.value = '';

  recipeCards.forEach(card => {
    card.style.display = 'none'; 
  });
  flavorFusion.style.display = 'none'; 
  recipeContainer.innerHTML = ''; // Clear the recipe container
});

recipeCards.forEach(card => {
  card.querySelector('.recipe-btn').addEventListener('click', () => {
    const details = card.querySelector('.recipe-details');
    details.style.display = details.style.display === 'none' ? 'block' : 'none';
  });

  card.addEventListener('click', () => {
    card.classList.add('clicked');
    setTimeout(() => {
      card.classList.remove('clicked');
    }, 2000); 
  });
});
