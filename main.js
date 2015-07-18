var p1_name = "";
var p2_name = "";
var p3_name = "";
var r1_name = "";
var r2_name = "";
var r3_name = "";

$(function() {
    $( "#player_room_submit" ).click(function(){
    	/* p1_name = $( "#p1_name" ).val();
        p2_name = $( "#p2_name" ).val();
        p3_name = $( "#p3_name" ).val();
        
        r1_name = $( "#r1_name" ).val();
        r2_name = $( "#r2_name" ).val();
        r3_name = $( "#r3_name" ).val(); */
        
        // placeholder names!
        p1_name = "Lady 1";
        p2_name = "Mr 2";
        p3_name = "Player 3";
        
        r1_name = "The First Room";
        r2_name = "Second Room";
        r3_name = "Room 3";

        $( "#print_p1" ).append( p1_name );
        $( "#print_p2" ).append( p2_name );
        $( "#print_p3" ).append( p3_name );

        $( "#print_r1" ).append( r1_name );
        $( "#print_r2" ).append( r2_name );
        $( "#print_r3" ).append( r3_name );


    });
});