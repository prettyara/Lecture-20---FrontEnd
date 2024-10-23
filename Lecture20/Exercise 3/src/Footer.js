function createFooter() {
    const footer = document.getElementById('footer');
    footer.innerHTML = `
        <p>&copy; 2023 ReqRes Users. All rights reserved.</p>
    `;
}

document.addEventListener('DOMContentLoaded', createFooter);