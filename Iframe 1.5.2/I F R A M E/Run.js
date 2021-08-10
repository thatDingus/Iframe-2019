function LoadI() {
 document.getElementById("RunFrame").src = (document.getElementById("Input").value);
}

function LoadYippy() {
 document.getElementById("RunFrame").src = ("https://yippy.com/") 
}

function LoadVlare() {
 document.getElementById("RunFrame").src = ("https://vlare.tv")
}

function LoadDevVlare() {
 document.getElementById("RunFrame").src = ("https://vlare.tv/u/xSuq053R")
}

function ChangeSize() {
 document.getElementById("RunFrame").width = (document.getElementById("Width").value)
 document.getElementById("RunFrame").height = (document.getElementById("Height").value)
}

function LoadChat() {
 document.getElementById("RunFrame").src = ("https://deadsimplechat.com/TAdQNRrp_");
}

function LoadChat2() {
 document.getElementById("RunFrame").src = ("https://deadsimplechat.com/ZYvCbmjFYz");
}

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('Button');
    link.addEventListener('click', function() {
        LoadI();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('Width');
    link.addEventListener('input', function() {
        ChangeSize();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('Height');
    link.addEventListener('input', function() {
        ChangeSize();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('CleanButton');
    link.addEventListener('click', function() {
        LoadChat();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('CleanButton2');
    link.addEventListener('click', function() {
        LoadChat2();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('MainTitle');
    link.addEventListener('click', function() {
        LoadYippy();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('Vlare');
    link.addEventListener('click', function() {
        LoadVlare();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('VlareString');
    link.addEventListener('click', function() {
        LoadDevVlare();
    });
});