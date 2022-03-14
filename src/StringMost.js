import React from "react";

class StringMost extends React.Component {
  componentDidMount() {
    //bai 1
    const array = ["a", "ab", "abc", "cd", "def", "gh"];
    console.log(
      "Bai 1: Tim do dai cua chuoi xuat hien nhieu nhat trong mang: ",
      array
    );
    const findItem = (array) => {
      const temp = [];
      array.forEach((item) => {
        const tempItem = [...item];
        let itemChar = "";
        tempItem.forEach((i) => {
          itemChar += "1";
        });
        temp.push(itemChar);
      });

      let frequency = {};
      let max = 0;
      let result = "";
      for (let j in temp) {
        frequency[temp[j]] = (frequency[temp[j]] || 0) + 1;
        if (frequency[temp[j]] > max) {
          max = frequency[temp[j]];
          result = temp[j];
        }
      }

      const end = array.filter((i) => i.length === result.length);

      console.log("Ket qua: ", end);
    };

    findItem(array);

    //bai 2
    console.log("Bai 2: Tinh tong 2 so lon nhat trong mang: ");
    let arr = [1, 4, 2, 3, 5];
    console.log("Mang ban dau la: ", arr);
    let arr1 = arr.sort((a, b) => b - a);
    let arr2 = arr1.slice(0, 2);
    console.log("Mang sau khi lay 2 so lon nhat la: ", arr2);

    let sumTop2 = arr2.reduce((resultBefore, currValue) => {
      return resultBefore + currValue;
    }, 0);
    console.log("Ket qua:", sumTop2);
  }
  render() {
    return <div className="Test1"></div>;
  }
}

export default StringMost;
