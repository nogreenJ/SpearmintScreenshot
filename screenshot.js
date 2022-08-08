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

  //console.log("> " + urlSite);
  const inf = "https://ipinfo.io/json";
  fetch(inf)
    .then(response => response.json())
    .then(data => {
      //console.log(JSON.stringify(data))
      dados = data;
     // console.log(dados['ip']);

      const u = urlSite.split("/", 3);
    //  console.log(u[2]);

      const urlBusca = "https://rdap.registro.br/domain/" + u[2];
     // console.log(">> " + urlBusca);
      fetch(urlBusca)
        .then(response => response.json())
        .then(data => {
         // console.log(JSON.stringify(data))
          var dados2 = data;
          var ip = dados2['nameservers'];
          var rep = dados2['entities'][0]['legalRepresentative'];
          var ent = dados2['entities'][0]['vcardArray'][1][2][3];
          console.log(">>" + ent);
          var ldhName = ip[0]['ldhName'];

          var doc = new jsPDF({filters: ["ASCIIHexEncode"]});
         // doc.setFontSize(30);
          //doc.setFontType('bold');
         // doc.text(65, 30, 'Relatorio de Prova');
         // doc.setFontSize(14);
          var finalY = doc.lastAutoTable.finalY || 10
       //   doc.text('Relatório de Prova', 14, finalY + 15)

        //  console.log(doc.getFontList());
         // finalY = doc.lastAutoTable.finalY 
        //  doc.text('Dados computador captura', 14, finalY + 15)

        //  doc.autoTable({ html: '#my-table' })
          var date = new Date();
          var data = date.toLocaleDateString();
          var hora = date.toLocaleTimeString();
          var dt = data + "  " + hora;

          doc.autoTable({
            startY: finalY + 25,
            margin: { top: 37 },
            head: [['Item', 'Valor']],
            body: [
              ['IP', dados['ip']],
              ['Cidade', dados['city']],
              ['UF', dados['region']],
              ['Local', dados['loc']],
              ['Data/hora', dt],
              // ...
            ],
            didDrawPage: function (data) {
              doc.setFontSize(18)
              doc.text('Relatório de Prova', data.settings.margin.left, 22)
              doc.setFontSize(14)
              doc.text(
                'Dados captura',
                data.settings.margin.left,
                30
              )
            },
          })
          doc.setFontSize(14)
          finalY = doc.lastAutoTable.finalY
          doc.text('URL acessada', 14, finalY + 15)
          
          doc.autoTable({
            startY: finalY + 20,
            head: [['Item', 'Valor']],
            body: [
              ['Domain', dados2['ldhName']],
              ['IP', ip[0].ipAddresses.v4[0]],
              ['ldhName', ldhName],
              ['Owner', ent],
              ['Person', rep],
              // ...
            ],
          })
          doc.addPage("a4", "1");
          doc.addImage(url, "JPEG", 15, 40, 180, 150);
          doc.save("captura.pdf");

        });


    });

}


