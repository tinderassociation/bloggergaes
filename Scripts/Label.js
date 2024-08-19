document.addEventListener("DOMContentLoaded", () => {
    const labelPagePosts = document.querySelectorAll(".labelPagePost");
    
    let intersectionObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.intersectionRatio > 0) {
                let target = entry.target;
                target.classList.add('show');
                intersectionObserver.unobserve(target);
            }
        });
    });
    
    labelPagePosts.forEach(function(labelPagePost) {
        intersectionObserver.observe(labelPagePost);
    });
});
