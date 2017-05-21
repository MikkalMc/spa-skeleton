<template>
    <div v-if="fetchedPost" class="container single-post">
        <router-link :to="{ name: 'blog', params: { 'page': 1 } }" class="back-to-blog"><i class="fa fa-caret-left"></i> Back to blog</router-link>

        <h1>{{ fetchedPost.title.rendered }}</h1>
        <p class="post-meta">Posted {{ this.fromNow(fetchedPost.date) }} by <a href="">Scott Wood</a></p>
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
    .single-post p {
        font-size: 18px;
        line-height: 28px;
    }

    .back-to-blog {
        text-transform: uppercase;
        font-size: 10px;
        color: #c71a1a;
    }

    .back-to-blog:hover {
        text-decoration: none;
        color: black;
    }

    .post-meta {
        color: grey;
    }
</style>