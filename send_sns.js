// シェア時に使用する値
var shareUrl = location.href; // 現在のページURLを使用する場合 location.href;
//var shareText = '○○さんの誕生日です'; // 現在のページタイトルを使用する場合 document.title;

function line_link()
{
    const textarea = document.form.comment;
    var shareText = textarea.value;
    var liHref = 'https://line.me/R/msg/text/?'+encodeURIComponent(shareText)+' '+encodeURIComponent(shareUrl);
    popupWindow(liHref);
}

function tw_link() {
    const textarea = document.form.comment;
    var shareText = textarea.value;
    // 各シェアボタンのリンク先
    var twHref = 'https://twitter.com/share?text='+encodeURIComponent(shareText)+'&url='+encodeURIComponent(shareUrl);
    popupWindow(twHref);
}

// クリック時にポップアップで表示させる関数
function popupWindow(url) {
    window.open(url, '', 'width=580,height=400,menubar=no,toolbar=no,scrollbars=yes');
}
