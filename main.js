var total_rent = "";

// p1 is player 1, etc
var p1_name = "";
var p2_name = "";
var p3_name = "";

// r1 is room 1, etc
var r1_name = "";
var r2_name = "";
var r3_name = "";

// the main array for storing prices and room names. It gets updated after each player's move. It is an array of three arrays, each of which has the name of a room and then that room's current rent/price 

var rooms_prices = [
    [r1_name,""],
    [r2_name,""],
    [r3_name,""],
];

// variables decided by player 1
var p1_comp = ["", "", ""];

// vars decided by player 2
var p2_fav = "";
var p2_runner_up = "";
var side_pot = "";


// placeholder values!
total_rent = 1000;

p1_name = "Lady 1";
p2_name = "Mr 2";
p3_name = "Player 3";

r1_name = "The First Room";
r2_name = "Second Room";
r3_name = "The Third Room";

$( ".print_p1" ).append( p1_name );
$( ".print_p2" ).append( p2_name );
$( ".print_p3" ).append( p3_name );

$( ".print_r1" ).append( r1_name );
$( ".print_r2" ).append( r2_name );
$( ".print_r3" ).append( r3_name );

rooms_prices = [
    [r1_name,""],
    [r2_name,""],
    [r3_name,""],
];

//END PLACEHOLDER. WHEN DONE, REACTIVATE NEXT FN

/* $(function() {
    $( "#player_room_submit" ).click(function(){
    	p1_name = $( "#p1_name" ).val();
        p2_name = $( "#p2_name" ).val();
        p3_name = $( "#p3_name" ).val();
        
        r1_name = $( "#r1_name" ).val();
        r2_name = $( "#r2_name" ).val();
        r3_name = $( "#r3_name" ).val();

        $( ".print_p1" ).append( p1_name );
        $( ".print_p2" ).append( p2_name );
        $( ".print_p3" ).append( p3_name );

        $( ".print_r1" ).append( r1_name );
        $( ".print_r2" ).append( r2_name );
        $( ".print_r3" ).append( r3_name );
    });
}); */

/* $(function() {
    $( "#p1_submit" ).click(function(){
    	rooms_prices[0][1] = $( "#p1r1_comp" ).val();
    	rooms_prices[1][1] = $( "#p1r2_comp" ).val();
    	rooms_prices[2][1] = $( "#p1r3_comp" ).val();

    	$( ".print_comp_r1" ).append( rooms_prices[0][1] );
        $( ".print_comp_r2" ).append( rooms_prices[1][1] );
        $( ".print_comp_r3" ).append( rooms_prices[2][1] );

    });
});
*/

rooms_prices[0][1] = 250;
rooms_prices[1][1] = 400;
rooms_prices[2][1] = 350;

$( ".print_comp_r1" ).append( rooms_prices[0][1] );
$( ".print_comp_r2" ).append( rooms_prices[1][1] );
$( ".print_comp_r3" ).append( rooms_prices[2][1] );

$(function() {
    $( "#p2_submit" ).click(function(){
        
        p2_runner_up = $('input[name=p2_runner_up]:checked').val();
        console.log(p2_runner_up)
        var p2_runner_up_array = rooms_prices[p2_runner_up];
        rooms_prices.splice(p2_runner_up, 1);
        rooms_prices.unshift(p2_runner_up_array);

        p2_fav = $('input[name=p2_fav]:checked').val();
        var p2_fav_array = rooms_prices[p2_fav];
        rooms_prices.splice(p2_fav, 1);
        rooms_prices.unshift(p2_fav_array);
            	
    	side_pot = $( "#side_pot" ).val();

        rooms_prices[0][1] = rooms_prices[0][1] + side_pot;

        console.log(rooms_prices);
    });
});

// dummy filled-in final array

$(function() {
    $( "#p3_submit" ).click(function(){
        p3_fav = $('input[name=p3_fav]:checked').val();

        $( ".print_p3_room" ).append( rooms_prices[0][0] );
        $( ".print_p2_room" ).append( rooms_prices[1][0] );
        $( ".print_p1_room" ).append( rooms_prices[2][0] );

        $( ".print_p3_price" ).append( rooms_prices[0][1] );
        $( ".print_p2_price" ).append( rooms_prices[1][1] );
        $( ".print_p1_price" ).append( rooms_prices[2][1] );

    });
});