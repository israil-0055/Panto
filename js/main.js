
const infoBtn = document.querySelectorAll('.info-dot');
const infoUnion = document.querySelectorAll('.info-union')


for (let btn of infoBtn) {
    btn.addEventListener('click', showUnion);
}

function showUnion (e){
    e.stopPropagation();
    this.parentNode.querySelector('.info-union').classList.toggle('none');
}

document.addEventListener('click', closeUnion);

function closeUnion (){
    for (let union of infoUnion) {
        union.classList.add('none');
    }
}

for (let union of infoUnion) {
    union.addEventListener('click', (e) => e.stopPropagation());
}

// Swiper

const swiper = new Swiper('.swiper', {
    loop:true,
    freeMode:true,

    slidesPerView:1,
    spaceBetween:42,

    breakpoints: {
        600:{
            slidesPerView:2,
            spaceBetween:30,
        },
        870:{
            slidesPerView:3,
            spaceBetween:30,
        },
         920:{
             slidesPerView:3,
             spaceBetween:30,
         },
        1230:{
            slidesPerView:4,
            spaceBetween:42,
        },
    },
    
    navigation: {
      nextEl: '.slider-btn-next',
      prevEl: '.slider-btn-prev',
    },
  
  });

// Tabs

  const tabsBtn = document.querySelectorAll('[data-tab]');
  const tabsProducts = document.querySelectorAll('[data-tab-value]');
  
  for (let btn of tabsBtn){

    btn.addEventListener('click', function () {
        for (let btn of tabsBtn){
            btn.classList.remove('tabs-filter-btn--active');
        } 
        this.classList.add('tabs-filter-btn--active'); 
        console.log(this.dataset.tab);

        for (let product of tabsProducts){

            if (this.dataset.tab === 'all'){
                product.classList.remove('none');
            }else{
                if (product.dataset.tabValue == this.dataset.tab) {
                product.classList.remove('none');
                } else{
                    product.classList.add('none');
                }
            }

        }
        swiper.update ()

    })
  }

  const nav = document.querySelector('#nav');
  const burger = document.querySelector('#burger')
  const burgerImg = document.querySelector('#burger-img')

    burger.onclick = () =>{
        if ( nav.classList.toggle('nav--open')){
            burgerImg.src = "./img/icons/burger-CLOSE.svg";
        }else{
        burgerImg.src = "./img/icons/burger.svg";
        }   
    } 

