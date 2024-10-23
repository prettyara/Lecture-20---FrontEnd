function createHeader() {
    const header = document.getElementById('header');
    header.innerHTML = `
        <h1>Hello ReqRes users!</h1>
    `;
}

document.addEventListener('DOMContentLoaded', createHeader);