var total_rent = "";

// p1 is player 1, etc
var p1_name = "";
var p2_name = "";
var p3_name = "";

// r1 is room 1, etc
var r1_name = "";
var r2_name = "";
var r3_name = "";

// variables decided by player 1
var p1_comp = ["", "", ""];

// vars decided by player 2
var p2_fav = "";
var p2_runner_up = "";
var side_pot = "";

$(function() {
    $( "#player_room_submit" ).click(function(){
    	/* p1_name = $( "#p1_name" ).val();
        p2_name = $( "#p2_name" ).val();
        p3_name = $( "#p3_name" ).val();
        
        r1_name = $( "#r1_name" ).val();
        r2_name = $( "#r2_name" ).val();
        r3_name = $( "#r3_name" ).val(); */
        
        // placeholder values!
        total_rent = 1000;

        p1_name = "Lady 1";
        p2_name = "Mr 2";
        p3_name = "Player 3";
        
        r1_name = "The First Room";
        r2_name = "Second Room";
        r3_name = "Room 3";

        $( ".print_p1" ).append( p1_name );
        $( ".print_p2" ).append( p2_name );
        $( ".print_p3" ).append( p3_name );

        $( ".print_r1" ).append( r1_name );
        $( ".print_r2" ).append( r2_name );
        $( ".print_r3" ).append( r3_name );
    });
});

$(function() {
    $( "#p1_submit" ).click(function(){
    	p1_comp[0] = $( "#p1r1_comp" ).val();
    	p1_comp[1] = $( "#p1r2_comp" ).val();
    	p1_comp[2] = $( "#p1r3_comp" ).val();

    	$( ".print_comp_r1" ).append( p1_comp[0] );
        $( ".print_comp_r2" ).append( p1_comp[1] );
        $( ".print_comp_r3" ).append( p1_comp[2] );

    });
});

$(function() {
    $( "#p2_submit" ).click(function(){
    	p2_fav = $('input[name=p2_fav]:checked').val();
    	p2_runner_up = $('input[name=p2_runner_up]:checked').val();
    	side_pot = $( "#side_pot" ).val();

    });
});

$(function() {
    $( "#p3_submit" ).click(function(){
        p3_fav = $('input[name=p3_fav]:checked').val();
    });
});