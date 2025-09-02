import Swiper from 'swiper/bundle';
export default class Carousel {
    constructor(element){
        this.element = element;
        this.options = {
            slidesPerView: 1,
            spaceBetween: 0,
            pagination: {
                el: this.element.querySelector('.swiper-pagination'),
                type: 'bullets',
            }
        };

        this.setOptions();
        this.init();
    }

    init(){
        new Swiper(this.element, this.options);
    }

    setOptions(){
        
    }
}