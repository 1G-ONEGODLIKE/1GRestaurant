function handleMenuItemClick(event) {
    const menuItemCard = event.currentTarget;
    const menuItemStatus = menuItemCard.querySelector('.status').textContent;
  
    if (menuItemStatus === 'On Delivery') {
      const confirmDelivery = confirm('Do you want to take it out for delivery?');
  
      if (confirmDelivery) {
        window.location.href = "location";
      }
    }
  }
  
  const menuItems = document.querySelectorAll('.menu-item');
  
  menuItems.forEach(menuItem => {
    menuItem.addEventListener('click', handleMenuItemClick);
  });  