// tk todo: make total_rent input field positive numbers only

var total_rent = "";

// p1 is player 1, etc
var p1_name = "";
var p2_name = "";
var p3_name = "";

// the main array for storing room names, rents and "compensations". It gets updated after each player's move. It is an array of three arrays, each of which has the name of a room, the room's current rent/price, and the most recent "compensation" for that room.

var rooms_prices = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
];

// transition function switches us between pages

function transition(this_page, next_page) {
    $( this_page ).hide( "slow" );
    $( next_page ).show( "slow" );
};

// and now we begin. Get info from players.

$(function() {
    $( "#player_room_submit" ).click(function(){

    	p1_name = ($( "#p1_name" ).val() || "Player 1");
        p2_name = ($( "#p2_name" ).val() || "Player 2");
        p3_name = ($( "#p3_name" ).val() || "Player 3");

        rooms_prices[0][0] = ($( "#r1_name" ).val() || "The First Room");
        rooms_prices[1][0] = ($( "#r2_name" ).val() || "The Second Room");
        rooms_prices[2][0] = ($( "#r3_name" ).val() || "The Third Room");

        rent_input = parseInt($( "#total_rent" ).val());

        if (rent_input > 0) {
            total_rent = rent_input;
        } else {
            alert("Rent must be greater than 0");
        };

        $( ".print_p1" ).text( p1_name );
        $( ".print_p2" ).text( p2_name );
        $( ".print_p3" ).text( p3_name );

        $( ".print_r1" ).text( rooms_prices[0][0] );
        $( ".print_r2" ).text( rooms_prices[1][0] );
        $( ".print_r3" ).text( rooms_prices[2][0] );

        transition("#general_info", "#p1_choices_1");

    });
}); 

function rearrange( unordered_list ) {

        var sortedIDs = $( unordered_list ).sortable( "toArray", {attribute: "value"} );

        var p1_gold = Number(sortedIDs[0]);
        var p1_silver = Number(sortedIDs[1]);
        var p1_bronze = Number(sortedIDs[2]);
        
        var p1_gold_array = rooms_prices[p1_gold];
        var p1_silver_array = rooms_prices[p1_silver];
        var p1_bronze_array = rooms_prices[p1_bronze];

        rooms_prices = [
            p1_gold_array, 
            p1_silver_array, 
            p1_bronze_array
        ];

};

// from jQuery UI: Sortable https://jqueryui.com/sortable/#default

$(function() {
   $( "#sortable" ).sortable();
   $( "#sortable" ).disableSelection();
 });

$(function() {
   $( "#sortable_p2" ).sortable();
   $( "#sortable_p2" ).disableSelection();
 });

$(function() {
    $( "#p1_continue" ).click(function(){

        rearrange( "#sortable" );

        $( ".print_p1_gold_room" ).text( rooms_prices[0][0] );
        $( ".print_p1_silver_room" ).text( rooms_prices[1][0] );
        $( ".print_p1_bronze_room" ).text( rooms_prices[2][0] );

        transition("#p1_choices_1", "#p1_choices_2");

    });
});

$(function() {
    $( "#p1_continue" ).click(function(){
        
        // slider from jQueryUI: Slider https://jqueryui.com/slider/#steps -- this code is not meaningfully mine

        function slider( slider_name, amount ) {

            $( slider_name ).slider({
             value: 1,
             min: 1,
             max: total_rent/3.0,
             step: 1,
              slide: function( event, ui ) {
                $( amount ).val( ui.value );
              }
            });

            $( amount ).val( $( slider_name ).slider( "value" ) );

        };        

        slider( "#p1_silver_slider", "#p1_silver_amount");

        slider( "#p1_bronze_slider", "#p1_bronze_amount" );    
    
    });
});

function print_comp(room_name) {
    return room_name[0] + " + $" + room_name[2] + " per month"
};

$(function() {
    $( "#p1_submit" ).click(function(){

        var p1_silver_comp = parseInt($( "#p1_silver_amount" ).val());
        var p1_bronze_comp = parseInt($( "#p1_bronze_amount" ).val());

        rooms_prices[0][2] = 0;
        rooms_prices[1][2] = p1_silver_comp; 
        rooms_prices[2][2] = p1_bronze_comp;

        var tally_p1 = total_rent + p1_silver_comp + p1_bronze_comp;

        var tally_p1_divided = tally_p1/3.0;

        rooms_prices[0][1] = tally_p1_divided;
        rooms_prices[1][1] = tally_p1_divided - p1_silver_comp;
        rooms_prices[2][1] = tally_p1_divided - p1_bronze_comp;

        $( ".print_p1_gold_comp" ).text( print_comp(rooms_prices[0]) );
        $( ".print_p1_silver_comp" ).text( print_comp(rooms_prices[1]));
        $( ".print_p1_bronze_comp" ).text( print_comp(rooms_prices[2]));

        transition("#p1_choices_2", "#p2_choices_1");

    });
});

$(function() {
    $( "#p2_continue" ).click(function(){
        
        rearrange( "#sortable_p2" );

        $( ".print_p2_gold_room" ).text( rooms_prices[0][0] );
        $( ".print_p2_gold_comp" ).text( rooms_prices[0][2] );

        $( ".print_p2_silver_room" ).text( rooms_prices[1][0] );
        $( ".print_p2_bronze_room" ).text( rooms_prices[2][0] );

        transition("#p2_choices_1", "#p2_choices_2");

    });
});

$(function() {

    $( "#p2_continue" ).click(function(){

        var p2_silver_init = rooms_prices[1][2];

       $( "#p2_silver_slider" ).slider({
         value: p2_silver_init,
         min: p2_silver_init,
         max: total_rent/3.0,
         step: 1,
          slide: function( event, ui ) {
            $( "#p2_silver_amount" ).val( ui.value );
          }
        });

        $( "#p2_silver_amount" ).val( $( "#p2_silver_slider" ).slider( "value" ) );
    })
});

$(function() {

    $( "#p2_submit" ).click(function(){

        var p2_silver_comp = parseInt($( "#p2_silver_amount" ).val());

        var side_pot = p2_silver_comp - parseInt(rooms_prices[1][2]);

        var side_pot_divided = side_pot/3.0;

        rooms_prices[0][2] -= side_pot;

        rooms_prices[0][1] += 2*side_pot_divided;
        rooms_prices[1][1] -= side_pot_divided;
        rooms_prices[2][1] -= side_pot_divided;

        $( ".print_p2_gold_with_comp" ).text( print_comp(rooms_prices[0]) );
        $( ".print_p2_silver_with_comp" ).text( print_comp(rooms_prices[1]) );
        $( ".print_p2_bronze_with_comp" ).text( print_comp(rooms_prices[2]) );

        transition("#p2_choices_2", "#p3_choices");

    });
});

$(function() {
    $( "#p3_submit" ).click(function(){

        p3_gold = $('input[name=p3_gold]:checked').val();
        
        var p3_gold_array = rooms_prices[p3_gold];
        
        rooms_prices.splice(p3_gold, 1);
        rooms_prices.unshift(p3_gold_array);

        $( ".print_p3_room" ).text( rooms_prices[0][0] );
        $( ".print_p2_room" ).text( rooms_prices[1][0] );
        $( ".print_p1_room" ).text( rooms_prices[2][0] );

        $( ".print_p3_price" ).text( rooms_prices[0][1].toFixed(2) );
        $( ".print_p2_price" ).text( rooms_prices[1][1].toFixed(2) );
        $( ".print_p1_price" ).text( rooms_prices[2][1].toFixed(2) );

        transition("#p3_choices", "#results");

    });
});