/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var names = ["Jan", "Mogens", "Henriette"];

names.forEach(function(name) {
    
    console.log(name);
    
});

function myForEach(arr, callBack){
    
    for (var i = 0; i < arr.length; i++){
        
        callback(arr[i]);
    }
    
    
};

myForEach(names, function(name){
    
    console.log(name);
});

