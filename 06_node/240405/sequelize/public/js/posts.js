const postForm = document.querySelector('#post-form')

postForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const userId = e.target.writerId.value;
    const content = e.target.content.value;
    const postData = {
        userId,
        content
    }
    const response = await axios.post('/posts', { postData })
    console.log(response);
})