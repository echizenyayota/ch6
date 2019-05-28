'use strict';

{
    class Article {
        constructor (title, url, intro) {
            Object.assign (this, {title, url, intro});
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
