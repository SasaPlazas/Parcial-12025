class Componente extends HTMLElement{

    constructor (){
        element.attachShadow({ mode: "open" });
    
    }

    connectedCallback() {
       this.shadowRoot(['names', 'names', 'names']);
      }

    
    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
      }


      render(){
        this.shadowRoot.innerHTML = `
        
        `
      }


}









