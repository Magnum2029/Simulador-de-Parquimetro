class Parquimetro {
    constructor(valorInserido) {
        this.valorInserido = valorInserido;
        this.tabela = [
            { valor: 3.00, tempo: 120 },
            { valor: 1.75, tempo: 60 },
            { valor: 1.00, tempo: 30 }
        ];
    }

    calcular() {
        if (this.valorInserido <1) {
            return { mensagem: 'Valor insuficiente para estacionar.'};
        }

        for (let item of this.tabela) {
            if (this.valorInserido >= item.valor) {
                const troco = (this.valorInserido - item.valor).toFixed(2);
                return {
                    tempo: item.tempo,
                    troco: troco > 0 ? `R$ ${troco}` : 'Sem troco'
                };
            }
        }
    }
}

function calcularTempo() {
    const input = document.getElementById('vaor');
    const resultado = document.getElementById('resultado');
    const valor = parseFloat(input.value);

    const parquimetro = new Parquimetro(valor);
    const resultadoCalculado = parquimetro.calcular();

    if (resultadoCalculado.mensagem) {
        resultado.innerText = resultadoCalculado.mensagem;
    } else {
        resultado.innerText = `Tempo: ${resultadoCalculado.tempo} minutos\nTroco: ${resultadoCalculado.troco}`;
    }
}