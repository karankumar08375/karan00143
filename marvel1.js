// Get the container where news will be displayed
const newsContainer = document.getElementById('news-container');

// Function to add new news
function addNews() {
  const newsInput = document.getElementById('news-input');
  const newNews = newsInput.value.trim();

  // Check if the input is not empty
  if (newNews) {
    // Create a new news item container
    const newsItem = document.createElement('div');
    newsItem.classList.add('news-item');
    
    // Add title and news content
    newsItem.innerHTML = `
      <h3>New Fire Brigade News</h3>
      <p>${newNews}</p>
      <button class="delete-btn">Delete News</button>
    `;
    
    // Add delete button functionality
    const deleteButton = newsItem.querySelector('.delete-btn');
    deleteButton.addEventListener('click', function() {
      newsItem.remove();  // Remove the news item when the delete button is clicked
    });

    // Append the new news item to the news container
    newsContainer.appendChild(newsItem);

    // Clear the input field after adding the news
    newsInput.value = "";
  } else {
    alert('Please enter some news.');
  }
}
