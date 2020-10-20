# Learn_dev

## Вопросы JS

<details>
<summary> 1. Что такое scope и hoisting в js?</summary>
<div> 
1.1 Hosting - это JS механизм при котором объявление переменных и функций всплывают на вверх скопа до того как код был выполнен. 

На этапе компеляции, которая происходит перед выполнением кода, код сканируется для объявления функции переменных, 
которые затем добавляются в память что позволяет быть использованными даже до того как они были обявлены в исходном коде.
Декларирование и объявление поднимается в начало кода, а присвоение значений остается на своем месте.
Мы уходим от ошибок объявления переменных.   
```javascript
let hoist;
hoisting();
function hoisting() {
    console.log(hoist);
    var what = 'Объявление переменной или функции.';
    console.log('Что поднимется к вершине кода?' + what);
    hoist = 'поднятие вверх функции и переменных';
    console.log('Вспдыние это ' + hoist);
}
```
Result:   
undefined  
Что поднимется к вершине кода?Объявление переменной или функции.  
Вспдыние это поднятие вверх функции и переменных  

[Eng:](https://www.digitalocean.com/community/tutorials/understanding-hoisting-in-javascript)
Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their 
scope before code execution. Of note however, is the fact that the hoisting mechanism only moves the declaration.
The assignments are left in place. 
*In JavaScript, an undeclared variable is assigned the value undefined at execution and is also of type undefined.*
Если мы образается к переменной, которая не была обяъвлена -> *not defined*  
Если переменная была объявлена, но у нее нет значения -> *undefined*
 

#### undefined vs ReferenceError

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

The behaviour of JavaScript when handling variables becomes nuanced because of hoisting. We’ll look at this in depth in subsequent sections.




</div>
</details>

<details>
<summary>5.  В чем разница между let, var, const?</summary>
<div> 

[В чём разница между var, let и const в JavaScript:](https://medium.com/nuances-of-programming/%D0%B2-%D1%87%D1%91%D0%BC-%D1%80%D0%B0%D0%B7%D0%BD%D0%B8%D1%86%D0%B0-%D0%BC%D0%B5%D0%B6%D0%B4%D1%83-var-let-%D0%B8-const-%D0%B2-javascript-3084bfe9f7a3)     

["Переменная"](https://learn.javascript.ru/closure) – это  свойство  внутреннего объекта: Environment Record. 
«Получить или изменить переменную», означает, «получить или изменить свойство этого объекта».  

5.1 var - *function scoped*
Если вызвать вне зоны видимости получим ошибку undefined  
Eng: undefined when accessing a variable before it's declared
```javascript
function getDate () {
  var date = new Date()return date
}getDate()
console.log(date) // ❌ Reference Error
```
 Объявленным переменным присваивается значение undefined по умолчанию. Если вы попытаетесь получить
доступ к одной из этих переменных до того, как она была фактически объявлена, вам вернётся undefined 

5.2 let - *block scoped {}* 
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

5.3 const - *block scope {}*
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
<summary>3. Что такое DOM/BOM API?</summary>
<div> 
Ответ

</div>
</details>
