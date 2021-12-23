particlesJS("particles-js",
    {
        "particles":
        {
            "number": { "value": 400, "density": { "enable": true, "value_area": 800 } }, "color": { "value": "#fff" }, "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": 0.5, "random": true, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } }, "size": { "value": 10, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } },
            "line_linked": { "enable": false, "distance": 500, "color": "#ffffff", "opacity": 0.4, "width": 2 }, "move": { "enable": true, "speed": 6, "direction": "bottom", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } }
        }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "bubble" }, "onclick": { "enable": true, "mode": "repulse" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 0.5 } }, "bubble": { "distance": 400, "size": 4, "duration": 0.3, "opacity": 1, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true
    }); var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function () { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;


    (function($){
        play 	= $('#play');
        pause 	= $('#pause');
        stop 	= $('#stop');
        volup 	= $('#volup');
        voldown = $('#voldown');
    
        //Song
        song 	= new Audio();
        song.type= 'audio/mpeg';
        song.src='https://archive.org/download/AlizeeLaIslaBonita/Alizee - La isla bonita.mp3';
        song.volume = 0.5;
    
        //Control
        play.click(function (e) {
            e.preventDefault();
            song.play();
        });
    
        pause.click(function (e) {
            e.preventDefault();
            song.pause();
        });
    
        stop.click(function (e) {
            e.preventDefault();
            song.pause();
            song.currentTime = 0;
        });
    
        //Volume
        volup.click(function (e) {
            e.preventDefault();
            if(song.volume < 1){
                song.volume += 0.05;
                console.log(song.volume);
            }else{
                song.volume = 1;
            }
        });
    
        voldown.click(function (e) {
            e.preventDefault();
            if(song.volume > 0){
                song.volume -= 0.05;
                console.log(song.volume);
            }else{
                song.volume = 0;
            }
        });
    })(jQuery);