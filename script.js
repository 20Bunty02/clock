function live(){
    let hr=document.getElementById('hour');
    let min=document.getElementById('min');
    let sec=document.getElementById('sec');
    let curtime=new Date();
    hr.textContent=curtime.getHours();
    min.textContent=curtime.getMinutes();
    sec.textContent=curtime.getSeconds();
}
setInterval(live,1000);