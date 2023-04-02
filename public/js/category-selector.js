/* jQuery */
$(document).ready(function () {
  // Handle dropdown item clicks
  $(".dropdown-item").on("click", function () {
    var category = $(this).data("category");
    // If "All" is selected, show all items
    if (category === "all") {
      $(".category-selector").show();
    } else {
      // Hide all items
      $(".category-selector").hide();
      // Show items that have either one or both of the selected categories
      $('.category-selector[data-categories*="' + category + '"]').filter(function () {
        return $(this).find('.status').text().toLowerCase().includes(category);
      }).show();
    }
  });
});