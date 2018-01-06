// jquery是date-picker的依赖
import $ from 'jquery';
// webpack不会重复打包

import Factory from './Factory';
// jquery的事件冒泡
$('body')
    .on('click','.tqb-date-picker-input', event =>{
        console.log(123123);
    console.log(event);
    let target = $(event.currentTarget);
    // let time = event.currentTarget.dataset.start;
    // let format = event.currentTarget.dataset.format;
    // let scattered = event.currentTarget.dataset.scattered;
    let options = target.data();
    console.log(target);
    console.log(options);

    // Factory用的太大了吧？ 如果别的地方也要用Factory概念？打包时会命名空间
    let picker = Factory.createDatePicker(target, options);
    })
    // .on('click','');
    console.log(222);