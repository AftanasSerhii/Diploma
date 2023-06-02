DATA_BASE_BOOKS = [
    {
        img: "book-1.jpg",
        name: "Гаррі Потер і прокляте диття",
        autor: "Дж К Ролінг"
    },
    {
        img: "book-2.jpg",
        name: "Маленький принц",
        autor: "Антуан де Сент-Екзюпері"
    },
    {
        img: "book-3.jpg",
        name: "1984",
        autor: "Джордж Орвелл"
    },
    {
        img: "book-4.png",
        name: "451 градус за Фаренгейтом",
        autor: "Рей Бредбері"
    },
    {
        img: "book-5.jpg",
        name: "І не лишилось жодного",
        autor: "Агата Крісті"
    },
    /* {
        img: "book-6.jpg",
        name: "Тіні забутих предків",
        autor: "Михайло Коцюбинський"
    },
    {
        img: "book-7.jpg",
        name: "Володар перснів: Братерство персня",
        autor: "Джон Роналд Руел Толкін"
    },
    {
        img: "book-8.jpg",
        name: "Кандід",
        autor: "Вольтер"
    },
    {
        img: "book-9.jpg",
        name: "Країна імли",
        autor: "Артур Конан Дойл"
    },
    {
        img: "book-10.jpg",
        name: "Талісман",
        autor: "Стівен Кінг Пітер Страуб"
    }, */
] 

let page3Input = document.querySelector('.section-search_input');

if(page3Input != null) {
       DATA_BASE_BOOKS = [
        {
            img: "book-1.jpg",
            name: "Гаррі Потер і прокляте диття",
            autor: "Дж К Ролінг"
        },
        {
            img: "book-2.jpg",
            name: "Маленький принц",
            autor: "Антуан де Сент-Екзюпері"
        },
        {
            img: "book-3.jpg",
            name: "1984",
            autor: "Джордж Орвелл"
        },
        {
            img: "book-4.png",
            name: "451 градус за Фаренгейтом",
            autor: "Рей Бредбері"
        },
        {
            img: "book-5.jpg",
            name: "І не лишилось жодного",
            autor: "Агата Крісті"
        },
        {
            img: "book-6.jpg",
            name: "Тіні забутих предків",
            autor: "Михайло Коцюбинський"
        },
        {
            img: "book-7.jpg",
            name: "Володар перснів: Братерство персня",
            autor: "Джон Роналд Руел Толкін"
        },
        {
            img: "book-8.jpg",
            name: "Кандід",
            autor: "Вольтер"
        },
        {
            img: "book-9.jpg",
            name: "Країна імли",
            autor: "Артур Конан Дойл"
        },
        {
            img: "book-10.jpg",
            name: "Талісман",
            autor: "Стівен Кінг Пітер Страуб"
        },
        {
            img: "book-1.jpg",
            name: "Гаррі Потер і прокляте диття",
            autor: "Дж К Ролінг"
        },
        {
            img: "book-2.jpg",
            name: "Маленький принц",
            autor: "Антуан де Сент-Екзюпері"
        },
        {
            img: "book-3.jpg",
            name: "1984",
            autor: "Джордж Орвелл"
        },
        {
            img: "book-4.png",
            name: "451 градус за Фаренгейтом",
            autor: "Рей Бредбері"
        },
        {
            img: "book-5.jpg",
            name: "І не лишилось жодного",
            autor: "Агата Крісті"
        },
        {
            img: "book-6.jpg",
            name: "Тіні забутих предків",
            autor: "Михайло Коцюбинський"
        },
        {
            img: "book-7.jpg",
            name: "Володар перснів: Братерство персня",
            autor: "Джон Роналд Руел Толкін"
        },
        {
            img: "book-8.jpg",
            name: "Кандід",
            autor: "Вольтер"
        },
        {
            img: "book-9.jpg",
            name: "Країна імли",
            autor: "Артур Конан Дойл"
        },
        {
            img: "book-10.jpg",
            name: "Талісман",
            autor: "Стівен Кінг Пітер Страуб"
        },
        {
            img: "book-1.jpg",
            name: "Гаррі Потер і прокляте диття",
            autor: "Дж К Ролінг"
        },
        {
            img: "book-2.jpg",
            name: "Маленький принц",
            autor: "Антуан де Сент-Екзюпері"
        },
        {
            img: "book-3.jpg",
            name: "1984",
            autor: "Джордж Орвелл"
        },
        {
            img: "book-4.png",
            name: "451 градус за Фаренгейтом",
            autor: "Рей Бредбері"
        },
        {
            img: "book-5.jpg",
            name: "І не лишилось жодного",
            autor: "Агата Крісті"
        },
        {
            img: "book-6.jpg",
            name: "Тіні забутих предків",
            autor: "Михайло Коцюбинський"
        },
        {
            img: "book-7.jpg",
            name: "Володар перснів: Братерство персня",
            autor: "Джон Роналд Руел Толкін"
        },
        {
            img: "book-8.jpg",
            name: "Кандід",
            autor: "Вольтер"
        },
        {
            img: "book-9.jpg",
            name: "Країна імли",
            autor: "Артур Конан Дойл"
        },
        {
            img: "book-10.jpg",
            name: "Талісман",
            autor: "Стівен Кінг Пітер Страуб"
        },
    ] 
}

const popularList = document.querySelector(".section-popular_list");

for (let key in DATA_BASE_BOOKS) {
    popularList.innerHTML += `
        <div class="section-popular_element">
            <a class="section-popular_element_link" href="#" data-popup="popup"> 
                <img class="section-popular_elem_img" src="img/section-catalog/${DATA_BASE_BOOKS[key].img}" alt="${DATA_BASE_BOOKS[key].img}">
            </a>
            <a class="section-popular_element_link" href="#" data-popup="popup">
                <h3 class="section-popular_elements_name">${DATA_BASE_BOOKS[key].name}</h3>
            </a>
            <a class="section-popular_element_link" href="#" data-popup="popup">
                <p class="section-popular_elements_autor">${DATA_BASE_BOOKS[key].autor}</p>
            </a>
        </div>`
};

if(page3Input != null) {
    document.querySelector('.section-search_input').oninput = function() {

        let val = this.value.trim();
        let sectionPopularElementItems = document.querySelectorAll('.section-popular_element');
    
        if(val != '') {
            sectionPopularElementItems.forEach(function (elem) {
                if(elem.innerHTML.search(val) == -1) {
                    elem.classList.add('hide');
                }
                else {
                    elem.classList.remove('hide');
                } 
            });
        }
        else {
            sectionPopularElementItems.forEach(function (elem) {
                elem.classList.remove('hide');
            });
        }
    }
}
/* document.querySelector('.section-search_input').oninput = function() {

    let val = this.value.trim();
    let sectionPopularElementItems = document.querySelectorAll('.section-popular_element');

    if(val != '') {
        sectionPopularElementItems.forEach(function (elem) {
            if(elem.innerHTML.search(val) == -1) {
                elem.classList.add('hide');
            }
            else {
                elem.classList.remove('hide');
                console.log(elem);
            } 
        });
    }
    else {
        sectionPopularElementItems.forEach(function (elem) {
            elem.classList.remove('hide');
        });
    }
} */

