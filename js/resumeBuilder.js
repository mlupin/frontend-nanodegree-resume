var bio = {
    "name": "Marina Lupin",
    "role": "Web Developer",
    "contacts": {
        "mobile": "(858) 334-5041",
        "email": "lupinmarina@gmail.com",
        "github": "mlupin",
        "location": "Los Angeles, CA"
    },
    "welcomeMsg": "Welcome! I'm currently studying and working " +
                  "towards Udacity's Full Stack Web Developer Nanodegree. " +
                  "Take a look around! I would love to connect!",
    "skills": ["Test Driven Development", "python", "JavaScript", "Rspec",
               "Ruby on Rails"],
    "bioPic": "images/marina.jpg"
};

var work = {
    "jobs": [
    {
        "employer": "ZestFinance",
        "title": "Operations Associate / Jr. Software Engineer",
        "dates": "August 2015 - October 2016",
        "location": "Los Angeles, CA",
        "description": "Full-time operations associate. Managed call "+
                       "centers, collections of delinquent accounts, and "+
                       "sale of charged-off accounts. In the process to "+
                       "transition into a Junior Software Engineer role "+
                       "after shadowing the engineering team and being "+
                       "mentored by a Software Engineer."
    },
    {
        "employer": "Cisco Systems, Inc.",
        "title": "Business Analyst, Intern",
        "dates": "July 2013 - September 2013",
        "location": "San Jose, CA",
        "description": "Assisted in writing technical support documentation for "+
                       "business intelligence software and created "+
                       "operational dashboards and business reports by "+
                       "writing SQL queries and analyzing data."
    }
    ]
};

var education = {
    "schools": [
    {
        "name": "University of California, Santa Cruz",
        "dates": "2010 - 2014",
        "location": "Santa Cruz, CA, US",
        "major": ["Technology Information Management", "Business Management Economics"],
        "degree": ["BS","BA"]
    }],
    "onlineCourses": [
    {
        "title": "Full Stack Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "February 2017-present",
        "url": "www.udacity.com"
    }]

};

var projects = {
    "projects": [
    {
        "title": "Movie Trailer Web Site",
        "dates": "February 2017",
        "description": "This was my first project in Udacity's Full Stack "+
                       "Wed Developer Nanodegree. The purpose of this "+
                       "project was to learn how to create a website using "+
                       "server-side Python code.",
        "images": ["images/movie-site-01.jpg", "images/movie-site-02.jpg"]
    },
    {
        "title": "Rails Sample App",
        "dates": "January 2017",
        "description": "This is the sample application for Ruby on Rails "+
                       "Tutorial: Learn Web Development with Rails by "+
                       "Michael Hartl. The purpose of building this "+
                       "application was to learn the essentials "+
                       "of the Rails framework, including MVC and REST.",
        "images": ["images/rails-app-01.jpg", "images/rails-app-02.jpg"]
    },
    {
        "title": "Rock Dodger",
        "dates": "February 2017",
        "description": "This was my first project as part of my Flatiron "+
                       "School's Bootcamp Prep. The purpose of this project "+
                       "was to use JavaScript to manipulate the DOM.",
        "images": ["images/rock-dodger-01.jpg", "images/rock-dodger-02.jpg"]
    }]
};

bio.display = function() {
    // Header
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formmatedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formmatedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);

    // Contact information
    var contactInfo = [];
    contactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
    contactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
    contactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
    contactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));

    $("#header").prepend(formmatedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedBioPic);
    $("#header").append(formmatedWelcomeMsg);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkills);
        }
    }

    for (i in contactInfo) {
        $("#topContacts").append(contactInfo[i]);
        $("#footerContacts").append(contactInfo[i]);
    }
};

workExperience.display = function() {
    
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);


        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDescription);
    }
};

projects.display = function() {
    $("#projects").append(HTMLprojectStart);
    for (project in projects.projects) {
        

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

       
    
        if(projects.projects[project].images.length>0){

            for (image in projects.projects[project].images) {
                var formattedProjectImage= HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedProjectImage);
            }
        }
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);
    }


};

education.display = function() {
    $("#education").append(HTMLschoolStart);
    for (school in education.schools) {
        

        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);

        $(".education-entry:last").append(formattedSchoolName);        
        $(".education-entry:last").append(formattedLocation);
        $(".education-entry:last").append(formattedDates);



        for (var i = 0; i < education.schools[school].degree.length; i++) {
            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree[i]);
            var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major[i]);

            var formattedDegreeMajor = formattedMajor + formattedDegree;
            $(".education-entry:last").append(formattedDegreeMajor);
        }
    }
    $(".education-entry:last").append(HTMLonlineClasses);

    for (course in education.onlineCourses) {
        var formattedOnlineTitle= HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
        var formattedOnlineSchool= HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
        var formattedOnlineDates= HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
        var formattedOnlineUrl= HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);

        $(".education-entry:last").append(formattedOnlineTitle+formattedOnlineSchool);
        $(".education-entry:last").append(formattedOnlineDates);

        $(".education-entry:last").append(formattedOnlineUrl);
    }

};


$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x,y);
});

function locationizer(work_obj) {
    workLocationArr.push()
};

function inName(name) {
    var name = name.parse(" ");
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    name[1] = name[1].toUpperCase();
    return name.join(" ");

}
$("#main").append(internationalizeButton);

bio.display();
workExperience.display();
education.display();
projects.display();


