const getData = (str) => {
    return fetch(`https://test-72b38-default-rtdb.firebaseio.com/goods.json`)
    .then((response) => {
        return response.json()
    })

    
}
export default getData;