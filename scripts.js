var carrito=[];

$("#form-login").submit(function( event ) {
	var usuario = $("#form-login :input[name='Usuario']"); 
	var letrero = '<h5>Bienvenido '+usuario[0].value+' </h5>';
  	$('#datos-usuario').html(letrero);
  	$('#modal-iniciar-sesion').modal('hide');
  	return false;
});

$("#form-registro").submit(function( event ) {
	var usuario = $("#form-registro :input[name='Usuario']"); 
	alert('Hemos enviado un mensaje de confirmación a tu correo.');
	var letrero = '<h5>Bienvenido '+usuario[0].value+' </h5>';
	$('#datos-usuario').html(letrero);
	$('#modal-registro').modal('hide');
	return false;
});

function agregarCarrito(idObjeto,producto,precio){
	if(idObjeto!=null){
		$('#'+idObjeto).slideUp();
		$('#'+idObjeto).slideDown();
	}
	precio = parseInt(precio);
	var total = 0;
	carrito.push(
{
	"producto":producto,
	"precio":precio
}
		);
	var html = "";


	html = html+'<table class="table table-hover">';
	html = html+'  <thead>';
	html = html+'    <tr>';
	html = html+'          <th scope="col">Producto</th>';
	html = html+'          <th scope="col">Precio</th>';
	html = html+'    </tr>';
	html = html+'  </thead>';
	html = html+'  <tbody>';
	for(var i=0; i<carrito.length; i++){
		html = html+'    <tr>';
		html = html+'      <td>'+carrito[i].producto+'</td>';
		html = html+'      <td>$'+carrito[i].precio+'</td>';
		html = html+'    </tr>';
		total = total+carrito[i].precio;
	}
	html = html+'  </tbody>';
	html = html+'</table>';
	html = html+'<br/>';
	html = html+'<h4>Total: $'+total+' </h4>';
	$('#carrito-articulos').html(html);
	$('#btn-carrito').prop('disabled', false);
}