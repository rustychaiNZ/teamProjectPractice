module.exports = function(grunt) {
	grunt.initConfig({
		// Watch
		watch: {
			all: {
				files: ['sass/stylesheet.scss', 'css/stylesheet.css', 'js/script.js'],
				tasks: ['sass', 'csslint', 'jshint']
			}
		},
		// Sass
		sass: {                              // Task
    		dist: {                            // Target
    			options: {                       // Target options
    				style: 'expanded'
    			},
    			files: {                         // Dictionary of files
    				'css/stylesheet.css': 'sass/stylesheet.scss'    // 'destination': 'source'
    			}
    		}
    	},
		// Controls css lint 
		csslint: {
			lax: {
			  	options: {
			  		import: false,
			  		'order-alphabetical' : false
			  	},
			  	src: ['css/*.css', '!*.min.css']
			},
		},
		// Js Hint
		jshint: {
			all: ['Gruntfile.js', 'js/*.js']
		}
	});

	// Loading grunt tasks
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	

	// Register grunt tasks
	grunt.registerTask('default', ['watch']);
};