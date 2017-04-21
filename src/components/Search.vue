<template>
    <div class="container">
        <div @click="toggleSearch">Show search</div>

        <div v-if="searchIsVisible">
            <input type="text" v-model="inputs.term" @keyup.enter="performSearch" placeholder="Enter search term">
            <select v-model="inputs.type">
                <option>Posts</option>
                <option>Pages</option>
            </select>

            <div v-if="returnedSearchResults">
                <div v-if="returnedSearchResults.length === 0">
                    No results found
                </div>

                <div v-else>
                    <ul>
                        <li v-for="result in returnedSearchResults">
                            <search-result :result="result" :type="inputs.type"></search-result>
                        </li>
                    </ul>

                    <p v-if="returnedSearchResults.length > 10">See all results</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import search from '../api/search.js'

export default {
    components: {
        'search-result': require('./SearchResult.vue')
    },

    data () {
        return {
            search: search,
            inputs: {
            term: '',
            type: 'Posts',
            },
            searchIsVisible: false,
            results: false,
            isMakingRequest: false,
        }
    },

    computed: {
        returnedSearchResults () {
            return this.results
        }
    },

    methods: {
        /*
        Toggle the visibility of the search input field
        and search result listings.
        */
        toggleSearch () {
            this.searchIsVisible = this.searchIsVisible ? false : true
        },

        /*
        Perform a search based on the input query as well 
        as the type of search indicated ie. page or post.
        */
        performSearch () {
            if (this.isMakingRequest || this.inputs.term.length === 0 || this.inputs.type.length === 0)
                return false

            this.EventHolder.$emit('startLoading')
            this.isMakingRequest = true

            const endpoint = this.inputs.type == 'Posts' ? search.POSTS : search.PAGES

            return this.$http.get(endpoint + this.inputs.term).then(response => { 
                this.results = response.data
                this.EventHolder.$emit('stopLoading')
                this.isMakingRequest = false
            });
        }
    }
}

</script>

<style>
</style>