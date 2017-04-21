<template>
    <ul class="pagination" v-if="requiresPagination">
        <li v-for="index in parseInt(this.pageCount)">
            <router-link :to="{ name: this.route, params: { page: index } }">{{ index }}</router-link>
        </li>
    </ul>
</template>

<script>

export default {
    props: ['pageCount', 'route'],

    computed: {
        /*
        Determine if the pagination is needed or not.
        If there is only one page, don't display the 
        pagination bar element.
        */
        requiresPagination () {
            return this.pageCount > 1
        }
    }
}

</script>

<style>
    .pagination .router-link-active {
        background: #d8d8d8;
    }
</style>