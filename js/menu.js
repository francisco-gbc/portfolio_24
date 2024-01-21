function importHTML(url, containerId) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            const container = document.getElementById(containerId);
            container.innerHTML = html;

            // Associação dos eventos após importar o HTML
            const back_menu = document.getElementById('back_menu');
            const start_menu = document.getElementById('start_menu1');
            const start_menu2 = document.getElementById('start_menu2');
            const start_menu3 = document.getElementById('start_menu3');
            const start_menu4 = document.getElementById('start_menu4');
            const elementoAlvo = document.getElementById('menu');

            back_menu.onclick = function() {
                elementoAlvo.classList.add('back_display');
                elementoAlvo.classList.remove('start_display');
            };

            start_menu.onclick = function() {
                elementoAlvo.classList.add('start_display');
                elementoAlvo.classList.remove('back_display');
            };

            start_menu2.onclick = function() {
                elementoAlvo.classList.add('start_display');
                elementoAlvo.classList.remove('back_display');
            };

            start_menu3.onclick = function() {
                elementoAlvo.classList.add('start_display');
                elementoAlvo.classList.remove('back_display');
            };

            start_menu4.onclick = function() {
                elementoAlvo.classList.add('start_display');
                elementoAlvo.classList.remove('back_display');
            };
        })
        .catch(error => {
            console.error('Erro ao importar o HTML:', error);
        });
}

// Chame a função de importação apenas uma vez no início do script
importHTML('../html/menu.html', 'menuContainer');
