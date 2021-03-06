function injectLayout() {
  document.head.innerHTML = '<title>TRƯỜNG ĐẠI HỌC SƯ PHẠM KỸ THUẬT TP.HCM</title><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">';
  document.body.innerHTML = '<div class="container-fluid"><div class="row content"><div class="col-md-12"><h4 class="text-center">TRƯỜNG ĐẠI HỌC SƯ PHẠM KỸ THUẬT TP.HCM</h4><h3 class="text-center">ĐĂNG KÝ MÔN HỌC</small></h3><div class="row"><label class="control-label col-sm-3 text-right">Tìm kiếm học phần:</label>' +
    '<div class="col-md-2"><select id="searchType" class="form-control"><option value="0">Mã môn</option><option value="1">Tên môn</option><option value="2">Tên khoa</option></select></div><div class="col-md-4"><input id="tbSearchMenu" type="text" class="form-control" placeholder="Tìm kiếm học phần.."></div><div class="col-md-2"><button id="btnSearchMenu" class="btn btn-success" type="button">Tìm kiếm</button></div></div>' +
    '<div class="row" style="margin-top: 20px;"><label class="control-label col-sm-3 text-right">Đăng ký nhanh:</label><div class="col-md-6"><input id="tbQuickSubmit" type="text" class="form-control" placeholder="Nhập chính xác mã lớp học phần...Ex: DBMS340284_01"></div><div class="col-md-2"><button id="btnQuickSubmit" class="btn btn-primary" type="button">Đăng ký</button></div></div>' +
    '<div class="row text-center" style="margin: 20px 0;"><a href="/" class="btn btn-default" style="margin-right: 20px;">Quay về trang chủ</a><button id="btnCTDaoTao" class="btn btn-info" type="button" style="margin-right: 20px;">Xem chương trình đào tạo</button><button id="btnShowResult" class="btn btn-info" type="button">Xem kết quả đăng ký</button></div></div><div  class="col-md-12"><hr/></div><div  class="col-md-12" id="pageResult"></div><div  class="col-md-12"><hr/></div><div class="col-md-12" id="pageContent"></div>' +
    '</div></div><footer class="container-fluid text-center"><p>Bản quyền (C) 2018 TRƯỜNG ĐẠI HỌC SƯ PHẠM KỸ THUẬT TP.HCM - Phát triển bởi IT-UTE</p></footer>';
  templateReady();
}

function showLoading() {
  document.getElementById("pageContent").innerHTML = '<center><img src="' + chrome.extension.getURL("images/loading.gif") + '" style="margin: 30px"  height="150px" /></center>';
}

function notLogin() {
  document.body.innerHTML = '<h3 class="text-center">Bạn chưa đăng nhập</h3><div class="row text-center" style="margin: 20px 0;"><a href="/" class="btn btn-warning" style="margin-right: 20px;">Quay về trang chủ</a></div>';
}

function notRegister() {
  document.body.innerHTML = '<h3 class="text-center">Tài khoản chưa được đăng ký. Vui lòng liên hệ vối tác giả!</h3>';
}