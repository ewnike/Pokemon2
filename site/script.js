$(document).ready(function( ){
  for(var i = 1; i < 152; i++){
    // console.log()
    $("#wrapper").append('<img id="'+i+'" src="http://pokeapi.co/media/img/'+i+'.png">');
  }
  $(document).on("click", "img", function(){
    var url = "http://pokeapi.co/api/v1/pokemon/"+$(this).attr("id");
    // console.log(this.id)
    $.get(url, function(data){
      $(".name").html(data.name);
      $(".attack").html(data.attack);
      $("defense").html(data.defense);
    },  "json");
    $(".color").attr("src", "http://pokeapi.co/media/img/"+$(this).attr("id")+".png")
  });
});
