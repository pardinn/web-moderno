const gulp = require('gulp');
const { series, parallel } = require('gulp');



const antes1 = callback => {
    console.log('Tarefa Antes 1!');
    return callback()
}
const antes2 = callback => {
    console.log('Tarefa Antes 2!');
    return callback()
}
function copiar(callback) {
    // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
    gulp.src(['pastaA/**/*.txt'])
        // .pipe(imagemPelaMetade())
        // .pipe(imagemEmPretoEBranco())
        // .pipe(transformacaoA())
        // .pipe(transformacaoB())
        // .pipe(transformacaoC())
        .pipe(gulp.dest('pastaB'))
    return callback()
}
const fim = callback => {
    console.log('Tarefa Fim!');
    return callback()
}

module.exports.default = series(
    parallel(antes1, antes2),
    copiar,
    fim,
);