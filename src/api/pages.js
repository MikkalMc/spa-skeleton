/*
All page-related endpoints.
*/
export default {
	ALL_PAGES: window.config.baseUrl +  '/wp-json/wp/v2/pages',
	PAGE_BY_ID: window.config.baseUrl + '/wp-json/wp/v2/pages/',
	PAGE_BY_SLUG: window.config.baseUrl + '/wp-json/wp/v2/pages?slug=',
}