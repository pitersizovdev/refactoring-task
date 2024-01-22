//храним работы в массивах, а массивы (категории) в объекте
let categories = {

    td: ["img/Carabins.png", "img/gun.png", "img/shield.jpg", "img/image.jpg", "img/robo.jpg"],
    graphic: ["img/Key.jpg", "img/cover1.jpg", "img/vpr.jpg"],
    other: ["img/lipstick.jpg", "img/shirt.jpg", "img/logo.jpg", "img/elden.jpg"]
}

let megabox = document.querySelector('.megabox');   //получаем доступ к HTML мегабокса

function showImages(key) {
    let imgList;
    if (categories[key]) {
        imgList = categories[key]; //если есть определный ключ, то выводим соответвующий массива из обекта
    } else {
        imgList = [...categories.td, ...categories.graphic, ...categories.other] //в противном случае выводим все (массива all нет, поэтому будут выведены все). Достаем из массива неизвестное колличество картинок через способ диструктуризации spread(...)
    }

    megabox.innerHTML = '' //сброс мегабокса перед обновлением, чтобы новый вызов массива не накладывался на старый

    imgList.forEach((imgName) => {
        let img = document.createElement('img') //для каждого элемента в выбранном выше массиве создаем HTML объект <img>
        img.src = imgName                       //подключаем источник изображения
        megabox.appendChild(img)                //теперь просто добавляем друг за другом(посылаем) картиночки в megabox

        //для плавности появления
        setTimeout(() => {
            img.style.opacity = 1;
        })
    })
}

showImages('all'); //изначально все видны

document.querySelector('#all').addEventListener('click', () => showImages('all')); 
document.querySelector('#td').addEventListener('click', () => showImages('td'));            //посылаем название нужного нам массива
document.querySelector('#graphic').addEventListener('click', () => showImages('graphic'));
document.querySelector('#other').addEventListener('click', () => showImages('other'));