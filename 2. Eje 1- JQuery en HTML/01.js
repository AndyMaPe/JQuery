$(() => {
    // para todos los elementos que tengan 'div.poem-stanza' esta parte son los que se van a formatear 
    // se ve en gris fuerte 
    $('div.poem-stanza').addClass('highlight')//--sala de poemas --se relleno algunos parrafos 
    $('.author').addClass('highlight') //clase// en este se relleno la parte del author 
 
 
    //Para no poner cada una en un renglos si no las 4 
    //se esta haciendo un chaning encadenando 4 operaciones y se puede tener el color 
    //rojo en letra y el fondo amarillo y hace que suba y baje en dos segundos 
    $('#paragraph1').css('color', 'red').css('background-color', 'yellow').slideUp(2000).slideDown(2000); //id // se cambiara a color 

    //En este aplica a todos los que tienen p o sea a todos los parrafos.
    //$('p'.css('#paragraph1').css('color', 'red').css('background-color', 'yellow').slideUp(2000).slideDown(2000); //id // se cambiara a color 

});
