var site = {
    projects : {
        'gifApp' : {
            name : "GifTastic",
            img : 'https://www.gettyimages.ca/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg',
            discription : 'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishin',
            url : 'https://www.w3schools.com/jsref/jsref_tostring_number.asp',
        },
        'koanGame' : {
            name : "Zen Koan Game",
            img : 'https://www.gettyimages.ca/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg',
            discription : 'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishin',
            url : 'https://www.w3schools.com/jsref/jsref_tostring_number.asp',
        },
        'lotrGame' : {
            name : "Lord of the Rings PRG",
            img : 'https://www.gettyimages.ca/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg',
            discription : 'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishin',
            url : 'https://www.w3schools.com/jsref/jsref_tostring_number.asp',
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
            image.addClass('col-md-6');
            var text = $('<div>').addClass('project-text col-md-6');
            var title = $('<h2>').addClass('project-title');
            title.text(pLabel.name);
            var description = $('<p>').addClass('project-description');
            description.text(pLabel.description);
            var checkUrl = $('<a>').attr('href',pLabel.url).attr('target','_blank');
            checkUrl.addClass('project-url').text("Check it out here")
            text.append(title).append(description).append(checkUrl);
            if (imgLayout === 'right'){
                project.append(text).append(image); 
                text.css('float','left') ;
            } else if (imgLayout === 'left') {
                project.append(image).append(text);
                text.css('float','right') ;                
            } else {
                alert('error with project build')
            }
            $(projClass).append(project)
        }
    }
}


$(document).ready(function(){
    site.functions.buildProject(site.projects.gifApp,'left','.proj-1')
});