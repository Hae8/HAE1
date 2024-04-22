import axios from "axios";

const useAxios = () => {
    const getAxios = async (cb, url) => {
        try {
            const res = await axios.get(url);
            cb(res.data);
        } catch (error) {
            console.error(error);
        }
    }

    return { getAxios };
}

export default useAxios;