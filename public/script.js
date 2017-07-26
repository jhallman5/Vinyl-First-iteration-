document.querySelector('.delete-review').addEventListener('click', function(event){
  confirm('Are you sure you want to delete this review?')
    ? null
    : event.preventDefault()
})
