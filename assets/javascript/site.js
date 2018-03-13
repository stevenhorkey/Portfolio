var site = {
    projects : {
        'gifApp' : {
            name : "GifTastic",
            img : 'assets/images/gifapp.jpg',
            discription : 'GifTastic is a JQuery based web application which utilizes the Giphy API. The user is able to enter a topic and the amount of gifs they want generated. A button is then dynamically created and once it is clicked...Presto! The gifs are displayed. ',
            url : 'https://stevenhorkey.github.io/GifTastic/',
        },
        'koanGame' : {
            name : "Zen Koan Game",
            img : 'assets/images/zen.jpg',
            discription : 'What is the sound of one hand clapping? Koans are esoteric riddles that defy logical thinking and that is certainly the case in this JQuery based game. There are 15 questions, each with four possible answers. Think you get get em\' all right?',
            url : 'https://stevenhorkey.github.io/TriviaGame/',
        },
        'lotrGame' : {
            name : "Lord of the Rings PRG",
            img : 'assets/images/lotr.jpg',
            discription : 'Gandalf\'s dilema is a JQuery based Lord of the Rings RPG game where you play as either Smeagol, the Balrog, Sauron, or Gandalf himself. Each time you attack, you also endure some damage, but your power grows evermore. You may win, you may loose, or you all may die in the process. Which will it be?',
            url : 'https://stevenhorkey.github.io/week-4-game/',
        },
        'hangmanGame' : {
            name : "60's Hangin' Man",
            img : "assets/images/hangman.jpg",
            discription : "Play a sixties themed hangman game and guess some of the best bands of the era. Pink Floyd, Jimi Hendrix, and The Beatles are included among many others. The song played during the game is a cover by non other than your's truly.",
            url : 'https://stevenhorkey.github.io/Hangman-Game/',
        },
        'rps': {
            name : "Rock Paper Scissors Multiplayer",
            img : "assets/images/rps.jpg",
            discription : "A multiplayer rock paper scissors game that uses firebase to store and update data across machines. Showcases an initial step toward developing appliactions on both the front and back end.",
            url : 'https://stevenhorkey.github.io/RPS-Multiplayer/'
        }
    },
    functions : {
        buildProject : function(pLabel, imgLayout, projClass){
            var project = $('<div>');
            project.addClass(pLabel.name.replace(/\s+/g, '-').toLowerCase());
            var image = $('<img>').attr("src", pLabel.img);
            image.addClass('col-md-6 project-image');
            var text = $('<div>').addClass('project-text col-md-6');
            var title = $('<h2>').addClass('project-title');
            title.text(pLabel.name);
            var description = $('<p>').addClass('project-description');
            description.text(pLabel.discription);
            var checkUrl = $('<a>').attr('href',pLabel.url).attr('target','_blank');
            checkUrl.addClass('project-url').text("Check it out here")
            text.append(title).append(description).append(checkUrl);
            if (imgLayout === 'right'){
                project.append(text).append(image); 
                text.css('float','left');
            } else if (imgLayout === 'left') {
                project.append(image).append(text);
                text.css('float','right');                
            } else {
                alert('error with project build')
            }
            $(projClass).append(project)
        }
    }
}


$(document).ready(function(){
    $('.head-content').hide();
    $('.head-content').fadeIn(1200);
    site.functions.buildProject(site.projects.rps,'left','.proj-1');
    site.functions.buildProject(site.projects.gifApp,'right','.proj-2');
    site.functions.buildProject(site.projects.koanGame,'left','.proj-3');
    site.functions.buildProject(site.projects.lotrGame,'right','.proj-4');
    site.functions.buildProject(site.projects.hangmanGame,'left','.proj-5');
    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
    // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
            && 
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000, function() {
                // Callback after animation
                // Must change focus!
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) { // Checking if the target was focused
                return false;
                } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
                };
            });
            }
        }
    });

    AOS.init();


});

/*
Much thanks to AOS library for the scroll animations!
*/