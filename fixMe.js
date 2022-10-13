// so for this program, I'm trying to create a function that will check an if my array matches anything in the other array please help me fix it! :)

function check_array(arr1, arr2) = {
  // here are the arrays that i'm checking.
  const  arr1 = [];
  const arr2 = [];
  const result = [];

  if(arr1[i] === arr2[j]){
    // find a way to "push" the matching item into the result array
  }

}

// Happy hacking!


const friend1 = ['james','mac','jess','arron','mike'];

const friend2 = ['kate','tom','jeff','jake','arron','karen'];

// if there are any mutual friends i will push them into here.
const mutualFriends = []

// to check ill use a for loop to to check in the index of the arrays match. im going to need to nest them in order for this to work.5r

for(let i = 0; i < friend1.length; i++){
    for(let j = 0; j < friend2.length; j++){
        if(friend1[i] === friend2[j]){
            mutualFriends.push(friend1[i]);
            console.log('A change has been made in mutual friends');
        } else{
          console.log("An Error has happened, Please check your code and try again.");
        }
    }
}


// if it didn't work this should be empty..
console.log(mutualFriends);