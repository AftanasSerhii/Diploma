(function() {
    let sectionPopular = document.querySelector('.section-popular');
    let sectionBooks = document.querySelector('.section-books');
    
    if(sectionPopular === null && sectionBooks === null) {
        return;
    }

    let sectionPopularElement = sectionBooks !== null ? sectionBooks.querySelector('.section-popular_list') : sectionPopular.querySelector('.section-popular_list');

    const booksList = document.querySelector(".popup_inner");

    sectionPopularElement.addEventListener('click', function(e) {
        let target = e.target;

        for(let i in DATA_BASE_BOOKS){
        
            if(DATA_BASE_BOOKS[i].name == target.innerHTML || DATA_BASE_BOOKS[i].autor == target.innerHTML 
                || DATA_BASE_BOOKS[i].img == target.alt) {
                    booksList.innerHTML = `
                        <div class="popup_content">
                            <button class="btn-close popup_btn-close"></button>
                            <div class="popup_content-top">
                                <img src="img/section-catalog/${DATA_BASE_PAGES_OF_BOOKS[i].img}" alt="">
                                <div class="popup_content-top-text">
                                    <h1>${DATA_BASE_PAGES_OF_BOOKS[i].name}</h1>
                                    <h2>${DATA_BASE_PAGES_OF_BOOKS[i].autor}</h2>
                                    <p>Характеристики:</p>
                                    <ul>
                                        <li>Палітурка - ${DATA_BASE_PAGES_OF_BOOKS[i].binding}</li>
                                        <li>Мова - ${DATA_BASE_PAGES_OF_BOOKS[i].language}</li>
                                        <li>Видавництво - ${DATA_BASE_PAGES_OF_BOOKS[i].publishingHouse}</li>
                                        <li>Кількість сторінок - ${DATA_BASE_PAGES_OF_BOOKS[i].numberOfPages}</li>
                                        <li>Перекладач - ${DATA_BASE_PAGES_OF_BOOKS[i].translator}</li>
                                        <li>Рік видання - ${DATA_BASE_PAGES_OF_BOOKS[i].yearOfPublication}</li>
                                    </ul> 
                                </div>
                            </div>
                            <div class="popup_content-passage">
                                <h2>Сюжет</h2>
                                    <p>${DATA_BASE_PAGES_OF_BOOKS[i].passage}</p>
                            </div>
                        </div>`
            }
        }
      
    });
})();
    