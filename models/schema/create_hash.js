/* This file is used to create hashed passwords if additional seed data is required.
  Newly formed hashes need to be added to the seed.sql file in order to seed the db.
  Be sure to list the original password in the seed.sql file for reference.
*/

const bcrypt = require('bcrypt')

const passwordToHash = 'tomato'

bcrypt.hash(passwordToHash, 12 )
  .then( hash => console.log('Newly hashed password for ' + passwordToHash + ' is: ' + hash ))
  .catch( error => console.log('bcrypt error ---> ' + error ))
