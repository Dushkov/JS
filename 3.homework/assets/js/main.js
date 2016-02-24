//Откриване на средна аритметична стойнст в масив

var array = [5, 78, 34, 1, 54, 99, 7, 22, 11, 47, 83, 67 ];
for (var i = 0, totall = 0; i < array.length; totall += array[i++]);
console.log('Средната аритметична стойнсот е '+ totall/array.length);
