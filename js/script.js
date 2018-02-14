window.onload = function(){
    var win = document.getElementById("iframe").contentWindow;

    var Options = {
        ModalBackground: document.getElementById('modal-bg-color'),
        ModalBorder: document.getElementById('modal-border-color'),
        BtnColor: document.getElementById('btn-bg-color'),
        BtnTextStyle: document.getElementById('btn-text-style'),
        TitleColor: document.getElementById('title-color'),
        TitleTextStyle: document.getElementById('title-text-style'),
        BtnText: document.getElementById('btn-text'),
    }

    var Setting = new Settings(win, Options)
};

class Settings{
    constructor(iframe, options){

        this.iframe = iframe;
        this.Options = options;
        
        const changedOptionsColor = {
            ModalBorder: 'changeModalBorder',
            ModalBackground: 'changeModalBG',
            BtnColor: 'changeBtnColor',
            TitleColor: 'changeTitleColor'
        }
        Object.keys(changedOptionsColor).forEach(function(key) {
            options[key].addEventListener('change', function(e){
                DataSender.Send(changedOptionsColor[key], this.value, iframe);
            })
        });

        const changedOptionsTextStyle = {
            BtnTextStyle: 'changeBtnTextStyle',
            TitleTextStyle: 'changeTitleTextStyle'
        }

        Object.keys(changedOptionsTextStyle).forEach(function(key) {
            options[key].addEventListener('click', function(e){
                let target = e.target;
                
                if (target.tagName !== 'LI') return; 
                            
                DataSender.Send(changedOptionsTextStyle[key], target.getAttribute("data-value"), iframe);

            })
        });

        this.Options.BtnText.addEventListener('input', function(e){
            DataSender.Send('changeBtnText', this.value, iframe);
        },false);
    }
    
}

class DataSender{
    static Send(e, data, iframe){
        let message = JSON.stringify({event: e, currentValue: data});
            iframe.postMessage(
                    message,
                    document.location
            );
    }
}

