<template>
    <nav class="main-nav">
        <div class="container">
            <ul>
                <li>
                    <router-link :to="{ name: 'home' }" exact>Home</router-link>
                </li>
                <li v-bind:class="{ 'router-link-active': hasChildOfType('post') }">
                    <router-link :to="{ name: 'blog', params: { page: 1 } }">Blog</router-link>
                </li>
            	<li v-if="items" v-for="item in items">
            		<router-link :to="{ name: 'page', params: { slug: item.object_slug } }">{{ item.title }}</router-link>

                    <ul v-if="item.children">
                        <li v-for="child in item.children">
                        <router-link :to="{ name: 'page', params: { slug: child.object_slug } }">{{ child.title }}</router-link>
                        </li>
                    </ul>
            	</li>
            </ul>
        </div>
    </nav>
</template>

<script>

import api from '../api/menus.js'

export default {
    data () {
        return {
            api: api,
            items: null
        }
    },

    mounted () {
        this.fetchMenu()
    },

    methods: {
        /*
        Fetch the main menu for the website.
        @todo make this configurable.
        */
        fetchMenu () {
            this.EventHolder.$emit('startLoading')
            
            return this.$http.get(api.MAIN_MENU).then(({ data: response }) => { 
                this.items = response.items
                this.EventHolder.$emit('stopLoading')
            });
        },

        /*
        Activate page parent in the navigation menu
        if one of it's children is the current page.
        */
        hasChildOfType (type) {
            return type === this.$route.name
        }
    }
}

</script>

<style>
.main-nav ul ul {
    display: none;
    position: absolute;
}

.main-nav ul li:hover ul {
    display: block;
}

.main-nav {
    background: #d8d8d8;
}

.main-nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

.main-nav ul li {
    display: inline-block;
    position: relative;
    background: #d8d8d8;
}
 
.main-nav ul li a {
    display: block;
    padding: 20px;
    color: #444444;
}

.main-nav .router-link-active {
    background: #cacaca;
}
</style>