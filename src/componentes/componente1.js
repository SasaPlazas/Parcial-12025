class Componente extends HTMLElement{

    constructor (){

        super();
        // element.attachShadow({ mode: "open" });
        // element.shadowRoot();
    }



    connectedCallback() {
        getAttribute(['destino', 'duracion', 'costo', 'descripcion', 'actividades', 'disponibilidad', 'img', 'calificacion','tipo', 'guia' ]);
     }

    
    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
      }


      render(){
        this.shadowRoot.innerHTML = `
      
        <destino>${this.destino}</destino>
        <duracion>${this.duracion}</duracion>
        <costo>${this.costo}</costo>
        <descripcion>${this.descripcion}</descripcion>
        <actividades>${this.actividades}</actividades>
        <disponibilidad>${this.disponibilidad}</disponibilidad>
        <img src="${this.img}" alt="${this.descripcion}">
        <calificacion>${this.calificacion}</calificacion>
        <tipo>${this.tipo}</tipo>
        <guia>${this.guia}</guia>
        `;

      }


}

customElements.define("mi-componente", Componente);

export as namespace Componente;








