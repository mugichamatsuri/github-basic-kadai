//変数numに1以上の正の数を代入する
let num = 22;

//変数(num)が15の倍数の場合、"3と５の倍数です"と出力する
if (num%15 === 0){
    console.log('3と5の倍数です');
}
//変数(num)が3の倍数の場合、“3の倍数です”と出力する
else if (num%3 === 0){
    console.log('３の倍数です');
}
//変数(num)が5の倍数の場合、"5の倍数です"と出力する
else if (num%5 === 0){
    console.log('5の倍数です');
}

else {
    console.log(num);
}






 