setInterval(function() {
  clock1();
  clock2();
  clock3();
}, 10);

function clock1() {
  year1();
  year2();
  year3();
  year4();
}

function year1() {
  let now = new Date();
  let ye = "0" + now.getFullYear();
  let year = ye.slice( -4, -3);
  if(year >= 9) {
    document.getElementById("nenn1").src = "number/９a.png";
  } else if(year >= 8) {
    document.getElementById("nenn1").src = "number/８a.png";
  } else if(year >= 7) {
    document.getElementById("nenn1").src = "number/７a.png";
  } else if(year >= 6) {
    document.getElementById("nenn1").src = "number/６a.png";
  } else if(year >= 5) {
    document.getElementById("nenn1").src = "number/５a.png";
  } else if(year >= 4) {
    document.getElementById("nenn1").src = "number/４a.png";
  } else if(year >= 3) {
    document.getElementById("nenn1").src = "number/３a.png";
  } else if(year >= 2) {
    document.getElementById("nenn1").src = "number/２a.png";
  } else if(year >= 1) {
    document.getElementById("nenn1").src = "number/１a.png";
  } else {
    document.getElementById("nenn1").src = "number/０.png";
  }
  return;
}

function year2() {
  let now = new Date();
  let ye = "0" + now.getFullYear();
  let year = ye.slice( -3, -2);
  if(year >= 9) {
    document.getElementById("nenn2").src = "number/９b.png";
  } else if(year >= 8) {
    document.getElementById("nenn2").src = "number/８b.png";
  } else if(year >= 7) {
    document.getElementById("nenn2").src = "number/７b.png";
  } else if(year >= 6) {
    document.getElementById("nenn2").src = "number/６b.png";
  } else if(year >= 5) {
    document.getElementById("nenn2").src = "number/５b.png";
  } else if(year >= 4) {
    document.getElementById("nenn2").src = "number/４b.png";
  } else if(year >= 3) {
    document.getElementById("nenn2").src = "number/３b.png";
  } else if(year >= 2) {
    document.getElementById("nenn2").src = "number/２b.png";
  } else if(year >= 1) {
    document.getElementById("nenn2").src = "number/１b.png";
  } else {
    document.getElementById("nenn2").src = "number/０.png";
  }
  return;
}

function year3() {
  let now = new Date();
  let ye = "0" + now.getFullYear();
  let year = ye.slice( -2, -1);
  if(year >= 9) {
    document.getElementById("nenn3").src = "number/９a.png";
  } else if(year >= 8) {
    document.getElementById("nenn3").src = "number/８a.png";
  } else if(year >= 7) {
    document.getElementById("nenn3").src = "number/７a.png";
  } else if(year >= 6) {
    document.getElementById("nenn3").src = "number/６a.png";
  } else if(year >= 5) {
    document.getElementById("nenn3").src = "number/５a.png";
  } else if(year >= 4) {
    document.getElementById("nenn3").src = "number/４a.png";
  } else if(year >= 3) {
    document.getElementById("nenn3").src = "number/３a.png";
  } else if(year >= 2) {
    document.getElementById("nenn3").src = "number/２a.png";
  } else if(year >= 1) {
    document.getElementById("nenn3").src = "number/１a.png";
  } else {
    document.getElementById("nenn3").src = "number/０.png";
  }
  return;
}

function year4() {
  let now = new Date();
  let ye = "0" + now.getFullYear();
  let year = ye.slice(-1);
  if(year >= 9) {
    document.getElementById("nenn4").src = "number/９b.png";
  } else if(year >= 8) {
    document.getElementById("nenn4").src = "number/８b.png";
  } else if(year >= 7) {
    document.getElementById("nenn4").src = "number/７b.png";
  } else if(year >= 6) {
    document.getElementById("nenn4").src = "number/６b.png";
  } else if(year >= 5) {
    document.getElementById("nenn4").src = "number/５b.png";
  } else if(year >= 4) {
    document.getElementById("nenn4").src = "number/４b.png";
  } else if(year >= 3) {
    document.getElementById("nenn4").src = "number/３b.png";
  } else if(year >= 2) {
    document.getElementById("nenn4").src = "number/２b.png";
  } else if(year >= 1) {
    document.getElementById("nenn4").src = "number/１b.png";
  } else {
    document.getElementById("nenn4").src = "number/０.png";
  }
  return;
}

function clock2() {
  month1();
  date10();
  date1();
  day();
}

function month1() {
  let now = new Date();
  let mon = "0" + now.getMonth();
  let month = mon.slice(-1);
  if(month >= 11) {
    document.getElementById("tuki10").src = "number/１b.png";
    document.getElementById("tuki1").src = "number/２b.png";
  } else if(month >= 10) {
    document.getElementById("tuki10").src = "number/１b.png";
    document.getElementById("tuki1").src = "number/１a.png";
  } else if(month >= 9) {
    document.getElementById("tuki10").src = "number/１b.png";
    document.getElementById("tuki1").src = "number/０.png";
  } else if(month >= 8) {
    document.getElementById("tuki10").src = "number/０.png";
    document.getElementById("tuki1").src = "number/９a.png";
  } else if(month >= 7) {
    document.getElementById("tuki10").src = "number/０.png";
    document.getElementById("tuki1").src = "number/８a.png";
  } else if(month >= 6) {
    document.getElementById("tuki10").src = "number/０.png";
    document.getElementById("tuki1").src = "number/７a.png";
  } else if(month >= 5) {
    document.getElementById("tuki10").src = "number/０.png";
    document.getElementById("tuki1").src = "number/６a.png";
  } else if(month >= 4) {
    document.getElementById("tuki10").src = "number/０.png";
    document.getElementById("tuki1").src = "number/５a.png";
  } else if(month >= 3) {
    document.getElementById("tuki10").src = "number/０.png";
    document.getElementById("tuki1").src = "number/４a.png";
  } else if(month >= 2) {
    document.getElementById("tuki10").src = "number/０.png";
    document.getElementById("tuki1").src = "number/３a.png";
  } else if(month >= 1){
    document.getElementById("tuki10").src = "number/０.png";
    document.getElementById("tuki1").src = "number/２b.png";
  } else {
    document.getElementById("tuki10").src = "number/０.png";
    document.getElementById("tuki1").src = "number/１b.png";
  }
  return;
}

function date10() {
  let now = new Date();
  let da = "0" + now.getDate();
  let date = da.slice( -2, -1);
  if(date >= 3) {
    document.getElementById("hinichi10").src = "number/３b.png";
  } else if(date >= 2) {
    document.getElementById("hinichi10").src = "number/２a.png";
  } else if(date >= 1) {
    document.getElementById("hinichi10").src = "number/１b.png";
  } else {
    document.getElementById("hinichi10").src = "number/０.png";
  } 
  return;
}

function date1() {
  let now = new Date();
  let da = "0" + now.getDate();
  let date = da.slice(-1);
  if(date >= 9) {
    document.getElementById("hinichi1").src = "number/９a.png";
  } else if(date >= 8) {
    document.getElementById("hinichi1").src = "number/８a.png";
  } else if(date >= 7) {
    document.getElementById("hinichi1").src = "number/７a.png";
  } else if(date >= 6) {
    document.getElementById("hinichi1").src = "number/６a.png";
  } else if(date >= 5) {
    document.getElementById("hinichi1").src = "number/５a.png";
  } else if(date >= 4) {
    document.getElementById("hinichi1").src = "number/４a.png";
  } else if(date >= 3) {
    document.getElementById("hinichi1").src = "number/３a.png";
  } else if(date >= 2) {
    document.getElementById("hinichi1").src = "number/２b.png";
  } else if(date >= 1) {
    document.getElementById("hinichi1").src = "number/１a.png";
  } else {
    document.getElementById("hinichi1").src = "number/０.png";
  } 
  return;
}

function day() {
  let now = new Date();
  let day = now.getDay();
  if(day >= 6) {
    document.getElementById("youbi").src = "week/Sat.png";
  } else if(day >= 5) {
    document.getElementById("youbi").src = "week/Fri.png";
  } else if(day >= 4) {
    document.getElementById("youbi").src = "week/Thu.png";
  } else if(day >= 3) {
    document.getElementById("youbi").src = "week/Wed.png";
  } else if(day >= 2) {
    document.getElementById("youbi").src = "week/Tue.png";
  } else if(day >= 1) {
    document.getElementById("youbi").src = "week/Mon.png";
  } else {
    document.getElementById("youbi").src = "week/Sun.png";
  }
  return;
}

function clock3() {
  houre10();
  houre1();
  minutes10();
  minutes1();
  seconds10();
  seconds1();
}

function houre10() {
  let now = new Date();
  let hou = "0" + now.getHours();
  let houre = hou.slice( -2, -1);
  if(houre >= 2) {
    document.getElementById("jikan10").src = "number/２a.png";
  } else if(houre >= 1) {
    document.getElementById("jikan10").src = "number/１a.png";
  } else {
    document.getElementById("jikan10").src = "number/０.png";
  }
  return;
}

function houre1() {
  let now = new Date();
  let hou = "0" + now.getHours();
  let houre = hou.slice(-1);
  if(houre >= 9) {
    document.getElementById("jikan1").src = "number/９b.png";
  } else if(houre >= 8) {
    document.getElementById("jikan1").src = "number/８b.png";
  } else if(houre >= 7) {
    document.getElementById("jikan1").src = "number/７b.png";
  } else if(houre >= 6) {
    document.getElementById("jikan1").src = "number/６b.png";
  } else if(houre >= 5) {
    document.getElementById("jikan1").src = "number/５b.png";
  } else if(houre >= 4) {
    document.getElementById("jikan1").src = "number/４b.png";
  } else if(houre >= 3) {
    document.getElementById("jikan1").src = "number/３b.png";
  } else if(houre >= 2) {
    document.getElementById("jikan1").src = "number/２b.png";
  } else if(houre >= 1) {
    document.getElementById("jikan1").src = "number/１b.png";
  } else {
    document.getElementById("jikan1").src = "number/０.png";
  }
  return;
}

function minutes10() {
  let now = new Date();
  let minu = "0" + now.getMinutes();
  let minutes = minu.slice( -2, -1);
  if(minutes >= 9) {
    document.getElementById("hun10").src = "number/９a.png";
  } else if(minutes >= 8) {
    document.getElementById("hun10").src = "number/８a.png";
  } else if(minutes >= 7) {
    document.getElementById("hun10").src = "number/７a.png";
  } else if(minutes >= 6) {
    document.getElementById("hun10").src = "number/６a.png";
  } else if(minutes >= 5) {
    document.getElementById("hun10").src = "number/５a.png";
  } else if(minutes >= 4) {
    document.getElementById("hun10").src = "number/４a.png";
  } else if(minutes >= 3) {
    document.getElementById("hun10").src = "number/３a.png";
  } else if(minutes >= 2) {
    document.getElementById("hun10").src = "number/２a.png";
  } else if(minutes >= 1) {
    document.getElementById("hun10").src = "number/１a.png";
  } else {
    document.getElementById("hun10").src = "number/０.png";
  }
  return;
}

function minutes1() {
  let now = new Date();
  let minu = "0" + now.getMinutes();
  let minutes = minu.slice(-1);
  if(minutes >= 9) {
    document.getElementById("hun1").src = "number/９a.png";
  } else if(minutes >= 8) {
    document.getElementById("hun1").src = "number/８a.png";
  } else if(minutes >= 7) {
    document.getElementById("hun1").src = "number/７a.png";
  } else if(minutes >= 6) {
    document.getElementById("hun1").src = "number/６a.png";
  } else if(minutes >= 5) {
    document.getElementById("hun1").src = "number/５b.png";
  } else if(minutes >= 4) {
    document.getElementById("hun1").src = "number/４b.png";
  } else if(minutes >= 3) {
    document.getElementById("hun1").src = "number/３b.png";
  } else if(minutes >= 2) {
    document.getElementById("hun1").src = "number/２b.png";
  } else if(minutes >= 1) {
    document.getElementById("hun1").src = "number/１b.png";
  } else {
    document.getElementById("hun1").src = "number/０.png";
  }
  return;
}

function seconds10() {
  let now = new Date();
  let seco = "0" + now.getSeconds();
  let seconds = seco.slice( -2, -1);
  if(seconds >= 9) {
    document.getElementById("byou10").src = "number/９a.png";
  } else if(seconds >= 8) {
    document.getElementById("byou10").src = "number/８a.png";
  } else if(seconds >= 7) {
    document.getElementById("byou10").src = "number/７a.png";
  } else if(seconds >= 6) {
    document.getElementById("byou10").src = "number/６a.png";
  } else if(seconds >= 5) {
    document.getElementById("byou10").src = "number/５a.png";
  } else if(seconds >= 4) {
    document.getElementById("byou10").src = "number/４a.png";
  } else if(seconds >= 3) {
    document.getElementById("byou10").src = "number/３a.png";
  } else if(seconds >= 2) {
    document.getElementById("byou10").src = "number/２a.png";
  } else if(seconds >= 1) {
    document.getElementById("byou10").src = "number/１a.png";
  } else {
    document.getElementById("byou10").src = "number/０.png";
  }
  return;
}

function seconds1() {
  let now = new Date();
  let seco = "0" + now.getSeconds();
  let seconds = seco.slice(-1);
  if(seconds >= 9) {
    document.getElementById("byou1").src = "number/９b.png";
  } else if(seconds >= 8) {
    document.getElementById("byou1").src = "number/８b.png";
  } else if(seconds >= 7) {
    document.getElementById("byou1").src = "number/７b.png";
  } else if(seconds >= 6) {
    document.getElementById("byou1").src = "number/６b.png";
  } else if(seconds >= 5) {
    document.getElementById("byou1").src = "number/５b.png";
  } else if(seconds >= 4) {
    document.getElementById("byou1").src = "number/４b.png";
  } else if(seconds >= 3) {
    document.getElementById("byou1").src = "number/３b.png";
  } else if(seconds >= 2) {
    document.getElementById("byou1").src = "number/２b.png";
  } else if(seconds >= 1) {
    document.getElementById("byou1").src = "number/１b.png";
  } else {
    document.getElementById("byou1").src = "number/０.png";
  }
  return;
}
