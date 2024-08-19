document.getElementById("SecondNav").classList.toggle("sticky-top");
$(document).click(function() {
    hideArchiveFilterYear();
    hideArchiveFilterMonth();
});
$('#archiveFilterYearBtn').click(function(event){
    event.stopPropagation();
});
$('#archiveFilterMonthBtn').click(function(event){
    event.stopPropagation();
});
function toggleArchiveFilterYear() {
    hideArchiveFilterMonth();
    if (archiveFilterYearList.style.display === "none") {
        archiveFilterYearList.style.display = "block";
        archiveFilterYearBtn.style.borderBottomLeftRadius = "0";
        archiveFilterYearBtn.style.borderBottomRightRadius = "0";
        archiveFilterYearBtn.style.boxShadow = "0 0 10px rgba(0,0,0,0.2)";
        archiveFilterYearBtnIcon.classList.remove("bi-chevron-down");
        archiveFilterYearBtnIcon.classList.add("bi-chevron-up");
    } else {
        hideArchiveFilterYear();
    }
}
function toggleArchiveFilterMonth() {
    hideArchiveFilterYear();
    if (archiveFilterMonthList.style.display === "none") {
        archiveFilterMonthList.style.display = "block";
        archiveFilterMonthBtn.style.borderBottomLeftRadius = "0";
        archiveFilterMonthBtn.style.borderBottomRightRadius = "0";
        archiveFilterMonthBtn.style.boxShadow = "0 0 10px rgba(0,0,0,0.2)";
        archiveFilterMonthBtnIcon.classList.remove("bi-chevron-down");
        archiveFilterMonthBtnIcon.classList.add("bi-chevron-up");
    } else {
        hideArchiveFilterMonth();
    }
}
function hideArchiveFilterYear() {
    archiveFilterYearList.style.display = "none";
    archiveFilterYearBtn.style.borderBottomLeftRadius = "7px";
    archiveFilterYearBtn.style.borderBottomRightRadius = "7px";
    archiveFilterYearBtn.style.boxShadow = "0 0 0 rgba(0,0,0,0.2)";
    archiveFilterYearBtnIcon.classList.remove("bi-chevron-up");
    archiveFilterYearBtnIcon.classList.add("bi-chevron-down");
}
function hideArchiveFilterMonth() {
    archiveFilterMonthList.style.display = "none";
    archiveFilterMonthBtn.style.borderBottomLeftRadius = "7px";
    archiveFilterMonthBtn.style.borderBottomRightRadius = "7px";
    archiveFilterMonthBtn.style.boxShadow = "0 0 0 rgba(0,0,0,0.2)";
    archiveFilterMonthBtnIcon.classList.remove("bi-chevron-up");
    archiveFilterMonthBtnIcon.classList.add("bi-chevron-down");
}
function showArchiveProgressView() {
    archivePageProgressView.style.display = "block";
    hideArchiveFilterYear();
    hideArchiveFilterMonth();
}
