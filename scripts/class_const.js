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

    console.log(a.title);
    console.log(a.url);
    console.log(a.intro);

}
