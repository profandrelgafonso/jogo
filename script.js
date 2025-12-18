var pontA = 0;
var pontB = 0;
var controle = false;
var res = ['Jogo iniciado', 'Jogador 1 venceu essa rodada', 'Computador venceu essa rodada', 'Empatou'];
var frase = document.getElementById('res');
var escPc = 0;
var escJog = 0;

function iniciar(){
	if(controle == false){
		pontA = 0;
		pontB = 0;
		controle = true;
		frase.innerHTML = res[0];
		} else {
			let resp = confirm('O jogo já foi iniciado!\nDeseja reiniciar?');
			if(resp){
				controle = false;
				alert('Jogo reiniciado!');
			} else{
				alert('Vida que segue!');
			}
		}
}

function desPedra(){
	escPc = parseInt(Math.random()*3+1);
	escJog = 1;
	if (controle == true){
		if(escPc == 3){
			alert('Você venceu!');
			frase.innerHTML = res[1];
		} else if(escPc == 1){
			alert('Empate');
			frase.innerHTML = res[3];
		} else{
			alert('PC venceu!');
			frase.innerHTML = res[2];
		}
			
		} else{
		alert('O jogo já acabou!');
	}
}
