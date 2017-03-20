(function() {
    var trigerLink = document.querySelector('a[href="#profile"]');
    var body = document.body;
    var headerGlobal = document.querySelector("header.global");
    var mainBlog = document.querySelector("main.blog");
    var mainProfile = document.querySelector("main.profile");
    trigerLink.addEventListener("click", function() {
        body.classList.add("is-profile");
        headerGlobal.classList.add("is-profile");
        mainBlog.classList.add("is-profile");

        body.addEventListener("transitionend", function() {
            headerGlobal.style.display = "none";
            mainBlog.style.display = "none";
            mainProfile.classList.add("is-profile");
        });
    })
})();