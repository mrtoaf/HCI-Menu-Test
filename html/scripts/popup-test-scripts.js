function displayResult(itemText, resultContainerId) {
    const ordersBox = document.getElementById('dropdownStorage');
    const newItem = document.createElement('div');
    newItem.textContent = itemText;
    newItem.style.padding = "5px 0";
    ordersBox.appendChild(newItem);
    newItem.className = "order-item"
}


document.getElementById('menuButton').addEventListener('click', function() {
    const menu = document.getElementById('menuPopup');
    menu.classList.toggle('hidden');
});


document.querySelectorAll('.category').forEach(function(category) {
    category.addEventListener('click', function() {
        const itemList = this.querySelector('ul');
        itemList.classList.toggle('hidden');
    });
});


document.querySelectorAll('#menuPopup .category ul li').forEach(function(item) {
    item.addEventListener('click', function(event) {
        displayResult(this.innerText, 'dropdownStorage');
        event.stopPropagation();
    });
});

document.getElementById('resetButton').addEventListener('click', function() {

    const menu = document.getElementById('menuPopup');
    menu.classList.toggle('hidden');
    
    var orderItems = document.querySelectorAll('.order-item');
    orderItems.forEach(function(item) {
        item.remove();
    });


});
