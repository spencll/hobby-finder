# Hobby-finder

Web app to help find people meet others with similiar hobbies. 

Tech stack: MERN

User flow:

Online
1. User adds hobby and designated public location to meet up. Attached to location is available day/times. 
2. Other users can query by hobby, location, and available day/times.
3. Having other user select day/time sends notification to original user to either accept/reject. Can have multiple users join same day/time. 
4. Hobby/location still persists even after meet up until removed by user. 

Offline
1. Meet at designated place day/time.
2. Get to know other person and hobby interest. Also screen for any red flags. 
3. Can then plan logistics to do said hobby and exchange contact info.

Key features:
1. Annonymous. Only linking factor is the hobby. Public location is used as screening. 
2. Minimal data extraction. Only username/password is saved. Email probably will be needed for notifications. 

Frontend:

Pages 
    Home 
    Account settings (change password only)
    Hotspot search
    Location search
    Datetime search

Backend:

Model (class) with queries -> routes 
    Models
        User
            Username 
            Password
        Hobby
        Hotspots
            Owner
            Hobby
            State 
            Address 
            Available times
            Attendees
            
        userHotspotSchema (links users to hotspot)
            User id
            Hotspot id

    Routes
        Auth
        Users
        Hobbies
    Middleware
        Auth

Front end:
    Registration/Login Page: Form for user authentication.
    Add Hobby Form: Input form to add hobbies, locations, and available times.
    Search Page: Filter and display search results.
    Notification System: Notification UI for accepting/rejecting meetups.
    User Profile: Manage hobbies and locations, view notifications.
State Management:
    Redux for practice, never used before 
        



GET
    Finding hobby hotspots
POST
    Creating new hobby post
UPDATE:
    Joining hotspot
DELETE:
    Removing hotspot
    Removing user from hotspot
    
Database:
    Users
        Username
        Password
    Hobby
        Link to address (google maps)
        Available date/times (datetime)
        Hobby
        Users







