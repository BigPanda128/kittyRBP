var createObject, extendObject,
  sayHello, sayText, makeMammal,
  catPrototype, makeCat, garfieldCat,
  dogPrototype, makeDog, cliffordDog,
  humanPrototype, makeHuman, ryanHuman;
// ** Utility function to set inheritance
// Cross-browser method to inherit Object.create()
// Newer js engines (v1.8.5+) support it natively
var objectCreate = function ( arg ) {
  if ( ! arg ) { return {}; }
  function obj() {};
  obj.prototype = arg;
  return new obj;
  };

Object.create = Object.create || objectCreate;

// ** Utility function to extend an object
extendObject = function ( orig_obj, ext_obj ) {
  var key_name;
  for ( key_name in ext_obj ) {
  if ( ext_obj.hasOwnProperty( key_name ) ) {
    orig_obj[ key_name]=ext_obj[ key_name ];
    }
  }
};

// ** object methods...
sayHello = function () {
  print( this.hello_text + ' says ' + this.name );
  };

sayText = function ( text ) {
  print( this.name + ' says ' + text );
  };

// ** makeMammal constructor
makeMammal = function ( arg_map ) {
  var mammal = {
    is_warm_blooded : true,
    has_fur : true,
    leg_count : 4,
    has_live_birth : true,
    hello_text : 'grunt',
    name : 'anonymous',
    say_hello : sayHello,
    say_text : sayText
    };
  extendObject( mammal, arg_map );
  return mammal;
  };

// ** use mammal constructor to create cat prototype
catPrototype = makeMammal({
  has_whiskers : true,
  hello_text : 'meow'
  });

// base prototype for all dogs
dogPrototype = makeMammal({
  has_claws : true,
  hello_text : 'bark'
  });

// prototype for all humans
humanPrototype = makeMammal({
  leg_count : 2,
  arm_count : 2,
  hello_text : 'hello'
  });

// ** cat constructor
makeCat = function( arg_map ) {
  var cat = Object.create( catPrototype );
  extendObject( cat, arg_map );
  return cat;
  };

// dog constructer
makeDog = function( arg_map ) {
  var dog = Object.create( dogPrototype );
  extendObject( dog, arg_map );
  return dog;
  };

// human constructor
makeHuman = function( arg_map ) {
  var human = Object.create( humanPrototype );
  extendObject( human, arg_map );
  return human;
  };

// ** cat instance
garfieldCat = makeCat({
  name : 'Garfield',
  weight_lbs : 8.6
  });

// make a new instance of a dog
cliffordDog = makeDog({
  name : 'Clifford',
  fur_color : 'red'
  });

// make new instance of human aka ME
ryanHuman = makeHuman({
  name : 'Ryan Postma',
  human_age : 20
  });

// ** cat instance method invocations
garfieldCat.say_hello();
garfieldCat.say_text('Purr...');

// test new dog
cliffordDog.say_hello();
cliffordDog.say_text('Woof!!!');

// test for new human instance
ryanHuman.say_hello();
ryanHuman.say_text('I am the man, the myth, and the legend!');

