const { EventEmitter } = require('events');

// projet commun
class UserService {
  events = new EventEmitter(); // PAS encore normé
  // constructor() {
  //   this.events = new EventEmitter();
  // }
  register(user) {
    // TODO register user in database
    this.events.emit('registered', user);
  }
}


// projet A
const userService = new UserService();
userService.events.on('registered', (user) => {
  console.log('send email to ' + user.username);
});

userService.register({username: 'romain', password: '1234'});
// envoi de l'email
