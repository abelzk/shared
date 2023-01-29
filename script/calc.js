function calculation() {
    var e = parseInt(document.getElementById("value11").innerText),
    t = parseInt(document.getElementById("value22").innerText),
    l = (parseInt(document.getElementById("value33").innerText), 
    e * (parseInt(document.getElementById("percent").value) / 100)),
    
    n = e + t - l;
    var x = document.getElementById("tot-all1").innerText = n.toFixed(2)
     document.getElementById("value33").innerText = -l.toFixed(2)
    var d = document.getElementById("percent").value
    document.getElementById("discount").innerText = "Discount " + d + "%"
     if (x < 0){
      document.getElementById("test").innerText = "Refund "
      // / ተመላሽ
     }else{
      document.getElementById("test").innerText = "Total"
     }

     var checker = document.getElementById('checker');
    var nmbr = document.getElementById('percent');

       checker.onchange = function(){
       if(this.checked){
          nmbr.disabled = false;
          document.getElementById("ptype").innerText = "Organizational Sponsor"
      
        } else {
         nmbr.disabled = true;
    document.getElementById("percent").value = 0.00;
    document.getElementById("ptype").innerText = "Self Sponsored"
    
 
}
}

  }