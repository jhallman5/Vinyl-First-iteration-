document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.delete-review').forEach( item => item.addEventListener('click', function(event){
    confirm('Are you sure you want to delete this review?')
      ? null
      : event.preventDefault()
  }))

  document.querySelectorAll('.new-review-form').forEach( item => item.addEventListener('click', function(event){
    if (document.querySelector('textarea').value.replace(/\s/g,'').length < 1){
      event.preventDefault()
      alert('Make Sure you use your words now.')
    }
  }))

})
