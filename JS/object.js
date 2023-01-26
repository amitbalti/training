var a = "apples:carrots:cherry";
var b = a.split(":");

var c = new Object();
// c.first = b[0];
// c.second = b[1];
// c.third = b[2];
for (var i = 0; i < b.length; i++) {
    // if(i=0){c.first = b[i]}
    c += b[i] + " ";
}
// c={"first":b[0], "second":b[1], "third":b[2]};
console.log(c);
