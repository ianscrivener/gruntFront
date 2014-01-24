module.exports = function (grunt) {
	
	grunt.initConfig({
		
		// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
		// compile Jade >> HTML
		jade: {
			development: {
				options: {
					pretty: true,
					data: {
						debug: true
					}
				},
				files: {
					"wwwroot/index.html": "source/jade/index.jade"
				}
			},
			production: {
				options: {
					data: {
						debug: false
					}
				},
				files: {
					"wwwroot/index.html": "source/jade/index.jade"
				}
			}
		}
		,		
		
		// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&		
		// process LESS tempaltes >> CSS
		less: {
			development: {
				options: {
					paths: ["source/less"]
				},
				files: {
					"wwwroot/css/less.css": "source/less/less.less"
				}
			}
			,
			
			production: {
				options: {
					paths: ["/source/less"],
					compress: true,
					yuicompress: true,
					optimization: 1,
					cleancss: true
				},
				files: {
					"wwwroot/css/less.css": "source/less/less.less"
				}
			}			
		}
		,

		// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&		
		// comile sass >> css
		compass: {
			development: {
				options: {
					sassDir: 'source/sass',
					cssDir: 'wwwroot/css',
					outputStyle: 'expanded'
				}
			}
			,
			production: {
				options: {
					sassDir: 'source/sass',
					cssDir: 'wwwroot/css',
					outputStyle: 'compressed'
				}
			}
			
		}
		,

		// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&		
		//copies files around.. mostly used for assets  
		copy: {
			dist: {
				files: [{
					expand: true,
					cwd: 'source',
					dest: 'wwwroot',
					src: ['img/**']
				}]
			}
		}
		,
		
		// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&		
		//create a local webserver http://localhost:5455  
		connect: {
			server: {
				options: {
					port: 8080,
					base: 'wwwroot',
					livereload: true,
					hostname:'*'
				}
			}
		}
		,

		// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&				
        // clean destination folder
        clean: {
            wwwroot: [
                '!github/do-not-touch',
                '!github/.git/**',
                '!github/CNAME',
                '!README.md',
                'wwwroot/**/*'
            ]
        }
		,
		
		// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&		
		//watches for changes to code then execute other Grunt processes  
		watch: {
			
			// watch for Jade changes
			jade: {
				files: ['source/jade/**'],
				tasks: ['jade']
			}

			,
			//watch for SASS changes	
			sass: {
				files: ['source/sass/**'],
				tasks: ['compass']
			}
			
			,
			//watch for LESS changes	
			less: {
				files: ['source/less/**'],
				tasks: ['less']
			}
			
			,					
			// watch for other files that need to be copied	
			copy: {
				files: ['source/img/**'],
				tasks: ['copy']
			}
			,
			
			// watch for any changes in destination (wwwroot) and do a browser reload
			reload: {
				files: ['wwwroot/**'],
				options: {
					livereload: true
				}
			}
			
		}
		,
		
		// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&			
		// open the dev site in the browser 
		open: {
			github: {
				path: 'http://localhost:8080'
			}
		},
			
	});
	
	require('load-grunt-tasks')(grunt);
	
	
	grunt.registerTask('default', [
		'clean',
		'jade:development',
		'less:development',
		'compass:development',
		'copy',
		'connect', 
		'open',
		'watch'
	]);

	grunt.registerTask('clean', ['clean']);	
	
	grunt.registerTask('production', [
		'clean',
		'jade:production',
		'less:production',
		'compass:production',
		'copy',
		'connect', 
		'open',
		'watch'
	]);
	
	
	require('load-grunt-tasks')(grunt);
};
