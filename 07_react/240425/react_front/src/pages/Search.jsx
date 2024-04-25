import { OutlinedInput } from "@mui/material";
import axios from "axios";
import { useForm } from "react-hook-form";

const Search = () => {

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm()


    const onSearch = (data) => {
        try{
            const res = axios.get(`${process.env.REACT_APP_API_URL}/posts`, {
                params : data
            })
        }catch(err){
            console.error(err)
        }
        
    }

    return (
        <>
            <h1>검색</h1>
            <form onSubmit={handleSubmit(onSearch)}>
                <OutlinedInput type="text" variant="outlined" {...register("hashtag")} />
                <button type="submit">검색</button>
            </form>
        </>
    );
}

export default Search;