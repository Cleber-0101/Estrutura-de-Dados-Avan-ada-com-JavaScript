// Array tridimensional

var mes = []
var primeiraSemana = []
var ultimaSemana = []

var Semana1  = [100,23,4,234,23,42,345,32,45]
var Semana2 = [1232134,234,2,34,234,23,4]
var Semana3 = [1232134,234,2,34,234,23,4]
var Semana4 = [1232134,234,2,34,234,23,4]

primeiraSemana = [Semana1 , Semana2]
ultimaSemana = [Semana3 , Semana4]

mes = [primeiraSemana,  ultimaSemana]


for(var x = 0; x < mes.length; x++){
    for(var u = 0; u < mes[x].length; u++){
        for(var t = 0; t < mes[x][u].length; t++){
            console.log(mes[x][u][t])
        }   
    }
}