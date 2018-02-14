window.onload = function(){

    let CurrentModal = new Modal(document.getElementById('modal'));
    let CurrentButton = new Button(document.getElementById('btn'));
    let CurrentTitle = new Element(document.getElementById('modal-text'));

    window.addEventListener('message', e => {
        
        let data;
        try {
            data = JSON.parse(e.data)
        } catch(e) {
            alert(e); 
        }
        
        let value = data.currentValue;
        let event = data.event
        switch(event) {
            case 'changeModalBG':
                CurrentModal.ChangeBackground(value);
                break;
          
            case 'changeModalBorder':  
                CurrentModal.ChangeBorder(value);
                break;

            case 'changeBtnColor':
                CurrentButton.ChangeBackground(value);
                break;

            case 'changeBtnTextStyle':
                CurrentButton.ChangeTextStyle(value);
                break;

            case 'changeTitleColor':
                CurrentTitle.ChangeColor(value);
                break;

            case 'changeTitleTextStyle':
                CurrentTitle.ChangeTextStyle(value);
                break;

            case 'changeBtnText':
                CurrentButton.ChangeText(value);
                break;
          
            
          }
    }, false);
}
class Element{
    constructor(id) {
        this.id = id;
    }
    ChangeBackground(color){
        this.id.style.backgroundColor = color;
    }
    ChangeTextStyle(value){
        let currentText = this.id.innerHTML;
        let tag = this.id.getElementsByTagName(value.toString().toUpperCase());
        if(tag.length > 0 ){
            this.RemoveTag(tag[0]);
            return;
        }  
        this.id.innerHTML = `<${value}>${currentText}</${value}>`;
        return;
    }
    ChangeColor(color){
        this.id.style.color = color;
    }
    RemoveTag(element){
         
        parent.removeChild(element);
    }
}
class Modal extends Element{
    constructor(id) {
        super(id);
    }
    ChangeBorder(color){
        this.id.style.borderColor = color;
    }
}
class Button extends Element{
    constructor(id) {
        super(id);
    }
    ChangeText(value){
        let btnText = this.id.getElementsByTagName('SPAN');
        btnText[0].innerHTML = value;   
    }
}
