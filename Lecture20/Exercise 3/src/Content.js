const API_URL = 'https://reqres.in/api/users?per_page=6';

async function fetchUsers() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        return [];
    }
}

function createUserCard(user) {
    const userCard = document.createElement('div');
    userCard.classList.add('user-card');

    userCard.innerHTML = `
        <img src="${user.avatar}" alt="${user.first_name} ${user.last_name}">
        <h2>${user.first_name} ${user.last_name}</h2>
        <p>${user.email}</p>
    `;

    return userCard;
}

async function displayUsers() {
    const content = document.getElementById('content');
    const users = await fetchUsers();

    const topRow = document.createElement('div');
    topRow.classList.add('users-grid', 'top-row');

    const bottomRow = document.createElement('div');
    bottomRow.classList.add('users-grid', 'bottom-row');

    users.forEach((user, index) => {
        const userCard = createUserCard(user);
        if (index < 4) {
            topRow.appendChild(userCard);
        } else {
            bottomRow.appendChild(userCard);
        }
    });

    content.appendChild(topRow);
    content.appendChild(bottomRow);
}

document.addEventListener('DOMContentLoaded', displayUsers);