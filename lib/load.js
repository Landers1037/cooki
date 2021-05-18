// 动态加载动画
let minTime = 1500;
// 最少加载时长
let startLoad = new Date();
document.onreadystatechange = function(){
    if(document.readyState == 'complete'){
        // 页面加载完毕
        // let book_body = document.getElementsByClassName("book")[0];
        // book_body.style.display = "block";
        // main set to none
        let endLoad = new Date();
        let diff = endLoad.getTime() - startLoad.getTime();
        if (diff < 1500) {
            lastTime = minTime - diff;
            setTimeout(()=>{
                let screen = document.getElementsByClassName("load")[0];
                screen.style.display = "none";
            }, lastTime);
        }else {
            let screen = document.getElementsByClassName("load")[0];
            screen.style.display = "none";
        }
    }
}
