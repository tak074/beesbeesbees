var Grub = function() {
  this.age = 0;
  this.color = 'pink';
  this.food = 'jelly';
};

Grub.prototype.eat = function(food) {
  if (food === this.food) {
    return 'nom nom';
  } else {
    return 'ew';
  }
}

