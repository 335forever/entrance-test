// Hàm đưa ra danh sách chuỗi có độ dài xuất hiện nhiều lần nhất, phức tạp O(n)
function mostFrequentStringLengths(arr) {
    // Kiểm tra đầu vào
    if (!(arr instanceof Array)) return 'invalid input'
    
    // Khởi tạo đối tượng lưu lại danh sách chuối có độ dài tương ứng (chuồng)
    const store = {};
    
    // Khởi tạo đối tượng lưu lại kết quả (tránh việc phải duyệt qua chuồng để tìm kết quả)
    const result = {
        length: 0,
        arr: []
    }
  
    // Duyệt qua từng chuỗi trong mảng, đẩy dần vào chuồng phù hợp, phức tạp O(n)
    for (let str of arr ) {
        // Kiểm tra từng giá trị có là chuỗi không
        if (!(typeof str === 'string')) return 'invalid input'

        if (!store[str.length]) store[str.length] = [str];      // Nếu chuồng giữ chuỗi độ dài này chưa có, tạo mới
        else store[str.length].push(str);                       // Nếu đã có chuồng, đẩy chuỗi vào
        
        // Cập nhật dữ liệu của kết quả sau sau hành động thêm xâu vào chuồng
        if (store[str.length].length > result.length) {
            result.length = store[str.length].length;
            result.arr = store[str.length]
        }
    }

    return result.arr;
}

// Unit test cho hàm mostFrequentStringLengths
describe('mostFrequentStringLengths', () => {
    test('should return the most frequent string lengths', () => {
        expect(mostFrequentStringLengths(['a', 'ab', 'abc', 'cd', 'def', 'gh'])).toEqual(['ab', 'cd', 'gh']);
        expect(mostFrequentStringLengths(['', 'a', 'b', 'cc', 'ddd', 'eeee'])).toEqual(['a', 'b']);
        expect(mostFrequentStringLengths(['', '', '', '1', '12', '123'])).toEqual(['', '', '']);
        expect(mostFrequentStringLengths(['one', 'two', 'three', 'four', 'five', 'six'])).toEqual(['one', 'two', 'six']);
    });

    test('should return an empty array for empty input', () => {
        expect(mostFrequentStringLengths([])).toEqual([]);
    });

    test('should return a single string for single input', () => {
        expect(mostFrequentStringLengths(['a'])).toEqual(['a']);
        expect(mostFrequentStringLengths([''])).toEqual(['']);
    });

    test('should provide valid input', () => {
        expect(mostFrequentStringLengths(['a', 1])).toEqual('invalid input');
        expect(mostFrequentStringLengths([1, 2, 3])).toEqual('invalid input');
    });
});