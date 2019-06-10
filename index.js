// This function renders the Bio page
function handleBio() {
    $('ul').on('click','.bioLink', function(event) {
        $('.headline').css('display', 'block');
        $('.bio').css('display', 'block');
        $('.projects').css('display', 'none');
        $('.contact').css('display', 'none');
    });
}

// This function renders the Projects page
function handleProjects() {
    $('ul').on('click','.projectsLink', function(event) {
        $('.headline').css('display', 'none');
        $('.bio').css('display', 'none');
        $('.projects').css('display', 'block');
        $('.contact').css('display', 'none');
    });
}

// This function renders the Contact page
function handleContact() {
    $('ul').on('click','.contactLink', function(event) {
        $('.headline').css('display', 'none');
        $('.bio').css('display', 'none');
        $('.projects').css('display', 'none');
        $('.contact').css('display', 'block');
    });
}

function setupHandlers() {
    handleBio();
    handleProjects();
    handleContact();
}

$(setupHandlers);