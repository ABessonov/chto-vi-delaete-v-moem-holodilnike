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
    // }
  }
}
