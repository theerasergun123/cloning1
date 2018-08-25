
$(".card-text1").slideUp();
$(".card-img-top1").mouseover(function(){
   
    $(".card-text1").slideToggle();
    
})
$(".card-img-top1").mouseout(function(){
   
    $(".card-text1").slideToggle();
    
})


$(".card-text2").slideUp();
$(".card-img-top2").mouseover(function(){
   
    $(".card-text2").slideToggle();
    
})
$(".card-img-top2").mouseout(function(){
   
    $(".card-text2").slideToggle();
    
})

$(".card-text3").slideUp();
$(".card-img-top3").mouseover(function(){
   
    $(".card-text3").slideToggle();
    
})
$(".card-img-top3").mouseout(function(){
   
    $(".card-text3").slideToggle();
    
})
$(".box").css("opacity", 0);
$(".box1").css("opacity", 0);
$(".box2").css("opacity", 0);


$(".box").hover(function(){
    $(".box").addClass("w3-animate-right");
    $(".box").css("opacity", 1);
})
$(".box1").hover(function(){
    $(".box1").addClass("w3-animate-left");
    $(".box1").css("opacity", 1);
})
$(".box2").hover(function(){
    $(".box2").addClass("w3-animate-right");
    $(".box2").css("opacity", 1);
})
$(".imgg1").click(function(){
    $(".selectedImg").attr("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Premios_Goya_2018_-_%C3%9Arsula_Corber%C3%B3.jpg/800px-Premios_Goya_2018_-_%C3%9Arsula_Corber%C3%B3.jpg")
    $(".details").html("Details: <br> This Is Tokyo <br> Cha3mlt ? <br> t3ebt mn 9bila wena nekteb")
})
$(".imgg2").click(function(){
    $(".selectedImg").attr("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUx27rxPDsb7uFtHNeW5dhipb8PfJ7r_2mgLgCMsfXNpcN8bN63w")
    $(".details").html("Details: <br> This Is Denver <br> we7d sera9 9ot3i w yadhhek bechah9a xD")
})
$(".imgg3").click(function(){
    $(".selectedImg").attr("src", "https://steemitimages.com/DQmWMT5EprKkFvJVLSBftb1R7sr6Ka78HiwjaVMTqkLHUPw/alba-flores-al-limite-en-la-casa-de-papel-nairobi-tiene-una-motivacion-personal-muy-fuerte_gallery_a.jpg")
    $(".details").html("Details: <br> This Is Nairobi <br> 3andha tfol fel 7ram <br> allah yahdeha")
})
$(".imgg4").click(function(){
    $(".selectedImg").attr("src", "http://www.diariohuarpe.com/wp-content/uploads/2018/04/arturo-la-casa-de-papel.jpg")
    $(".details").html("Details: <br> this is Arturo <br> Hedha Am8et 3abd f denya ")
})
$(".hideActors").click(function(){
    $(".theImg").slideToggle();
})
