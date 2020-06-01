
function scrollWin(){
    window.scrollTo({
        top: 900
      
    });
}
function scrollWin2(){
    window.scrollTo({
        top: 1800
      
    });
}
function scrollWin3(){
    window.scrollTo({
        top: 4100
      
    });
}

$(document).scroll(function () {
    let y = $(this).scrollTop();
    if (y > 200) {
        $('#about').show();
    } 
    
});

$( document ).on( "pagecreate", function() {
        $( ".photopopup" ).on({
            popupbeforeposition: function() {
                var maxHeight = $( window ).height() - 60 + "px";
                $( ".photopopup img" ).css( "max-height", maxHeight );
            }
        });
    });




    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("top").style.display = "block";
      } else {
        document.getElementById("top").style.display = "none";
      }
    }
    
    // When the user clicks on the button, scroll to the top of the document
    function scrollBack() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }

   