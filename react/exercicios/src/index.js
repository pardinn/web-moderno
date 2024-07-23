import React from 'react';
import { createRoot } from 'react-dom/client';
// import BomDia from './componentes/BomDia';

// import Multi, { BoaNoite } from './componentes/Multiplos';
// import Saudacao from './componentes/Saudacao';

import Pai from './componentes/Pai';

/**
 * O curso ensina a usar ReactDOM.render(), porém, o método foi descontinuado no React 18.
 * A recomendação é utilizar `createRoot` em seu lugar.
 * Para mais detalhes, leia https://react.dev/blog/2022/03/08/react-18-upgrade-guide#updates-to-client-rendering-apis
 * */
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <div>
    {/* <BomDia nome="Victor" /> */}
    {/* <Multi.BoaTarde nome="Natalia" />
    <BoaNoite nome="Sofia" /> */}
    {/* <Saudacao tipo="Bom dia" nome="João" /> */}
    <Pai nome="Paulo" sobrenome="Silva">
      {/* Como passo os componentes Filhos aqui? */}
    </Pai>
  </div>,
);
