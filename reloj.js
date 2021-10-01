

function actualizarhora(){
    var fecha=new Date(),
        horas=fecha.getHours();
        
    if(horas>=12){
        var ampm="PM";
    }else{
        ampm="AM";
    }
        
    

    var minutos=fecha.getMinutes(),
        segundos=fecha.getSeconds(),
        diaSemana=fecha.getDay(),
        dia=fecha.getDate(),
        mes=fecha.getMonth(),
        year=fecha.getFullYear();

    var phoras=document.getElementById("horas"),

        pampm=document.getElementById("ampm"),
        pminutos=document.getElementById("minutos"),
        psegundos=document.getElementById("segundos"),
        pdiaSemana=document.getElementById("diaSemana"),


        pdia=document.getElementById("dia"),

        pmes=document.getElementById("mes"),
        pyear=document.getElementById("year");


    var semana=["domingo","lunes","martes","miercoles","jueves","viernes","sabado"];
    pdiaSemana.textContent=semana[diaSemana];

    var meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
    pmes.textContent=meses[mes];
    

    pdia.textContent=dia;
 
    pyear.textContent=year;


    phoras.textContent=horas;
    pminutos.textContent=minutos;
    psegundos.textContent=segundos;

    pampm.textContent=ampm;





}




//actualizarhora();
setInterval(actualizarhora,1000);
