//Работа с масив
console.log('Работа с масив [5, 78, 34, 1, 54, 99, 7, 22, 11, 47, 83, 67 ]')

var array = [5, 78, 34, 1, 54, 99, 7, 22, 11, 47, 83, 67 ];


//Откриване на средната аритметична стойнсот//
for (var i=0, totall=0; i<array.length; totall += array[i++]);
console.log('Средната аритметична стойнсот на масива е: '+ totall/array.length);

//Сортиране на масива във възходящ ред//
array.sort(array);
console.log('Възходяща подредба: '+array.join(","));

//Фибоначи//

var fib = [];
fib[0]=0;
fib[1]=1;

for(i=2; i<=11; i++)
{
    fib[i] = fib[i-2] + fib[i-1];
    console.log(fib[i]);
}
