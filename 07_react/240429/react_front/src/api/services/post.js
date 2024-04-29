import api from "../api"

const option = [
    {
        headers: {
            "Authorization": localStorage.getItem("token"),
        }
    },
    {
        headers: {
            "Content-Type": "multipart/form-data",
            "Authorization": localStorage.getItem("token"),
        }
    }
]

export const postApi = {
    getPosts : () => api.get('posts'),
    addPost: (data) => api.post('posts', data, option[0]),
    addPostImg: (data) => api.post('posts/image', data, option[1]),
    modifyPost: (id, data) => api.put(`posts/${id}`, data, option[0]),
    deletePost: (id) => api.delete(`posts/${id}`, option[0]),
}
