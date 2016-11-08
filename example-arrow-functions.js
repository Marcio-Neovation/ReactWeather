// var names = ["Marcio","Miranda","Lydia"];
//
// names.forEach((name) => {
//   console.log('arrowFunc',name);
// });
//
// names.forEach((name) => console.log(name));

function add (a, b){
  return a + b;
}

var addStatement = (a,b) => {
  return a + b;
};

var addExpression = (a,b) => a + b;


console.log(addStatement(3,1));
console.log(addExpression(9,0));
