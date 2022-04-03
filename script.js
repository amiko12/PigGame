var img = document.createElement('img');


var array = [
    {   
        //0
        image: 'images/dice-1.png'
    },
    {
        //1
        image:  'images/dice-2.png'
    },
    {
        //2
        image:  'images/dice-3.png'
    },
    {
        //3
        image: 'images/dice-4.png'
    },
    {
        //4
        image:  'images/dice-5.png'
    },
    {
        //5
        image: 'images/dice-6.png'
    }
];

    var start = document.getElementById('start');
    start.addEventListener('click', ()=>{
        document.getElementById('hold').style.display = 'block'
        start.innerText = 'ROLL DICE'
    });


function roll(){
    
    var random = Math.floor(Math.random() * 6)
    img.src = array[random].image;
    var block = document.getElementById('x');
    block.appendChild(img);
    img.style.display = 'block';
    /////////////////////////////////////////////////////
    
    /////////////////////////////////////////////////////
    if(random == 0){
        var player1 = document.getElementById('player1');
        var player2 = document.getElementById('player2');
        player2.classList.toggle('active');
        player1.classList.remove('active1');
        
            
    }
    else{
        var player1 = document.getElementById('player1');
        player1.classList.add('avtive1');
        
    };
    //////////////////////////////////////////////////////////////////
    var player1CN = document.getElementById('player1CN');
    var player2CN = document.getElementById('player2CN');
    
    
    

    
    if(random > 0){   
        var current = random + 1;
        var y =parseInt(player1CN.textContent);  
        var sum = y + current;
        player1CN.innerText = sum;
        

    } 
    else if (random == 0){
        player1CN.innerText = 0;
        var counter = random + 1;
        var z =parseInt(player1CN.textContent);
        var sum1 = z + counter;
        player2CN.innerText = sum1;
        console.log('amiko');
    };
         
        
};



    
    
document.getElementById('hold').addEventListener('click', ()=>{
    hold()
})


function hold () {

            var x = parseInt(player1CN.textContent);
            var score = document.getElementById('realscore');
            var s = parseInt(score.textContent);
            var realscore = s + x;
            score.innerText = realscore;
            player1CN.innerText = 0;
};

