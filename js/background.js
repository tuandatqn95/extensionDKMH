function maMon(str) { return str.substring(3, str.lastIndexOf("_")); }
function maHocPhan(str) { return str.substring(0, str.lastIndexOf("_")); }
function stop() { clearInterval(interval); }
function httpGet(theUrl) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", theUrl, false);
  xmlHttp.send(null);
  return xmlHttp.responseText;
}

function execute(maLopHP, time) {
  var url = getURL(maLopHP);
  var i = 0; var interval = setInterval(function () {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("RESULT_" + maLopHP).innerHTML = "<strong>" + maLopHP + ": </strong>" + xmlHttp.responseText + (++i);
      }
    };
    xmlHttp.open("GET", url, true);
    xmlHttp.send(null); return xmlHttp.responseText;
  }, time);

  document.getElementById("STOP_" + maLopHP).addEventListener("click", function () {
    clearInterval(interval);
    var clearElement = document.getElementById(maLopHP);
    clearElement.parentNode.removeChild(clearElement);
  });
}

function getURL(maLopHP) {
  var url = "https://dkmh.hcmute.edu.vn/DangKiHocPhan?StudyUnitID=undefined&CurriculumID="
    + maHocPhan(maLopHP) + "&Hide=172" + maLopHP + "$3.00$172" + maHocPhan(maLopHP) + "$1$1|&t=0.45331377431484143";
  return url;
}

function run(maLopHP) {
  var time = 0;
  while (time <= 999) {
    time = Number.parseInt( prompt('Tốc độ (ms/request) càng nhỏ chạy càng nhanh, bản free giới hạn >=1000 \nNhập tốc độ:', '100'));
    if (time == null || Number.isNaN(time))
      return;
  }

  var resultAlert = document.createElement("div");
  resultAlert.classList.add("alert");
  resultAlert.classList.add("alert-info");
  resultAlert.id = maLopHP;
  var btnStop = document.createElement("a");
  btnStop.classList.add("btn");
  btnStop.classList.add("btn-danger");
  btnStop.classList.add("pull-right");
  btnStop.id = "STOP_" + maLopHP;
  btnStop.innerText = "STOP";
  btnStop.style.marginTop = "-6px";
  var spanContent = document.createElement("span");
  spanContent.id = "RESULT_" + maLopHP;
  resultAlert.appendChild(btnStop);
  resultAlert.appendChild(spanContent);
  document.getElementById("pageResult").appendChild(resultAlert);
  execute(maLopHP, time);
}

function search(searchInput, searchType) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var parse = new DOMParser();
      var result = parse.parseFromString(xmlHttp.response, "text/html").getElementById("TraCuuHocPhan");
      document.getElementById("pageContent").innerHTML = result.outerHTML;
      trTags = document.body.getElementsByTagName("tr");
      trTags[1].parentNode.removeChild(trTags[1]);
      var table = document.body.getElementsByTagName("table")[1];
      table.classList.add("table");
      table.classList.add("table-hover");
      table.style.marginTop = '30px';
      var rows = table.rows;
      rows[0].classList.add("success");
      var th = document.createElement("th");
      th.innerHTML = '<strong>Chọn</strong>';
      rows[0].appendChild(th);
      for (var i = 1; i < rows.length; i++) {
        var t = document.createTextNode(rows[i].cells[1].innerText);
        var code = t.textContent;
        var td = document.createElement("td");
        td.innerHTML = '<center><button  class="btn btn-primary" name="' + code + '" >Đăng kí</button</center>';
        rows[i].appendChild(td);
      }
      var btns = table.getElementsByTagName("button");
      for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
          run(this.getAttribute("name"));
        });
      }
    }
  };
  xmlHttp.open("POST", 'https://dkmh.hcmute.edu.vn/TraCuuHocPhan', true); // false for synchronous request
  xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xmlHttp.send("ddlMonHoc=" + searchType + "&txtSearch=" + searchInput + "&btntim=Tìm+kiếm");
  showLoading();
}

function getCTDaoTao() {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var parse = new DOMParser();
      var result = parse.parseFromString(xmlHttp.response, "text/html").getElementById("content_CTDT");
      document.getElementById("pageContent").innerHTML = result.outerHTML;
      var tables = document.getElementById("content_CTDT").getElementsByTagName("table");
      for (var i = 0; i < tables.length; i++) {
        var table = tables[i];
        table.classList.add("table");
        table.classList.add("table-hover");
        table.style.marginTop = "10px";
        var rows = table.rows;
        var th = document.createElement("th");
        rows[1].appendChild(th);
        rows[1].classList.add("success");
        for (var j = 2; j < rows.length; j++) {
          var td = document.createElement("td");
          td.innerHTML = '<center><button name="' + rows[j].cells[2].innerText + '" class="btn btn-success">Tìm</button</center>';
          rows[j].appendChild(td);
          td.getElementsByTagName("button")[0].addEventListener("click", function () {

            search(this.getAttribute("name"), 0);
          });
        }
      };
    }
  };
  xmlHttp.open("GET", 'https://dkmh.hcmute.edu.vn/ChuongTrinhDaoTao', true); // false for synchronous request
  xmlHttp.send();
  showLoading();
}

function showLoading() {
  document.getElementById("pageContent").innerHTML = '<center><img src="' + chrome.extension.getURL("images/loading.gif") + '" style="margin: 30px"  height="150px" /></center>';
}
