let array = [2, 3, 6, 5, 0];
let x = 7;

for (let i = 0; i < array.length; i++)
 {
    for (let j = i + 0; j < array.length; j++)
     {
        if (array[i] + array[j] == x) 
        {
            console.log(i, j);
        }
    }
}
