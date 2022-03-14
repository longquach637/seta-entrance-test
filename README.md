# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Bài 1: 
a, Tìm độ dài của chuỗi xuất hiện nhiều nhất trong mảng:
const array = ["a", "ab", "abc", "cd", "def", "gh"];
-B1: Convert mảng ["a", "ab", "abc", "cd", "def", "gh"]  
thành ["1", "11", "111", "11", "111", "11"] và add vào 1 mảng mới 
-B2: Tìm từ xuất hiện nhiều nhất trong mảng mới đó

b, Tính tổng 2 số lớn nhất trong mảng: 
let arr = [1, 4, 2, 3, 5];
-B1: Dùng sort() để sắp xếp mảng giảm dần 
-B2: Dùng slice() để cắt mảng từ vị trí đầu tiên đến vị trí thứ 3, add vào mảng arr2
-B3: Dùng reduce() để tính tổng 2 phần tử trong mảng arr2

Bài 2: 
- Dùng async/await để gọi tới api https://jsonplaceholder.typicode.com/posts với phương thức get và lưu vào mảng
- Hiển thị dữ liệu từ mảng lên table, sử dụng bootstrap để căn chỉnh cho đẹp
- Dùng props để truyền dữ liệu từ component GetAllPost sang PostForm và hiện dữ liệu mới thêm vào ở component GetAllPost
