<template>
    <div class="excerpt">
        <h2>{{ post.title.rendered }} <span>Posted {{ this.fromNow(post.date) }}</span></h2>
		<div v-html="post.excerpt.rendered" class="content"></div>

		<router-link :to="{ name: 'post', params: { slug: post.slug } }" class="read-more">View Post</router-link>

		<!-- @todo -->
		<span class="tagged"><i class="fa fa-tags" aria-hidden="true"></i> Tagged: <a href="">JavaScript</a>, <a href="">React</a></span>
		<span class="author"><i class="fa fa-user-circle-o" aria-hidden="true"></i> Autor: Scott Wood</span>
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
	.read-more {
    	background: #c71a1a;
	    padding: 10px 18px;
	    display: inline-block;
	    color: white;
	    font-size: 16px;
	}

	.read-more:hover {
		color: white;
		background: #d82626;
		text-decoration: none;
	}

	.tagged, .author {
		margin-left: 28px;
	}

	.tagged .fa, .author .fa {
		margin-right: 8px;
    	color: #c71a1a;
	}

	.excerpt h2 {
		font-weight: 500;
		font-size: 34px;
		margin-top: 0;
	}

	.excerpt h2 span {
		float: right;
		color: grey;
		font-size: 14px;
		font-weight: normal;
	}

	.excerpt .content {
		font-size: 18px;
		line-height: 30px;
		margin: 14px 0 30px 0;
	}
</style>