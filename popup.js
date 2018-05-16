var dominio 	= window.location.hostname;
var url 		= location.pathname;
var parametros 	= window.location.href;
$(document).ready(function(){
	if(parametros.includes('friends')){
		// Todos los enlaces de perfil de cada amigo tienen la clase .cb, .ca, .cc, .cd, pagina principal
		$.each($('.cb, .ca, .cc, .cd'), function(k, v){
			var enlace = $(v).attr('href');// Obtener el enlace
			if(enlace !== undefined){// Si es un usuario real
				var enlace = enlace.replace('?fref=fr_tab', '');// Reemplazar basura del enlace
				var enlace = enlace.replace('&fref=fr_tab', '');// Reemplazar basura del enlace
			}
			$(v).attr('href', '');// Quitar el enlace original
			$(v).attr('href', enlace);// Agregar el enlace nuevo
			$('.cb, .ca, .cc, .cd').attr('target', '_blank');// Agregar atributo "abrir en nueva tab" al enlace
			if(enlace !== undefined){ $(v)[0].click(); }// Evita bucles infinitos por culpa de los usuarios fantasmas
		});
		// Todos los enlaces de perfil de cada amigo tienen la clase .bp, .bo, ver mas
		$.each($('.bp, .bo'), function(k, v){
			var enlace = $(v).attr('href');// Obtener el enlace
			if(enlace !== undefined){// Si es un usuario real
				var enlace = enlace.replace('?fref=fr_tab', '');// Reemplazar basura del enlace
				var enlace = enlace.replace('&fref=fr_tab', '');// Reemplazar basura del enlace
			}
			$(v).attr('href', '');// Quitar el enlace original
			$(v).attr('href', enlace);// Agregar el enlace nuevo
			$('.bp, .bo').attr('target', '_blank');// Agregar atributo "abrir en nueva tab" al enlace
			if(enlace !== undefined){ $(v)[0].click(); }// Evita bucles infinitos por culpa de los usuarios fantasmas
		});
	}else{
		// Agregar el perfil de los usuarios que no queremos bloquear
		var arrayUrls = [
			'https://mbasic.facebook.com/usuario.nobloqueado',
			'https://mbasic.facebook.com/nombredeusuario.666'
		];
		// Si no encuentra la url "parametros" en arrayUrls, regresa -1
		if(jQuery.inArray(parametros, arrayUrls) === -1){
			// Click en el enlace Bloquear a esta persona
			if($('a:contains("Bloquear a esta persona")')[0]){
				$('a:contains("Bloquear a esta persona")')[0].click();
			}else if($('a:contains("Block this person")')[0]){
				$('a:contains("Block this person")')[0].click();
			}
			
			// Click en el boton Bloquear
			$("input[name='confirmed']").click();
			$("input[name='confirmed']").on('click', function(){
				$('form').submit();// Enviar el form
			});
		}
	}
});