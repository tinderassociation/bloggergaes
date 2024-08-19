// 寬螢幕導覽列「開始搜尋」導覽列連結隱藏完
wideScreenNavLinks.addEventListener('hidden.bs.collapse', event => {
    // 暗掉背景
    wideScreenSearchDimBackground.style.display = "block";
    // 寬螢幕導覽列變深灰
    mainNav.style.backgroundColor = "#dbdbdb";
    // 寬螢幕導覽列中的搜尋表單出現
    wideScreenSearchForm.style.display = "flex";
    // 寬螢幕導覽列右邊的放大鏡變叉叉
    wideScreenSearchBtn.innerHTML = "<i class='bi bi-x-lg'/>";
    wideScreenSearchBtn.style.color = "#2b2b2b";
    // focus 寬螢幕導覽列的搜尋框
    wideScreenSearchBar.focus();
    // 固定網頁不可滑
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
    // 如果畫面高度過矮，讓快速連結區塊變可滑動
    if (wideScreenSearchForm.offsetHeight + wideScreenSearchQuickLinks.offsetHeight + 16 > window.innerHeight) {
      wideScreenSearchQuickLinks.style.height = window.innerHeight - wideScreenSearchForm.offsetHeight - 16 + "px";
    }
})
// 寬螢幕導覽列「結束搜尋」導覽列連結出現
wideScreenNavLinks.addEventListener('show.bs.collapse', event => {
    // 暗背景消失
    wideScreenSearchDimBackground.style.display = "none";
    // 寬螢幕導覽列恢復顏色
    mainNav.style.backgroundColor = "#f3f3f3";
    // 寬螢幕導覽列中的搜尋表單消失
    wideScreenSearchForm.style.display = "none";
    // 寬螢幕導覽列右邊的叉叉變回放大鏡
    wideScreenSearchBtn.innerHTML = "<i class='bi bi-search'/>";
    wideScreenSearchBtn.style.color = "#828282";
    // 網頁復原
    document.body.style.position = "";
    document.body.style.width = "auto";
    // 快速連結區塊高度復原
    wideScreenSearchQuickLinks.style.height = "";
})
// 「展開/收合」小螢幕的全螢幕導覽列
function toggleFullScreenNav() {
    if (hamburgerBtn.ariaExpanded === "false") { // 全螢幕導覽列「展開」中，收起來
        hamburgerBtn.innerHTML = "<i class='bi bi-list'/>";
        mainNav.style.backgroundColor = "#f3f3f3";
        document.body.style.overflow = "visible";
    } else { // 全螢幕導覽列「收合」中，展開來
        hamburgerBtn.innerHTML = "<i class='bi bi-x'/>";
        mainNav.style.backgroundColor = "white";
        document.body.style.overflow = "hidden";
    }
}
// 小螢幕展開全螢幕導覽列的搜尋框 focus
function smallScreenSearchBarOnfocus() {
    // 最上方導覽列收起來
    mainNav.style.height = "0";
    mainNav.style.visibility = "hidden";
    // 小螢幕展開全螢幕導覽列的搜尋表單
    smallScreenSearchForm.style.paddingTop = "16px";
    // 小螢幕展開全螢幕導覽列的搜尋放大鏡
    smallScreenSearchIcon.style.color = "#7d7d7d";
    // 小螢幕展開全螢幕導覽列搜尋中的取消按鈕
    smallScreenSearchCancelBtn.style.visibility = "visible";
    smallScreenSearchCancelBtn.style.width = "auto";
    smallScreenSearchCancelBtn.style.padding = "0px 8px";
    smallScreenSearchCancelBtn.style.marginLeft = "10px";
    // 小螢幕展開全螢幕導覽列搜尋中的「QUICK LINKS」標題 
    smallScreenSearchQuickLinksTitle.style.visibility = "visible";
    smallScreenSearchQuickLinksTitle.style.height = "auto";
    smallScreenSearchQuickLinksTitle.style.margin = "21px 0px 5px";
    // 小螢幕展開全螢幕導覽列下方的快速連結
    const smallScreenSearchQuickLinks = document.getElementsByClassName("smallScreenSearchQuickLink");
    for (let i=0; i<smallScreenSearchQuickLinks.length; i++) {
        smallScreenSearchQuickLinks[i].style.fontSize = "14px";
        smallScreenSearchQuickLinks[i].style.height = "43px";
        smallScreenSearchQuickLinks[i].style.lineHeight = "43px";
        smallScreenSearchQuickLinks[i].classList.replace("hoverBlack", "hoverBlue");
    }
    // 小螢幕展開全螢幕導覽列下方快速連結的分隔線
    const quickLinkHrs = document.getElementsByClassName("quickLinkHr");
    for (let i=0; i<quickLinkHrs.length; i++) {
        quickLinkHrs[i].style.color = "#424245";
    }
}
// 小螢幕展開全螢幕導覽列的搜尋框 unfocus
function smallScreenSearchBarOnBlur() {
    // 最上方導覽列展開
    mainNav.style.height = "48px";
    mainNav.style.visibility = "visible";
    // 小螢幕展開全螢幕導覽列的搜尋表單
    smallScreenSearchForm.style.paddingTop = "0";
    // 小螢幕展開全螢幕導覽列的搜尋放大鏡
    smallScreenSearchIcon.style.color = "#a5a5a5";
    // 小螢幕展開全螢幕導覽列搜尋中的取消按鈕
    smallScreenSearchCancelBtn.style.visibility = "hidden";
    smallScreenSearchCancelBtn.style.width = "0";
    smallScreenSearchCancelBtn.style.padding = "0";
    smallScreenSearchCancelBtn.style.marginLeft = "0";
    // 小螢幕展開全螢幕導覽列搜尋中的「QUICK LINKS」標題 
    smallScreenSearchQuickLinksTitle.style.visibility = "hidden";
    smallScreenSearchQuickLinksTitle.style.height = "0";
    smallScreenSearchQuickLinksTitle.style.margin = "0px";
    // 小螢幕展開全螢幕導覽列下方的快速連結
    const smallScreenSearchQuickLinks = document.getElementsByClassName("smallScreenSearchQuickLink");
    for (let i=0; i<smallScreenSearchQuickLinks.length; i++) {
        smallScreenSearchQuickLinks[i].style.fontSize = "17px";
        smallScreenSearchQuickLinks[i].style.height = "45px";
        smallScreenSearchQuickLinks[i].style.lineHeight = "45px";
        smallScreenSearchQuickLinks[i].classList.replace("hoverBlue", "hoverBlack");
    }
    // 小螢幕展開全螢幕導覽列下方快速連結的分隔線
    const quickLinkHrs = document.getElementsByClassName("quickLinkHr");
    for (let i=0; i<quickLinkHrs.length; i++) {
        quickLinkHrs[i].style.color = "#d7d7d7";
    }
}
