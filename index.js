$(document).ready(function(){
    function initializeApp(){
        $("#mountain1").show();
        $("#mountain2").hide();
    }
    
    $("#mountain1button").click(()=>{
        console.log('abc');
        $("#mountain1").show();
        $("#mountain2").hide();
    });
    $("#mountain2button").click(()=>{
        console.log('123');
        $("#mountain2").show();
        $("#mountain1").hide();
    });
    initializeApp();

    new Glider(document.querySelector('.glider'), {
      slidesToShow: 3,
      slidesToScroll: 3,
      draggable: true,
      dots: '.dots',
      arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
      }
    });
});

