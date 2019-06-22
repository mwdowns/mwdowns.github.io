var header = document.getElementsByClassName('header')[0]

header.addEventListener('mouseenter', function() {
  header.classList.remove('fadeOut')
})
header.addEventListener('mouseleave', function() {
  header.classList.add('fadeOut')
})