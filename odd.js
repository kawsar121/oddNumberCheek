const number = [2,3,4,5,6,7,8,9,10,11,12,14,15,];
function oDD(arry){
    const newArry = [];
    for(const list of arry){
        if(list%2===1){
            console.log(list)
            newArry.push(list)
        }
    }
    return newArry
}
const add = oDD(number)
console.log(add)