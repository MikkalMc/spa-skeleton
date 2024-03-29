<html>
	<head>
		<title>Wordpress SPA by n9nome</title>
		<!-- @todo webpack -->
		<link href="https://fonts.googleapis.com/css?family=Roboto:400,500" rel="stylesheet">
		<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">

		<!-- @todo better way to handle this outside of PHP? -->
		<script src="<?php echo get_template_directory_uri(); ?>/config.js"></script>
	</head>

	<body>
		<script>
			window.config = {
				baseUrl: '<?php bloginfo("wpurl"); ?>',
				mainMenuId: userSuppliedConfig.mainMenuId
			}
		</script>

		<div id="app">
			<header>
				<div class="banner">
					<router-link :to="{ name: 'blog', params: { page: 1 } }"><?php bloginfo(); ?></router-link>
				</div>
				<navigation></navigation>
			</header>

			<loader></loader>

			<search></search>
			
			<router-view></router-view>

			<footer>
				<div class="container">
					Experimental Wordpress theme by n9nome
				</div>
			</footer>
		</div>

    	<script src="<?php echo get_template_directory_uri(); ?>/dist/build.js"></script>
	</body>
</html>