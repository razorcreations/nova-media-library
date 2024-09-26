let mix = require("laravel-mix");
let tailwindcss = require("tailwindcss")
let path = require('path');
require("./nova.mix");

mix
	.setPublicPath("dist")
	.js("resources/js/tool.js", "js")
	.vue({ version: 3 })
	.nova("classic-o/nova-media-library")
	.postCss("resources/sass/nmlapp.css", "css", [tailwindcss("tailwind.config.js")])

mix.alias({
	'nova-mixins': path.join(__dirname,'./vendor/laravel/nova/resources/js/mixins'),
	'laravel-nova': path.join(__dirname, 'vendor/laravel/nova/resources/js/mixins/packages.js'),
})
	.webpackConfig({
		externals: {
			vue: 'Vue',
			'laravel-nova': 'LaravelNova',
		},
		output: {
			uniqueName: 'classic-o/nova-media-library',
		},
	});

