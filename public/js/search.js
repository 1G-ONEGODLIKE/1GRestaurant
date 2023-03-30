/* jQuery */
$("#search-button").click(function () {
  const searchTerm = $("#search-input").val().trim().toLowerCase();
  $(".menu-item").each(function () {
    const itemName = $(this).find(".card-title").text().trim().toLowerCase();
    if (itemName.includes(searchTerm)) {
      $(this).show();
    } else {
      $(this).hide();
    }
  });
});

$("#search-input").on("keyup", function (event) {
  if (event.key === "Enter") {
    $("#search-button").click();
  }
});

/* JavaScript */
// const searchButton = document.getElementById("search-button");
// const searchInput = document.getElementById("search-input");
// const menuItems = document.querySelectorAll(".menu-item");
// searchButton.addEventListener("click", () => {
//   const searchTerm = searchInput.value.trim().toLowerCase();
//   menuItems.forEach((item) => {
//     const itemName = item
//       .querySelector(".card-title")
//       .textContent.trim()
//       .toLowerCase();
//     if (itemName.includes(searchTerm)) {
//       item.style.display = "block";
//     } else {
//       item.style.display = "none";
//     }
//   });
// });
