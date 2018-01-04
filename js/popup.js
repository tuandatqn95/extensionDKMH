var i = 0;
var interval;

function httpGet(theUrl) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", theUrl, true); // false for synchronous request
  xmlHttp.send(null);
  return xmlHttp.responseText;
}

function execute() {
  i = 0;

  interval = setInterval(function () {
    var text = httpGet('https://dkmh.hcmute.edu.vn/DangKiHocPhan?StudyUnitID=undefined&CurriculumID=NEES340380&Hide=171NEES340380_02$3.00$171NEES340380$1$1|&t=0.45331377431484143');
    document.body.innerHTML = text + (++i);

  }, 100);
}


function stop() {
  clearInterval(interval);
}



if (text.trim() == "Vui lòng đăng nhâp lại")
  clearInterval(interval);



httpGet('https://dkmh.hcmute.edu.vn/DangKiHocPhan?StudyUnitID=undefined&CurriculumID=NEES340380&Hide=171NEES340380_02$3.00$171NEES340380$1$1|&t=0.45331377431484143')


function showCustomer(str) {
  var xhttp;
  if (str == "") {
    document.body.innerHTML = "";
    return;
  }
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.body.innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "getcustomer.asp?q=" + str, true);
  xhttp.send();
}
var i;
var interval = setInterval(function () {
  showCustomer();
  i++;

}, 100);