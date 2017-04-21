<template>
    <div>
        <h2>{{ post.title.rendered }}</h2>
		<p>{{ this.fromNow(post.date) }}</p>
		<div v-html="post.excerpt.rendered"></div>
        <router-link :to="{ name: 'post', params: { slug: post.slug } }">View Post</router-link>
    </div>
</template>

<script>

import TimeHelper from '../mixins/TimeHelper'

export default {
    props: ['post'],

    mixins: [TimeHelper]
}

</script>

<style>

</style>