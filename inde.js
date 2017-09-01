find用法
let data = [1,5,20,25].find (value => value > 10)
console.log(data);

函数式编程
map 将原数组"映射"成新的数组
let a = [1,2,3]

let b = a.map(t => t*t)
console.log(b);
filter筛选方法
let a = [1,2,3,12,20,15]

let b = a.filter(t =>t>10)
console.log(b);
array.reverse()讲数组逆序输出
let a = [1,2,3,12,20,15]
let b = a.reverse()
console.log(b);
另一个例子 会输出所有字母数大于6的单词
const words = ["spray", "limit", "elite", "exuberant", "destruction", "present"]

const longWords = words.filter(word => word.length > 6)

Opject.assing方法用于对象合并,将源对象（source）的所有可枚举属性，
复制到目标对象（target）。
var target = { a: 1 };

var source1 = { b: 2 };
var source2 = { c: 3 };

Object.assign(target, source1, source2);
console.log(target);  //{a:1, b:2, c:3}

Opject.keys方法  可以把一个对象所有的 key (属性名) 都拿出来,组成一个数组.
Opject
const obj = {a:1,b:2,c:3}
// console.log(Object.keys(obj))
Object.keys(obj).map(t => console.log(obj[t]))
对象展开运算符 ...用法
let c = { b:3 }
console.log({ ...c})
Promise 用法 promise是一个盒子,包含一个未来事件.
事件成功触发.then函数中的处理函数。如果事件失败，就会触发 .catch 。

编程风格有两种,一种是AirBnd风格,一种是标准编程风格
