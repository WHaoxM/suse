let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
//let hereButton = document.getElementById("here");
let questionText = document.getElementById("question");
let mainImage = document.getElementById("mainImage");

let clickCount = 0;  // 记录点击 No 的次数

// No 按钮的文字变化
const noTexts = [
    "？你认真的吗…",
    "答案不在这里哈",
    "你确定还要点？ ",
    "别点了哥们",
    "放弃吧！"
];

// No 按钮点击事件
noButton.addEventListener("click", function() {
    clickCount++;

    // 让 Yes 变大，每次放大 2 倍
    let yesSize = 1 + (clickCount * 1.2);
    yesButton.style.transform = `scale(${yesSize})`;

    // 挤压 No 按钮，每次右移 100px
    let noOffset = clickCount * 80;
    noButton.style.transform = `translateX(${noOffset}px)`;

    // **新增：让图片和文字往上移动**
    let moveUp = clickCount * 25; // 每次上移 20px
    mainImage.style.transform = `translateY(-${moveUp}px)`;
    questionText.style.transform = `translateY(-${moveUp}px)`;

    // No 文案变化（前 5 次变化）
    if (clickCount <= 5) {
        noButton.innerText = noTexts[clickCount - 1];
    }

    // 图片变化（前 3 次变化）
    if (clickCount === 1) mainImage.src = "images/weixiao.png"; // 平淡
    if (clickCount === 2) mainImage.src = "images/pindan.png";   // 微笑
    if (clickCount >= 3) mainImage.src = "images/XD.png";   // 哭笑不得


});

// Yes 按钮点击后，进入下一个页面
yesButton.addEventListener("click", function() {
    document.body.innerHTML = `
        <div class="yes-screen">
            <h1 class="yes-text">!!!没错!! 就是川轻化o( ~᎑~)/</h1>
            <img src="images/xiaohui2.jpg" alt="轻化工" class="yes-image">
        </div>
    `;

    document.body.style.overflow = "hidden";
});