'use strict';

{
    import { Person } from './class_private_lib.js';

    let p = new Person('Taro Yamada', '2000/10/12');

    console.log(p.getName());
    console.log(p.getBirth());
}
