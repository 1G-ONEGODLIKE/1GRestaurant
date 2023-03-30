/* jQuery */
// Add click event listener to click on dropdown items then closes the menu
$(".dropdown-item").on("click", function (e) {
  e.stopPropagation();
  var dropdown = $(this).closest(".dropdown-menu");
  dropdown.removeClass("show");
  var toggle = dropdown.prev();
  toggle.removeClass("show");
});

// Add click event listener to dropdown toggle button
$(".category").on("click", function (e) {
  e.preventDefault();
  e.stopPropagation();
  $(this).toggleClass("show");
  var menu = $(this).next();
  if (menu.hasClass("show")) {
    menu.removeClass("show");
  } else {
    menu.addClass("show");
  }
});

// Add click event listener to allow user to click outside of dropdown to close the menu
$(document).on("click", function () {
  $(".dropdown-menu").removeClass("show");
  $(".category").removeClass("show");
});


/* JavaScript */ 
// Add click event listener to click on dropdown items then closes the menu
// document.querySelectorAll(".dropdown-item").forEach(function (item) {
//   item.addEventListener("click", function (e) {
//     e.stopPropagation();
//     var dropdown = this.closest(".dropdown-menu");
//     dropdown.classList.remove("show");
//     var toggle = dropdown.previousElementSibling;
//     toggle.classList.remove("show");
//   });
// });

// // Add click event listener to dropdown toggle button
// document.querySelector(".category").addEventListener("click", function (e) {
//   e.preventDefault();
//   e.stopPropagation();
//   this.classList.toggle("show");
//   var menu = this.nextElementSibling;
//   if (menu.classList.contains("show")) {
//     menu.classList.remove("show");
//   } else {
//     menu.classList.add("show");
//   }
// });

// // Add click event listener to allow user to click outside of dropdown to close the menu
// document.addEventListener("click", function () {
//   var dropdowns = document.querySelectorAll(".dropdown-menu");
//   dropdowns.forEach(function (dropdown) {
//     dropdown.classList.remove("show");
//     var toggle = dropdown.previousElementSibling;
//     toggle.classList.remove("show");
//   });
// });