var amount = 1

function gainExp () {
  document.getElementById('guard-name').textContent = 'Kitty Kat'
  var max = 100
  var progress = document.getElementById('progress')
  if (amount <= max) {
    console.log(amount)
    progress.style.width = amount + '%'
    amount += 1 // change this to whatever amount is set to
    console.log(progress.style.width >= max)
  } else if (amount >= max) {
    console.log('Before: ', progress.style.width)
    progress.style.width = 100 + '%'
    console.log('After: ', progress.style.width)
  }
};

gainExp()
