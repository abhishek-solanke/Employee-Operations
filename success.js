
//for show all list
document.querySelector(".btn-primary").addEventListener("click", function (e) {
  console.log(e.target);
  window.location.href = "index.html";
});

//for home 
document.querySelector(".btn-secondary").addEventListener("click",function(e){
    console.log(e.target);
    window.location.href="home.html"   ;
})