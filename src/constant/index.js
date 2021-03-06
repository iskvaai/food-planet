export const BASE_URL = 'http://localhost:3000';
export const burger = [
    {

        imgBurger: "/image/burgerr1.png",
        title: "Биг Тейсти Три Сыра",
        titleDesc: "Большой сочный бифштекс\n" + "из говядины. 3 сыра: нежный Эмменталь, сливочный Гауда и  Чеддер в виде топпинга. Свежие овощи и соус с дымком.",
        priceBurger: "330  сом",
    },
    {
        imgBurger: "/image/burgerr2.png",
        title: "Макчикен Острый",
        titleDesc: "Сочная куриная котлета в хрустящей панировке, салат айсберг и острый соус.",
        priceBurger: "150  сом",


    },
    {
        imgBurger: "/image/burgerr3.png",
        title: "Двойной Биг Мак",
        titleDesc: "Бургер с четырьмя бифштексами из говядины на булочке,луком, свежим салатом «Айсберг»,сыр «Чеддер» и специальным соусом «Биг Мак».",
        priceBurger: "190  сом",


    },
    {
        imgBurger: "/image/burgerr4.png",
        title: "Двойной Филе-О-Фиш",
        titleDesc: " Два кусочка филе рыбы (семейство тресковых), которые подаются на пышной пропаренной булочке с кусочком сыра «Чеддер». Сандвич заправлен соусом «Тар-Тар».",
        priceBurger: "250  сом",

    }

]

export const pizza = [
    {
        imgPizza: "/image/pizza1.png",
        title: "Суприм",
        titleDesc: "лучок, маслины, окорок, сладкий перчик, томатный соус, сыр моцарелла, шампиньоны, оливки, итальянские колбаски",
        pricePizza: "550  сом",
        minus: "-",
        count: "1",
        plus: "+",
        button: "В корзину",
        id: "1"
    },
    {
        imgPizza: "/image/pizza5.png",
        title: "Гавайская",
        titleDesc: "Маринованные огурцы,сыр,томатная паста,помидор,перец болгарский,чеснок,орегано ",
        pricePizza: "300  сом",
        minus: "-",
        count: "1",
        plus: "+",
        button: "В корзину",
        id: "2"
    },
    {
        imgPizza: "/image/pizza3.png",
        title: "Маргарита",
        titleDesc: "Моцарелла, томаты, итальянские травы, томатный соус,зеленый свежий базилик,оливковое масло ,",
        pricePizza: "350  сом",
        minus: "-",
        count: "1",
        plus: "+",
        button: "В корзину",
        id: "3"
    },
    {
        imgPizza: "/image/pizza4.png",
        title: "С брокколи",
        titleDesc: "Шампиньоны,брокколи,моцарелла, болгарский перец,оливковое масло,базилик,греческий йогурт, hyyrhjfkjcn",
        pricePizza: "600  сом",
        minus: "-",
        count: "1",
        plus: "+",
        button: "В корзину",
        id: "4"
    },
    {
        imgPizza: "/image/pizza9.png",
        title: "Сёрф-пицца",
        titleDesc: "Куриное филе, ананасы, сыр «Моцарелла», кунжутный бортик и пицца-соус, орегано,сыр «Фета» и базилик",
        pricePizza: "350  сом",
        minus: "-",
        count: "1",
        plus: "+",
        button: "В корзину",
        id: "5"
    },
    {
        imgPizza: "/image/pizza6.png",
        title: "Мексиканская",
        titleDesc: "Булка, котлета,сыр,  соленый огурец, лук, помидор,салат айсберг,соус чесночный, соус гриль,кетчуп, майонез",
        pricePizza: "450  сом",
        minus: "-",
        count: "1",
        plus: "+",
        button: "В корзину",
        id: "6"
    },
    {
        imgPizza: "/image/pizza7.png",
        title: "Кантри",
        titleDesc: "Соленые огурчики, картофель, копченый цыпленок, соус ранч, томаты, лук, чеснок, моцарелла, томатный соус",
        pricePizza: "400  сом",
        minus: "-",
        count: "1",
        plus: "+",
        button: "В корзину",
        id: "7"
    },
    {
        imgPizza: "/image/pizza8.png",
        title: "Сержант Пеппер",
        titleDesc: "Колбаски «Пепперони», пеппероната, исички и опята с сыром «Моцарелла», пицца-соус и орегано.",
        pricePizza: "700  сом",
        minus: "-",
        count: "1",
        button: "В корзину",
        plus: "+",
        id: "8"
    }
]

export const select = [
    {
        imgSelect: "/image/truck.png",
        title: "Мгновенная доставка",
        titleDesc: "Доставим заказанную вами еду за 30 минут + напиток в подарок",
        id: 1
    },
    {
        imgSelect: "/image/product.png",
        title: "Свежие продукты",
        titleDesc: " Вся продукция хранится в хороших условиях тем самым продливая срок хранения",
        id: 2
    },
    {
        imgSelect: "/image/menu.png",
        title: "Уникальное меню",
        titleDesc: "Ежедневно мы обновляем наше меню и том числе коктейльное",
        id: 3
    },
    {
        imgSelect: "/image/place.png",
        title: "Доставка",
        titleDesc: "Мы быстро доставляем вашу еду по указанному адресу",
        id: 4
    }
]

export const commentary = [
    {
        img: "",
        name: "Сергей",
        titleDesc: "Большое спасибо! 5 пицц доставили даже быстрее чем планировалось." +
            " Пицца была горячая и всему коллективу понравилась! День Рождения прошел отлично! :)",
        data: new Date().toLocaleDateString()

    },
    {
        img: "",
        name: "Сергей",
        titleDesc: "Очень вкусные роллы Хаки, всем рекомендую! заказали в первый раз и теперь станем постоянными клиентами! Спасибо!",
        data: new Date().toLocaleDateString()

    },
    {
        img: "",
        name: "Сергей",
        titleDesc: "Очень избирателен в еде, и Уже в третий раз не разочаровываюсь в Food Planet, советую всем! Жена тоже довольна!",
        data: new Date().toLocaleDateString()

    },
    {
        img: "",
        name: "Сергей",
        titleDesc: "Хочу поблагодарить за бургер !Очень вкусненький в меру остренький)\n" +
            "Спасибо,удивили!)",
        data: new Date().toLocaleDateString()

    },
]