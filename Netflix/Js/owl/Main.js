$('.owl-carousel').owlCarousel({
    loop: true, /*Colocando o efeito de loop o carrosel se torna infinito sempre reiniciando ao chegar ao final da lsita*/
    margin:10,/*Margem entre as caixas*/
    nav:false, /*Botões de navegação(setas)*/
    responsive:{/*Quando a tela se adapta ao tamanho da tela do seu aparelho, encaixado os aparelhos*/
        0:{/*pixels*//*Muito próximo de 0*/
            items:3/*Mostra um item*/
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})