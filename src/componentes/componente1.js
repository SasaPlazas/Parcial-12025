class Componente extends HTMLElement{


    connectedCallback() {
        console.log("Custom square element added to page.");
        updateStyle(this);
      }
    
      attributeChangedCallback(name, oldValue, newValue) {
        console.log("Custom square element attributes changed.");
        updateStyle(this);
      }

constructor(){
    element.attachShadow({ mode: "open" });
    
}



}



