var tabuleiro = [0,0,0,0,0,0,0,0,0];
var jogadorDaVez = true
var vencedor = 0;
var placarX =  0;
var placarO =  0;

$('.btn').click(function(){
    
    var campo = this.id

    if(jogadorDaVez){

        tabuleiro[campo] = 1;

        $(this).html("X");
        $(this).attr('disabled','disabled');

        jogadorDaVez = false;

        var vencedor =  verificarVencedor(tabuleiro);

        if(vencedor == 1){
            placarX++;
            placar(placarX,placarO)
        }
    }else{

        tabuleiro[campo] = 2;

        $(this).html("O");
        $(this).attr('disabled','disabled');

        jogadorDaVez = true;

        var vencedor = verificarVencedor(tabuleiro);
        
        if(vencedor == 2){
            placarO++;
            placar(placarX,placarO)
        }
        

    }
    
    
});

function placar(X,O){

    $('.placar').text(`X ${X}   -   O ${O}`);
    $('.btn').attr('disabled','disabled');
    jogadorDaVez = true;

}

$('.reset').click(function(){

    $('.btn').removeAttr('disabled');
    $('.btn').text('');
    $('.btn').attr('style', ''); 
    tabuleiro = [0,0,0,0,0,0,0,0,0];
    
    jogadorDaVez = true;

})

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

            return tabuleiro[jogadas_vencedoras[i][1]];

        }

    }

}


