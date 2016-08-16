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

        var request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.send();
    }
};