// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

window.jsPDF = window.jspdf.jsPDF;
//alert(document.referrer);
//alert( window.location.href);
//alert(window.location.pathname);

$(function () {
  $("#accordion-basic, #accordion-text, #accordion-graphic, #accordion-font").accordion({
    autoHeight: false,
    navigation: true
  });
  $("#tabs").tabs();
  $(".button").button();
});

function setScreenshotUrl(url) {

  document.getElementById('target').src = url;

  const urlSite = localStorage.getItem('url');

  console.log("> " + urlSite);
  const inf = "https://ipinfo.io/json";
  fetch(inf)
    .then(response => response.json())
    .then(data => {
      console.log(JSON.stringify(data))
      dados = data;
      console.log(dados['ip']);


      const u = urlSite.split("/", 3);
      console.log(u[2]);

      const urlBusca = "https://rdap.registro.br/domain/" + u[2];
      console.log(">> " + urlBusca);
      fetch(urlBusca)
        .then(response => response.json())
        .then(data => {
          console.log(JSON.stringify(data))
          var dados2 = data;
          console.log(">>");
          var ip = dados2['nameservers'];
          console.log(dados2['ldhName']);
          console.log(dados2['nameservers']);
          console.log(">>>");
          console.log(ip[0]);
          console.log(ip[0].ldhName);
          console.log(ip[0].ipAddresses.v4[0]);


          var doc = new jsPDF();

          doc.setFontSize(40);
          doc.setFont("times", "bold", "center");
          doc.text("IFSUL", 35, 20);
          doc.setFontSize(20);
          doc.text("Relatorio de Prova", 35, 20);


          doc.autoTable({ html: '#my-table' })

          doc.autoTable({
            head: [['Name', 'Email']],
            body: [
                [dados2['ldhName'], 'david@example.com'],
                [dados2['ldhName'], 'castille@example.com'],
                // ...
            ],
        })

          doc.setFontSize(40);
          doc.setFont("times", "bold", "center");
          doc.text("IFSUL", 35, 20);
          doc.setFontSize(20);
          doc.text("DADOS:", 30, 50);
          doc.setFontSize(14);
          doc.text("IP: " + dados['ip'], 30, 55);
          doc.text("IP: " + dados['ip'], 30, 60);
          doc.setFontSize(20);
          doc.text("DADOS URL ACESSADA:", 30, 70);
          doc.setFontSize(14);
          doc.text("Domínio: " + dados2['ldhName'], 30, 80);
          doc.text("IP: " + ip[0].ipAddresses.v4[0], 30, 85);

          doc.addImage("ifsul.png", "PNG", 15, 15, 15, 15);
          doc.addPage("a4", "1");
          doc.addImage(url, "JPEG", 15, 40, 180, 150);


          doc.save("captura.pdf");

        });


    });

}


