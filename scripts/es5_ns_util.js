var namespace = function (ns) {
    // 名前空間を「.」で分割
    var elems = ns.split('.');
    var parent = window;

    // 以降の名前空間を順に階層付けしながら登録
    for (var i = 0; i < elems.length; i++) {
        parent[elems[i]] = parent[elems[i]] || {};
        parent = parent[elems[i]];
    }
    // console.log(parent);
    return parent;
}

// MyApp.Recipe.Sample名前空間を登録
var ns = namespace('MyApp.Recipe.Samples');

// 名前空間配下にクラスを定義
ns.MyClass = function () {};
var c = new ns.MyClass();
console.log(c instanceof MyApp.Recipe.Samples.MyClass);
