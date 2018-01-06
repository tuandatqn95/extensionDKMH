document.body.innerHTML = "";
var svl, code, xmlHttp = new XMLHttpRequest();
xmlHttp.onreadystatechange = function () {
  svl = JSON.parse(xmlHttp.responseText);
  if (code != null) if (svl.indexOf(code) >= 0) injectLayout(); else notRegister();
};
xmlHttp.open("GET", 'https://5a4c8c592f76010012c28275.mockapi.io/ListSV', true);
xmlHttp.send();


var xHttp = new XMLHttpRequest();
xHttp = new XMLHttpRequest();
xHttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var result = xHttp.response, parse = new DOMParser(), menu = parse.parseFromString(result, "text/html").getElementsByClassName("menu2")[0].getElementsByTagName("span")[0];
    if (menu != null) {
      code = menu.innerHTML.substring(2, 10);
      if (svl != null) if (svl.indexOf(code) >= 0) injectLayout(); else notRegister();
    } else notLogin();
  }
};
xHttp.open("GET", 'https://dkmh.hcmute.edu.vn/QuiDinh', true);
xHttp.send();

function checkAccount() {
  var xHttp = new XMLHttpRequest();
  xHttp = new XMLHttpRequest();
  xHttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var result = xHttp.response, parse = new DOMParser(), menu = parse.parseFromString(result, "text/html").getElementsByClassName("menu2")[0].getElementsByTagName("span")[0];
      if (menu != null) { code = menu.innerHTML.substring(2, 10); if (svl != null) if (svl.indexOf(code) < 0) notRegister(); }
    }
  
  };
  xHttp.open("GET", 'https://dkmh.hcmute.edu.vn/QuiDinh', true);
  xHttp.send();
}