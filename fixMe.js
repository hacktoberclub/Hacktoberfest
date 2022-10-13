// Here is an example of what it should do, to test this code make sure you have node js install, and in the terminal type node.js <this files name.ext> and see what the result is, 
// once you get the result that you are looking for add the changes using your git skills and push and go on github and merge the change for your chance to be one step closer to a free shirt.


const friend1 = ['james','mac','jess','arron','mike'];
const friend2 = ['kate','tom','jeff','jake','arron','karen'];

// if there are any mutual friends i will push them into here.
const mutualFriends = []

// to check ill use a for loop to to check in the index of the arrays match. im going to need to nest them in order for this to work.

for(let i = 0; i < friend1.length; i++){
    for(let j = 0; j < friend2.length; j++){
        if(friend1[i] === friend2[j]){
            mutualFriends.push(friend1[i]);
            console.log('A change has been made in mutual friends');
        } else{
          console.errpr("An Error has happened, Please check your code and try again.");
        }
    }
}
// if it didn't work this should be empty..
console.log(mutualFriends);
// ===================================================================================================================================================================================================
// Now you try 








// so for this program, I'm trying to create a function that will check an if my array matches anything in the other array please help me fix it! :)
function check_array(arr1, arr2){
  // here are the arrays that i'm checking.
  const  arr1 = [];
  const arr2 = [];
  const result = [];

  if(arr1[a] === arr2[b]) {
  
    for(let a = 0; a < arr1.length; a++){
      for(let b = 0; b < arr2.length; b++){
        if(arr1[a] === arr2[b]{
           // find a way to "push" the matching item into the result array
          
        })
      }
    }
  }

}

// Happy hacking!


