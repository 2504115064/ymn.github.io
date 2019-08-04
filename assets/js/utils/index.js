let runPage,
    runPage2,
    interval,
    autoPlay;

runSection = new FullPage({
    id: 'article',                            // id of contain
    slideTime: 800,                               // time of slide
    effect: {                                     // slide effect
        transform: {
            translate: 'Y',					   // 'X'|'Y'|'XY'|'none'
            scale: [0, 1],					   // [scalefrom, scaleto]
            rotate: [0, 0]					   // [rotatefrom, rotateto]
        },
        opacity: [0, 1]                           // [opacityfrom, opacityto]
    },
    mode: 'touch,wheel',               // mode of fullpage
    easing: [0, .93, .39, .98],
    callback: function (index, thisPage) {     // callback when pageChange
        let tophtan = document.getElementById('tophtan');
        let bottomhtan = document.getElementById('bottomhtan');
        if (index == 0) {
            tophtan.style.display = 'none';
            bottomhtan.style.display = 'block';
            document.getElementById("body_left").innerHTML = `<img src="./assets/img/biubiubiu.gif" id="biubiubiu" alt="">`;
            clearInterval(timer);
            clearInterval(timer2);
            setTimeout(function () {
                document.getElementById("parent").innerHTML = '';
                document.getElementById("parent").style.top = '55%';
                document.getElementById("parent").style.display = 'block';
            }, 300)
            document.getElementById("biubiubiu").onload = function () {
                pageOneAnimated()
            }
            resetpageTwoAnimated()
        } else {
            clearInterval(timer);
            clearInterval(timer2);
            document.getElementById("parent").innerHTML = '';
            document.getElementById("parent").style.display = 'none';
            document.getElementById("body_left").innerHTML = '';
            document.getElementById("parent").innerHTML = `<div class="block"><div class="div1"></div><div class="div2"></div><div class="div3"></div><div class="div4"></div></div>`
        }
        if (index == 1) {
            tophtan.style.display = 'block';
            bottomhtan.style.display = 'block';
            clearInterval(timer);
            clearInterval(timer2);
            startOne();
        }
        if (index == 2) {
            tophtan.style.display = 'block';
            bottomhtan.style.display = 'none';
            resetpageTwoAnimated()
        }
    }
});
let YangMengni_msg = '致杨梦妮 :'
let One_s_innermost_thoughts_and_feelings_msg = '青梅竹马不是你，情窦初开不是你，只愿细水长流是你，柴米油盐是你，白首也是你。就让我笨拙的喜欢，从须臾到不朽，从一叶到知秋，然后骑一匹白马，到人海里安家。于千万人之中，遇见你所遇见的人；于千万年之中，时间的无涯荒野里，没有早一步，也没有晚一步，刚巧赶上了。我说不出来为什么喜欢你，但我知道，你就是我不爱别人的理由。';
let Wish_msg = '敬祝：'
let blessing_msg = '愿你的眼镜，只看到笑容。愿你往后每一个梦，不会一场空。愿你永驻青春，美丽依旧，快乐无忧。愿你一生永被善待，人见人爱花见花开。'
let LuXuan_msg = '卢旋'
let y = 0;
let i = 0;
let w = 0;
let b = 0;
let l = 0,
    startOneTimeout,
    startTwoTimeout,
    startThreeTimeout,
    startFourTimeout,
    startFiveTimeout;
function resetpageTwoAnimated() {
    y = 0;
    i = 0;
    w = 0;
    b = 0;
    l = 0;
    document.getElementById('YangMengni').innerHTML = " ";
    document.getElementById('divTyping').innerHTML = " ";
    document.getElementById('Wish').innerHTML = " ";
    document.getElementById('blessing').innerHTML = " ";
    document.getElementById('LuXuan').innerHTML = " ";
    clearTimeout(startOneTimeout);
    clearTimeout(startTwoTimeout);
    clearTimeout(startThreeTimeout);
    clearTimeout(startFourTimeout);
    clearTimeout(startFiveTimeout);
}
function startOne() {
    let YangMengni = document.getElementById('YangMengni');
    let divTyping = document.getElementById('divTyping');
    let Wish = document.getElementById('Wish');
    let blessing = document.getElementById('blessing');
    let LuXuan = document.getElementById('LuXuan');
    if (y <= YangMengni_msg.length) {
        YangMengni.innerHTML = YangMengni_msg.slice(0, y++) + '_';
        startOneTimeout = setTimeout('startOne()', 200);//递归调用
    }
    else {
        YangMengni.innerHTML = YangMengni_msg;//结束打字,移除 _ 光标
        startTwo()
    }

}
function startTwo() {
    if (i <= One_s_innermost_thoughts_and_feelings_msg.length) {
        divTyping.innerHTML = One_s_innermost_thoughts_and_feelings_msg.slice(0, i++) + '_';
        startTwoTimeout = setTimeout('startTwo()', 200);//递归调用
    }
    else {
        divTyping.innerHTML = One_s_innermost_thoughts_and_feelings_msg;//结束打字,移除 _ 光标
        startThree()
    }
}
function startThree() {
    if (w <= Wish_msg.length) {
        Wish.innerHTML = Wish_msg.slice(0, w++) + '_';
        startThreeTimeout = setTimeout('startThree()', 200);//递归调用
    }
    else {
        Wish.innerHTML = Wish_msg;//结束打字,移除 _ 光标
        startFour()
    }
}
function startFour() {
    if (b <= blessing_msg.length) {
        blessing.innerHTML = blessing_msg.slice(0, b++) + '_';
        startFourTimeout = setTimeout('startFour()', 200);//递归调用
    }
    else {
        blessing.innerHTML = blessing_msg;//结束打字,移除 _ 光标
        startFive()
    }
}
function startFive() {
    if (l <= LuXuan_msg.length) {
        LuXuan.innerHTML = LuXuan_msg.slice(0, l++) + '_';
        startFiveTimeout = setTimeout('startFive()', 200);//递归调用
    }
    else {
        LuXuan.innerHTML = LuXuan_msg;//结束打字,移除 _ 光标
    }
}