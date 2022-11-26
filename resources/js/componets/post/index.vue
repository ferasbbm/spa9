<template>
    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="py-3 px-6">
                    #
                </th>
                <th scope="col" class="py-3 px-6">
                    Title
                </th>
                <th scope="col" class="py-3 px-6">
                    Description
                </th>
                <th scope="col" class="py-3 px-6">
                    Created At
                </th>

                <th scope="col" class="py-3 px-6">
                    Action
                </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(post, index) in posts" class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{ post.id }}
                </th>
                <td class="py-4 px-6">
                    {{ post.title }}
                </td>
                <td class="py-4 px-6">
                    {{ post.description }}
                </td>
                <td class="py-4 px-6">
                    {{ post.created_at }}
                </td>
                <td class="py-4 px-6">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>

            </tbody>
        </table>
    </div>

</template>
<script>
import usePosts from "../../composable/posts";
import {onMounted} from "vue";

export default {

    /*API: Compositional*/
    setup() {
        const {posts, getPosts} = usePosts();
        onMounted(getPosts);
        return {posts};
    }


    /*API: Optional*/
    // data() {
    //     return {
    //         posts: []
    //     }
    // },
    // methods: {
    //     getPosts() {
    //         axios.get('/api/posts')
    //             .then(response => this.posts = response.data)
    //             .catch(errors => console.log(errors)
    //             );
    //     }
    // },
    // mounted() {
    //     this.getPosts();
    // },
}
</script>
