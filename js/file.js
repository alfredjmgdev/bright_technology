document.addEventListener('scroll', function (e) {
    var top  = window.pageYOffset + window.innerHeight;
    var sections_height = document.getElementsByClassName('sections-container')[0].offsetHeight;
    var sections = document.getElementsByClassName('section');
    var sections_below = window.innerHeight + sections_height;
    if(window.innerWidth <= 425){
        sections_below = sections_below - (sections_height/2);
    }
    if(top >= sections_below){
        Object.keys(sections).forEach(function (key) {
            sections[key].classList.add('active');
            sections[key].classList.add('fadeIn');
            sections[key].classList.add('duration1Segs');
            if(key == 1){
                sections[key].classList.add('delay1Segs');
            }else if(key == 2){
                sections[key].classList.add('delay2Segs');
            }
        });
    }
});