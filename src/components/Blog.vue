<template>
    <div class="container posts">
        <div v-if="fetchedPosts">
            <div v-for="post in fetchedPosts">
                <post-excerpt :post="post"></post-excerpt>
            </div>

            <pagination :pageCount="this.pagination.pageCount" :route="this.pagination.route"></pagination>
        </div>
    </div>
</template>

<script>

import api from '../api/posts.js'

export default {
    components: {
        'post-excerpt': require('./PostExcerpt.vue')
    },

    data () {
        return {
            api: api,
            posts: false,
            pagination: {
                pageCount: 0,
                route: 'blog'
            }
        }
    },

    computed: {
        fetchedPosts () {
            return this.posts
        }
    },

    mounted () {
        this.fetchPosts()
    },

    methods: {
        /*
        Fetch the current page of blog posts, based on the
        supplied pagination/ page parameter.
        */
        fetchPosts () {
            this.EventHolder.$emit('startLoading')

            return this.$http.get(api.POSTS + this.$route.params.page).then(response => { 
                this.posts = response.data
                this.pagination.pageCount = response.headers.get('X-WP-TotalPages')
                this.EventHolder.$emit('stopLoading')
            });
        }
    },

    /*
    Watch for changes on the current route, this is necessary
    in order to update the current page should the slug change.
    */
    watch: {
        '$route' () {
            this.fetchPosts()
        }
    }
}

</script>

<style>

</style>