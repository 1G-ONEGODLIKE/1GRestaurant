/* jQuery */
// Get the logout link element
const logoutButton = $(".link-item.logout");
// Add a click event listener to the logout link
logoutButton.on("click", function (e) {
  e.preventDefault(); // prevent the default action of the link
  if (confirm("Are you sure you want to logout from the application?")) {
    // If the user confirms the logout, show a success message and redirect to login page
    alert("You have successfully logged out from the application.");
    window.location.href = "login"; // redirect to login page
  }
});

/* JavaScript */
// Get the logout link element
// const logoutButton = document.querySelector('.link-item.logout');
// // Add a click event listener to the logout link
// logoutButton.addEventListener('click', function (e) {
//   e.preventDefault(); // prevent the default action of the link
//   if (confirm('Are you sure you want to logout from the application?')) {
//     window.location.href = '/html/login.html'; // redirect to login page
//   }
// });
