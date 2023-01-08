function slider(e) {
    document.querySelector(".beaa").src = e
  }
  var Name = prompt("Anong pangalan mo sis HAHAHA?");
  
  if(Name =="" || Name == null){
    alert ("Please enter your name.");
    prompt ('Anong pangalan mo sis?')
  } else {
    alert ("Hi " + Name + ", Good Morning/Good Afternoon/Good Evening basta magandang araw kung anong oras mo man to binuksan");
  }
  let age = prompt('Ilang taon kana nga ulit ngayon anteh?')
  switch (true) {
    case age > 18:
      alert('18 KA PALANG')
      alert('ulitin mo ilagay mo 18😠 HAHAHAHHA')
      break
      case age < 18:
        alert('Tanggapin mo na kaseng legal age kana anteh HAHAHAHA')
        alert('ulitin mo to isagot mo 18 ka HAHAHAHAHA')
        break
        default:
        alert('Nakanampucha legal age na si idol HAHAHAHAHA');
        alert("Happy Birthday " + Name +"! enjoy your day")
        alert('I hope your celebration gives you many happy memories')
        alert('u r onle young once so enjoy it to the fullest. Time passes way too fast and you don’t get these years back. inshort spend your time and years with me dejok HAHAHAHAHHAHAHA.')
  }