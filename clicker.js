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

// idee de tableau a bosser chef
// var data = [
//   {nam:"", score:""}
// ];
// ++;
//
// data.sort(function(a,b){
//   if(a.score > b.score)
//   return -1;
//   else(a.scrore < b.score)
//   return +1;
// })
//
// for(var i in data){
//   if(i != 0 && data[i].score == data[i-1].score)
//     data[i].classement = data[i-1].classement;
//   else
//     data[i].classement = i+1;
// }
