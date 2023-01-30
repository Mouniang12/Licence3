var checkboxes = document.querySelectorAll('.filter-checkbox');
for (var i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener('change', function() {
    filterElements();
  });
}

function filterElements() {
  var container = document.getElementById('container');
  var elements = container.querySelectorAll('li');
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.display = 'none';
  }

  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      var className = checkboxes[i].value;
      var selectedElements = container.querySelectorAll('.' + className);
      for (var j = 0; j < selectedElements.length; j++) {
        selectedElements[j].style.display = 'block';
      }
    }
  }
}

/*
// Select all checkboxes with name "category"
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

// Add an event listener to each checkbox that listens for a change event and calls the filterGames function
checkboxes.forEach(checkbox => checkbox.addEventListener('change', filterGames));

// Function to filter the games based on whether the "solo" or "multijoueur" checkboxes are checked
function filterGames() {
  // Check if the "solo" checkbox is checked
  const soloChecked = document.getElementById('Solo').checked;
  // Check if the "multijoueur" checkbox is checked
  const multijoueurChecked = document.getElementById('Multijoueur').checked;
  // Select all elements with the class "game"
  const games = document.querySelectorAll('.grid-item');

  // Iterate through each game element
  games.forEach(game => {
    // If the game's classList contains the class "solo" and the "solo" checkbox is checked, or if the game's classList contains the class "multijoueur" and the "multijoueur" checkbox is checked
    if ((game.classList.contains('Solo') && soloChecked) || (game.classList.contains('Multijoueur') && multijoueurChecked)) {
      // Show the game element
      game.style.display = 'block';
    } else {
      // Hide the game element
      game.style.display = 'none';
    }
  });
}
*/