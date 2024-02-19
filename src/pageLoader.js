const contentDiv = document.getElementById('content');

export function clearContent() {
    if (contentDiv) {
        contentDiv.innerHTML = '';
    }
}

export function loadHomepage() {
    const homepageContent = `
    <h2>Welcome to Burger Queen's</h2>
    <p>Although our name may be similar to another chain's, we are a legally distinct entity. We also happen make the best burgers in the galaxy!</p>
    `
    contentDiv.innerHTML = homepageContent;
}

export function loadMenu() {
    const menuContent = ``

    contentDiv.innerHTML = menuContent;
}

export function loadContact() {
    const contactContent = ``

    contentDiv.innerHTML = contactContent;
}