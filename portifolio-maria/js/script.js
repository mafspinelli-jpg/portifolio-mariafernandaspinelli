
// MENU 

const menuButton = document.getElementById("menu-button");
const navLinks = document.getElementById("nav-links");

if (menuButton && navLinks) {
    menuButton.addEventListener("click", () => {
        navLinks.classList.toggle("aberto");
    });
}

// Fecha o menu ao clicar em um link
const linksMenu = document.querySelectorAll(".nav-links a");

linksMenu.forEach((link) => {
    link.addEventListener("click", () => {
        if (navLinks) {
            navLinks.classList.remove("aberto");
        }
    });
});

// CABEÇALHO

const header = document.querySelector(".header");

if (header) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 30) {
            header.classList.add("rolando");
        } else {
            header.classList.remove("rolando");
        }
    });
}

// BOTÃO VOLTAR AO TOPO

const voltarTopo = document.getElementById("voltar-topo");

if (voltarTopo) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 500) {
            voltarTopo.classList.add("aparecer");
        } else {
            voltarTopo.classList.remove("aparecer");
        }
    });

    voltarTopo.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// TEXTOS DA PÁGINA INICIAL (EFEITO DIGITAÇÃO)


const textoDigitado = document.getElementById("texto-digitado");

const textos = [
    "crio soluções com tecnologia.",
    "desenvolvo aplicações web.",
    "aprendo continuamente.",
    "transformo ideias em projetos."
];

let indiceTexto = 0;
let indiceLetra = 0;
let apagando = false;

function escreverTexto() {
    const textoAtual = textos[indiceTexto];

    if (!apagando) {
        textoDigitado.textContent = textoAtual.substring(0, indiceLetra + 1);
        indiceLetra++;

        if (indiceLetra === textoAtual.length) {
            apagando = true;
            setTimeout(escreverTexto, 1800);
            return;
        }
    } else {
        textoDigitado.textContent = textoAtual.substring(0, indiceLetra - 1);
        indiceLetra--;

        if (indiceLetra === 0) {
            apagando = false;
            indiceTexto++;

            if (indiceTexto === textos.length) {
                indiceTexto = 0;
            }
        }
    }

    setTimeout(escreverTexto, apagando ? 40 : 75);
}

if (textoDigitado) {
    escreverTexto();
}

// DADOS DOS PROJETOS

const projetos = {
    brownie: {
        titulo: "Browni-e",
        descricao: "Sistema de gestão para uma doceria, desenvolvido durante a graduação. O projeto possui cadastro de produtos, categorias, clientes e pedidos, além de controle de estoque.",
        tecnologias: ["PHP", "MySQL", "JavaScript", "Bootstrap", "MVC"],
        imagens: [
            "./assets/images/brownie/brownie-1.jpeg",
            "./assets/images/brownie/brownie-2.jpeg",
            "./assets/images/brownie/brownie-3.jpeg"
        ]
    },
    pet: {
        titulo: "Meu Amigo Pet",
        descricao: "Site institucional desenvolvido para apresentar uma organização de proteção animal, divulgar sua missão e organizar informações importantes para os visitantes.",
        tecnologias: ["HTML", "CSS", "JavaScript"],
        imagens: [
            "./assets/images/meu-amigo-pet/meu-amigo-pet-1.jpeg",
            "./assets/images/meu-amigo-pet/meu-amigo-pet-2.jpeg",
            "./assets/images/meu-amigo-pet/meu-amigo-pet-3.jpeg",
            "./assets/images/meu-amigo-pet/meu-amigo-pet-4.jpeg",
            "./assets/images/meu-amigo-pet/meu-amigo-pet-5.jpeg"
        ]
    },
    liga: {
        titulo: "Liga 404 Not Found",
        descricao: "Experiência acadêmica desenvolvida por meio da atuação na Liga 404 Not Found. O trabalho envolve organização de atividades, cursos, eventos, colaboração e incentivo à presença feminina na tecnologia.",
        tecnologias: ["Liderança", "Eventos", "Educação", "Comunidade"],
        imagens: [
            "./assets/images/liga-404/liga-404-1.jpeg",
            "./assets/images/liga-404/liga-404-2.jpeg",
            "./assets/images/liga-404/liga-404-3.jpeg",
            "./assets/images/liga-404/liga-404-4.jpeg",
            "./assets/images/liga-404/liga-404-5.jpeg",
            "./assets/images/liga-404/liga-404-6.jpeg",
            "./assets/images/liga-404/liga-404-7.png"
        ]
    }
};

// MODAL DOS PROJETOS

const modal = document.getElementById("modal");
const conteudoModal = document.getElementById("conteudo-modal");
const fecharModal = document.getElementById("fechar-modal");
const botoesDetalhes = document.querySelectorAll(".detalhes-projeto");

if (modal && conteudoModal) {
    botoesDetalhes.forEach((botao) => {
        botao.addEventListener("click", () => {
            const nomeProjeto = botao.dataset.projeto;
            const projeto = projetos[nomeProjeto];

            if (!projeto) return;

            const tecnologiasHTML = projeto.tecnologias
                .map((tecnologia) => `<span>${tecnologia}</span>`)
                .join("");

            const imagensHTML = projeto.imagens
                .map((imagem, indice) => `<img src="${imagem}" alt="${projeto.titulo} - imagem ${indice + 1}">`)
                .join("");

            conteudoModal.innerHTML = `
                <article class="modal-projeto">
                    <p class="modal-tipo">PROJETO</p>
                    <h2>${projeto.titulo}</h2>
                    <p class="modal-descricao">${projeto.descricao}</p>
                    <h3>Tecnologias e habilidades</h3>
                    <div class="modal-tags">${tecnologiasHTML}</div>
                    <h3>Fotos do projeto</h3>
                    <div class="galeria-projeto">${imagensHTML}</div>
                </article>
            `;

            modal.classList.add("aberto");
            document.body.style.overflow = "hidden";
        });
    });


    // FECHAR MODAL

    const fecharOModal = () => {
        modal.classList.remove("aberto");
        document.body.style.overflow = "auto";
    };

    if (fecharModal) {
        fecharModal.addEventListener("click", fecharOModal);
    }

    modal.addEventListener("click", (evento) => {
        if (evento.target === modal) {
            fecharOModal();
        }
    });

    document.addEventListener("keydown", (evento) => {
        if (evento.key === "Escape" && modal.classList.contains("aberto")) {
            fecharOModal();
        }
    });
}