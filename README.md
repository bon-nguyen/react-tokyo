/* Dynamic class */

Add a dynamic class

/* Conditional render */
Đảm bảo việc render trong react chính là JSX. Width những câu lệnh như if else , switch case
Example, 1 Conditional rendering will have return 1 list data item or 1 message "list is empty"
+ (If else)
+ Conditional (ternary) operator (X ?  x: y)
+ Logical && operator (a && component)
+ Switch case operator (Switch case)


/* State */
state để lưu giá trị nội tại của components 
State in react: An overview

State is a plain Javascript object used by React to represent an information about the component's current situation (tình hình)
+ It managed in the component (just like any variable declared in a function)

- As a rule of thumb. 
IF components needs to act it's own attribute changes. Then those attributes should be part of its state . Local state is a feature only available to classes.
> Function component is to be discussed (Thảo luận) later (sau).
>Class components #.
The correct usage of `State` implicates that one does not apply changes directly to the state variable 

Since this won't be considered (được xem xét) a change by React.
Instead we should go through this using setState() which is the function that schedules updates to state object.

However, setState() dose not always immediately(ngay lập tức) update the components.
-> It may batch or defer the update until later. This makes reading this.state right after calling setState() a potential pitfall
> setState() is asynchronous 

/* Hook and State*/

it's a hook that returns a pain of values. The current state and a function that update 
`state in class component is always an object with hook[arr, object, boolean]`

Example 
IF you want to update the state based on a components's new props
const avatar = (user) => (
    const userState  = useState(user);
)
==> alone won't work because its argument is used the first time only


/* Handling events*/

=>>Component render only Props or State onchange

/* Immutability */
// Luôn luôn dùng const để khai báo dữ liệu

const str = new String("Demo immutability");
str.myNew = "abc";
console.log(str.myNew) => show data
==> String are immutable
{a: 1} => { a: 2} => a bị thay đổi bởi cái immutable nào đó
const a = [5, 4, 1];
a.sort()
->>> a  = [1, 4, 5] -> a đã thị thay đổi immutable bênh trong.

-> Hạn chế immutable bênh trong object  
--> Some anti-immutable <--
+ var a = [1, 2, 4]  => var b = [].contact[a, 5] ;   ==> output b: [1, 2, 4, 5] 
 + Spread with Object in ES6. 
 Example c= [...b, 5] => [1, 2, 3, 4, 5]

 + Javascript slice()
 c = a.slice()
==> Object 