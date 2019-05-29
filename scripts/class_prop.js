'use strict';

{
    class Article {
        constructor (title, url, intro) {
            this.title = title;
            this.url = url;
            this.intro = intro;
        }

        get title() {
            return this._title;
        }

        set title(value) {
            this._title = value;
        }
    }

    let a = new Article (
        'エコテキブログ',
        'https://e-yota.com',
        'エコテキブログ記事一覧'
    );

    a.title = '新・エコテキブログ';
    console.log(a.title);


}
