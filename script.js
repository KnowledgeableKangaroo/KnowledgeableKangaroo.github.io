console.log("The style was linked and the favicon was added.");

function goToHomePage() {
	window.location = "https://borumer.github.io";
}

function goBack() {
	window.history.back();
}

function createLinkElement(type, rel, href) {
    const linkEl = document.createElement("link");
    linkEl.type = type;
    linkEl.rel = rel;
    linkEl.href = href;
    document.head.appendChild(linkEl);
}