// app.js

document.getElementById('searchForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const searchQuery = document.getElementById('searchInput').value;
    fetchMovies(searchQuery);
  });
  
  function fetchMovies(searchQuery) {
    const apiKey = '55a3b75';
  
    fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${searchQuery}`)
      .then(response => response.json())
      .then(data => displayResults(data.Search))
      .catch(error => console.error('Error fetching movies:', error));
  }
  
  function displayResults(results) {
    
    const searchResultsContainer = document.getElementById('searchResults');
    searchResultsContainer.innerHTML = '';
  
    results.forEach(result => {
      const resultCard = document.createElement('div');
      resultCard.classList.add('col-md-4', 'mb-4');
  
      resultCard.innerHTML = `
        <div class="card">
          <img src="${result.Poster}" class="card-img-top" alt="${result.Title}">
          <div class="card-body">
            <h5 class="card-title">${result.Title}</h5>
            <p class="card-text">Year: ${result.Year}</p>
            <p class="card-text">Type: ${result.Type}</p>
            <button class="btn btn-primary" onclick="addToFavorites('${result.Title}', '${result.Year}', '${result.Type}', '${result.Poster}')">Favorite</button>
          </div>
        </div>
      `;
  
      searchResultsContainer.appendChild(resultCard);
    });
  }
  
  function addToFavorites(title, year, type, posterUrl) {
    
    fetch('http://localhost:3000/favorites', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, year, type, posterUrl }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Added to favorites:', data);
        showSuccessToast('Added to favorites');
      })
      .catch(error => {
        console.error('Error adding to favorites:', error);
        showErrorToast('Error adding to favorites');
      });
  }
  
  function showSuccessToast(message) {
    toastr.success(message);
  }
  
  function showErrorToast(message) {
    toastr.error(message);
  }