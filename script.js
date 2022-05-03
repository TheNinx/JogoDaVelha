var tabuleiro = [0,0,0,0,0,0,0,0,0];
var jogadorDaVez = true
var vencedor = 0;

$('.btn').click(function(){
    
    var campo = this.id

    if(jogadorDaVez){

        tabuleiro[campo] = 1;

        $(this).html("X");
        $(this).off('click');

        jogadorDaVez = false;

         var vencedor =  verificarVencedor(tabuleiro);

        if(vencedor == 1){
            alert("PARABÉNS JOGADOR X")
        }
    }else{

        tabuleiro[campo] = 2;

        $(this).html("O");
        $(this).off('click');

        jogadorDaVez = true;

        var vencedor = verificarVencedor(tabuleiro);
        
        if(vencedor == 2){
            alert("PARABÉNS JOGADOR O")
        }
        

    }
    
    
});

function verificarVencedor(tabuleiro){

    jogadas_vencedoras = [
        //Linhas
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        
        //Colunas
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        
        //Diagonal
        [0, 4, 8],
        [2, 4, 6]
    ]

    for (var i = 0; i < 8; i++) {

        if (tabuleiro[jogadas_vencedoras[i][0]] != 0 &&
            tabuleiro[jogadas_vencedoras[i][0]] == tabuleiro[jogadas_vencedoras[i][1]]&&
            tabuleiro[jogadas_vencedoras[i][1]] == tabuleiro[jogadas_vencedoras[i][2]]){

            $(`#${jogadas_vencedoras[i][0]}`).css('color', 'red');
            $('#'+jogadas_vencedoras[i][1]+'').css('color', 'red');
            $('#'+jogadas_vencedoras[i][2]+'').css('color', 'red');
            
            return jogadas_vencedoras[i][0];

        }

    }

}


