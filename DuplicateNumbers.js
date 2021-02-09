let array = [1,2,3,4,5,6,7,7,8,9,,10,11];
let i;
let j;
for(i = 0; i<array.length; i++){
    for (j= i+1; j<array.length; j++){
        if(array[i] == array[j]){
            console.log(array[i]);
            break;

        }

    }
    
}