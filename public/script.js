document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.delete-review').forEach( item => item.addEventListener('click', function(event){
    confirm('Are you sure you want to delete this review?')
      ? null
      : event.preventDefault()
  }))
})
