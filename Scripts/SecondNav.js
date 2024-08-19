// 熱門話題「開始出現」
hotTopics.addEventListener('show.bs.collapse', event => {
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
    mainNav.style.display = "none";
    secondNav.style.backgroundColor = "#ffffffe6";
    hotTopicsDimBackground.style.display = "block";
    secondNavSearchBtn.innerHTML = "<i class='bi bi-x-lg' style='font-size: 10px; margin-right: 3.6px; -webkit-text-stroke: 0.5px;'></i>Close";
    hotTopicsSearchForm.style.opacity = "1";
    hotTopics.style.top = "";
    hotTopics.style.bottom = "";
})
// 熱門話題「出現完」
hotTopics.addEventListener('shown.bs.collapse', event => {
    if (secondNav.offsetHeight + hotTopics.offsetHeight > window.innerHeight) {
        hotTopics.style.top = secondNav.offsetHeight + "px";
        hotTopics.style.bottom = "0";
    }
    hotTopicsSearchBar.focus();
})
// 熱門話題「開始隱藏」
hotTopics.addEventListener('hide.bs.collapse', event => {
    hotTopicsSearchForm.style.opacity = "0";
    secondNav.style.backgroundColor = "#ffffffb3";
    document.body.style.position = "";
    document.body.style.width = "auto";
    mainNav.style.display = "";
    hotTopicsDimBackground.style.display = "none";
    secondNavSearchBtn.innerHTML = "<i class='bi bi-search' style='font-size: 10px; margin-right: 3.6px;'></i>搜尋<span class='d-none d-md-inline'> XcodeProject</span>";
})
