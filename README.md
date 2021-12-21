# MONGO DB SETUP
The software for JSON doc storage.
https://www.youtube.com/watch?v=D0U8vD8m1I0

- https://www.mongodb.com/try/download/community
- On Premises
- Version 4.2.17 (I never pick latest as cloud providers don't usually support the latest)
- MSI
- After installing use blank connection details (just click connect with nothing in it)
- Create a database, called 'tracker'

# API App
- I forked this from a tutorial https://www.youtube.com/watch?v=1o9YOHeKhNQ (/post and /user are just for reference and are not built by me)
- Using Node 16.12.0 (I am using nvs for package management)
- npm install
- create a .env file in root directory and you can use .env.example as a template. These are used to talk to the db locally and should not be commited to source control
- npm run dev (to serve... Also have a debugger option in launcher.json setup)
- Once running you can import the "cattle_tracker.postman_collection.json" file into postman as it has an example query setup to create a livestock database object.
- src/livestock is a proof of concept of a complex json datamodel being stored in a mongoDb
