// function getTempCallback(location, callback){
//   callback(undefined,78);
//   callback('City not found');
//
// }
//
// getTempCallback("Manitoba", function (err,temp){
//
//   if(err){
//     console.log('error',err);
//   } else {
//     console.log('success',temp);
//   }
//
// });
//
// function getTempPromise(location){
//
//   return new Promise(function(resolve,reject){
//     resolve(79);
//     reject("City not found");
//   });
//
// }
//
// getTempPromise("Winnipeg").then(function(temp){
//   console.log("Promise success", temp);
// }, function(err){
//   console.log("Promise error", temp);
// });
//

function addPromise(a, b){

    return new Promise(function(resolve,reject){
      if(typeof a === 'number' && typeof b === 'number'){
        resolve(a + b);
      } else {
        reject("Invalid number");
      }
    });

  }

  addPromise(1,2).then(function(total){
    console.log("addPromise Success", total);
  }, function(err){
    console.log("Promise fail", err);
  });

  addPromise(1,"b").then(function(total){
    console.log("addPromise Success", total);
  }, function(err){
    console.log("Promise fail", err);
  });

  addPromise(500,25).then(function(total){
    console.log("addPromise Success", total);
  }, function(err){
    console.log("Promise fail", err);
  });

  addPromise("asdf",2).then(function(total){
    console.log("addPromise Success", total);
  }, function(err){
    console.log("Promise fail", err);
  });
