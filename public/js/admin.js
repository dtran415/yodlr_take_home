document.addEventListener("DOMContentLoaded", () => {
    const userList = document.getElementById('user-list');
    userList.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
            onClickDeleteBtn(e);
        } else if (e.target.classList.contains('activate-btn')) {
            onClickActivate(e);
        }
    });
});

function onClickDeleteBtn(e) {
    e.preventDefault();
    const card = e.target.closest('.user-card')
    const id = card.id;
    axios.delete(`/users/${id}`).then((response) => {
        if (response.status === 204) {
            card.remove();
        } else {
            alert("Error deleting user");
        }
    }).catch((error) => {
        alert(error);
    })
}

function onClickActivate(e) {
    e.preventDefault();
    const card = e.target.closest('.user-card')
    const id = card.id;
    axios.put(`/users/${id}`, {id, state: 'active'}).then((response) => {
        if (response.status === 200) {
            const stateDiv = card.querySelector(".state");
            stateDiv.innerHTML = "State: active";
            e.target.remove();
        } else {
            alert("Error updating user");
        }
    }).catch((error) => {
        alert(error);
    })
}