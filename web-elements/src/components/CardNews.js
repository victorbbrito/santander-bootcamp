class CardNews extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});

        // enviar para a shadow
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build(){
        // base do component
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("href");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card__right");

        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("src") || "assets/foto_default.jpg";
        newsImage.alt = "Foto da Noticia";
        
        cardRight.appendChild(newsImage);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles(){
        // estilo do component
        const style = document.createElement("style");
        style.textContent = `
            .card{
                width: 80%;
                box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
                -webkit-box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
                -moz-box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }
            
            .card__left{
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 10px;
            }
            
            .card__left a{
                color: black;
                text-decoration: none;
                font-weight: bold;
                margin-top: 15px;
                font-size: 24px;
            }
            
            .card__left span{
                font-weight: 400;
            }
            
            .card__left p{
                color: gray;
            }
            
            .card__right{
                justify-content: center;
            }
            
            img{
                height: 100px;
                width: auto;
            }
        `;
        return style;
    }
}

customElements.define("card-news", CardNews)