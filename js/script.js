//top menu animation
(function() {
    let headerPage = document.querySelector(".header-page");
    
    window.addEventListener('scroll',function() {
        if(this.scrollY > 0) {
            headerPage.classList.add('is-active');
        }
        else {
            headerPage.classList.remove('is-active');
        }
    });
})();

DATA_BASE_PAGES_OF_BOOKS = [
    {
        img: "book-1.jpg",
        name: "Гаррі Поттер і прокляте дитя",
        autor: "Дж К Ролінг",
        binding: "Тверда",
        language: "Українська",
        publishingHouse: "А-ба-ба-га-ла-ма-га",
        numberOfPages: "350",
        translator: "Віктор Морозов",
        yearOfPublication: "2016",
        passage: "Син Гаррі Поттера Албус потрапляє на факультет «Слизерин», де заводить дружбу з сином Драко Мелфоя Скорпіусом. Він не вміє грати у квідич і часто свариться з батьком. На четвертому році навчання в Гоґвортсі Албус і Скорпіус вирішують змінити минуле за допомогою останнього маховика часу, щоб врятувати від смерті Седрика Діґорі, який загинув під час подій «Кубка Вогню». На це їх напоумила Делфі — таємна донька лорда Волдеморта і Белатріси Лестранж — яка хоче повернутися в минуле і захопити владу разом з батьком.",
    },

    {
        img: "book-2.jpg",
        name: "Маленький принц",
        autor: "Антуан де Сент-Екзюпері",
        binding: "Тверда",
        language: "Українська",
        publishingHouse: "КМ-БУКС",
        numberOfPages: "112",
        translator: "Марина Марченко",
        yearOfPublication: "2017",
        passage: "Пілот здійснює вимушену посадку в пустелі Сахара і зустрічає одного незвичайного та загадкового хлопчика — принца з іншої планети — астероїда B-612. Маленький принц розповідає про свої пригоди на Землі, говорить про дивовижну троянду, яку залишив на своїй малій планеті, про своє життя на астероїді, де є три вулкани. Він проводить час, приводячи до ладу свій астероїд, виполюючи баобаби, які намагаються глибоко прорости і заполонити всю планету. Маленький принц любить спостерігати заходи сонця, які на його малій планеті можна побачити скільки завгодно разів на день. Одного дня Маленький принц відлітає, щоб вивчити і пізнати інші місця Всесвіту. Відвідавши кілька інших астероїдів, він зустрічає багато дивних дорослих: короля, якому здається, що він править зірками; честолюбця, який хоче, щоб усі ним захоплювалися; п'яницю, який п'є, щоб забути, що йому соромно пити; ділову людину, яка постійно рахує зірки, бо думає, що володіє багатьма з них і хоче купити ще більше; ліхтарника, який, вірний своєму слову, кожну хвилину запалює і гасить ліхтар; географа, який записує в книгу розповіді мандрівників, але сам ніколи нікуди не подорожує. За порадою географа Маленький принц відвідує Землю, де, крім пілота, який зазнав аварії літака, зустрічає теж інших персонажів і, спілкуючись з ними, дізнається багато важливих речей.",

    },

    {
        img: "book-3.jpg",
        name: "1984",
        autor: "Джордж Орвелл",
        binding: "Тверда",
        language: "Українська",
        publishingHouse: "Видавництво Жупанського",
        numberOfPages: "312",
        translator: "Віктор Шовкун",
        yearOfPublication: "2015",
        passage: "Головний герой, Вінстон Сміт, живе в Лондоні, працює в Міністерстві Правди і є членом Зовнішньої Партії. Він не поділяє партійних ідеологій, і в глибині душі вельми сумнівається в партії, навколишній дійсності й узагалі в усьому тому, в чому тільки можна сумніватися. Щоб «випустити пару» і не зробити нерозважливого вчинку, він купує щоденник, в якому намагається викладати всі свої сумніви. Водночас на людях Вінстон намагається виглядати прихильником партійних ідей. Однак він побоюється, що дівчина Джулія, яка працює в тому ж міністерстві, шпигує за ним і хоче викрити його. Також він вважає, що високопосадовий співробітник їхнього міністерства, член Внутрішньої партії О'Браєн, так само не поділяє думки партії і є підпільним революціонером.",

    },

    {
        img: "book-4.png",
        name: "451° за Фаренгейтом",
        autor: "Рей Бредбері",
        binding: "Тверда",
        language: "Українська",
        publishingHouse: "Навчальна книга - Богдан",
        numberOfPages: "144",
        translator: "Євген Крижевич",
        yearOfPublication: "2018",
        passage: "Роман «451 градус за Фаренгейтом» розповідає про тоталітарне суспільство, в якому література заборонена, а пожежники повинні спалювати всі заборонені книги, які виявлять, разом з будинками. Власники книг при цьому підлягають арешту, одного з них навіть відправляють до психіатричної лікарні. Автор описав людей, які втратили зв'язок один з одним, з природою, з інтелектуальним спадком людства. Люди поспішають на роботу чи з роботи, ніколи не говорячи про те, що вони думають або відчувають, розмовляючи лише про безглузді дрібниці, захоплюючись тільки матеріальними цінностями. Удома вони оточують себе інтерактивним телебаченням, яке проектує зображення відразу на стіни (в які вбудовані кінескопи), і заповнюють свій вільний час переглядом телевізійних передач, нескінченних і безглуздих серіалів. Однак «щаслива», на перший погляд, держава перебуває на порозі тотальної руйнівної війни, якій все ж судилося розпочатися.",

    },


    {
        img: "book-5.jpg",
        name: "І не лишилось жодного",
        autor: "Агата Крісті",
        binding: "Тверда",
        language: "Українська",
        publishingHouse: "Книжковий клуб \"Клуб Сімейного Дозвілля\"",
        numberOfPages: "288",
        translator: "Надія Хаєцька",
        yearOfPublication: "2023",
        passage: "На Негритянський острів запрошено вісім людей, які не знають один одного. Вони з різних верств суспільства, різного віку. Кожен із них одержав листа від когось із давніх знайомих. На острові їх зустрічає сім'я гувернантів Роджерс. Вони розташовуються в будинку, чекаючи господарів, таємничих пана та пані Онім (в оригіналі Owen; разом з ініціалами це прізвище нагадує слово unknown, тобто невідомий; у деяких перекладах аналогічно фігурує слово анонім). У центрі столу стоїть таця із десятьма статуетками негренят. У кожного з гостей в кімнаті на стіні висить дитяча лічилка про десятьох негренят.",

    },

    {
        img: "book-6.jpg",
        name: "Тіні забутих предків",
        autor: "Михайло Коцюбинський",
        binding: "Тверда",
        language: "Українська",
        publishingHouse: "Фоліо",
        numberOfPages: "*",
        translator: "*",
        yearOfPublication: "2013",
        passage: "У селі біля річки Черемош ростуть двоє дітей, Іван та Марічка. Через відлюдькуватість та цікавість до чаклунства й нечистої сили мати Івана навіть вважала його одмінком. Коли йому виповнюється 7 років, одного разу, пасучи корів, Іван чує дивну пісню, хоча поряд немає людей. Згодом він дізнається про давню ворожнечу свого роду Палійчуків з Гутенюками, та стає свідком замаху на свого батька, від рани той за кілька днів помирає. Задля помсти він б'є Марічку, адже вона є дочкою вбивці, та викидає в річку її кісники. Вона хвалиться, що має кращі, Іван із заздрощів починає хвалитися сам і врешті діти забувають про образу.",

    },

    {
        img: "book-7.jpg",
        name: "Володар перснів. Частина 1. Братство персня",
        autor: "Джон Рональд Руел Толкін",
        binding: "Тверда",
        language: "Українська",
        publishingHouse: "Астролябія",
        numberOfPages: "704",
        translator: "Катерина Оніщук",
        yearOfPublication: "2022",
        passage: "На початку фільму показана історія Середзем'я: ельфи отримали три персні влади, гноми — сім, а люди — дев'ять. Один перстень темний володар Саурон таємно викував і залишив собі, щоб підкорити інших. Люди та ельфи зібрались в Останньому Союзі, щоб перемогти його. Їх армії зійшлися з арміями ворога біля Чорної Брами Мордора. Саурон вбив короля людей Еленділа, але його син Ісілдур зрубав уламком меча Перстень Всевладдя з руки Саурона, і цим його знищив. Перстень він залишив собі. Але одного разу він потрапив у засідку і був убитий, а Перстень опинився на дні річки. Там його через два з половиною тисячоліття знайшов Ґолум і володів ним 500 років, доки той його не покинув. Але Перстень не повернувся до свого володаря, а був знайдений гобітом Більбо Торбином. З ним він потрапив у Шир.",

    },

    {
        img: "book-8.jpg",
        name: "Кандід, або Оптимізм",
        autor: "Вольтер",
        binding: "М'яка",
        language: "Українська",
        publishingHouse: "Фоліо",
        numberOfPages: "128",
        translator: "М. Терещенко, Валер’ян Підмогильний",
        yearOfPublication: "2017",
        passage: "Твір являє Філософський роман з фантастичною складовою та нальотом абсурдизму і цинізму, книга «замаскована» під крутійський роман (форма перегукується з «Правдивими історіями» Лукіана). Герої твору — Кандид, його подруга Кунігунда і наставник Панглосс — колесять по всьому заселеному світі, стають свідками битв Семирічної війни, взяття росіянами Азова, Лісабонського землетрусу, і навіть відвідують казкову країну Ельдорадо. Цей утопічний роман вплинув на багатьох більш пізніх авторів утопічної та сатиричної фантастики — Олдаса Гакслі, Курта Воннегута та Роберта Шеклі.",

    },

    {
        img: "book-9.jpg",
        name: "Країна імли",
        autor: "Артур Конан Дойл",
        binding: "Тверда",
        language: "Українська",
        publishingHouse: "Фоліо",
        numberOfPages: "384",
        translator: "Євген Тарнавський",
        yearOfPublication: "2020",
        passage: "Молоді журналісти Едвард Мелоун та Енід Челленджер, донька знаменитого професора, потрапляють на зібрання спіритуалістів — людей, які нібито спілкуються із потойбічним світом, де стають свідками загадкових подій. Незважаючи на своє від самого початку скептичне ставлення до цього питання, Мелоун поступово проймається ідеями спіритуалізму і намагається розповісти про це світові. Однак несподівана перешкода в особі професора Челленджера, завзятого матеріаліста й адепта науки, руйнує його плани...",

    },

    {
        img: "book-10.jpg",
        name: "Талісман",
        autor: "Стівен Кінг",
        binding: "Тверда",
        language: "Українська",
        publishingHouse: "Книжковий клуб \"Клуб Сімейного Дозвілля\"",
        numberOfPages: "800",
        translator: "Анатолій Пітик, Катерина Грицайчук",
        yearOfPublication: "2016",
        passage: "Території — містичне місце, де кожна людина має Двійника. Саме туди прямує Джек, хлопчисько, який прагне знайти загадковий Талісман, щоб зберегти життя власної матері. Проте на Територіях вона є могутньою Королевою, про що хлопець тим часом не знає. Неймовірні пригоди, жахи, небезпека, магія перевтілення — усе це трапиться в нього на шляху. Але що ж коїтиметься в реальному світі, доки хлопчина виконуватиме своє завдання? Чи встигне він врятувати матір і чи не втратить себе при цьому?",

    },

    {
        img: "book-11.jpg",
        name: "Леся Українка. Книги Сивілли",
        autor: "Тамара Гундорова",
        binding: "Тверда",
        language: "Українська",
        publishingHouse: "Vivat",
        numberOfPages: "304",
        translator: "*",
        yearOfPublication: "2023",
        passage: "Ця книжка — спроба переосмислити біографію Лесі Українки, у якій переплелися хвороба і творчість, Україна і «чужина», політика й література, класика і сучасність, любов і смерть. Хвороба і письмо. Народження творчості з травми, пережитої біля ліжка смертельно хворого Мержинського. Духовна й інтелектуальна близькість до Драгоманова. Стосунки з Кобилянською як метафора жіночої культури. Фатум мистецького божевілля, який пізнала в моменти творчого піднесення. Подорожі Європою і санаторійний туризм. Статус «інакшості» як визнання «нової жінки» й «чужинки» на батьківщині. «Своє» крізь призму історичної та культурної екзотики. Усе це дало Ларисі Косач-Квітці змогу йти власним шляхом і стати пророчицею народжуваного ХХ століття. В останній рік життя Леся Українка зізнавалася матері: «…історію Мавки може тілько жінка написати». Але правда в тому, що всі її твори могла написати лише жінка, яка жила і творила mit Todesverachtung, тобто зневажаючи смерть.",
    },

    {
        img: "book-12.jpg",
        name: "На Західному фронті без змін",
        autor: "Еріх Марія Ремарк",
        binding: "Тверда",
        language: "Українська",
        publishingHouse: "Книжковий клуб \"Клуб Сімейного Дозвілля\"",
        numberOfPages: "240",
        translator: "Катерина Гловацька",
        yearOfPublication: "2023",
        passage: "В основу роману покладено реальні спогади автора про Першу світову війну. Коли Ремарку виповнилося вісімнадцять, його мобілізували до війська, а через рік перекинули на Західний фронт. Головний герой роману — молодий солдат Пауль Боймер — так само потрапляє в пекло війни. Те, що він бачить, не схоже на героїчні історії й оповідки. Реалії війни — це кров і бруд, крики і смерть, ницість і мужність, виживання на межі людських можливостей. По завершенню війни Пауль та його фронтові товариші не вписуються в життя мирних міст. Вони — «втрачене покоління», змужнілі підлітки, яких назавжди змінила війна…",

    },

    {
        img: "book-13.jpg",
        name: "Наодинці з собою",
        autor: "Марк Аврелій",
        binding: "Тверда",
        language: "Українська",
        publishingHouse: "Апріорі",
        numberOfPages: "184",
        translator: "Ростислав Паранько",
        yearOfPublication: "2022",
        passage: "Марк Аврелій був прибічником філософії стоїцизму, тож не дивуйтесь, якщо на сторінках його книги знайдете багато похмурих думок про смиренність долі. Однак у політика не буде нудних повчань та моралізаторств, а глибокі роздуми про природу людини та влади.",

    },

    {
        img: "book-14.jpg",
        name: "Sapiens: Людина розумна. Коротка історія людства",
        autor: "Ювал Ной Харарі",
        binding: "Тверда",
        language: "Українська",
        publishingHouse: "Book Chef",
        numberOfPages: "544",
        translator: "Олександр Дем'янчук",
        yearOfPublication: "2021",
        passage: "Ця коротка історія людства — не традиційний хронологічний перелік подій і правителів, який бачимо в багатьох підручниках і науково-популярних виданнях. Ювал Ной Харарі поступово розкриває перед читачем, яким чином Homo sapiens із невидатного виду мавп став Людиною і досяг сучасних вершин економічного, технологічного та інтелектуального розвитку. Почавши з Когнітивної революції сімдесят тисяч років тому, автор показує, як наш біологічний вид розселявся по планеті, як здійснив Аграрну революцію приблизно дванадцять тисяч років тому, як нарешті Промислова і Наукова революції Нового часу дали Людині в руки могутні інструменти, за допомогою яких вона може не лише технічно розвиватися, а й змінити власну біологію. Ба більше, людство тепер здатне навіть знищити себе. І це може статися як унаслідок застосування ядерної чи іншої зброї масового ураження, так і в результаті створення на основі сапієнс інтелектуально розвинених істот зі здібностями, які нині неможливо передбачити.",

    },

    {
        img: "book-15.jpg",
        name: "Колгосп тварин",
        autor: "Джордж Орвелл",
        binding: "Тверда",
        language: "Українська",
        publishingHouse: "Видавництво Жупанського",
        numberOfPages: "120",
        translator: "Юрій Шевчук",
        yearOfPublication: "2022",
        passage: "У казковій повісті \"Колгосп тварин\" в алегоричній формі розповідається про часи становлення СРСР. Зокрема, тут ідеться про революцію 1917 року, про брехливі обіцянки, що \"земля — селянам, а заводи — робітникам\", розповідається про розкуркулення, примусові переселення, репресії, розстріли і про мільйони замордованих у сталінських концтаборах. От лише замість людей герої цієї повісті — тварини. Але чи так вже вони різняться між собою?",

    },
]

const popularList = document.querySelector(".section-popular_list");
let page3Input = document.querySelector('.section-search_input');
//fills section-popular_catalog
if(page3Input === null){
    for (let key = 0; key < DATA_BASE_PAGES_OF_BOOKS.length - (DATA_BASE_PAGES_OF_BOOKS.length-5); key++) {
        popularList.innerHTML += `
            <div class="section-popular_element">
                <a class="section-popular_element_link" href="#" data-popup="popup"> 
                    <img class="section-popular_elem_img" src="img/section-catalog/${DATA_BASE_PAGES_OF_BOOKS[key].img}" alt="${DATA_BASE_PAGES_OF_BOOKS[key].img}">
                </a>
                <a class="section-popular_element_link" href="#" data-popup="popup">
                    <h3 class="section-popular_elements_name">${DATA_BASE_PAGES_OF_BOOKS[key].name}</h3>
                </a>
                <a class="section-popular_element_link" href="#" data-popup="popup">
                    <p class="section-popular_elements_autor">${DATA_BASE_PAGES_OF_BOOKS[key].autor}</p>
                </a>
            </div>`
    };
}
else {
    for (let key in DATA_BASE_PAGES_OF_BOOKS) {
        popularList.innerHTML += `
        <div class="section-popular_element">
            <a class="section-popular_element_link" href="#" data-popup="popup"> 
                <img class="section-popular_elem_img" src="img/section-catalog/${DATA_BASE_PAGES_OF_BOOKS[key].img}" alt="${DATA_BASE_PAGES_OF_BOOKS[key].img}">
            </a>
            <a class="section-popular_element_link" href="#" data-popup="popup">
                <h3 class="section-popular_elements_name">${DATA_BASE_PAGES_OF_BOOKS[key].name}</h3>
            </a>
            <a class="section-popular_element_link" href="#" data-popup="popup">
                <p class="section-popular_elements_autor">${DATA_BASE_PAGES_OF_BOOKS[key].autor}</p>
            </a>
        </div>`
    };
}

//popup
(function() {

    let body = document.querySelector('body');

    let closestItemByClass = function(item, className) {
        let node = item;

        while(node) {
            if(node.classList.contains(className)) {
                return node;
            }
            
            node = node.parentElement; 
        }

        return null;
    }

    let closestAttr = function(item, attr) {
        let node = item;

        while(node) {
            let attrValue = node.getAttribute(attr);
            if(attrValue) {
                return attrValue;
            }
            
            node = node.parentElement; 
        }

        return null;
    }

    let showPopup = function(target) {
        target.classList.add('is-active');
    };

    let closePopup = function(target) {
        target.classList.remove('is-active');
    };

    let toggleScroll = function() {
        body.classList.toggle('no-scroll');
    };
     
    body.addEventListener('click', function(e) {
        let target = e.target;
        let popupClass = closestAttr(target, 'data-popup');

        if(popupClass === null) {
            return;
        }
    
        e.preventDefault();
        let popup = document.querySelector('.' + popupClass);
        
        if(popup) {
            showPopup(popup);
            toggleScroll();
        }
    });

    body.addEventListener('click', function(e) {
        let target = e.target;

        if(target.classList.contains('popup_btn-close') || target.classList.contains('popup_inner')) {
            let popup = closestItemByClass(target, 'popup');

            closePopup(popup);
            toggleScroll();
        }
    });

    body.addEventListener('keydown', function(e) {
        if(e.keyCode !== 27) {
            return;
        }
        
        let popup = document.querySelector('.popup.is-active');

        if(popup) {
            closePopup(popup);
            toggleScroll();

        }
    });
})();
//adds content to popup
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

        for(let i in DATA_BASE_PAGES_OF_BOOKS){
        
            if(DATA_BASE_PAGES_OF_BOOKS[i].name == target.innerHTML || DATA_BASE_PAGES_OF_BOOKS[i].autor == target.innerHTML 
                || DATA_BASE_PAGES_OF_BOOKS[i].img == target.alt) {
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
//search
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

