//si on clique sur un boutton afficher son type et sa tendance

//import $ from 'jquery';

$(document).ready(() => {
    $( ".panda" ).click(function() {
        $( "#text" ).text($(this).attr(".data-type") + "," + $(this).attr(".data-tendance"));
        alert($(this).val(""));
      });
  });