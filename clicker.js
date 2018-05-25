var count=1;

$("document").ready(function() {

  $("button").click(function() {

      count++;

// leave

      $(".count-leave").addClass("count-leave-active");
      setTimeout(function() {
        $(".count-leave").remove();
      },1000);

// enter

      $(".count-enter").addClass("count-enter-active");
      setTimeout(function() {
        $(".count-enter").addClass("count-leave").removeClass('count-enter count-enter-active');
              $("body").append("<h1 class='count count-enter'>"+ count +"</h1>");
      },1000);

  });

});
