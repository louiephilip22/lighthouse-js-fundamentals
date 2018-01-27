var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

var x = 0;
while (ingredients[x]) {
  console.log(ingredients[x]);
  x++;
}

for (var y = 0; y < ingredients.length; y++) {
  console.log(ingredients[y]);
}

var x = ingredients.length - 1;
while (ingredients[x]) {
  console.log(ingredients[x]);
  x--;
}


for (var y = ingredients.length - 1; y > 0; y--) {
  console.log(ingredients[y]);
}