function updateClock() {
  let d = new Date();
  
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();
  let ampm = h >= 12 ? "PM" : "AM";
  
  h = h % 12 || 12; // 0 ko 12 banao
  
  // padStart se 2 digit ensure karo
  let time = String(h).padStart(2, "0") + ":" +
             String(m).padStart(2, "0") + ":" +
             String(s).padStart(2, "0") + " " + ampm;
  
  console.log(time);
  
  let w = document.getElementById("watch");
  w.innerHTML = time;
}

updateClock(); // pehli baar turant chalao
setInterval(updateClock, 1000); // phir har second