var total_rent = "";

// p1 is player 1, etc
var p1_name = "";
var p2_name = "";
var p3_name = "";

// r1 is room 1, etc
var r1_name = "";
var r2_name = "";
var r3_name = "";

// the main array for storing prices and room names. It gets updated after each player's move. It is an array of three arrays, each of which has the name of a room, the room's current rent/price

//almost certainly need "running count" of comp added on the end of each of the arrays here
var rooms_prices = [
    ["",""],
    ["",""],
    ["",""],
];

// variables decided by player 1
var p1_comp = ["", "", ""];
var p1_gold = "";
var p1_silver = "";
var p1_silver_comp = "";

// vars decided by player 2
var p2_gold = "";
var p2_silver = "";
var side_pot = "";

// vars decided by player 3
var p3_gold = "";

// PLACEHOLDER values!
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

//END PLACEHOLDER. WHEN DONE, REACTIVATE NEXT FN

/*$(function() {
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

        $( "#p1_choices_1" ).show( "slow" );
        $( "#general_info" ).hide( "slow" );
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

        $( ".print_p1_gold_room" ).append( rooms_prices[0][0] );
        $( ".print_p1_silver_room" ).append( rooms_prices[1][0] );
        $( ".print_p1_bronze_room" ).append( rooms_prices[2][0] );

        $( "#p1_choices_2" ).show( "slow" );
        $( "#p1_choices_1" ).hide( "slow" );
    });
});

// from jQueryUI: Slider https://jqueryui.com/slider/#steps

$(function() {
   
   $( "#p1_silver_slider" ).slider({
     value: 1,
     min: 1,
     max: total_rent/3.0,
     step: 1,
      slide: function( event, ui ) {
        $( "#p1_silver_amount" ).val( ui.value );
      }
    });

    $( "#p1_silver_amount" ).val( $( "#p1_silver_slider" ).slider( "value" ) );

});

$(function() {
    $( "#p1_continue_2" ).click(function(){

        p1_silver_comp = parseInt($( "#p1_silver_amount" ).val());
        console.log(p1_silver_comp);

        $( "#p2_choices_3" ).show( "slow" );
        $( "#p1_choices_2" ).hide( "slow" );

    });
});

// should re-write this and previous slider function as generalised functions of slider, amount

$(function() {

   $( "#p1_bronze_slider" ).slider({
     value: 1,
     min: 1,
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

        var p1_bronze_comp = parseInt($( "#p1_bronze_amount" ).val());

        p1_comp = [0, p1_silver_comp, p1_bronze_comp];

        var tally_p1 = total_rent + p1_silver_comp + p1_bronze_comp;

        var tally_p1_divided = tally_p1/3.0;

        rooms_prices[0][1] = tally_p1_divided;
        rooms_prices[1][1] = tally_p1_divided - p1_silver_comp;
        rooms_prices[2][1] = tally_p1_divided - p1_bronze_comp;

        $( ".print_p1_gold_comp" ).append( rooms_prices[0][0] + " + $0" );
        $( ".print_p1_silver_comp" ).append( rooms_prices[1][0] + " + $" + p1_silver_comp );
        $( ".print_p1_bronze_comp" ).append( rooms_prices[2][0] + " + $" + p1_bronze_comp );

        $( "#p2_choices_1" ).show( "slow" );
        $( "#p1_choices_3" ).hide( "slow" );

    });
});

// is this an exact replica of p1_continue? Could those two functions be generalised, then?

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

        $( ".print_p2_gold_room" ).append( rooms_prices[0][0] );
        $( ".print_p2_silver_room" ).append( rooms_prices[1][0] );
        $( ".print_p2_bronze_room" ).append( rooms_prices[2][0] );

        $( "#p2_choices_2" ).show( "slow" );
        $( "#p2_choices_1" ).hide( "slow" );

    });
});

$(function() {
   var p2_silver_starting_comp = Number(rooms_prices[1][1]);
   $( "#p2_silver_slider" ).slider({
     value: p2_silver_starting_comp,
     min: p2_silver_starting_comp,
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

        console.log(rooms_prices);

        var p2_silver_comp = parseInt($( "#p2_silver_amount" ).val());

        console.log(p2_silver_comp);

        side_pot = p2_silver_comp - Number(rooms_prices[1][1]);

        // 1. add sidepot to p2_gold rent
        // 2. later, subtract sidepot/3 from all rents

        console.log(side_pot);

        console.log(rooms_prices);

        $( ".print_p2_gold_comp" ).append( rooms_prices[0][0] + " at $" + rooms_prices[0][1] + " per month" );
        $( ".print_p2_silver_comp" ).append( rooms_prices[1][0] + " at $" + rooms_prices[1][1] + " per month" );
        $( ".print_p2_bronze_comp" ).append( rooms_prices[2][0] + " at $" + rooms_prices[2][1] + " per month" );

        $( "#p3_choices" ).show( "slow" );
        $( "#p2_choices_2" ).hide( "slow" );

    });
});

$(function() {
    $( "#p3_submit" ).click(function(){
        //first array in the array are getting lost somehow

        p3_gold = $('input[name=p3_gold]:checked').val();
        var p3_gold_array = rooms_prices[p3_gold];
        rooms_prices.splice(p3_gold, 1);
        rooms_prices.unshift(p3_gold_array);

        //redistributing the side pot -- this needs to go BEFORE splicing, after adjustment has been made in p2_submit to make sure p3 is voting on an appropriate deal by TRIMMING best deal offered p2 (not improving second-best deal)

        $( ".print_p3_room" ).append( rooms_prices[0][0] );
        $( ".print_p2_room" ).append( rooms_prices[1][0] );
        $( ".print_p1_room" ).append( rooms_prices[2][0] );

        $( ".print_p3_price" ).append( rooms_prices[0][1].toFixed(2) );
        $( ".print_p2_price" ).append( rooms_prices[1][1].toFixed(2) );
        $( ".print_p1_price" ).append( rooms_prices[2][1].toFixed(2) );

        $( "#results" ).show( "slow" );
        $( "#p3_choices" ).hide( "slow" );

    });
});