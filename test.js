
// let a = [1,2,3,4,5,6,7,8,9,'a','b','c','d'];
// let b = a[Math.floor(Math.random() * 13)] 
// console.log(b);

/**
 * 冒泡法排序
 */

function ArrayList() {
    var array = []; //{1}
    this.insert = function (item) { //{2}
        array.push(item);
    };
    this.toString = function () { //{3}
        return array.join();
    };
    this.bubbleSort = function () {
        var swap = function (index1, index2) {
            var aux = array[index1];
            array[index1] = array[index2];
            array[index2] = aux;
        };
        var length = array.length; //{1}
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - 1 - i; j++) { //{1}
                if (array[j] > array[j + 1]) {
                    swap(j, j + 1);
                }
            }
        }
    };
}

function createNonSortedArray(size) { //{6}
    var a = new ArrayList();
    for (var i = size; i > 0; i--) {
        a.insert(i);
    }
    return a;
}
var ar = createNonSortedArray(5); //{7}
console.log(ar.toString()); //{8}
ar.bubbleSort(); //{9}
console.log(ar.toString());