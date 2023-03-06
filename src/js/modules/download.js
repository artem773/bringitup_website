export default class Download{
    constructor(triggersSelector){
        this.buttons = document.querySelectorAll(triggersSelector);
        this.path = 'assets/img/mainbg.jpg'; 
    }

    downloadItem(path){
        const link = document.createElement('a');

        link.setAttribute('href', path);
        link.setAttribute('download', 'nice-picture');

        link.style.display = 'none';
        document.body.appendChild(link);

        link.click();
        
        document.body.removeChild(link);
    }

    init(){
        this.buttons.forEach(btn => {
            btn.addEventListener('click', ()=> {
                this.downloadItem(this.path);
            });
        });
    }
}