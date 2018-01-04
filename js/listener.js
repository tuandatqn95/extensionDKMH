function templateReady() {
    document.getElementById("btnSearchMenu").addEventListener("click", function () {
        var searchInput = document.getElementById("tbSearchMenu").value;
        var searchType = document.getElementById("searchType").value;
        search(searchInput, searchType);
    });

    document.getElementById("btnQuickSubmit").addEventListener("click", function () {
        var maLopHP = document.getElementById("tbQuickSubmit").value;
        if (maLopHP != "") {
            run(maLopHP);
        }
    });

    document.getElementById("btnShowResult").addEventListener("click", function () {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var parse = new DOMParser();
                var result = parse.parseFromString(xmlHttp.response, "text/html").getElementById("reload_ketquadangki");
                document.getElementById("pageContent").innerHTML = result.outerHTML;
                var table = document.getElementById("reload_ketquadangki").getElementsByTagName("table")[1];
                table.classList.add("table");
                table.classList.add("table-hover");
                table.style.margin = "15px 0 30px 0";
            }
        };
        xmlHttp.open("GET", 'https://dkmh.hcmute.edu.vn/DangKiThanhCong/Ketquadangki', true); // false for synchronous request
        xmlHttp.send();
    });

    document.getElementById("btnCTDaoTao").addEventListener("click", function () {
       getCTDaoTao();
    });
}

