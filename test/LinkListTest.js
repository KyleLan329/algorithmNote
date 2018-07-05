const LinkList = require('../dataStructure/LinkList/LinkList');

let linkList = new LinkList();

console.log(linkList.append(6));
console.log(linkList.append(8));
console.log(linkList.prepend(9));
console.log(linkList.find({value:10,callback:null}));
console.log(linkList.find({value:6,callback:null}));
console.log(linkList.toArray());
console.log(linkList.prepend(10));
console.log(linkList.toArray());
console.log(linkList.delete(6));
console.log(linkList.toArray());
console.log(linkList.append(12));
console.log(linkList.append(15));
console.log(linkList.toArray());
console.log(linkList.deleteHead());
console.log(linkList.toArray());
console.log(linkList.deleteTail());
console.log(linkList.toArray());
console.log(linkList.toString());

