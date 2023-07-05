var secondItem = document.querySelector("#items li:nth-child(2)");
secondItem.style.color = "green";

var oddItems = document.querySelectorAll("#items li:nth-child(odd)");
oddItems.forEach(function(item) {
  item.style.backgroundColor = "green";
});
