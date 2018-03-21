keyword.oninput = function(e){
    if(keyword.value){
        document.getElementById("suggestion").classList.add("active");
        /* jQuery: $('#suggestion').addClass('active')*/
    }else{
        document.getElementById("suggestion").classList.remove("active");
    }
}