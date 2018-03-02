var site = {
    projects : {
        'gifApp' : {
            name : "GifTastic",
            img : 'assets/images/gifapp.gif',
            discription : 'GifTastic is a JQuery based web application which utilizes the Giphy API. The user is able to enter a topic and the amount of gifs they want generated. A button is then dynamically created and once it is clicked...Presto! The gifs are displayed. ',
            url : 'https://stevenhorkey.github.io/GifTastic/',
        },
        'koanGame' : {
            name : "Zen Koan Game",
            img : 'assets/images/zengif.gif',
            discription : 'What is the sound of one hand clapping? Koans are esoteric riddles that defy logical thinking and that is certainly the case in this JQuery based game. There are 15 questions, each with four possible answers. Think you get get em\' all right?',
            url : 'https://stevenhorkey.github.io/TriviaGame/',
        },
        'lotrGame' : {
            name : "Lord of the Rings PRG",
            img : 'assets/images/test.png',
            discription : 'Gandalf\'s dilema is a JQuery based Lord of the Rings RPG game where you play as either Smeagol, the Balrog, Sauron, or Gandalf himself. Each time you attack, you also endure some damage, but your power grows evermore. You may win, you may loose, or you all may die in the process. Which will it be?',
            url : 'https://stevenhorkey.github.io/week-4-game/',
        },
        // 'mmSite' : {
        //     name : ,
        //     img : ,
        //     discription : ,
        //     url : ,
        // },
        // 'five' : {
        //     name : ,
        //     img : ,
        //     discription : ,
        //     url : ,
        // },
        // 'six' : {
        //     name : ,
        //     img : ,
        //     discription : ,
        //     url : ,
        // }
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
    site.functions.buildProject(site.projects.gifApp,'left','.proj-1')
    site.functions.buildProject(site.projects.koanGame,'right','.proj-2')
    site.functions.buildProject(site.projects.lotrGame,'left','.proj-3')
});