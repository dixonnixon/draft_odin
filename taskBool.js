//how many times variable myBoolean will change from true to false, vice versa,
//from false to false(??), from true to true (???)
var myBoolean = false;

if (myBoolean) {
  myBoolean = false;
}

if (myBoolean === false) {
  myBoolean = true;
}

if (myBoolean) {
  myBoolean = true;
} else {
  myBoolean = false;
}

if (myBoolean) {
  myBoolean = false;
}

if (myBoolean === false) {
  myBoolean = true;
}

if (myBoolean) {
  myBoolean = true;
} else {
  myBoolean = false;
}

// let a = {b:5};
//a1.b = function() { console.log(this); this.b = a1; };
//a1.b.b.b.b.b.b.b.b.b.b.b == a1.b.b.b.b.b;