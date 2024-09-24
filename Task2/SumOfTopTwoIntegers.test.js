//  Hàm tính tổng 2 số nguyên lớn nhất với đầu vào là 1 mảng các sô nguyên, phức tạp O(n)
function SumOfTopTwoIntegers(arr) {
    // Kiểm tra điều kiện đầu vào
    if (!(arr instanceof Array) || arr.length < 2) return 'invalid input'; 
    
    // Khởi tạo biến lưu trữ giá trị lớn nhất và lớn nhì tìm được
    let first = -Infinity;      
    let second = -Infinity;    

    // Duyệt qua tất cả các phần tử của mảng, cập nhật các giá trị lớn nhất tìm được, phức tạp O(n)
    for (let num of arr) {
        // Kiểm tra từng giá trị xem có là integer không
        if (!Number.isInteger(num)) return 'invalid input'
        
        // Giá trị mới lớn hơn thứ nhì thì lưu lại
        if (num > second) second = num;
        
        // Thứ nhì vừa lưu mà lớn hơn thứ nhất thì hoán vị
        if (second > first) {
            let temp = first;
            first = second;
            second = temp;
        }
    }
    
    return first + second;
}

// Unit test cho hàm SumOfTopTwoIntegers
describe('SumOfTopTwoIntegers', () => {
    test('should return the sum of top two integers', () => {
        expect(SumOfTopTwoIntegers([1, 2, 3, 4, 5, 6])).toEqual(11);
        expect(SumOfTopTwoIntegers([1, 1, 1, 1, 1, 1])).toEqual(2);
        expect(SumOfTopTwoIntegers([-1, -1, 0, 3, 2, 1])).toEqual(5);
    });

    test('should return a message for invalid input', () => {
        expect(SumOfTopTwoIntegers([1])).toEqual('invalid input');
        expect(SumOfTopTwoIntegers('1,2,3')).toEqual('invalid input');
        expect(SumOfTopTwoIntegers([1,2,'a'])).toEqual('invalid input');
    });
});

