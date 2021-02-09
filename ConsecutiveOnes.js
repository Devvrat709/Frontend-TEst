let array = [1,1,1,1,1,1,0,0,1,0,1,0];
let previous = -1;
let result =0;
for (let i = 0; i< array.length +1; i++){
    if(array[i]!=1){
        result = Math.max(result, i- previous-1);
        previous = i;
        }
    }
    console.log(result);
