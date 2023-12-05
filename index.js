window.onload = function(){
// below is code for changing pages
home = document.getElementById("HOME");
publications = document.getElementById("PUBLICATIONS");
research = document.getElementById("RESEARCH");
media = document.getElementById("MEDIA");
resources = document.getElementById("RESOURCES");
teaching = document.getElementById("TEACHING");
contacts = document.getElementById("CONTACTS");
experience = document.getElementById("EXPERIENCE");
others = document.getElementById("OTHERS");

homeButton = document.getElementById("homeButton");
publicationsButton = document.getElementById("publicationsButton");
researchButton = document.getElementById("researchButton");
teachingButton = document.getElementById("teachingButton");
experienceButton = document.getElementById("experienceButton");
othersButton = document.getElementById("othersButton");
mediaButton = document.getElementById("mediaButton");
resourcesButton = document.getElementById("resourcesButton");
contactsButton = document.getElementById("contactsButton");

function HideAll(){
    home!=null ? home.style.display = "none": null;
    research!=null ? research.style.display = "none": null;
    publications!=null ? publications.style.display = "none": null;
    resources!=null ? resources.style.display = "none": null;
    teaching!=null ? teaching.style.display = "none": null;
    contacts!=null ? contacts.style.display = "none": null;
    experience!=null ? experience.style.display = "none": null;
    others!=null ? others.style.display = "none": null;
    document.getElementById("root").scrollTop = 0;
};
// HideAll();

if(homeButton!=null){
    homeButton.addEventListener("click",showHome);
    function showHome(){
        HideAll();
        home.style.display = "block";
    }
}

if(publicationsButton!=null){
    publicationsButton.addEventListener("click",showPublications);
    function showPublications(){
        HideAll();
        publications.style.display = "block";
    }
}

if(researchButton!=null){
    researchButton.addEventListener("click",showResearch);
    function showResearch(){
        HideAll();
        research.style.display = "block";
    }
}

if(teachingButton!=null){
    teachingButton.addEventListener("click",showTeaching);
    function showTeaching(){
        HideAll();
        teaching.style.display = "block";
    }
}

if(experienceButton!=null){
    experienceButton.addEventListener("click",showExperience);
    function showExperience(){
        HideAll();
        experience.style.display = "block";
    }
}

if(othersButton!=null){
    othersButton.addEventListener("click",showOthers);
    function showOthers(){
        HideAll();
        others.style.display = "block";
    }
}

if(contactsButton!=null){
    contactsButton.addEventListener("click",showContacts);
    function showContacts(){
        HideAll();
        contacts.style.display = "block";
    }
}
}