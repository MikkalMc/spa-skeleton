<template>
    <div v-if="fetchedPage" class="container">
        <h1>{{ fetchedPage.title.rendered }}</h1>
        <div v-html="fetchedPage.content.rendered"></div>
    </div>
</template>

<script>

import api from '../api/pages.js'

export default {
    data () {
        return {
            api: api,
            page: false
        }
    },

    computed: {
        fetchedPage () {
            return this.page[0]
        }
    },

    mounted () {
        this.fetchPage()
    },

    methods: {
        /*
        Fetch a page based on it's slug.
        */
        fetchPage () {
            this.EventHolder.$emit('startLoading')
            
            return this.$http.get(api.PAGE_BY_SLUG + this.$route.params.slug).then(({ data: response }) => { 
                this.page = response
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
            this.fetchPage()
        }
    }
}

</script>

<style>

</style>