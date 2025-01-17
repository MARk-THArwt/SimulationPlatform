function download(flag) {
  if (flag == "task3") {
    document.getElementById("hiddenTable").innerHTML =
      "<pre></pre>" +
      serviceTime_probabilityTable +
      "<pre></pre>" +
      servers_probabilityTable +
      "<pre></pre>" +
      Parallel_openingHourTable +
      "<pre></pre>" +
      table.innerHTML +
      "<pre></pre>";
  } else if (flag == "task2") {
    document.getElementById("hiddenTable").innerHTML =
      "<pre></pre>" +
      service_probabilityTable +
      "<pre></pre>" +
      customer_probabilityTable +
      "<pre></pre>" +
      openingHour +
      "<pre></pre>" +
      table.innerHTML +
      "<pre></pre>";
  } else {
    document.getElementById("hiddenTable").innerHTML =
      "<pre></pre>" + table.innerHTML + "<pre></pre>";
  }
}
var tableToExcel = (function () {
  var uri = "data:application/vnd.ms-excel;base64,",
    template =
      '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>',
    base64 = function (s) {
      return window.btoa(unescape(encodeURIComponent(s)));
    },
    format = function (s, c) {
      return s.replace(/{(\w+)}/g, function (m, p) {
        return c[p];
      });
    };
  return function (table, name, filename) {
    if (!table.nodeType) table = document.getElementById(table);
    var ctx = { worksheet: name || "Worksheet", table: table.innerHTML };

    document.getElementById("dlink").href = uri + base64(format(template, ctx));
    document.getElementById("dlink").download = filename;
    document.getElementById("dlink").click();
  };
})();
