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
});

