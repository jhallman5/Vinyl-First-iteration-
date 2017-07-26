document.querySelector('DOM', function(event) {
  console.log( "DOM loaded" )

  [].forEach.call(document.querySelector('.delete-review').addEventListener('click', function(e){
    console.log( "(>'')>  delete called" )
    confirm('Are you sure you want to delete this review?')
      ? console.log( "(>'')>  confirmed" )
      : event.preventDefault()
  }))


})
