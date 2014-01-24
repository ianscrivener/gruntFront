#gruntFront


###Introduction

A Grunt.js, Jade, LESS &amp; SASS starter pack for front-end designers/developers



####1) Install Git

1.1) Mac (you need MacPorts already installed). Run the following command in **Terminal**


    sudo port install git-core +svn +doc +bash_completion +gitweb 


1.2) To test your Git install run the following command in **Terminal** 

    git --version
    
You should see something like this

    git version 1.8.3.2
    

####2) Install node.js via Mac OSX Installer

2.1) Uninstall any previous Node.js versions you may already have


2.2) Download & Install the Node.js Mac OSX Installer - [http://nodejs.org/dist/v0.10.23/node-v0.10.23.pkg](http://nodejs.org/dist/v0.10.23/node-v0.10.23.pkg "")

2.3) To ensure the correct permissions are set by running the following in **Terminal**:

    sudo chown -R $USER /usr/local


2.4) Test your node.js install;

    node -v
    
you should see something like

    v0.10.24

2.5) node.js comes with an excellent package manager called **npm**. Next test it to see that its working OK:

    npm -v
    
you should see something like this;

    1.3.21
    
####3) Install Grunt.js

In **Terminal** run;

    npm install -g grunt-cli


####4) Grab the demo code from GitHub

In **Terminal** run;

    git clone https://github.com/ianscrivener/starter4Russ
    cd start4Russ



This will create a new directory called 'starter4Russ'.. something like this

    |source
        |img
        |jade
        |less
        |sass
        index.jade
    | wwwroot
        |css
        |img
        index.html
    Gruntfile.js
    package.json
    README.md        
    
####5) Install the projects


In **Terminal** run;
    
    npm init
    
This will download & install all the Grunt.js packages requiredf or our project.

####6) Start grunt

In **Terminal** run;
    
    grunt
    
This *should* compile all the files (Jade, LESS, SASS), start a web browser and open the development site in your web browser.

To create minifed files use
    
    grunt production
    



