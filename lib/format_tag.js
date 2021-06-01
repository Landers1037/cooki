// 定制化左侧标签
// chapter
let emoji = ["📕", "📦", "🔫", "🧲",
    "🍉", "🍊", "🍋", "🍑", "🍒", "🥕", "🍄", "🌰", "🍺"];
window.onload = function(){
    reformat();
}

function reformat(){

    let chapter = document.querySelectorAll("ul.summary li.chapter a");
    for (let i=0;i<chapter.length;i++) {
        let content = chapter[i].innerText;
        let c = emoji[i];
        if (content.indexOf(c) === -1){
            chapter[i].innerHTML = c + "&nbsp;" + content;
        }
    }
}

setInterval(()=> {
    reformat();
}, 100);