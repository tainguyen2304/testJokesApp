function filterArray (number,array) {
      if(Array.isArray(array) === true && typeof number === 'number') {
            // Duyệt mảng và lược bỏ đi phần tử bằng vói sô truyền vào   truyền vào.
           for (let i = 0; i < array.length; i++) {
                 if(array[i] === number) {
                       array.splice(i,1);
                       return array;
                 }     
           }
      }
      else console.log('Các tham số đàu vào có kiểu dữ liệu không hợp lệ.')
}


function MinMaxSum (arr) {
      if ( Array.isArray(arr) === true) {

            const length = arr.length;

            let max = arr[0];
            let min = arr[0];

            // tìm min, max trong mảng.
            for (let i = 1; i < length; i++) {
                  if(max < arr[i]) max = arr[i];
                  if(min > arr[i]) min = arr[i];
                  
            }

            // tìm mảng có tổng các phần tử lớn nhất, nhỏ nhất.
            const arrTemp1 = [...arr];
            const arrTemp2 = [...arr];
            const arrMaxSum = filterArray(min,arrTemp1);
            const arrMinSum = filterArray(max,arrTemp2);   
            console.log(arrMaxSum, arrMinSum)
            let maxSum = 0;
            let minSum = 0;

            for (let  item of arrMaxSum ) {
                  maxSum += item
            }

            for (let  item of arrMinSum ) {
                  minSum += item
            }

            console.log(minSum,maxSum);

      }

      else console.log('Tham sô đầu vào phải có kiểu dữ liệu là Array.');
      
}

const arr1 = [1,2,3,4,5];
const arr2 = [1,1,2,3,4];
const arr3 = [1,1,2,4,4];
const arr4 = [1,2,2,4,4];
const arr5 = [1,2,3,4,4];
const arr6 = [1,1,1,1,1];
const arr7 = [1,3,5,7,9];

MinMaxSum(arr7);



