let starsArray = [];//массив звезд точнее ячеек с картинками звезд


function GenerateNewStarId(){//функция генерирующая "адрес" звезды в ячейке случайным образом
    let row = Math.round(Math.random()*RowCount);
    let col = Math.round(Math.random()*ColumnCount);
    return "col_" + row + "_" + col;
}
function insertStar(star){//функция выбирает случайным образом какую звезду вставить
    if (Math.round(Math.random()) == 1)
        $("#" + star).append(`<img src="star1.jpg"/>`);
    else
        $("#" + star).append(`<img src="star2.jpg"/>`);
    
}

let starCount = Math.round(RowCount * ColumnCount * 0.2);//20% звезд на небе (коэффициент заполнения неба)

starsArray.push(GenerateNewStarId());
for (let i = 0; i < starCount; i++){//заполняем массив из звезд, точнее адреса их размещения в сетке "звездного неба"
    let star_id = GenerateNewStarId();

    while (starsArray.includes(star_id)){//проверяем если у нас в массиве такойже адрес, если есть то генерируем новый
        star_id = GenerateNewStarId();
    }
    starsArray.push(star_id);
}

starsArray.forEach((star) =>{//добавляем элемент img внутрь элемента td
    insertStar(star);

});

setInterval(() => {
    let star_id = starsArray[0];
    $('#' + star_id).empty();//очищаем содержимое ячейки
    starsArray.shift();//удаляем 1й id из массива
    star_id = GenerateNewStarId();//создаем новый элемент (ячейку)
    while (starsArray.includes(star_id) || constellations.includes(star_id)){//проверяем чтоб новой ячейки не было в массиве звезд и масииве созвездий
        star_id = GenerateNewStarId();//если такая уже есть создаем новую
    }

    starsArray.push(star_id);//добавляем ячейку в массив
    insertStar(star_id);//добавляем звезду(картинку) в ячейку
}, 100)
