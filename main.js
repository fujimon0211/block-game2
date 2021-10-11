 //上記のキャンバス情報を取得
 var canvas=document.getElementById("myCanvas");
 //2d画面に設定
 var ctx=canvas.getContext("2d");
 function draw(){
     ctx.beginPath();
     ctx.arc(50,50,10,0,MATH.PI*2);
     ctx.fillStyle="#0095DD";
     ctx.fill();
     ctx.closePath();

 }
 setInterval(draw,10);