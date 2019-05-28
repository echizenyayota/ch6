'use strict';

{
    class Article {
        constructor (title, url, intro) {
            this.title = title;
            this.url = url;
            this.intro = intro;
        }

        toString() {
            return `${this.title}(${this.title}) : ${this.intro}`
        }
    }

    let a = new Article (
        'エコテキブログ記事一覧',
        'https://e-yota.com',
        'エコテキブログ'
    );

    console.log(a.toString());

}
