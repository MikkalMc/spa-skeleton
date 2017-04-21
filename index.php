<html>
	<head>
		<title>Wordpress SPA by n9nome</title>
	</head>

	<body>
		<div id="app">
			<header>
				<router-link :to="{ name: 'blog', params: { page: 1 } }"><?php bloginfo(); ?></router-link>
			</header>

			<loader></loader>

			<navigation></navigation>

			<search></search>
			
			<router-view></router-view>

			<footer>
				<div class="container">
					Experimental Wordpress theme by n9nome <i class="fa fa-times"></i>
				</div>
			</footer>
		</div>

    	<script src="<?php echo get_template_directory_uri(); ?>/dist/build.js"></script>
	</body>
</html>