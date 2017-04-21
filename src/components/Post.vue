<template>
    <div v-if="fetchedPost" class="container">
        <router-link :to="{ name: 'blog', params: { 'page': 1 } }">Back to blog</router-link>

        <h1>{{ fetchedPost.title.rendered }}</h1>
        <p>{{ this.fromNow(fetchedPost.date) }}</p>
        <div v-html="fetchedPost.content.rendered"></div>
    </div>
</template>

<script>

import api from '../api/posts.js'
import TimeHelper from '../mixins/TimeHelper'

export default {
    mixins: [TimeHelper],

    data () {
        return {
            api: api,
            post: false
        }
    },

    computed: {
        fetchedPost () {
            return this.post[0]
        }
    },

    mounted () {
        this.fetchPost()
    },

    methods: {
        /*
        Fetch a blog post based on it's slug.
        */
        fetchPost () {
            this.EventHolder.$emit('startLoading')
            
            return this.$http.get(api.POST_BY_SLUG + this.$route.params.slug).then(({ data: response }) => { 
                this.post = response
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
            this.fetchPost()
        }
    }
}

</script>

<style>

</style>