
// remove duplicate alphabet


let alp = ["a", "b", "c", "d", "e", "a", "f", "c", "a", "`z`"];
console.log("Original : "+alp);


for (let i = 0; i < alp.length; i++) {
    for (let j = i + 1; j <= alp.length - 1; j++) {
        if (alp[i] === alp[j]) {
            // console.log("asdfas" + alp[j], j);
            // console.log(alp[j]);
            alp.splice(j, 1);
        }
        // console.log("first loop value "+alp[i]);
        // console.log("second loop value "+alp[j]);
    }
}

console.log("After removing duplicate : "+alp);




// Check fruit is in bucket

let userinp = prompt("Enter Fruit Name");
let fruits = ["apple", "banana", "mango"];
userinp = userinp.toLocaleLowerCase();
let isFound = false ;
for(let i = 0 ; i < fruits.length ; i++){
    if(userinp === fruits[i]){
        console.log(fruits[i]+" is avalible on index " + i);
        isFound = true;
    }

}
if(isFound === false){
    console.log("Fruit is not avalilable");
}





// union question


    // let num1 =[1,2,3,4];
    // let num2 = [3,4,5,6];
    // let numlength = num1.length + num2.length;
    // let finalnum = [];
    // for(let i =0; i < num1.length;i++){
    //     finalnum += num1[i];
    // }    
    // for(let i =0; i < num2.length;i++){
    //     finalnum += num2[i];
    // }    
    // console.log(finalnum);
    // console.log(finalnum.length);
    // for(let i = 0; i < finalnum.length ; i++){
    //     for(let j = i +1 ; j < finalnum.length ; j++){
    //         if(finalnum[i] === finalnum[j]){
    //             console.log(finalnum[j])
    //         }
    //     }
    // }
    // console.log(finalnum);
