document.addEventListener("DOMContentLoaded", () => {
    blogPostTopFollowAlert.style.display = sessionStorage.getItem("isCloseFollowAlert") ? "none" : "";
    var lazyImages = document.querySelectorAll(".blogPostImg");
    let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.intersectionRatio > 0) {
                let lazyImage = entry.target;
                if (lazyImage.parentElement.classList.contains("blogPostLaodingImgContainer") && lazyImage.dataset.src != "") {
                    lazyImage.onload = function () {
                        lazyImage.dataset.src = "";
                        lazyImage.parentElement.classList.remove("blogPostLaodingImgContainer");
                    }
                    lazyImage.src = lazyImage.dataset.src;
                }
                lazyImageObserver.unobserve(lazyImage);
            }
        });
    });
    
    lazyImages.forEach(function(lazyImage) {
        lazyImageObserver.observe(lazyImage);
    });
});
function reloadImage(reloadButton) {
    reloadButton.disabled = true;
    const targetImage = reloadButton.parentElement.previousElementSibling.firstElementChild;
    var imageSrc = "";
    if (targetImage.src.length !== 0) {
      	imageSrc = targetImage.src;
    } else if (targetImage.dataset.src.length !== 0) {
      	imageSrc = targetImage.dataset.src;
    }
    targetImage.removeAttribute('src');
    targetImage.classList.add('blogPostLaodingImgContainer');
    targetImage.onload = () => {
        targetImage.dataset.src = "";
        targetImage.classList.remove('blogPostLaodingImgContainer');
    }
    setTimeout(() => {
  		targetImage.src = imageSrc;
        reloadButton.disabled = false;
	}, 800);
}
function copyPostUrl(id) {
    navigator.clipboard.writeText(location.protocol + '//' + location.host + location.pathname);
    const obj = document.getElementById(String(id));
    obj.style.opacity = "1";
    setTimeout( () => {
        obj.style.opacity = "0";
    }, 1000);
}
