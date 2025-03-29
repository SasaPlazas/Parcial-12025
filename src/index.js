import * as Componente from "./componentes/componente1.js";

class AppContainer extends HTMLElement{

    constructor (){

        super();
        
        
    }

    connectedCallback() {
     }


      render(){
        this.shadowRoot.innerHTML = `
        
        `;

      }


}

customElements.define("app-container", AppContainer);
export default AppContainer;






