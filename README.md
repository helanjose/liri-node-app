# liri-node-app


Creator: Helan Jose

Created on: June 27 2019

# ABOUT THIS APP
LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives back data. The user has the option of using four commands (listed below) in conjuntion with specific parameters associated with the commands. The Commands are:

* concert-this

* spotify-it

* movie-this

* do-what-it-says



## HOW TO USE LIRI
  
   # Step by Step instructions


        1. Open your terminal such as Bash.

        2. Navigate to the folder that contains the liri.js  file.

        3.Depending on the command you run, the output will vary.

          Example 1: Run the movie-this command
          node liri.js movie-this <movie name>
          Output: The system will display details regarding the movie
          ! [concert-this](https://user-images.githubusercontent.com/48775482/60283078-38c22800-98bd-11e9-8eb4-ed9c89a07d8c.JPG)
          
          Example 2: Run the movie-this command without movie name
          node liri.js movie-this 
          output:give a default movie name with corresponding link to watch it
          
          Example 3:Run the spotify-it song name
            node liri.js spotify-it song name
            
           Output: The system will display a list of information associated with the song.
           
          Example  4:Run the spotify-it without song name
           node liri.js spotify-it
           Output:Default song information about a song 
           
           Example 5: concert-this band name
            node liri.js concert-this
           Output:information regarding band such as venue ,formated date and other details
           
           example 6: Do what it says
            node liri.js do-what-it-says
            output: read a file and spotify the info inside the file
            
            
### TECHNOLOGIES USED
* Javascript
* Nodejs
*Node packages:
* Node-Spotify-API
*Moment
* DotEnv
### APIs used:
Bands in Town
OMDB
Git
GitHub         
         
         
          




