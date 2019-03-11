# Glasgow ![Traffic Cone](assets/images/glasgow-images/cmaxtrafficcone1.png) Your Handy Guide
___
Welcome to Glasgow | Your Handy Guide. 

This is exactly what it says on the tin! It's a quick and easy way for users to find the best Glasgow has to offer, quickly!
It was specifically designed for use on mobile/tablet for visitors to the city to use on the go. 
It provides geolocation and local bar/restaurant details via GoogleMaps, local events data from The List and weather information from Open Weather Maps.

When planning a city break I often find it difficult to know where to look for 'localised' information and get the best from my trip. I wanted to create a site that could provide people with the opportunity to experience Glasgow as a 'local'.

View the deployed site [here](https://paperclippete.github.io/milestone2/)

### UX
___

#### Strategy

The site should...

* be cool, humorous and visually appealing - using colours, styles and fonts which reflect Glasgow's vibrancy
* provide quick information on places to go, such as location and contact details, relative to the user's position
* provide information on events and exhibitions in Glasgow with essential information and links to buy tickets etc.
* provide easy to see current, localised weather information

For the user the site should...

* be intuitive and easy to use
* provide quick access to tourist information about Glasgow
* look appealing
* connect the user to Glasgow's ethos and identity
* familiarise tourists and visitors with some local landmarks and favourite places

##### User Stories

* I've never been to Glasgow before and want to research my trip before leaving home 
    1. I'm looking for 'local' places recommended by Glaswegians
    2. I'd like to see the current, live weather information so I know to take some waterproof clothes :laughing:
    3. I'd like to know events that are currently on and use this information to enhance my stay
* I'm currently visiting Glasgow and want to know where to go and what to do 
    1. I would like to know locally recommended places to eat or drink, near my location
    2. I would like to know events in Glasgow that are on now and quickly access information
    3. I might be at an event and like to know the weather information before leaving
    4. I might want to glance quickly at the high and low temperature so I can dress accordingly

#### Scope

In order to create a good UX Glasgow | Your Handy Guide should...

* be developed with a mobile-first approach in order to suit the target user group
* be responsive in order to display across a range of devices
* connect to Google Maps API in order to display 'localised' information
* connect to Google Maps API and use geolocation in order to give information relative to the user's position
* connect with a local events API (The List) to provide up-to-date information on events
* connect with a weather API (Open Weather Map) to provide local, live weather information
* provide a quick and easy way to subscribe to the mailing list (EmailJS)
* reflect the vibrancy and humour of Glasgow using an appropriate colour scheme (derived from traffic cones and the Glasgow Underground), fonts and images
* use JS to add some 'interesting' features e.g. displaying the site in 'Glaswegian' and having Wellington's horse comment on the weather!

Please find my initial wireframe, created using Balsamiq, [here](spec/development/Glasgow-wireframes.pdf)

![Glasgow Underground](assets/images/glasgow-images/Glasgow_Subway1.png)

### Features
___

#### Existing Features

> Navigation Bar/ Dropdown Menu

I used Bootstrap 4 to create a minimalist navigation bar that would toggle a dropdown menu on all devices. I felt the single-page-site should not require too many navigation options as the user can scroll through. After reading several blogs on web-design I decided not to add any 'scroll' buttons or prompts as users understand they will need to scroll for more content. A user will not have to press the browser's back-button as the navigation bar/ button is fixed.

> Hero Image/ Parallax Background

I set the body element a fixed image background of the Finnieston Crane (an important landmark to the city's shipbuilding and industrial roots) which created a parallax scrolling effect across the site. It creates a modern/ professional touch and adds credibility to the site. Unfortunately it doesn't render correctly on some mobile devices. 

> Flickering Header

After reading blogs on web design I wanted an attention-grabbing header, originally I wanted to create a see-through text with the hero-image behind but I eventually sought to use CSS Animations to create a 'flicker' effect that looks like a neon sign.

> Language Selection

Within the dropdown menu are two language buttons that allow the user to toggle between "English" and "Glaswegian". I created this using Bootstrap buttons and jQuery code. I felt this would add a piece of humour to the site for very little code.

> Scroll Magic

I used Scroll Magic to create fade-in effects for each section, it creates a better user experience in that all of the site's content is not displayed immediately.

> Food and Drink

I used Bootstap Grid to ensure this section was fully responsive. I used flexbox within the grid to display the images. I created a div in order to display information from the Google Maps API.

> Google Map

I worked really hard using a combination of the documentation available from Google and my own code in order to have my map display the locations I wanted. I created and linked to a JSON file and created a function that would then assign a marker for each place. I used a template literal in order to publish the information on each location within a Google Info Window. I wanted to use geolocation in order to show the user's position relative to the markers. I've styled some of the Map elements in order to increase visibility and functionality for my users.

> What's On?

Again, I used Bootstrap Grid to ensure the site would be as responsive as possible and look good on a variety of devices. 

> Events API

I connected to The List's API service in order to ensure there was a large variety of event information available which could then be localised. Again, I used some of the documentation (which used Fetch API) along with my own code to connect to the API and extract the relevant information in order to display it in a way that was useful and appealing. I had to install moment.js in order to display the time and date of the events in a way that would look good and make sense to the user. I also used template literals to display the information and create the necessary link to the correct page from The List that displayed more information.

> Weather

I connected to Open Weather Map API in order to display current weather information for Glasgow. I used some of the documentation as well as my own code to create something that was useful and made sense to the user.

> MouseOver Animations

I set a mouseover animation using jQuery that would show a speech bubble over the Duke of Wellington image. The internal text changes according to the type of weather using an if/else loop. Throughout development I didn't see anything apart from the message associated with 'Rain', so I used various testing to ensure that it would display other text.

> Footer

I wanted to have a small footer with minimal functionality. It displays links to potential social media sites associated with the main site.

> Email JS Mailing List 

There is an option in the footer to subscribe to the mailing list. It launches a modal (using Bootstrap 4) that will use the emailJS API to send an automated email generated from a form to the site owner. Once submitted text will display to say the request has been succesful or an alert will display the error.

> Top Button

I used jQuery to make a scroll to top button that appears near the bottom of the page. This ensures that users can successfully navigate the site, either by using the button or the navigation menu.

#### Features for the Future

It may be appropriate to embed social media feeds into the website in order to provide a user-created and interactive aspect. It would help showcase landmarks, past events and holiday snaps which could generate a buzz for future tourism.
It would be worthwhile to look at integrating more APIs, to provide travel and accomodation information, in meet more user needs from the one site.


#### Technologies Used

* **HTML5** - used for creating content and basic layout and validated with W3C
* **CSS3** - used for customised styling and layout and validated with W3C
* **JavaScript** - used to provide interactivity and logic to the site
* **JSON** - used to provide a dataset that can be used by JavaScript
* [Cloud9 IDE](https://ide.c9.io/) - this was the IDE where I developed and ran my application
* [GitHub](https://github.com) - I used this to push my git files and used [Git Hub Pages](https://pages.github.com/) to deploy my site.
* [jQuery](https://jquery.com/) - JavaScript library used to connect with APIs and custom-code for the site which allows for DOM manipulation
* [SASS](https://sass-lang.com/) - used as a preprocessor in creating style files with variables, media queries and mixins
* [Bootstrap 4](https://getbootstrap.com/) - used for responsive layout, basic styling, dropdown Navbar, mailing-list modal (JavaScript for these features was used - linked to Bootstrap 4 and, through BS4, popper.js in <script> tags)
* [Google Fonts](https://fonts.google.com/) - used for customised fonts
* [Font Awesome 5](https://fontawesome.com/) - used for links and icons to make the site more appealing
* [ScrollMagic](http://scrollmagic.io/) and [TweenMax](https://greensock.com/tweenmax) libraries were used to create the scroll effects used throughout the site. I watched tutorials from [Petr Tichy](https://ihatetomatoes.net/) to learn how to use it.
* [MomentJS](https://momentjs.com/) - used to simply reformat the date and time information to come from the events API. 
* [EmailJS](http://www.emailjs.com/) - connected to their API in order to send emails from a form
* [Google Maps JS](https://developers.google.com/maps/documentation/javascript/tutorial) - used to create a map with localised functionality
* [The List API](https://api.list.co.uk/) - connected with this API to give up-to-date events information (through this I used FetchAPI)
* [Open Weather Map](https://openweathermap.org/) - connected with this API to give current, localised weather information
* [Pixabay.com](https://www.flickr.com/), [Flikr.com](https://www.flickr.com/) and [ClipartMax.com](https://www.clipartmax.com/) used for stock images (for the educational purposes of this project only) and [TinyPNG.com](https://tinypng.com/) used for image compression

* Google Developer Tools, Stack-Overflow, Code-Institue Slack Community, Code-Institute module notes, W3Schools, CSS Tricks - all used for reference when I encountered a bug or needed extra support with any issues.

### Testing
___

Throughout the process I continually manually tested the site, by saving my work in the IDE and running it in Google Chrome. I used Google Developer Tools to ensure that my site was responsive and functioned in all screen sizes and that my styling was applied throughout. 
I set ```console.logs``` and ```debugger``` statements throughout my js files in order to debug through the console. This was useful in finding objects and navigating arrays located in JSON files from the APIs.







*It*alics

**bold**

---

> This is a quote



* Item 1
    * Nested Item
    * 
    * 

1. List
2. List
3. 



```bash
github/commands
```

```javascript
function (num 1, num 2)
```

| Name      | Email       |
| ----------|-------------|
|Alexa      | blah@blah.com |
|Table      |table@table.com |
