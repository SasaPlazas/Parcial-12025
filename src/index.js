class Componente extends HTMLElement{

    constructor (){  
        super();
    }




    
        element.attachShadow({ mode: "open" });
   
    
    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
      }


      render(){
        this.shadowRoot.innerHTML = `

        
        `;

      }


}

Componente('mi-componente', Componente); 

export as namespace miComponente;
