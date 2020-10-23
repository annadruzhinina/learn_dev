# Learn_dev

## Вопросы JS
<details>
<summary> 1. Как исполняется Js(как движок Js выполняет код)</summary> 
<div>
Js исполняется в 2 прохода.

1.1 Compilation phase - the process of defining/declaration variables and functions;  
1.2 Exicution phase - the process of assignement values to the variab les and exicution.  

</div>
</details> 

<details>
<summary> 2. Что такое Scope и Hoisting в js?</summary>
<div>  

##Hosting   

2.1 Hoisting/подъем переменных в своем scope (именно их declaration, а не присвоене значений и не выполнение)
Hosting - это JS механизм при котором объявление переменных и функций всплывают на вверх скопа до того как код был выполнен. 

На этапе компеляции, которая происходит перед выполнением кода, код сканируется для объявления функции переменных, 
которые затем добавляются в память что позволяет быть использованными даже до того как они были обявлены в исходном коде.
Декларирование и объявление поднимается в начало кода, а присвоение значений остается на своем месте.
Мы уходим от ошибок объявления переменных.     

```javascript
function hoist() {
  a = 20;
  var b = 100;
}
hoist();
console.log(a);
/*
Accessible as a global variable outside hoist() function
Output: 20
*/
console.log(b);
/*
Since it was declared, it is confined to the hoist() function scope.
We can't print it out outside the confines of the hoist() function.
Output: ReferenceError: b is not defined
*/
``` 

[Eng:](https://www.digitalocean.com/community/tutorials/understanding-hoisting-in-javascript)
Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their 
scope before code execution. Of note however, is the fact that the hoisting mechanism only moves the declaration.
The assignments are left in place. 
*In JavaScript, an undeclared variable is assigned the value undefined at execution and is also of type undefined.*
Если мы образается к переменной, которая не была обяъвлена -> *not defined*  
Если переменная была объявлена, но у нее нет значения -> *undefined*
 

#### Undefined vs ReferenceError

Before we begin in earnest, let’s deliberate on a few things.
```javascript
nconsole.log(typeof variable); // Output: undefined
```
This brings us to our first point of note:

    In JavaScript, an undeclared variable is assigned the value undefined at execution and is also of type undefined.

Our second point is:
```javascript
console.log(variable); // Output: ReferenceError: variable is not defined
```
In JavaScript, a ReferenceError is thrown when trying to access a previously undeclared variable.  

2.2 Scope/Область видимисти?

In the programming language defines the visibility and lifetime of variables, parameters and functions.
</div>
</details>

<details>
<summary>3.  В чем разница между let, var, const?</summary>
<div> 

###Cсылки:  
["var vs let vs const in JavaScript"](https://tylermcginnis.com/var-let-const/)
["В чём разница между var, let и const в JavaScript:"](https://medium.com/nuances-of-programming/%D0%B2-%D1%87%D1%91%D0%BC-%D1%80%D0%B0%D0%B7%D0%BD%D0%B8%D1%86%D0%B0-%D0%BC%D0%B5%D0%B6%D0%B4%D1%83-var-let-%D0%B8-const-%D0%B2-javascript-3084bfe9f7a3)     

["Переменная"](https://learn.javascript.ru/closure) – это  свойство  внутреннего объекта: Environment Record. 
«Получить или изменить переменную», означает, «получить или изменить свойство этого объекта».  

3.1 var - *function scoped* (область видимости перемененой внутри фигурных скобок функции)
Если вызвать вне зоны видимости получим ошибку undefined  
Eng: undefined when accessing a variable before it's declared
```javascript
function getDate () {
  var date = new Date()return date
}getDate()
console.log(date) // ❌ Reference Error
```
Объявленным переменным присваивается значение undefined по умолчанию, те если попытаться получить
доступ к одной из этих переменных до того, как она была фактически объявлена, вернётся undefined 

3.2 let - *block scoped}* (область видимости перемененой внутри первых фигурных скобок)
Если вызвать вне зоны видимости получим ошибку ReferenceError вместо значения undefined.  
Eng: ReferenceError when accessing a variable before it's declared

```javascript
function discountPrices (prices, discount) {
  let discounted = []for (let i = 0; i < prices.length; i++) {
    let discountedPrice = prices[i] * (1 - discount)
    let finalPrice = Math.round(discountedPrice * 100) / 100
    discounted.push(finalPrice)
  }console.log(i) // 3
  console.log(discountedPrice) // 150
  console.log(finalPrice) // 150return discounted
}discountPrices([100, 200, 300], .5) // ❌ ReferenceError: i is not defined
```

3.3 const - *block scope*(область видимости перемененой внутри первых фигурных скобок)
Главное отличие const от let - начение переменной, объявленной с помощью const, нельзя переназначить.  

```javascript
let name = 'Tyler'
const handle = 'tylermcginnis'name = 'Tyler McGinnis' // ✅
handle = '@tylermcginnis' // ❌ TypeError: Assignment to constant variable.
```
Но изменение свойства объекта не является его переназначением!
```javascript
const person = {
  name: 'Kim Kardashian'
}person.name = 'Kim Kardashian West' // ✅person = {} // ❌ Assignment to constant variable.
```

</div>

</details>

<details>
<summary>4. Closures/замыкание.</summary>
<div>

##Определение
Замыкание — это функция, объявленная внутри другой функции и имеющая доступ к переменным внешней (вмещающей) функции и ее параметрам.
Другими словами -> замыкание дает вам доступ к Scope внешней функции из внутренней функции.
Замыкание имеет доступ сразу к трем областям видимости:

4.1 к своей собственной области видимости (переменные, объявленные внутри замыкания);
4.2 к области видимости внешней функции (переменные и, объявленные внутри внешней функции)
4.3 к глобальной области видимости.    

##Пример 

```javascript
function showName(firstName, lastName) {
    var nameIntro = "Your name is ";

    function makeFullName() {
        return nameIntro + firstName + " " + lastName;
    }

    return makeFullName();
}
```
Замыкания_хранят_ссылки_на_переменные_внешней_функции_а_не_фактические_значения

Такая интересная особенность позволяет описывать приватные переменные.

```javascript
function user() {
    var name = ‘Unknown’;
    return {
        getName: function() {
            return name;
        },
        setName: function(newName) {
            name = newName;
        }


    }
}

var testUser = user();
testUser.getName(); // Unknown
testUser.setName(‘John Smith’); // Изменяем значение приватной переменной
testUser.getName(); // John Smith

showName("Michael", "Jackson"); // Your name is Michael Jackson 
```
Полезные_ссылки_и_спасибо_за_предоставленные_материалы:

["Замыкания"](https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures)  
["Замыкания в JavaScript"](http://getinstance.info/articles/javascript/closures-in-javascript/)
</div>
</details>
