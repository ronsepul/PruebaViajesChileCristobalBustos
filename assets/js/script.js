/*Document ready para que cargue el DOM antes que los scripts*/ 
$(document).ready(function(){
    /*Habilitacion de tooltips de Bootstrap 5*/
    let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

/*Animación de smooth scroll para los <a> del navbar*/
$("a").click(function () { 
    let redirect =  this.hash;
    $("html,body").animate({
        scrollTop: $(redirect).offset().top - 60
    }, 1200
    );
});
