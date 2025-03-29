class Componente extends HTMLElement{


    static observedAttributes = ['destino', 'duracion', 'costo', 'descripcion', 'actividades', 'disponibilidad', 'img', 'calificacion','tipo', 'guia'];


    constructor (){

        super();
        
        
    }
    connectedCallback() {
      element.attachShadow({ mode: "open" });
        element.shadowRoot();
     }

    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
      }


      render(){
        this.shadowRoot.innerHTML = `
      
        <section>
        
         </section>
        <h3>${this.destino}</h3>
        <h3>${this.duracion}</h3>
        <h3>${this.costo}</h3>
        <h3>${this.descripcion}</h3>
        <h3>${this.actividades}</h3>
        <h3>${this.disponibilidad}</h3>
        <img src="${this.img}" alt="${this.descripcion}">
        <h3>${this.calificacion}</h3>
        <h3>${this.tipo}</h3>
        <h3>${this.guia}</h3>
        
        </section>
        `;

      }


}

customElements.define("mi-componente", Componente);

export default Componente;








