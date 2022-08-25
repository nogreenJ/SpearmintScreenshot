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

function getWhoisServer(dom){
  let list = {
    "ac": "whois.nic.ac",
    "ad": "whois.ripe.net",
    "ae": "whois.aeda.net.ae",
    "aero": "whois.aero",
    "af": "whois.nic.af",
    "ag": "whois.nic.ag",
    "ai": "whois.ai",
    "al": "whois.ripe.net",
    "am": "whois.amnic.net",
    "as": "whois.nic.as",
    "asia": "whois.nic.asia",
    "at": "whois.nic.at",
    "au": "whois.aunic.net",
    "aw": "whois.nic.aw",
    "ax": "whois.ax",
    "az": "whois.ripe.net",
    "ba": "whois.ripe.net",
    "bar": "whois.nic.bar",
    "be": "whois.dns.be",
    "berlin": "whois.nic.berlin",
    "best": "whois.nic.best",
    "bg": "whois.register.bg",
    "bi": "whois.nic.bi",
    "biz": "whois.neulevel.biz",
    "bj": "www.nic.bj",
    "bo": "whois.nic.bo",
    "br": "whois.nic.br",
    "br.com": "whois.centralnic.com",
    "bt": "whois.netnames.net",
    "bw": "whois.nic.net.bw",
    "by": "whois.cctld.by",
    "bz": "whois.belizenic.bz",
    "bzh": "whois-bzh.nic.fr",
    "ca": "whois.cira.ca",
    "cat": "whois.cat",
    "cc": "whois.nic.cc",
    "cd": "whois.nic.cd",
    "ceo": "whois.nic.ceo",
    "cf": "whois.dot.cf",
    "ch": "whois.nic.ch",
    "ci": "whois.nic.ci",
    "ck": "whois.nic.ck",
    "cl": "whois.nic.cl",
    "cloud": "whois.nic.cloud",
    "club": "whois.nic.club",
    "cn": "whois.cnnic.net.cn",
    "cn.com": "whois.centralnic.com",
    "co": "whois.nic.co",
    "co.nl": "whois.co.nl",
    "com": "whois.verisign-grs.com",
    "coop": "whois.nic.coop",
    "cx": "whois.nic.cx",
    "cy": "whois.ripe.net",
    "cz": "whois.nic.cz",
    "de": "whois.denic.de",
    "dk": "whois.dk-hostmaster.dk",
    "dm": "whois.nic.cx",
    "dz": "whois.nic.dz",
    "ec": "whois.nic.ec",
    "edu": "whois.educause.net",
    "ee": "whois.tld.ee",
    "eg": "whois.ripe.net",
    "es": "whois.nic.es",
    "eu": "whois.eu",
    "eu.com": "whois.centralnic.com",
    "eus": "whois.nic.eus",
    "fi": "whois.fi",
    "fo": "whois.nic.fo",
    "fr": "whois.nic.fr",
    "gb": "whois.ripe.net",
    "gb.com": "whois.centralnic.com",
    "gb.net": "whois.centralnic.com",
    "qc.com": "whois.centralnic.com",
    "ge": "whois.ripe.net",
    "gg": "whois.gg",
    "gi": "whois2.afilias-grs.net",
    "gl": "whois.nic.gl",
    "gm": "whois.ripe.net",
    "gov": "whois.nic.gov",
    "gr": "whois.ripe.net",
    "gs": "whois.nic.gs",
    "gy": "whois.registry.gy",
    "hamburg": "whois.nic.hamburg",
    "hiphop": "whois.uniregistry.net",
    "hk": "whois.hknic.net.hk",
    "hm": "whois.registry.hm",
    "hn": "whois2.afilias-grs.net",
    "host": "whois.nic.host",
    "hr": "whois.dns.hr",
    "ht": "whois.nic.ht",
    "hu": "whois.nic.hu",
    "hu.com": "whois.centralnic.com",
    "id": "whois.pandi.or.id",
    "ie": "whois.domainregistry.ie",
    "il": "whois.isoc.org.il",
    "im": "whois.nic.im",
    "in": "whois.inregistry.net",
    "info": "whois.afilias.info",
    "ing": "domain-registry-whois.l.google.com",
    "ink": "whois.centralnic.com",
    "int": "whois.isi.edu",
    "io": "whois.nic.io",
    "iq": "whois.cmc.iq",
    "ir": "whois.nic.ir",
    "is": "whois.isnic.is",
    "it": "whois.nic.it",
    "je": "whois.je",
    "jobs": "jobswhois.verisign-grs.com",
    "jp": "whois.jprs.jp",
    "ke": "whois.kenic.or.ke",
    "kg": "whois.domain.kg",
    "ki": "whois.nic.ki",
    "kr": "whois.kr",
    "kz": "whois.nic.kz",
    "la": "whois2.afilias-grs.net",
    "li": "whois.nic.li",
    "london": "whois.nic.london",
    "lt": "whois.domreg.lt",
    "lu": "whois.restena.lu",
    "lv": "whois.nic.lv",
    "ly": "whois.lydomains.com",
    "ma": "whois.iam.net.ma",
    "mc": "whois.ripe.net",
    "md": "whois.nic.md",
    "me": "whois.nic.me",
    "mg": "whois.nic.mg",
    "mil": "whois.nic.mil",
    "mk": "whois.ripe.net",
    "ml": "whois.dot.ml",
    "mo": "whois.monic.mo",
    "mobi": "whois.dotmobiregistry.net",
    "ms": "whois.nic.ms",
    "mt": "whois.ripe.net",
    "mu": "whois.nic.mu",
    "museum": "whois.museum",
    "mx": "whois.nic.mx",
    "my": "whois.mynic.net.my",
    "mz": "whois.nic.mz",
    "na": "whois.na-nic.com.na",
    "name": "whois.nic.name",
    "nc": "whois.nc",
    "net": "whois.verisign-grs.com",
    "nf": "whois.nic.cx",
    "ng": "whois.nic.net.ng",
    "nl": "whois.domain-registry.nl",
    "no": "whois.norid.no",
    "no.com": "whois.centralnic.com",
    "nu": "whois.nic.nu",
    "nz": "whois.srs.net.nz",
    "om": "whois.registry.om",
    "ong": "whois.publicinterestregistry.net",
    "ooo": "whois.nic.ooo",
    "org": "whois.pir.org",
    "paris": "whois-paris.nic.fr",
    "pe": "kero.yachay.pe",
    "pf": "whois.registry.pf",
    "pics": "whois.uniregistry.net",
    "pl": "whois.dns.pl",
    "pm": "whois.nic.pm",
    "pr": "whois.nic.pr",
    "press": "whois.nic.press",
    "pro": "whois.registrypro.pro",
    "pt": "whois.dns.pt",
    "pub": "whois.unitedtld.com",
    "pw": "whois.nic.pw",
    "qa": "whois.registry.qa",
    "re": "whois.nic.re",
    "ro": "whois.rotld.ro",
    "rs": "whois.rnids.rs",
    "ru": "whois.tcinet.ru",
    "sa": "saudinic.net.sa",
    "sa.com": "whois.centralnic.com",
    "sb": "whois.nic.net.sb",
    "sc": "whois2.afilias-grs.net",
    "se": "whois.nic-se.se",
    "se.com": "whois.centralnic.com",
    "se.net": "whois.centralnic.com",
    "sg": "whois.nic.net.sg",
    "sh": "whois.nic.sh",
    "si": "whois.arnes.si",
    "sk": "whois.sk-nic.sk",
    "sm": "whois.nic.sm",
    "st": "whois.nic.st",
    "so": "whois.nic.so",
    "su": "whois.tcinet.ru",
    "sx": "whois.sx",
    "sy": "whois.tld.sy",
    "tc": "whois.adamsnames.tc",
    "tel": "whois.nic.tel",
    "tf": "whois.nic.tf",
    "th": "whois.thnic.net",
    "tj": "whois.nic.tj",
    "tk": "whois.nic.tk",
    "tl": "whois.domains.tl",
    "tm": "whois.nic.tm",
    "tn": "whois.ati.tn",
    "to": "whois.tonic.to",
    "top": "whois.nic.top",
    "tp": "whois.domains.tl",
    "tr": "whois.nic.tr",
    "travel": "whois.nic.travel",
    "tw": "whois.twnic.net.tw",
    "tv": "whois.nic.tv",
    "tz": "whois.tznic.or.tz",
    "ua": "whois.ua",
    "ug": "whois.co.ug",
    "uk": "whois.nic.uk",
    "uk.com": "whois.centralnic.com",
    "uk.net": "whois.centralnic.com",
    "ac.uk": "whois.ja.net",
    "gov.uk": "whois.ja.net",
    "us": "whois.nic.us",
    "us.com": "whois.centralnic.com",
    "uy": "nic.uy",
    "uy.com": "whois.centralnic.com",
    "uz": "whois.cctld.uz",
    "va": "whois.ripe.net",
    "vc": "whois2.afilias-grs.net",
    "ve": "whois.nic.ve",
    "vg": "ccwhois.ksregistry.net",
    "vu": "vunic.vu",
    "wang": "whois.nic.wang",
    "wf": "whois.nic.wf",
    "wiki": "whois.nic.wiki",
    "ws": "whois.website.ws",
    "xxx": "whois.nic.xxx",
    "xyz": "whois.nic.xyz",
    "yu": "whois.ripe.net",
    "za.com": "whois.centralnic.com"
  };
  return "https://" + list[dom] + "/";
}

function setScreenshotUrl(url) {

  document.getElementById('target').src = url;

  const urlSite = localStorage.getItem('url');
  const inf = "https://ipinfo.io/json";
  fetch(inf)
    .then(response => response.json())
    .then(data => {
      dados = data;
      
      const u = urlSite.split("/", 3);

      //TODO: fazer isso direito para todos os dominios
      const urlBusca = (u[2].endsWith("br") ? 
                        "https://rdap.registro.br/domain/" :
                        "https://rdap.verisign.com/com/v1/domain/")
                        + u[2];
                        //getWhoisServer(urlSite.split('.').pop().slice(0, -1)) + u[2];
                        
      console.log(urlBusca);
      fetch(urlBusca)
        .then(response => response.json())
        .then(data => {
          
          var dados2;
          var ip = "-";
          var rep = "-";
          var ent = "-";
          var ldhName = ip[0]["-"];
          var dominio = "-";
          var ipv4 = "-";

          if(data){
            console.log(data);
            dados2 = data;
            ip = dados2['nameservers'];

            rep = dados2['entities'][0]['legalRepresentative'] ? 
                  dados2['entities'][0]['legalRepresentative'] : '-';

            ent = dados2['entities'][0]['vcardArray'][1].pop()[3];
                  
            ldhName = ip[0]['ldhName'];

            dominio = dados2['ldhName'];

            ipv4 = ip[0].ipAddresses ? ip[0].ipAddresses.v4[0] : '-';
          }
          
          var doc = new jsPDF({filters: ["ASCIIHexEncode"]});
          var finalY = doc.lastAutoTable.finalY || 10;
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
              ['Domain', dominio],
              ['IP', ipv4],
              ['ldhName', ldhName],
              ['Owner', ent],
              ['Person', rep],
              // ...
            ],
          })
          doc.addPage("a4", "1");
          doc.addImage(url, "JPEG", 15, 40, 180, 150);
          doc.save("captura.pdf");
        })
        .catch(function(err)
        {
          alert("ERRO AO BUSCAR METADADOS, O PDF NÃO FOI GERADO");
          console.log(err);
        });
    });

}


