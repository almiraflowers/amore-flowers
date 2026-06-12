window.addEventListener("scroll", function(){
    const header = document.querySelector("header");

    if(window.scrollY > 50){
        header.classList.add("shrink");
    }else{
        header.classList.remove("shrink");
    }
});

const flowers = [
    {category:"роза", name:"Красные розы", price:"35 000 ₸", image:"image/красные розы.jpg", desc:"Классические красные розы символизируют любовь, страсть и уважение. Подходят для романтических подарков."},
    {category:"роза", name:"Белые розы", price:"32 000 ₸", image:"image/белые розы.jpeg", desc:"Белые розы означают чистоту, нежность и искренность. Часто используются для свадебных букетов."},
    {category:"роза", name:"Розовые розы", price:"39 000 ₸", image:"image/розовые розы.jpg", desc:"Розовые розы выражают нежность, заботу и благодарность."},
    {category:"роза", name:"Жёлтые розы", price:"39 000 ₸", image:"image/желтые розы.jpg", desc:"Жёлтые розы дарят радость, тепло и хорошее настроение."},
    {category:"роза", name:"Персиковые розы", price:"30 000 ₸", image:"image/персиковые розы.jpg", desc:"Персиковые розы выглядят нежно и элегантно, подходят для поздравлений."},
    {category:"роза", name:"Кустовые розы", price:"30 000 ₸", image:"image/кустовые розы.jpg", desc:"Кустовые розы имеют много маленьких бутонов и красиво смотрятся в композициях."},
    {category:"роза", name:"Кремовые розы", price:"30 500 ₸", image:"image/кремовые розы.jpg", desc:"Кремовые розы создают спокойный и изысканный образ букета."},
    {category:"роза", name:"Бордовые розы", price:"35 000 ₸", image:"image/бордовые розы.jpg", desc:"Бордовые розы выглядят роскошно и подходят для особых случаев."},
    {category:"роза", name:"Оранжевые розы", price:"32 500 ₸", image:"image/оранжевые розы.jpg", desc:"Оранжевые розы символизируют энергию, радость и восхищение."},
    {category:"роза", name:"Радужные розы", price:"30 000 ₸", image:"image/радужные розы.jpg", desc:"Радужные розы — необычный и яркий подарок для запоминающегося события."},
    {
category:"роза",
name:"Чайные розы",
price:"35 000 ₸",
image:"image/чайная роза.jpg",
desc:"Чайные розы отличаются нежным ароматом и элегантной формой бутона."
},

{
category:"роза",
name:"Французские розы",
price:"35 000 ₸",
image:"image/францезская роза.jpg",
desc:"Французские розы считаются одними из самых изысканных сортов."
},

    {category:"тюльпан", name:"Красные тюльпаны", price:"20 000 ₸", image:"image/красные тюльпаны.jpg", desc:"Красные тюльпаны символизируют любовь и весеннее настроение."},
    {category:"тюльпан", name:"Белые тюльпаны", price:"25 000 ₸", image:"image/белые тюльпаны.jpg", desc:"Белые тюльпаны выглядят свежо, нежно и элегантно."},
    {category:"тюльпан", name:"Розовые тюльпаны", price:"20 000 ₸", image:"image/розовые тюльпаны.jpg", desc:"Розовые тюльпаны подходят для нежного подарка."},
    {category:"тюльпан", name:"Жёлтые тюльпаны", price:"18 500 ₸", image:"image/желтые тюльпаны.jpg", desc:"Жёлтые тюльпаны создают солнечное настроение."},
    {category:"тюльпан", name:"Фиолетовые тюльпаны", price:"25 500 ₸", image:"image/фиолетовые тюльпаны.jpg", desc:"Фиолетовые тюльпаны смотрятся необычно и стильно."},
    {category:"тюльпан", name:"Оранжевые тюльпаны", price:"20 500 ₸", image:"image/оранжевые тюльпаны.jpg", desc:"Оранжевые тюльпаны подходят для яркого весеннего букета."},
    {category:"тюльпан", name:"Пионовидные тюльпаны", price:"25 000 ₸", image:"image/пионовидные тюльпаны.jpg", desc:"Пионовидные тюльпаны имеют пышные бутоны и выглядят роскошно."},
    {category:"тюльпан", name:"Голландские тюльпаны", price:"20 000 ₸", image:"image/голландские тюльпаны.jpg", desc:"Голландские тюльпаны отличаются качеством и насыщенным цветом."},
    {category:"тюльпан", name:"Махровые тюльпаны", price:"20 500 ₸", image:"image/махровые тюльпаны.jpg", desc:"Махровые тюльпаны имеют объёмные лепестки."},
    {category:"тюльпан", name:"Микс тюльпанов", price:"29 000 ₸", image:"image/микс тюльпанов.jpg", desc:"Яркий микс тюльпанов разных оттенков."},
    {
category:"тюльпан",
name:"Бело-розовые тюльпаны",
price:"20 000 ₸",
image:"image/бело-розовые тюльпаны.jpg",
desc:"Нежное сочетание белого и розового оттенков."
},

{
category:"тюльпан",
name:"Весенний микс",
price:"24 500 ₸",
image:"image/весенний микс.jpg",
desc:"Композиция из разных сортов тюльпанов."
},

    {category:"пион", name:"Розовые пионы", price:"40 000 ₸", image:"image/розовые пионы.jpg", desc:"Розовые пионы — пышные и ароматные цветы для нежных букетов."},
    {category:"пион", name:"Белые пионы", price:"40 000 ₸", image:"image/белые пионы.jpg", desc:"Белые пионы выглядят изысканно и подходят для свадебных композиций."},
    {category:"пион", name:"Бордовые пионы", price:"30 000 ₸", image:"image/бордовые пионы.jpg", desc:"Бордовые пионы создают роскошный и глубокий образ букета."},
    {category:"пион", name:"Кремовые пионы", price:"29 500 ₸", image:"image/кремовые пионы.jpg", desc:"Кремовые пионы подходят для спокойных и стильных композиций."},
    {category:"пион", name:"Коралловые пионы", price:"29 000 ₸", image:"image/коралловые пионы.jpg", desc:"Коралловые пионы выглядят ярко и необычно."},
    {category:"пион", name:"Пионы Сара Бернар", price:"30 000 ₸", image:"image/пионы сара бернар.jpg", desc:"Популярный сорт пионов с нежными розовыми лепестками."},
    {category:"пион", name:"Японские пионы", price:"38 000 ₸", image:"image/японские пионы.jpg", desc:"Японские пионы отличаются красивой формой цветка."},
    {category:"пион", name:"Махровые пионы", price:"35 500 ₸", image:"image/махровые пионы.jpg", desc:"Махровые пионы имеют много лепестков и выглядят очень объёмно."},
    

    {category:"лилия", name:"Белые лилии", price:"21 000 ₸", image:"image/белые лилии.jpg", desc:"Белые лилии символизируют чистоту, красоту и элегантность."},
    {category:"лилия", name:"Розовые лилии", price:"22 000 ₸", image:"image/розовые лилии.jpeg", desc:"Розовые лилии выглядят нежно и утончённо."},
    {category:"лилия", name:"Оранжевые лилии", price:"22 500 ₸", image:"image/оранжевые лилии.jpg", desc:"Оранжевые лилии подходят для ярких праздничных букетов."},
    {category:"лилия", name:"Жёлтые лилии", price:"22 000 ₸", image:"image/желтые лилии.jpg", desc:"Жёлтые лилии добавляют букету света и тепла."},
    {category:"лилия", name:"Красные лилии", price:"24 500 ₸", image:"image/красные лилии.jpg", desc:"Красные лилии выглядят эффектно и выразительно."},
    


    {category:"гортензия", name:"Голубая гортензия", price:"18 000 ₸", image:"image/голубая гортензия.jpg", desc:"Голубая гортензия выглядит воздушно и нежно."},
    {category:"гортензия", name:"Розовая гортензия", price:"18 500 ₸", image:"image/розовая гортензия.jpg", desc:"Розовая гортензия подходит для романтичных букетов."},
    {category:"гортензия", name:"Белая гортензия", price:"19 000 ₸", image:"image/белая гортензия.jpg", desc:"Белая гортензия выглядит чисто и элегантно."},
    {category:"гортензия", name:"Фиолетовая гортензия", price:"20 000 ₸", image:"image/фиолетовая гортензия.jpg", desc:"Фиолетовая гортензия добавляет композиции глубину цвета."},
    {category:"гортензия", name:"Зелёная гортензия", price:"19 500 ₸", image:"image/зеленая гортензия.jpg", desc:"Зелёная гортензия подходит для свежих стильных букетов."},
    {category:"гортензия", name:"Гортензия микс", price:"22 000 ₸", image:"image/гортензия микс.jpg", desc:"Микс гортензий разных оттенков."},
    

    {
category:"хризантема",
name:"Белые хризантемы",
price:"13 000 ₸",
image:"image/белые хризантемы.jpg",
desc:"Белые хризантемы символизируют искренность, чистоту и уважение. Отлично подходят для нежных и элегантных букетов."
},

{
category:"хризантема",
name:"Жёлтые хризантемы",
price:"13 500 ₸",
image:"image/желтые хризантемы.jpg",
desc:"Жёлтые хризантемы дарят тепло, радость и солнечное настроение. Подходят для ярких праздничных композиций."
},

{
category:"хризантема",
name:"Розовые хризантемы",
price:"14 000 ₸",
image:"image/розовые хризантемы.jpg",
desc:"Розовые хризантемы подчёркивают нежность, заботу и романтичность. Идеальны для подарка близкому человеку."
},

{
category:"хризантема",
name:"Сиреневые хризантемы",
price:"14 500 ₸",
image:"image/сиреневые хризантемы.jpg",
desc:"Сиреневые хризантемы выглядят необычно и утончённо. Часто используются в авторских букетах."
},

{
category:"хризантема",
name:"Зелёные хризантемы",
price:"15 000 ₸",
image:"image/зеленые хризантемы.jpg",
desc:"Зелёные хризантемы придают букету свежесть и оригинальность. Отлично сочетаются с белыми цветами."
},

{
category:"хризантема",
name:"Синие хризантемы",
price:"15 500 ₸",
image:"image/синие хризантемы.jpg",
desc:"Синие хризантемы выглядят необычно и привлекают внимание своим ярким оттенком."
},

{
category:"букет",
name:"Нежность",
price:"36 000 ₸",
image:"image/нежность.jpg",
desc:"Авторский букет из розовой гортензии, белой кустовой хризантемы и эвкалиптом"
},

{
category:"букет",
name:"Солнечный день",
price:"30 000 ₸",
image:"image/солнечный день.jpg",
desc:"Яркая композиция из подсолнухов, ромашек и зелени. Дарит хорошее настроение."
},

{
category:"букет",
name:"Весеннее настроение",
price:"30 000 ₸",
image:"image/весеннее настроение.jpg",
desc:"Букет из тюльпанов и гиацинтов, атмосфера весны и радости."
},

{
category:"букет",
name:"Цветочная симфония",
price:"50 000 ₸",
image:"image/цветочная симфония.jpg",
desc:"Пышная композиция из роз и пионов для особенных событий."
},

{
category:"букет",
name:"Романтика",
price:"48 000 ₸",
image:"image/романтика.jpg",
desc:"Букет из красных и розовых роз для признания в чувствах."
},

{
category:"букет",
name:"Летний луг",
price:"22 000 ₸",
image:"image/летний луг.jpg",
desc:"Композиция из ромашек и розовых хризантем."
},


{
category:"букет",
name:"Цветочное счастье",
price:"45 00₸",
image:"image/цветочное счастье.jpg",
desc:"Авторская композиция из лучших сезонных цветов."
},

{
category:"букет",
name:"Комплимент",
price:"40 000 ₸",
image:"image/комплимент.jpg",
desc:"Небольшой стильный букет для приятного сюрприза."
},


{
category:"букет",
name:"Amore",
price:"50 000₸",
image:"image/аморе.jpg",
desc:"Фирменный букет магазина Amore"
}
];

function renderFlowers(list){
    const cards = document.getElementById("cards");
    if(!cards) return;

    cards.innerHTML = "";

    list.forEach(function(flower){
        cards.innerHTML += `
            <div class="card" data-category="${flower.category}" onclick="openModal('${flower.name}', '${flower.desc}', '${flower.price}')">
                <img src="${flower.image}" alt="${flower.name}">
                <div class="card-content">
                    <h3>${flower.name}</h3>
                    <p>${flower.desc.substring(0, 60)}...</p>
                    <p class="price">${flower.price}</p>
                </div>
            </div>
        `;
    });
}

function searchFlowers(){
    const input = document.getElementById("searchInput");
    if(!input) return;

    const filter = input.value.toLowerCase();

    const result = flowers.filter(function(flower){
        return flower.name.toLowerCase().includes(filter) ||
               flower.category.toLowerCase().includes(filter) ||
               flower.desc.toLowerCase().includes(filter);
    });

    renderFlowers(result);
}

function filterCategory(category){
    const input = document.getElementById("searchInput");

    if(input){
        input.value = category === "all" ? "" : category;
    }

    if(category === "all"){
        renderFlowers(flowers);
    }else{
        const result = flowers.filter(function(flower){
            return flower.category === category;
        });

        renderFlowers(result);
    }
}

function openModal(title, text, price){
    document.getElementById("modalTitle").textContent = title;
    document.getElementById("modalText").textContent = text;
    document.getElementById("modalPrice").textContent = price;
    document.getElementById("flowerModal").style.display = "block";
}

function closeModal(){
    document.getElementById("flowerModal").style.display = "none";
}

window.onclick = function(event){
    const modal = document.getElementById("flowerModal");

    if(event.target === modal){
        modal.style.display = "none";
    }
}

const searchInput = document.getElementById("searchInput");

if(searchInput){
    searchInput.addEventListener("keyup", searchFlowers);
}

renderFlowers(flowers);