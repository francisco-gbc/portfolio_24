
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

        importHTML('../html/nav.html', 'navContainer');
        importHTML('../html/footer.html', 'footerContainer');
        importHTML('../html/menu.html', 'menu');

        