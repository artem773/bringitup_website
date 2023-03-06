export default class VideoPlayer{
    constructor(triggers, overlay){
        this.buttons = document.querySelectorAll(triggers);
        this.overlay = document.querySelector(overlay);
        this.close = this.overlay.querySelector('.close');
        this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
    }

    bindTriggers(){
        this.buttons.forEach((btn, i) => {

            try{
                const blockedElement = btn.closest('.module__video-item').nextElementSibling;
                if( i % 2 === 0){
                    blockedElement.setAttribute('data-disabled', 'true');
                }
            }catch(e){}

            btn.addEventListener('click', ()=> {
                
                if(!btn.closest('.module__video-item') || btn.closest('.module__video-item').getAttribute('data-disabled') !== 'true'){
                    this.activeBtn = btn;

                    if(document.querySelector('iframe#frame')){
                        this.overlay.style.display = 'flex';
                        if(this.path !== btn.getAttribute('data-url')){
                            this.path = btn.getAttribute('data-url');
                            this.player.loadVideoById({videoId: this.path});
                        }
                    }else{
                        this.path = btn.getAttribute('data-url');

                    this.createPlayer(this.path);
                    }
                }
            });
        });
    }

    bindCloseBtn(){
        this.close.addEventListener('click', ()=> {
            this.overlay.style.display = 'none';
            this.player.stopVideo();
        });
    }

    createPlayer(url){
        this.player = new YT.Player('frame', {
            height: '100%',
            width: '100%',
            videoId: `${url}`,
            events: {
                'onStateChange': this.onPlayerStateChange
            }
        });
        this.overlay.style.display = 'flex';
    }

    onPlayerStateChange(state){ //когда заканчівается відео, ета фун-я разблокіривает второе відео на страніце 
        try{
            const blockedElement = this.activeBtn.closest('.module__video-item').nextElementSibling; // получаєм следующій елемент по верстке
            const playButton = this.activeBtn.querySelector('svg').cloneNode(true);//глубокое копірованіе всех елементов і кнопкі ПЛЕЙ 

            if(state.data === 0){
                if(blockedElement.querySelector('.play__circle').classList.contains('closed')){
                    blockedElement.querySelector('.play__circle').classList.remove('closed');
                    blockedElement.querySelector('svg').remove();
                    blockedElement.querySelector('.play__circle').appendChild(playButton);
                    blockedElement.querySelector('.play__text').textContent = 'play video';
                    blockedElement.querySelector('.play__text').classList.remove('attention');
                    blockedElement.style.opacity = '1';
                    blockedElement.style.filter = 'none';

                    blockedElement.setAttribute('data-disabled', 'false');
                }
            }
        }catch(e){}
    }

    init(){
        if(this.buttons.length > 0){
            const tag = document.createElement('script');

            tag.src = "https://www.youtube.com/iframe_api";
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
            //подключілі АРІ із с 'https://developers.google.com/youtube/iframe_api_reference?hl=ru'

            this.bindTriggers();
            this.bindCloseBtn();
        }
    }
}