class MyElement extends HTMLElement{

    constructor(){
        super();


        this.attachShadow({mode:'open'});

        let div=document.createElement('span');

        let style=this.getAttribute("style");
        let message=this.getAttribute("message");
        this.style="";

        div.style=style;
        div.innerText=message;


        this.shadowRoot.appendChild(div);


    }


}


customElements.define("my-element",MyElement);

customElements.define(
    "my-paragraph",
    class extends HTMLElement {
      constructor() {
        super();
        let template = document.getElementById("my-paragraph");
        let templateContent = template.content;
        let date=Date.now();
        let div=document.createElement('div');
        div.innerHTML=new Date(date);
        templateContent.appendChild(div);
      
  
        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.appendChild(templateContent.cloneNode(true));
      }
    }
  );