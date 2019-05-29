'use strict';

{
    class Article {
        constructor (title, url, intro) {
            this.title = title;
            this.url = url;
            this.intro = intro;
        }
    }

    let a = new Article (
        'エコテキブログ記事一覧',
        'https://e-yota.com',
        'エコテキブログ'
    );

    a.getSummary = function() {
        return this.intro.substring(0, 4);
    }

    console.log(a.getSummary());

    let a2 = new Article (
        '全力2階建て記事一覧',
        'https://kabumatome.com',
        '全力2階建て'
    );

    console.log(a2.getSummary());

}
