
        function importHTML(url, containerId) {
            fetch(url)
                .then(response => response.text())
                .then(html => {
                    const container = document.getElementById(containerId);
                    container.innerHTML = html;
                })
                .catch(error => {
                    console.error('Erro ao importar o HTML:', error);
                });
        }

        importHTML('html/nav_us.html', 'navContainer_us');
        importHTML('html/footer_us.html', 'footerContainer_us');
        importHTML('html/menu_us.html', 'menu_us');

        