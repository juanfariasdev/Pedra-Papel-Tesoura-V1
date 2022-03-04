const alertar = document.getElementById('alert');

const pedra = document.getElementById('pedra');
const papel = document.getElementById('papel');
const tesoura = document.getElementById('tesoura');

const computadorSelecao = document.getElementById('computadorSelecao');
const resultado = document.getElementById('resultado');

const pontuacaoUser = document.getElementById('pontuacaoUser');
const pontuacaoPC = document.getElementById('pontuacaoPC');

//const computadorPlayer = document.getElementById('computadorPlayer')
let userPoint = 0
let pcPoint = 0

function play() {
    let selecao = [pedra.checked, papel.checked, tesoura.checked]
    if (!selecao.some(Boolean)) {
        alertar.innerText = "Selecione uma opção!!!"
        alertar.style = "display: flex"
    } else {
        alertar.style = "display: none"
        computadorPlayer.style = "display: flex"
        let usuario = selecao.indexOf(true);
        let sortear = Math.floor(Math.random() * 3);
        switch (sortear) {
            case 0:
                computadorSelecao.innerText = "Pedra"
                break
            case 1:
                computadorSelecao.innerText = "Papel"
                break
            case 2:
                computadorSelecao.innerText = "Tesoura"
                break
        }

        //declaração de empate ou verificar qual jogador venceu (jogador x computador)
        if (sortear == usuario) {
            resultado.innerText = 'empatou';
        } else if ((usuario === 0 && selecao === 2) || (usuario === 1 && sortear === 0) || (usuario === 2 && sortear === 1)) {
            resultado.innerText = 'jogador ganhou';
            userPoint++
            pontuacaoUser.innerHTML = userPoint
        } else {
            resultado.innerText = 'computador venceu';
            pcPoint++
            pontuacaoPC.innerHTML = pcPoint
        }

        if (userPoint === 2) {
            alertar.innerText = `Usuário Venceu de ${userPoint} a ${pcPoint}!!!`
            alertar.style = "display: flex"
        }
        if (pcPoint === 2) {
            alertar.innerText = `Computador Venceu de ${pcPoint} a ${userPoint}!!!`
            alertar.style = "display: flex"
        }
    }
}

function resetar() {
    document.getElementById('player').src = 'player.png'
    document.getElementById('resultado').innerText = ''
}