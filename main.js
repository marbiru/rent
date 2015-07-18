var p1_name = "";
var p2_name = "";
var p3_name = "";
var r1_name = "";
var r2_name = "";
var r3_name = "";

$(function() {
    $( "#player_room_submit" ).click(function(){
    	p1_name = $( "#p1_name" ).val();
        p2_name = $( "#p2_name" ).val();
        p3_name = $( "#p3_name" ).val();
        
        r1_name = $( "#r1_name" ).val();
        r2_name = $( "#r2_name" ).val();
        r3_name = $( "#r3_name" ).val();
        
        $( "#print_p1" ).append( p1_name );


    });
});