const linksTo = {
    'instagram': 'https://www.instagram.com/yuvraj_dagur/',
    'linkedin': 'https://www.linkedin.com/in/yuvraj-dagur/',
    'github': 'https://github.com/thatfreakcoder',
    'twitter': 'https://twitter.com/yuvrajdagur12',
    'whatsapp': 'https://wa.me/+918949090660?text=Hey%20Yuvraj,%20I%20got%20your%20number%20from%20your%20website.%20Let%27s%20talk%3F',
    'reddit': 'https://www.reddit.com/user/911OpenUp',
    'medium': 'https://yuvraj-dagur.medium.com/',
    'dev': 'https://dev.to/thatfreakcoder',
    'google': 'https://www.google.com/search?q=thatfreakcoder',
}

document.addEventListener("DOMContentLoaded", () => {
    // get query parameter "to" from URL
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
    to = params.to;
    // if query parameter "to" is not present, redirect to home page
    if (!to) {
        window.location.href = "/";
    }
    // if query parameter "to" is present, redirect to the link
    else {
        window.location.href = linksTo[to];
    }
})