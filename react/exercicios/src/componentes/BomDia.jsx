// import { Fragment } from 'react';

// Passando os componentes através de um array
export default props => [<h1 key="h1">Bom dia, {props.nome}!</h1>, <h2 key="h2">Até breve!</h2>];

// Outra forma de passar vários componentes é usando o Fragment. Neste caso, o import é necessário
// export default props => (
//   <Fragment>
//     <h1 key="h1">Bom dia, {props.nome}!</h1>
//     <h2 key="h2">Até breve!</h2>;
//   </Fragment>
// );

// Uma terceira forma de passar vários componentes é envolvendo-os em uma div. Esta é provavelmente a forma mais comum
// export default props => (
//   <div>
//     <h1 key="h1">Bom dia, {props.nome}!</h1>
//     <h2 key="h2">Até breve!</h2>
//   </div>
// );
