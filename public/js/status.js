// Add a click event listener to each menu item card
$('.menu-item.card.category-selector').on('click', function() {
  // Get the status element within the card
  const statusElement = $(this).find('.status');
  const currentStatus = statusElement.text();

  // Allow changing status only if the current status is In Queue or Cooking
  if (currentStatus !== "On Delivery") {
    // Prompt the user to choose a new status
    const newStatus = prompt("Enter a new status (1: Cooking, 2: On Delivery):");

    // Change the status if the user entered a valid status
    if (newStatus === "1") {
      statusElement.text("Cooking");
    } else if (newStatus === "2") {
      statusElement.text("On Delivery");
    }
  }
});

// Handle dropdown item clicks
$('.dropdown-item').on('click', function() {
  var category = $(this).data('category');
  // If "All" is selected, show all items
  if (category === 'all') {
    $('.category-selector').show();
  } else {
    // Hide all items
    $('.category-selector').hide();
    // Show items that have either one or both of the selected categories
    $('.category-selector[data-categories*="' + category + '"]').show();
  }
});