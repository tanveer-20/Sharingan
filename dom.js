function deleteItem(item) {
  const list = getListFromLocalStorage();

  // Filter out item to delete
  const updatedList = list.filter(i => i !== item);

  // Save updated list to localStorage
  localStorage.setItem('list', JSON.stringify(updatedList));

  // Re-render UI with updated list
  renderList(); 
}
