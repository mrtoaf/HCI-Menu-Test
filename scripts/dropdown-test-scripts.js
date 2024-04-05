document.getElementById('addItemButton').addEventListener('click', function() {
    // Get the selected food option
    var selectedFood = document.getElementById('dropdown-food-menu').value;

    var selectedFoodText = document.getElementById('dropdown-food-menu').options[document.getElementById('dropdown-food-menu').selectedIndex].text;

    if (selectedFoodText == "Please Select") {
        alert('Please make a selection!')
    } else {

        // Create a new list item for the order
        var newItem = document.createElement('div');
        newItem.textContent = selectedFoodText;
        newItem.style.padding = "5px 0"; // Add some spacing
        newItem.className = "order-item"

        // Add the new item to the orders box
        document.getElementById('dropdownStorage').appendChild(newItem);

    }
});

document.getElementById('resetButton').addEventListener('click', function() {

    var orderItems = document.querySelectorAll('.order-item');
    orderItems.forEach(function(item) {
        item.remove();
    });

});