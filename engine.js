function start(){
    time = "white"; //time de quem jogar
    
    // define as imagens da peças pretas
        document.getElementById("t11").innerHTML = "&#9820;";
        document.getElementById("t12").innerHTML = "&#9822;";
        document.getElementById("t13").innerHTML = "&#9821;";
        document.getElementById("t14").innerHTML = "&#9819;";
        document.getElementById("t15").innerHTML = "&#9818;";
        document.getElementById("t16").innerHTML = "&#9821;";
        document.getElementById("t17").innerHTML = "&#9822;";
        document.getElementById("t18").innerHTML = "&#9820;";
        
        document.getElementById("t21").innerHTML = "&#9823;";
        document.getElementById("t22").innerHTML = "&#9823;";
        document.getElementById("t23").innerHTML = "&#9823;";
        document.getElementById("t24").innerHTML = "&#9823;";
        document.getElementById("t25").innerHTML = "&#9823;";
        document.getElementById("t26").innerHTML = "&#9823;";
        document.getElementById("t27").innerHTML = "&#9823;";
        document.getElementById("t28").innerHTML = "&#9823;";
        
     // define as imagens da peças brancas
        document.getElementById("t81").innerHTML = "&#9814;";
        document.getElementById("t82").innerHTML = "&#9816;";
        document.getElementById("t83").innerHTML = "&#9815;";
        document.getElementById("t84").innerHTML = "&#9813;";
        document.getElementById("t85").innerHTML = "&#9812;";
        document.getElementById("t86").innerHTML = "&#9815;";
        document.getElementById("t87").innerHTML = "&#9816;";
        document.getElementById("t88").innerHTML = "&#9814;";
        
        document.getElementById("t71").innerHTML = "&#9817;";
        document.getElementById("t72").innerHTML = "&#9817;";
        document.getElementById("t73").innerHTML = "&#9817;";
        document.getElementById("t74").innerHTML = "&#9817;";
        document.getElementById("t75").innerHTML = "&#9817;";
        document.getElementById("t76").innerHTML = "&#9817;";
        document.getElementById("t77").innerHTML = "&#9817;";
        document.getElementById("t78").innerHTML = "&#9817;";	
    
        //cria array que var receber as posicoes do tabuleiro
        new_array();
        function new_array(){
            piece = new Array();
            for(x=1;x<=8;x++){
                piece[x] = new Array();
                for(y=1;y<=8;y++){
                    piece[x][y] = new Array();
                    piece[x][y]['piece'] = false; 	// as peças que nao irao começar são definidos como false.
                    piece[x][y]['color'] = false;			// define como falso para que não fiquem nulas.
                }
            }
            il = new Array();
            il['black'] = new Array();
            il['white'] = new Array();
        }

    //posiciona as pieces pretas no array
        //torre
        piece[1][1]['piece']="rook";		
        piece[1][1]['color']="black";	
        piece[1][1]['mov']=0; 
        il['black']['rook'] = "&#9820;";
    
        //cavalo
        piece[1][2]['piece']="knight";	
        piece[1][2]['color']="black";	
        piece[1][2]['mov']=0; 
        il['black']['knight'] = "&#9822;";

        //bispo
        piece[1][3]['piece']="bishop"; 	
        piece[1][3]['color']="black";	
        piece[1][3]['mov']=0; 
        il['black']['bishop'] = "&#9821;";

        //rainha
        piece[1][4]['piece']="queen";	
        piece[1][4]['color']="black";	
        piece[1][4]['mov']=0; 
        il['black']['queen'] = "&#9819;";

        //rei
        piece[1][5]['piece']="king";		
        piece[1][5]['color']="black";	
        piece[1][5]['mov']=0;
        il['black']['king'] = "&#9818;";

        //bispo
        piece[1][6]['piece']="bishop";		
        piece[1][6]['color']="black";	
        piece[1][6]['mov']=0; 

        //cavalo
        piece[1][7]['piece']="knight";	
        piece[1][7]['color']="black";	
        piece[1][7]['mov']=0;
        
        //torre
        piece[1][8]['piece']="rook";		
        piece[1][8]['color']="black";	
        piece[1][8]['mov']=0; 
    
        //peao full
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
        //torre
        piece[8][1]['piece']="rook";		
        piece[8][1]['color']="white";	
        piece[8][1]['mov']=0; 
        il['white']['rook'] = "&#9814;";

        //cavalo
        piece[8][2]['piece']="knight";
        piece[8][2]['color']="white";	
        piece[8][2]['mov']=0; 
        il['white']['knight'] = "&#9816;";

        //bispo
        piece[8][3]['piece']="bishop"; 	
        piece[8][3]['color']="white";	
        piece[8][3]['mov']=0; 
        il['white']['bishop'] = "&#9815;";

        //rainha
        piece[8][4]['piece']="queen";	
        piece[8][4]['color']="white";	
        piece[8][4]['mov']=0; 
        il['white']['queen'] = "&#9813;";

        //rei
        piece[8][5]['piece']="king";		
        piece[8][5]['color']="white";	
        piece[8][5]['mov']=0; 
        il['white']['king'] = "&#9812;";

        //bispo
        piece[8][6]['piece']="bishop";		
        piece[8][6]['color']="white";	
        piece[8][6]['mov']=0;

        //cavalo
        piece[8][7]['piece']="knight";	
        piece[8][7]['color']="white";	
        piece[8][7]['mov']=0;

        //torre
        piece[8][8]['piece']="rook";		
        piece[8][8]['color']="white";	
        piece[8][8]['mov']=0;
    
        //peao full
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
    
    
    
    ///aray para mover as pieces
        move = new Array();
        
        move['selected'] = new Array();
        move['selected']['x'] = 0;
        move['selected']['y'] = 0;
        move['selected']['piece']= "0";
        move['selected']['color']= "0";
        
        move['destiny'] = new Array();
        move['destiny']['x'] =  0;
        move['destiny']['y'] = 0; 
        move['destiny']['piece'] = "0";
        move['destiny']['color']= "0";
    
    ///aray para os possible movimentos
        possible = new Array();
    }
    
    function possible_move(){
            let c = 0; //contador pro array possible
            x = move['selected']['x'];
            y = move['selected']['y'];
            document.getElementById('t'+x+y).style.backgroundColor = "#3C9"; //muda color de fundo
            possible[c] = "t"+x+y; c++;
    
        // peão
        if(piece[x][y]['piece']=='pawn'){
            if(piece[x][y]['color']=="white"){
                    if(!piece[x-1][y]['piece']){
                        possibility(x-1,y);
                    }if(y-1>0 && piece[x-1][y-1]['piece']){
                        possibility(x-1,y-1);						
                    }
                    if(y+1<9 && piece[x-1][y+1]['piece']){
                        possibility(x-1,y+1);					
                    }					
    
                    if(x==7){				
                        if(!piece[x-2][y]['piece'] && !piece[x-1][y]['piece']){
                            possibility(x-2,y);
                        }
                    }
            }
            if(piece[x][y]['color']=="black"){
                    if(!piece[x+1][y]['piece']){
                        possibility(x+1,y);
                    }if(y-1>0 && piece[x+1][y-1]['piece']){
                        possibility(x+1,y-1);						
                    }
                    if(y+1<9 && piece[x+1][y+1]['piece']){
                        possibility(x+1,y+1);					
                    }					
                    if(x==2){
                        if(!piece[x+2][y]['piece'] && !piece[x+1][y]['piece']){
                            possibility(x+2,y);
                        }
                    }
            }
        }
        // knight
        if(piece[x][y]['piece']=='knight'){
            possibility(x-1,y-2);
            possibility(x+1,y+2);
            possibility(x+1,y-2);
            possibility(x-1,y+2);
            possibility(x-2,y-1);
            possibility(x+2,y+1);
            possibility(x+2,y-1);
            possibility(x-2,y+1);
        }
        // king
        if(piece[x][y]['piece']=='king'){
            possibility(x-1,y);
            possibility(x,y-1);
            possibility(x-1,y-1);
            possibility(x+1,y);
            possibility(x,y+1);
            possibility(x+1,y+1);
            possibility(x-1,y+1);
            possibility(x+1,y-1);
        }
        // rook
        if(piece[x][y]['piece']=='rook'){
            for(i=1;possibility(x-i,y);i++);
            for(i=1;possibility(x+i,y);i++);
            for(i=1;possibility(x,y-i);i++);
            for(i=1;possibility(x,y+i);i++);
        }
        // bishop
        if(piece[x][y]['piece']=='bishop'){
            for(i=1;possibility(x-i,y-i);i++);
            for(i=1;possibility(x+i,y+i);i++);
            for(i=1;possibility(x-i,y+i);i++);
            for(i=1;possibility(x+i,y-i);i++);
        }
        // queen
        if(piece[x][y]['piece']=='queen'){
            for(i=1;possibility(x-i,y-i);i++);
            for(i=1;possibility(x+i,y+i);i++);
            for(i=1;possibility(x-i,y+i);i++);
            for(i=1;possibility(x+i,y-i);i++);
            for(i=1;possibility(x-i,y);i++);
            for(i=1;possibility(x+i,y);i++);
            for(i=1;possibility(x,y-i);i++);
            for(i=1;possibility(x,y+i);i++);
        }
    
    function possibility(px,py){
            if(px>0 && px <9 && py>0 && py <9 && piece[px][py]['color']!= move['selected']['color']){
                document.getElementById('t'+(px)+(py)).style.backgroundColor = "#3C9"; //muda color de fundo
                possible[c] = "t"+(px)+(py); c++;
                if(!piece[px][py]['piece']){
                    return true;
                }
            }else{
                return false;
            }
        }
        return c;
    }

    function return_background(){
        let cf;
        for(cf=0;cf<possible.length;cf++){
            document.getElementById(possible[cf]).style.backgroundColor = "";
        }	
    }
    
    function check_possibility(x,y,c){
        let can=0;
        let cp;
        let div = "t"+x+y;
        for(cp=1;cp<c;cp++){
            if(possible[cp]==div){
                can ++;
            }
            if(can>0){
                return 1;
            }
        }	
    }
    
    function select(x,y){
            if((move['selected']['x']==0 || piece[x][y]['color'] == move['selected']['color']) && piece[x][y]['color']==time){
                if(move['selected']['x']!=0){
                    return_background(); //volta a color de fundo normal
                }
                if(piece[x][y]['piece']){ //se tiver uma piece nessa posição
                    move['selected']['x'] = x;	//recebe x selecionado
                    move['selected']['y'] = y;  //recebe y selecionado
                    move['selected']['piece'] = piece[x][y]['piece']; //recebe a piece selected
                    move['selected']['color'] = piece[x][y]['color'];	//recebe a color selected
                    
                    cont_possible = possible_move();	
                }
            }else if(check_possibility(x,y,cont_possible)){ //se for segundo clique e a color da piece destiny for diferente da selected
                if(piece[x][y]['piece']=="king"){
                    alert(move['selected']['color']+" venceu (:");
                    
                }
                //Pra trocar de peça quando o peão chegar do outro lado
                if(move['selected']['piece']=='pawn' && move['selected']['color']=='white' && x==1){
                    document.getElementById('choose_white').style.display='block';	
                    document.getElementById('background').style.display='block';	
                    xe=x;ye=y;
                }
                if(move['selected']['piece']=='pawn' && move['selected']['color']=='black' && x==8){
                    document.getElementById('choose_black').style.display='block';	
                    document.getElementById('background').style.display='block';					
                    xe=x;ye=y;
                }
                if(piece[x][y]['color'] != move['selected']['color']){
                    move['destiny']['x'] =x;	//recebe o x do destiny(segundo clique)
                    move['destiny']['y'] =y;  //recebe y do destiny(segundo clique)
                    
                    if(piece[x][y]['piece']){  //se tiver alguma piece nessa posição
                        move['destiny']['piece'] = piece[x][y]['piece'];	//destiny recebe a piece selected
                        move['destiny']['color'] = piece[x][y]['color'];	//destiny recebe a color selected
                    }
                    
                    
                    document.getElementById("t"+move['selected']['x']+""+move['selected']['y']).innerHTML = ""; //selcionada fica sem imagem
                    document.getElementById("t"+x+""+y).innerHTML = il[move['selected']['color']][move['selected']['piece']]; //destiny recebe a imagem da peça selecinada
                    piece[x][y]['piece']=move['selected']['piece'];	//posicao destiny recebe a piece
                    piece[x][y]['color']=move['selected']['color'];		//posicao destiny recebe a color
                                    
                    piece[move['selected']['x']][move['selected']['y']]['piece'] = false;		//piece selected recebe 0
                    piece[move['selected']['x']][move['selected']['y']]['color'] = false;		//color selected recebe 0
                        
                    move['selected']['x'] =0;	//selected x recebe 0 (pra na proxima ver q é o primeiro movimento)
                    move['selected']['y'] =0;	//selected y recebe 0 (pra na proxima ver q é o primeiro movimento)
                    move['selected']['piece']="0";	//selected piece recebe 0 (pra na proxima ver q é o primeiro movimento)
                    move['selected']['color']="0";	//selected color recebe 0 (pra na proxima ver q é o primeiro movimento)   
                }
                return_background(); //volta a color de fundo normal
                if(time=="white"){time="black";}else{time="white";} //troca a time
            } 
    }
    
    function choose(piecee,colore){
        piece[xe][ye]['piece']=piecee;
        document.getElementById("t"+xe+""+ye).innerHTML = il[colore][piecee];
        document.getElementById('choose_'+colore).style.display='none';
        document.getElementById('background').style.display='none';
    }
    
    function start_choose(color){
        document.getElementById('choose_start').style.display='none';
        document.getElementById('background').style.display='none';
        time = color; // define quem joga
    }