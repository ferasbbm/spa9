import {ref} from "vue";

export default function usePosts() {
    const posts = ref({});
    const getPosts = async (page = 1) => {
        await axios.get(`/api/posts?page=${page}`)
            .then(response => posts.value = response.data)
            .catch(errors => console.log(errors));
    };
    return {posts, getPosts};
};
