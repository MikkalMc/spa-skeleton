/*
All post-related endpoints.
*/
export default {
	POSTS: window.config.baseUrl + '/wp-json/wp/v2/posts?page=',
	POST_BY_ID: window.config.baseUrl + '/wp-json/wp/v2/posts/',
	POST_BY_SLUG: window.config.baseUrl + '/wp-json/wp/v2/posts?slug='
}