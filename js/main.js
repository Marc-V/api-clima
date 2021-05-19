$(document).ready(function(){
    $('form').submit(function(){ 
        if($('#city').val() !=""){

        }else{
            alert('ingresa ciudad');
        }
        $.get("https://api.openweathermap.org/data/2.5/weather?q="+$('#city').val()+"&appid=d8ce2fcf104f6f7b11331d8f8b42bd87", function(res){
            console.log(res);
            console.log(res.name);
            console.log(res.coord);
            console.log(res.weather[0].description);
            var temp = res.main.temp;
            

            $('#name').html(res.name+': '+res.weather[0].description);
            $('#temp').html("Temperature: "+(temp-273.15).toFixed(1)+'°C');
            $('#coord').html("Coord: "+ "Lat:"+res.coord.lat+'°' +', '+"Lon:"+res.coord.lon+'°');
        }, 'json');
        
        return false;
    });
});