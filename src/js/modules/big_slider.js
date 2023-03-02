export default class Slider{
    constructor(page, btns){
        this.page = document.querySelector(page);
        this.slides = this.page.children;
        this.btns = document.querySelectorAll(btns);
        this.slideIndex = 1;
    }

    showSlides(n){
        if(n > this.slides.length){
            this.slideIndex = 1;
        }
        if(n < 1){
            this.slideIndex = this.slides.length;
        }

        try{
            this.hanson.style.opacity = '0';

            if(n === 3){
                setTimeout(()=> {
                    this.hanson.classList.add('animated', 'fadeInUp');
                    this.hanson.style.opacity = '1';
                },2000)
            }else{
                this.hanson.classList.remove('animated', 'fadeInUp');
            }
        }catch(e){}

        this.slides.forEach(slide => {
            slide.style.display = 'none';
        });

        this.slides[this.slideIndex - 1].style.display = 'block';
    }

    plusSlides(n){
        this.showSlides(this.slideIndex += n);
    }

    render(){

        try{
            this.hanson = document.querySelector('.hanson');
        }catch(e){}
        
        this.btns.forEach(item => {
            item.addEventListener('click', () => {
                this.plusSlides(1);
            });

            item.parentNode.previousElementSibling.addEventListener('click', (e)=> {
                e.preventDefault();
                this.slideIndex = 1;
                this.showSlides(this.slideIndex);
            });
        });

        this.showSlides(this.slideIndex);
    }
}