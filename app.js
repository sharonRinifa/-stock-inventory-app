const itemList = document.getElementById('item-list');

// Add sample data
let items = [
  { name: 'Apples', quantity: 10 },
  { name: 'Bananas', quantity: 5 },
  { name: 'Oranges', quantity: 3 },
];

// Render the items
renderItems();

function renderItems() {
  // Clear the item list
  itemList.innerHTML = '';
  // Add each item to the list
  items.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${item.name}</span>
      <span>${item.quantity}</span>
      <button onclick="editItem(${index})">Edit</button>
      <button onclick="deleteItem(${index})">Delete</button>
    `;
    itemList.appendChild(li);
  });
}

function addItem() {
  const itemName = document.getElementById('item-name').value;
  const itemQuantity = document.getElementById('item-quantity').value;
  if (itemName && itemQuantity) {
    const newItem = { name: itemName, quantity: parseInt(itemQuantity) };
    items.push(newItem);
    renderItems();
    document.getElementById('item-name').value = '';
    document.getElementById('item-quantity').value = '';
  }
}

function editItem(index) {
  const newName = prompt('Enter the new name for the item:');
  const newQuantity = prompt('Enter the new quantity for the item:');
  if (newName && newQuantity) {
    items[index].name = newName;
    items[index].quantity = parseInt(newQuantity);
    renderItems();
  }
}

function deleteItem(index) {
  items.splice(index, 1);
  renderItems();
}
