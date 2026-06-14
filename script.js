document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Efeito Rolagem Dinâmica no Menu Superior
    const header = document.getElementById('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('rolado');
        } else {
            header.classList.remove('rolado');
        }
    });

    // 2. Menu Mobile (Hamburguer / Sanduíche)
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');
    
    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('ativo');
    });

    document.querySelectorAll('#nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('ativo');
        });
    });

    // 3. Sistema Dinâmico de Abas (Alternativas de Cultivo)
    const botoesAba = document.querySelectorAll('.aba-btn');
    const conteudosAba = document.querySelectorAll('.aba-conteudo');

    botoesAba.forEach(botao => {
        botao.addEventListener('click', function() {
            botoesAba.forEach(b => b.classList.remove('ativo'));
            conteudosAba.forEach(c => c.classList.remove('ativo'));

            this.classList.add('ativo');
            const idAba = this.getAttribute('data-aba');
            document.getElementById(idAba).classList.add('ativo');
        });
    });

    // 4. Animação de Scroll ("On-Scroll Reveal" dos cards)
    const cards = document.querySelectorAll('.card-principio');
    const checarScroll = () => {
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            if (cardTop < window.innerHeight * 0.85) {
                card.classList.add('visivel');
            }
        });
    };
    window.addEventListener('scroll', checarScroll);
    checarScroll(); 

    // 5. Motor do Simulador Ecológico (Cálculos de Impacto)
    const btnCalcular = document.getElementById('btn-calcular');
    const blocoResultado = document.getElementById('bloco-resultado');
    
    btnCalcular.addEventListener('click', function() {
        const area = parseFloat(document.getElementById('tamanho-area').value) || 1;
        const cultura = document.getElementById('tipo-cultura').value;

        let quimicosEvitados = 0;
        let soloRegenerado = 0;
        let dicaEspecifica = "";

        if (cultura === 'hortaliças') {
            quimicosEvitados = area * 45; 
            soloRegenerado = area * 120; 
            dicaEspecifica = "Foco ideal: Hortaliças orgânicas respondem perfeitamente à aplicação de biofertilizante foliar enriquecido com microrganismos nativos.";
        } else if (cultura === 'frutas') {
            quimicosEvitados = area * 70;
            soloRegenerado = area * 200;
            dicaEspecifica = "Foco ideal: Na fruticultura orgânica, as plantas de cobertura rasteiras nas entrelinhas ajudam no manejo de insetos indesejados.";
        } else {
            quimicosEvitados = area * 25;
            soloRegenerado = area * 150;
            dicaEspecifica = "Foco ideal: O consórcio milho-feijão diminui a pressão de pragas em até 60% se comparado à monocultura tradicional.";
        }

        // Exibindo resultados formatados na interface
        document.getElementById('txt-quimicos').innerHTML = `🌱 <strong>${quimicosEvitados} litros</strong> de químicos nocivos poupados do lençol freático anualmente.`;
        document.getElementById('txt-solo').innerHTML = `🪱 <strong>${soloRegenerado} kg</strong> de biomassa viva e microfauna reestabelecidos no solo da fazenda.`;
        document.getElementById('txt-dica').innerText = dicaEspecifica;

        blocoResultado.style.display = 'block';
        blocoResultado.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });

});
