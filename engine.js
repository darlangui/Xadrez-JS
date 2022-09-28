function start(){
    time = "white"; //define o primeiro a jogar --> normalmente o white.
    
    //muda a classe das pecas pretas(emcima) para mostrar imgens das pecas
        document.getElementById("block_11").innerHTML = "&#9820;";
        document.getElementById("block_12").innerHTML = "&#9822;";
        document.getElementById("block_13").innerHTML = "&#9821;";
        document.getElementById("block_14").innerHTML = "&#9819;";
        document.getElementById("block_15").innerHTML = "&#9818;";
        document.getElementById("block_16").innerHTML = "&#9821;";
        document.getElementById("block_17").innerHTML = "&#9822;";
        document.getElementById("block_18").innerHTML = "&#9820;";
        
        document.getElementById("block_21").innerHTML = "&#9823;";
        document.getElementById("block_22").innerHTML = "&#9823;";
        document.getElementById("block_23").innerHTML = "&#9823;";
        document.getElementById("block_24").innerHTML = "&#9823;";
        document.getElementById("block_25").innerHTML = "&#9823;";
        document.getElementById("block_26").innerHTML = "&#9823;";
        document.getElementById("block_27").innerHTML = "&#9823;";
        document.getElementById("block_28").innerHTML = "&#9823;";
        
    //muda a classe das pecas brancas(embaixo) para mostrar imgens das pecas
        document.getElementById("block_81").innerHTML = "&#9814;";
        document.getElementById("block_82").innerHTML = "&#9816;";
        document.getElementById("block_83").innerHTML = "&#9815;";
        document.getElementById("block_84").innerHTML = "&#9813;";
        document.getElementById("block_85").innerHTML = "&#9812;";
        document.getElementById("block_86").innerHTML = "&#9815;";
        document.getElementById("block_87").innerHTML = "&#9816;";
        document.getElementById("block_88").innerHTML = "&#9814;";
        
        document.getElementById("block_71").innerHTML = "&#9817;";
        document.getElementById("block_72").innerHTML = "&#9817;";
        document.getElementById("block_73").innerHTML = "&#9817;";
        document.getElementById("block_74").innerHTML = "&#9817;";
        document.getElementById("block_75").innerHTML = "&#9817;";
        document.getElementById("block_76").innerHTML = "&#9817;";
        document.getElementById("block_77").innerHTML = "&#9817;";
        document.getElementById("block_78").innerHTML = "&#9817;";	
    

    //cria array que var receber as posicoes do tabuleiro
	cria_array();
	function cria_array(){
		piece = new Array();
        // matriz que recebe as posicoes do tabuleiro
		for(x=1;x<=8;x++){
			piece[x] = new Array();
			for(y=1;y<=8;y++){
				piece[x][y] = new Array();
				piece[x][y]['piece'] = false; 		//defino como falso para as que não começam com peça ficarem nulas
				piece[x][y]['color'] = false;			//defino como falso para as que não começam com peça ficarem nulas
			}
		}

		il = new Array();
		il['black'] = new Array();
		il['white'] = new Array();
	}

    //posiciona as pecas pretas no array

    //linha A-1
	piece[1][1]['piece']="rook";		
    piece[1][1]['color']="black";	
    piece[1][1]['mov']=0; 
    il['black']['rook'] = "&#9820;";

    //linha B-1
	piece[1][2]['piece']="knight";	
    piece[1][2]['color']="black";	
    piece[1][2]['mov']=0; 
    il['black']['knight'] = "&#9822;";

    //linha C-1
	piece[1][3]['piece']="bishop"; 	
    piece[1][3]['color']="black";	
    piece[1][3]['mov']=0; 
    il['black']['bishop'] = "&#9821;";

    //linha D-1
	piece[1][4]['piece']="queen";	
    piece[1][4]['color']="black";	
    piece[1][4]['mov']=0; 
    il['black']['queen'] = "&#9819;";

    //linha E-1
	piece[1][5]['piece']="king";		
    piece[1][5]['color']="black";	
    piece[1][5]['mov']=0; 
    il['black']['king'] = "&#9818;";

    //linha F-1
	piece[1][6]['piece']="bishop";		
    piece[1][6]['color']="black";	
    piece[1][6]['mov']=0; 

    //linha G-1
	piece[1][7]['piece']="knight";	
    piece[1][7]['color']="black";	
    piece[1][7]['mov']=0; 

    //linha H-1
	piece[1][8]['piece']="rook";		
    piece[1][8]['color']="black";	
    piece[1][8]['mov']=0; 

    //linhas peoes de 2 | A-H
	piece[2][1]['piece']="pawn";		
    piece[2][1]['color']="black";	
    piece[2][1]['mov']=0; 
    il['black']['pawn'] = "&#9823;";

	piece[2][2]['piece']="pawn";		
    piece[2][2]['color']="black";	
    piece[2][2]['mov']=0;

	piece[2][3]['piece']="pawn"; 		
    piece[2][3]['color']="black";	
    piece[2][3]['mov']=0;

	piece[2][4]['piece']="pawn";		
    piece[2][4]['color']="black";	
    piece[2][4]['mov']=0;

	piece[2][5]['piece']="pawn";		
    piece[2][5]['color']="black";	
    piece[2][5]['mov']=0;

	piece[2][6]['piece']="pawn";		
    piece[2][6]['color']="black";	
    piece[2][6]['mov']=0;

	piece[2][7]['piece']="pawn";		
    piece[2][7]['color']="black";	
    piece[2][7]['mov']=0;

	piece[2][8]['piece']="pawn";		
    piece[2][8]['color']="black";	
    piece[2][8]['mov']=0;	

    //posiciona as pieces brancas no array	

    //linha H-8
	piece[8][1]['piece']="rook";		
    piece[8][1]['color']="white";	
    piece[8][1]['mov']=0; 
    il['white']['rook'] = "&#9814;";

    //linha G-8
	piece[8][2]['piece']="knight";	
    piece[8][2]['color']="white";	
    piece[8][2]['mov']=0; 
    il['white']['knight'] = "&#9816;";

    //linha F-8
	piece[8][3]['piece']="bishop"; 	
    piece[8][3]['color']="white";	
    piece[8][3]['mov']=0; 
    il['white']['bishop'] = "&#9815;";

    //linha E-8
	piece[8][4]['piece']="queen";	
    piece[8][4]['color']="white";	
    piece[8][4]['mov']=0; 
    il['white']['queen'] = "&#9813;";

    //linha D-8
	piece[8][5]['piece']="king";		
    piece[8][5]['color']="white";	
    piece[8][5]['mov']=0; 
    il['white']['king'] = "&#9812;";

    //linha C-8
	piece[8][6]['piece']="bishop";		
    piece[8][6]['color']="white";	
    piece[8][6]['mov']=0;

    //linha B-8
	piece[8][7]['piece']="knight";	
    piece[8][7]['color']="white";	
    piece[8][7]['mov']=0;

    //linha A-8
	piece[8][8]['piece']="rook";		
    piece[8][8]['color']="white";	
    piece[8][8]['mov']=0;


    //linhas peoes 7 | H-A
	piece[7][1]['piece']="pawn";		
    piece[7][1]['color']="white";	
    piece[7][1]['mov']=0; 
    il['white']['pawn'] = "&#9817;";

	piece[7][2]['piece']="pawn";		
    piece[7][2]['color']="white";	
    piece[7][2]['mov']=0;

	piece[7][3]['piece']="pawn"; 		
    piece[7][3]['color']="white";	
    piece[7][3]['mov']=0;

	piece[7][4]['piece']="pawn";		
    piece[7][4]['color']="white";	
    piece[7][4]['mov']=0;

	piece[7][5]['piece']="pawn";		
    piece[7][5]['color']="white";
    piece[7][5]['mov']=0;

	piece[7][6]['piece']="pawn";		
    piece[7][6]['color']="white";	
    piece[7][6]['mov']=0;

	piece[7][7]['piece']="pawn";		
    piece[7][7]['color']="white";	
    piece[7][7]['mov']=0;

	piece[7][8]['piece']="pawn";		
    piece[7][8]['color']="white";	
    piece[7][8]['mov']=0;	

}
