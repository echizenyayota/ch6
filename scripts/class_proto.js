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

    Article.prototype.getSummary = function() {
        return this.intro.substring(0, 4);
    }

    console.log(a.getSummary());

}
