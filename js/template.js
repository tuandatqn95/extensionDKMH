document.body.innerHTML = "";
var svList;
var mssv;
var xmlHttp = new XMLHttpRequest();
xmlHttp.onreadystatechange = function () {

  svList = JSON.parse(xmlHttp.responseText);

  if (mssv != null && svList.indexOf(mssv) >= 0) {
    injectLayout();
  }
};
xmlHttp.open("GET", 'https://5a4c8c592f76010012c28275.mockapi.io/ListSV', true); // false for synchronous request
xmlHttp.send();


var xHttp = new XMLHttpRequest();
xHttp = new XMLHttpRequest();
xHttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var result = xHttp.response;
    var parse = new DOMParser();
    mssv = parse.parseFromString(result, "text/html").getElementsByClassName("menu2")[0].getElementsByTagName("span")[0].innerHTML.substring(2, 10);

    if (svList != null && svList.indexOf(mssv) >= 0) {
      injectLayout();
    }

  }
};
xHttp.open("GET", 'https://dkmh.hcmute.edu.vn/QuiDinh', true); // false for synchronous request
xHttp.send();

