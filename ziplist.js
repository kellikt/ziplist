function zipList(list1, list2) {
  const returnList = [];
  for (let x = 0; x < list1.length; x++) {
    returnList.push(list1[x]);
    returnList.push(list2[x]);
  }
  return returnList;
}

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

const testList1 = [1, 2, 3, 4, 5];
const testList2 = ['a', 'b', 'c', 'd', 'e'];

console.log(zipList(testList1, testList2));
console.log(zipListTheSimpleWay(testList1, testList2));
