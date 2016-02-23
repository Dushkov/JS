//1 Example//
//for (var properties in window)
//console.log(properties);

//2 Example///
//var array = [ 5, 78, 34, 1, 54,676, 99, 7, 22, 11, 47, 83, 67 ];
//var temp =array[0];
//for (var i = 1; i < array.length; i++){
//    if ( temp < array[ i ]){
//        temp = array[ i ];
//    }
//}
//console.log(temp);

//Example3//
var animals = [
    { name : 'Tiger', type: 1 },
    { name : 'Turtle', type: 2 },
    { name : 'Lion', type: 1 },
    { name : 'Lizard', type: 2 }
];

for (var i = 0; i < animals.length; i++) {
    var item = animals [i];
    switch (item.type) {
        case 1:
            item.type = 'Mamal';
            break;
        case 2:
            item.type = 'Reptile';
            break;
    }
    console.log(item.name + ' is a ' + item.type)
}