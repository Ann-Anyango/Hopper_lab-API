const getUsers = () => {
  return fetch('https://dummyjson.com/users')
    .then(response => response.json())
    .catch(error => console.error(error));
};
const displayUsers = async () => {
  const users = await getUsers();
  let userContainer = document.getElementById('users');
  let userElements = users.users.map(item => {
    let div = document.createElement('div');
    div.className = 'person'
    let img = document.createElement('img');
    let name = document.createElement('h2');
    let userName = document.createElement('p');
    img.src = item.image;
    name.innerHTML = `${item.firstName} ${item.lastName}`;
    userName.innerHTML = item.username;
    div.appendChild(img);
    div.appendChild(name);
    div.appendChild(userName);
    return div;
  });
  userContainer.append(...userElements);
};
displayUsers();