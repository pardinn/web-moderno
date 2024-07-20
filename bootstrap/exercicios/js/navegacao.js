/* eslint-disable no-restricted-globals */
// eslint-disable-next-line func-names
(function () {
  function navegarViaAjax(hash) {
    if (!hash) return;

    const link = document.querySelector(`[wm-link='${hash}']`);
    if (!link) return;

    const destino = document.querySelector('[wm-link-destino]');

    const url = hash.substring(1);
    fetch(url)
      .then(resp => resp.text())
      .then(html => {
        destino.innerHTML = html;
        // Executa todos os scrips que estiverem nos arquivos html. Usado para ativar a tooltip
        // eslint-disable-next-line no-eval
        eval(html.match(/<script>([\s\S]*)<\/script>/)[1]);
      });
  }

  function configurarLinks() {
    document.querySelectorAll('[wm-link]').forEach(link => {
      // eslint-disable-next-line no-param-reassign
      link.href = link.attributes['wm-link'].value;
    });
  }

  function navegacaoInicial() {
    if (location.hash) {
      navegarViaAjax(location.hash);
    } else {
      const primeiroLink = document.querySelector('[wm-link]');
      navegarViaAjax(primeiroLink.hash);
    }
  }

  window.onhashchange = () => navegarViaAjax(location.hash);

  configurarLinks();
  navegacaoInicial();
})();
