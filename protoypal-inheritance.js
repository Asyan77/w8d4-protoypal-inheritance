// function Surrogate () {
//     Surrogate.prototype = SuperClass.prototype
//     Subclass.prototype = new Surrogate()
//     Subclass.prototype.constructor = Subclass
// }

Function.prototype.inherits = function (parentClass) {
   this.prototype = Object.create(parentClass.prototype)
   this.prototype.constructor = this

}

function MovingObject () {}
MovingObject.prototype.speed = function () {console.log('working?')}

function Ship () {}
Ship.inherits(MovingObject);

function Asteroid () {}
Asteroid.inherits(MovingObject);
Asteroid.prototype.size = function(){console.log(4000)}


let titanic = new Ship
let commet = new Asteroid

commet.size()
titanic.size()