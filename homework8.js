/*
Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные параграфы в div с классом numbers.
*/
const div = document.querySelector(".numbers")

for (let index = 100; index >= 50; index = index - 10){
    const p = document.createElement("p")
    p.innerText = index.toString();
    div.append(p)
}

/*
Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и добавляет его в div с классом stringscontainer. Строки взять произвольные.
*/

const arr = ["liverpool", "real m", "inter", "barcelona"]
const div2 = document.querySelector(".stringscontainer")

for (let index = 0; index < arr.length; index++){
    const p = document.createElement("p")
    p.innerText = arr[index]
    div2.append(p)
}

/*
Написать цикл, который проходится по массиву с объектами - у объектов свойства firstname, lastname и  age (данные взять произвольные) - и создает карточки только для совершеннолетних пользователей. Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. Добавить все карточки в div с классом userscontainer.
*/
const arr2 = [
    {firstName: "Bob", lastName: "Smith", age: 33},
    {firstName: "John", lastName: "Weak", age: 35},
    {firstName: "Will", lastName: "Jimmkins", age: 16}
]

const userInfoCard = arr2.filter(arr2 => arr2.age >= 18);
for (let index = 0; index < userInfoCard.length; index++) {
    userInfoCard[index]['id'] = index+1;
}

const div3 = document.querySelector(".userscontainer")
for (let index = 0; index < userInfoCard.length; index++){
    const p = document.createElement("p")
    p.innerText = `- - - - - - - - - - - - -\nUsercard:\nID:${userInfoCard[index].id}\nName: ${userInfoCard[index].firstName}\nLastname: ${userInfoCard[index].lastName}\nAge: ${userInfoCard[index].age}\n- - - - - - - - - - - - -`;
    div3.append(p)
}