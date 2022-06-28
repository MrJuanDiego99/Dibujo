function draw() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext){
      var ctx = canvas.getContext('2d');
  
      ctx.beginPath();
      ctx.arc(75,75,50,0,Math.PI*2,true); // Círculo externo
      ctx.moveTo(110,75);
      ctx.arc(75,75,35,0,Math.PI,false);   // Boca (contra reloj)
      ctx.moveTo(65,65);
      ctx.arc(60,65,5,0,Math.PI*2,true);  // Ojo izquierdo
      ctx.moveTo(95,65);
      ctx.arc(90,65,5,0,Math.PI*2,true);  // Ojo derecho

      //Tronco
      ctx.moveTo(75,125);
      ctx.lineTo(75,320 );

      //Brazo Izquierdo
      ctx.moveTo(75,125);
      ctx.lineTo(25,200);

      //Mano Izquierdo
      ctx.moveTo(25,200);
      ctx.lineTo(15,180);

      //Brazo Derecho
      ctx.moveTo(75,125);
      ctx.lineTo(130,200);

      //Mano Derecho
      ctx.moveTo(130,200);
      ctx.lineTo(140,180);

      //Pierna Derecha
      ctx.moveTo(75,320);
      ctx.lineTo(130,350);

      //Pie Derecho
      ctx.moveTo(130,350);
      ctx.lineTo(110,370);

      //Pierna Izquierda
      ctx.moveTo(75,320);
      ctx.lineTo(25,350);

      //Pie Izquierdo
      ctx.moveTo(25,350);
      ctx.lineTo(45,370);

      ctx.stroke();

      
    }
}