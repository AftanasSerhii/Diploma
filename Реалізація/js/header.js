(function() {
    let headerPage = document.querySelector(".header-page");
    
    window.addEventListener('scroll',function() {
        if(this.scrollY > 0) {
            headerPage.classList.add('is-active');
        }
        else {
            headerPage.classList.remove('is-active');
        }
    });
})();