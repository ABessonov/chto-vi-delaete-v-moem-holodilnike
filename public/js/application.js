async function deleteProduct(element) {
  const response = await fetch('/', {
    method: 'delete',
    headers: {
      'Content-type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({ id: element.value }),
  });
  if (response.ok) {
    // const responseDelete = await response.json();
    // if (responseDelete) {
    document.querySelector(`#card${element.value}`).remove();
    if (window.location.href !== '/') {
      window.location.href = '/';
    }
    // }
  }
}

const searchNav = document.querySelector('#searchNav');
searchNav.addEventListener('submit', async (event) => {
  event.preventDefault();
  const formData = Object.fromEntries(new FormData(searchNav));
  const response = await fetch('/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });
  if (response.ok) {
    const result = await response.json();
    window.location.href = `/productName/${result.id}`;
  }
});
