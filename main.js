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
    ["",""],
    ["",""],
    ["",""],
];

// variables decided by player 1
var p1_comp = ["", "", ""];
var p1_fav = "";
var p1_runner_up = "";

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

rooms_prices[0][0] = r1_name;
rooms_prices[1][0] = r2_name;
rooms_prices[2][0] = r3_name;

/* rooms_prices[0][1] = 250;
rooms_prices[1][1] = 400;
rooms_prices[2][1] = 350; */

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


$(function() {
    $( "#p1_continue" ).click(function(){

        var sortedIDs = $( "#sortable" ).sortable( "toArray", {attribute: "value"} );

        p1_gold = Number(sortedIDs[0]);
        p1_silver = Number(sortedIDs[1]);
        p1_bronze = Number(sortedIDs[2]);
        
        var p1_gold_array = rooms_prices[p1_gold];
        var p1_silver_array = rooms_prices[p1_silver];
        var p1_bronze_array = rooms_prices[p1_bronze];

        rooms_prices = [
            p1_gold_array, 
            p1_silver_array, 
            p1_bronze_array
        ];

        console.log(rooms_prices);

        $( ".print_p1_gold_room" ).append( rooms_prices[0][0] );
        $( ".print_p1_silver_room" ).append( rooms_prices[1][0] );
        $( ".print_p1_bronze_room" ).append( rooms_prices[2][0] );

    });
});

// from jQueryUI: Slider https://jqueryui.com/slider/#steps

$(function() {
   
   $( "#p1_silver_slider" ).slider({
     value:100,
     min: 0,
     max: total_rent/3.0,
     step: 1,
      slide: function( event, ui ) {
        $( "#p1_silver_amount" ).val( ui.value );
      }
    });

    $( "#p1_silver_amount" ).val( $( "#p1_silver_slider" ).slider( "value" ) );

});

// could re-write this and previous functions as generalised functions of slider, amount

$(function() {
   
   $( "#p1_bronze_slider" ).slider({
     value:100,
     min: 0,
     max: total_rent/3.0,
     step: 1,
      slide: function( event, ui ) {
        $( "#p1_bronze_amount" ).val( ui.value );
      }
    });

    $( "#p1_bronze_amount" ).val( $( "#p1_bronze_slider" ).slider( "value" ) );
});

$(function() {
    $( "#p1_submit" ).click(function(){

        var p1_silver_comp = parseInt($( "#p1_silver_amount" ).val());
        var p1_bronze_comp = parseInt($( "#p1_bronze_amount" ).val());

        var tally_p1 = total_rent + p1_silver_comp + p1_bronze_comp;

        var tally_p1_divided = tally_p1/3.0;

        rooms_prices[0][1] = tally_p1_divided;
        rooms_prices[1][1] = tally_p1_divided - p1_silver_comp;
        rooms_prices[2][1] = tally_p1_divided - p1_bronze_comp;

        $( ".print_p1_gold_comp" ).append( rooms_prices[0][0] + " + $0" );
        $( ".print_p1_silver_comp" ).append( rooms_prices[1][0] + " + $" + p1_silver_comp );
        $( ".print_p1_bronze_comp" ).append( rooms_prices[2][0] + " + $" + p1_bronze_comp );
    });
});

$(function() {
    $( "#p2_continue" ).click(function(){

        var sortedIDs_p2 = $( "#sortable_p2" ).sortable( "toArray", {attribute: "value"} );

        p2_gold = Number(sortedIDs_p2[0]);
        p2_silver = Number(sortedIDs_p2[1]);
        p2_bronze = Number(sortedIDs_p2[2]);
        
        var p2_gold_array = rooms_prices[p2_gold];
        var p2_silver_array = rooms_prices[p2_silver];
        var p2_bronze_array = rooms_prices[p2_bronze];

        rooms_prices = [
            p2_gold_array, 
            p2_silver_array, 
            p2_bronze_array
        ];

        console.log(rooms_prices);

        $( ".print_p1_gold_room" ).append( rooms_prices[0][0] );
        $( ".print_p1_silver_room" ).append( rooms_prices[1][0] );
        $( ".print_p1_bronze_room" ).append( rooms_prices[2][0] );

    });
});

$(function() {
   
   $( "#p2_silver_slider" ).slider({
     value:100,
     min: 0,
     max: total_rent/3.0,
     step: 1,
      slide: function( event, ui ) {
        $( "#p2_silver_amount" ).val( ui.value );
      }
    });

    $( "#p2_silver_amount" ).val( $( "#p2_silver_slider" ).slider( "value" ) );
    
});

$(function() {
    $( "#p2_submit" ).click(function(){
        
        p2_silver = $('input[name=p2_silver]:checked').val();
        var p2_silver_array = rooms_prices[p2_silver];
        rooms_prices.splice(p2_silver, 1);
        rooms_prices.unshift(p2_runner_up_array);

        p2_fav = $('input[name=p2_fav]:checked').val();
        var p2_fav_array = rooms_prices[p2_fav];
        rooms_prices.splice(p2_fav, 1);
        rooms_prices.unshift(p2_fav_array);
            	
    	side_pot = parseInt($( "#side_pot" ).val());
        rooms_prices[0][1] = rooms_prices[0][1] + side_pot;

        $( ".print_fav_room" ).append( rooms_prices[0][0] );
        $( ".print_mid_room" ).append( rooms_prices[1][0] );
        $( ".print_worst_room" ).append( rooms_prices[2][0] );

        $( ".print_comp_fav" ).append( rooms_prices[0][1] );
        $( ".print_comp_mid" ).append( rooms_prices[1][1] );
        $( ".print_comp_worst" ).append( rooms_prices[2][1] );
    });
});

$(function() {
    $( "#p3_submit" ).click(function(){
        p3_fav = $('input[name=p3_fav]:checked').val();
        var p3_fav_array = rooms_prices[p3_fav];
        rooms_prices.splice(p3_fav, 1);
        rooms_prices.unshift(p3_fav_array);

        //redistributing the side pot
        rooms_prices[0][1] = rooms_prices[0][1] - side_pot/3.0;
        rooms_prices[1][1] = rooms_prices[1][1] - side_pot/3.0;
        rooms_prices[2][1] = rooms_prices[2][1] - side_pot/3.0;


        $( ".print_p3_room" ).append( rooms_prices[0][0] );
        $( ".print_p2_room" ).append( rooms_prices[1][0] );
        $( ".print_p1_room" ).append( rooms_prices[2][0] );

        $( ".print_p3_price" ).append( rooms_prices[0][1] );
        $( ".print_p2_price" ).append( rooms_prices[1][1] );
        $( ".print_p1_price" ).append( rooms_prices[2][1] );

    });
});