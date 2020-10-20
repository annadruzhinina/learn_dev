let hoist;
hoisting();
function hoisting() {
    console.log(hoist);
    var what = 'Объявление переменной или функции.';
    console.log('Что поднимется к вершине кода?' + what);
    hoist = 'поднятие вверх функции и переменных';
    console.log('Вспдыние это ' + hoist);
}
