const formulario = document.querySelector("#formulario")
const resultado = document.querySelector("#resultado")
const texto = document.querySelector("#texto")


document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audio');
    const button = document.getElementById('play-pause');

    button.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            button.textContent = 'Pause';
        } else {
            audio.pause();
            button.textContent = 'Play';
        }
    });
});

const slides = document.querySelector('.carrossel-fotos .slides');
const slideCount = document.querySelectorAll('.carrossel-fotos .slide').length;
let currentIndex = 0;

document.querySelector('#next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slideCount;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
});

document.querySelector('#prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slideCount) % slideCount;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
});



formulario.addEventListener("submit", (evento)=>{
evento.preventDefault()


 const novo_input = document.createElement("h2")
 novo_input.textContent= "Oi amor, eu te amo muito, estou fazendo esse sitezinho para tentar fazer algo diferente nesse dia tão especial, eu quero poder dizer que eu te amo muito, mais do que tudo nesse mundo, obrigado por acreditar tanto no meu potencial, obrigado por cuidar tão bem de mim, obrigado por ser essa pessoa que todos os dias está ao meu lado, independente se estamos com dificuldades ou em bons momentos, ainda irei te dar muitoo orgulho! Hoje estamos completando dois anos e só Oxalá sabe o quanto eu estou feliz em poder estar hoje comemorando essa data com você, a pessoa que me ensinou e me ensina todos os dias o que é amar, o quão bom é o amor, a pessoa que me fez  ter sonhos que eu nunca imaginei ter, Nayra, eu irei me casar com você, irei passar toda a eternidade ao seu lado, você é com toda certeza o bem mais precioso de toda a minha vida,  eu te amo hoje, eu te amo amanhã e irei te amar pra toda eternidade, não há um dia nessa vida em que eu não irei olhar nos seus olhos e falar 'EU TE AMO', sempre irei te tratar com todo carinho, amor, sempre terá toda a minha atenção, dedicação, você sempre me terá completamente pra você! Eu posso passar horas e horas escrevendo o quanto eu te amo, escrevendo sobre suas qualidades, sobre o quão é incrível te ter ao meu lado, mas nem todas as horas possíveis desse mundo seriam o suficiente pra te descrever. Poder escrever sobre ti, sobre te amar, se torna melhor que qualquer livro, poder ouvir sua voz todos os dias é melhor do que a melodia de qualquer música, Nayra Conrado Gomes Nogueira, eu te amo muitooo! Desde que eu te conheci posso me considerar a pessoa mais feliz desse mundo, e isso se prova cada dia mais certo, que eu realmente sou a pessoa mais feliz desse universo, e se existir vida fora da terra, com certeza não há ser mais feliz que eu lá fora também, Nayra, ainda iremos realizar ainda mais sonhos juntos, ainda estaremos segurando a chave da nossa casa, do nosso carro, quem sabe de uma empresa? haha Eu tenho muita fé que a cada dia quem nos protege nos enche de bençãos. Viajar com você é a minha terapia, eu já te conhecia em outras vidas.  Nessa vida e em outras eu com certeza irei te amar, sempre darei um jeitinho de te encontrar e reviver tudo novamente ao seu lado, eu te amo muitoo! As vezes eu me sinto extremamente cansado da rotina do trabalho, dos problemas da vida, mas você vem com esse sorriso, esse jeito, com todo teu amor e renova todas as minhas forças, isso é incrivel" 
 novo_input.className= "textu"

 



    resultado.append(novo_input)



texto.value = ""



})
