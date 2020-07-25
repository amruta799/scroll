


     $(document).scroll(function(){
       var positiontop= $(document).scrollTop();
       console.log(positiontop);
       if(positiontop<1550){
       $('#img1').css("left", Math.max(1400 - 0.50*window.scrollY,100)+"px");
        $('#img2').css("right", Math.max(1400 - 0.50*window.scrollY,100)+"px");
      }
      if(positiontop>1700){
        $("p").fadeOut();
      }

     });
