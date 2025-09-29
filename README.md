# Project 01 Retrospective and overview

Repo Link: https://github.com/krnagy-csu/CST-438-FALL-25-Project-1
## Overview
This is a book application we built using this API: https://openlibrary.org/dev/docs/api/search

Most of the software on this assignment was built with the help of the expo documentation for SQLite, jest testing, and styling:
https://docs.expo.dev/

## Introduction

*
* Communication was done via discord group chat, which was really efficient. Initially, we had 22 stories and got through about 10 of them regarding core functionality and formatting. This is not including work on issues that were in progress. 

## Team Retrospective

### Gabe Gallagher

- Pull requests: https://github.com/krnagy-csu/CST-438-FALL-25-Project-1/pulls?q=is%3Apr+is%3Aclosed+author%3Agabe-tommi
- My issues:https://github.com/krnagy-csu/CST-438-FALL-25-Project-1/issues?q=is%3Aissue%20state%3Aopen%20assignee%3Agabe-tommi

#### What was your role / which stories did you work on
I worked primarily with SQL and authentication. I developed a new component for authentication, built the initial database, did some routing, and attempted to insert data from API calls to the database.

+ What was the biggest challenge?
+ The biggest challenge for me was the errors by far. They just piled up constantly. There is very little documentation for any given expo package on the site. I also didn't realize it was supposed to run on android until the last minute, for some reason, it just slipped my mind. I spent the last week trying and failing to get it running on android while the database languishes in errors, being mostly unused. There was honestly too many issues to count, but I'm proud of authentication working despite being buggy. React has a LOT of dependency issues, and they are constantly fighting with eachother. Changing one version to fit another often breaks 10 other necessary packages. I'm very familiar with git revert by now at least.
+ 
+ Why was it a challenge?
+ I'm not sure! Maybe I just didn't debug enough? Wrote unsafe code? I could've tested on android earlier for sure, but debugging react is very tough going off console errors alone. The biggest challenge was just the dependencies all hating eachother, which I couldnt really debug besides just praying deleting and reinstalling all of them would work. Occassionally manually tweaking versions would work and then inevitably break something else. All in all, I got one table working at least for users and user authentication.
+ 
  + How was the challenge addressed?
  + I talked with the TA a lot, and Roberto was awesome and always helpful. It unfortunately wasn't enough to break down the myriad of issues, but I certainly learned how to self soothe working on this project at least. Some of the ways I addressed issues were meditating, breathwork, and going for nice walks in my neighborhood. It might sound like I'm joking, but these are some of the best debugging tools I've ever had. My teammates were all helpful as well, but even together we couldn't figure out much besides hoping or working on something else besides our bugs.
+ Favorite / most interesting part of this project
+ Having concrete issues to work on every week as a goal was nice. Especially delegating issues to people felt cool too. I like working with others and making sure they feel ok to work on what they can do / are interested in.
+ If you could do it over, what would you change?
+ I'm honestly not sure. I did what I could. I probably could have done it faster and in a less buggy way, but this project was pretty trial-by-fire. It was good experience, and if I could have done it again I probably would have done it better than I did the first time.
+ What is the most valuable thing you learned?
+ An impossible task isn't always a challenge. Taking breaks is important to solve the worst of problems. Even though I didn't end up solving many, I can at least be proud of what I did get done and know that if I did have the time I'm sure I could fix them.

## Conclusion

- How successful was the project?
  - Somewhat. The highlights are the formatting, authentication and the API call and search functionality. 
- What was the largest victory?
- Being able to get done what we got done in such a short time frame, especially with no experience and little guidance regarding React and expo.
- Final assessment of the project
- We're all proud of what we got done and how well we worked together to get a difficult task done.

---

### Krisztian Nagy

- Pull Requests 
-#49, #30, #8
- Issues 
	-#16 & 24 (the big ones that doomed me), #11, and there was one to make the actual registration page that I lost somewhere

#### What was your role / which stories did you work on
I did a bit of front-end and a bit of back-end; I was supposed to do user profiles and the profile page and the login page, and while the login page went quite well, the latter really didn’t pan out.

+ What was the biggest challenge?
	+ Learning React itself and figuring out how any of this worked.
+ Why was it a challenge?
	+ For some reason I just struggled massively and was completely unable to wrap my head around it, to the point where I wasn’t able to do many of the things I had planned to.
+ How was the challenge addressed?
	+ I studied up on it, but I still don’t really get it
+ Favorite / most interesting part of this project
	+ Seeing my connection to the database work, and learning about all the different react components and trying to make them work
+ If you could do it over, what would you change?
	+ Spend the first weeks just making sure I knew React in and out and was able to work properly with it.
	+ Be more realistic with my time estimates and my estimates of my own ability
	+ Budget time better so that a few emergencies wouldn’t blow up my ability to make progress
	+ Avoid updating packages on my laptop, as that essentially killed my ability to work on the project for days at a critical point while I tried to figure it out
+ What is the most valuable thing you learned?
	+ The importance of learning as much as you can about something before you start trying to stretch your abilities with it.

## Conclusion

- How successful was the project?
  - Think in terms of what did you set out to do and what actually got done?
	I would consider it a mixed success. Most of what I set out to accomplish failed, but at the end I did at least manage to create a core part of the functionality
- What was the largest victory?
	Getting the project actually up and running again
- Final assessment of the project
	We had high hopes; this could have turned out really well; I definitely feel I personally let the team down a lot by not being able to get done what I had intended to

_________________________________________________

### Liliana Saavedra

- Pull Requests 
- Home landing page by Liliana-Saavedra · Pull Request #31 · krnagy-csu/CST-438-FALL-25-Project-1
- Added project description for sign in page onto by Liliana-Saavedra · Pull Request #32 · krnagy-csu/CST-438-FALL-25-Project-1
- Home Page Setup and Design by Liliana-Saavedra · Pull Request #40 · krnagy-csu/CST-438-FALL-25-Project-1
- Home landing page by Liliana-Saavedra · Pull Request #44 · krnagy-csu/CST-438-FALL-25-Project-1
- Home landing page by Liliana-Saavedra · Pull Request #45 · krnagy-csu/CST-438-FALL-25-Project-1

- Issues 
	- Considerations · Issue #18 · krnagy-csu/CST-438-FALL-25-Project-1
	- Home page additions · Issue #23 · krnagy-csu/CST-438-FALL-25-Project-1
	- Landing/home page · Issue #20 · krnagy-csu/CST-438-FALL-25-Project-1
	- Add special features · Issue #26 · krnagy-csu/CST-438-FALL-25-Project-1

#### What was your role / which stories did you work on
My role was front-end developer. I worked mainly in index.tsx and worked on making the page look neat and uniformed.

+ What was the biggest challenge?
	+ My biggest challenge was learning how to use React-Native to implement fonts
+ Why was it a challenge?
	+ This was a challenge because (according to the several sources I found) there is no easy 1 step to get fonts into a React Native project like we would on an HTML page. 
+ How was the challenge addressed?
	+ I looked towards several articles, documentations, and videos to try to get fonts up but everything I tried led to one error which led to even more errors. 
+ Favorite / most interesting part of this project
	+ My favorite part of this project was implementing a Parallax scroll and light/dark mode.
+ If you could do it over, what would you change?
	+ If I could do it all over, I’d like to break up my issues into smaller parts and implement more visual features. I had many things planned to implement but ran out of time to get them all in. If I could, I’d like to go back and add them to this project to use as a portfolio piece.
+ What is the most valuable thing you learned?
	+ The most valuable thing I learned was how to use my resources (documents, videos, etc.) to learn a new program quickly to develop an app.

## Conclusion

- How successful was the project?
  - Think in terms of what did you set out to do and what actually got done?
In terms of what I set out to do, there is a lot I could have improved on. I’m proud of what I was able to achieve but I would have liked to do more with my part. An unfortunate visit to the ER slowed down my progress but also reminded me to pace myself when I can.
- What was the largest victory?
My biggest victory was creating a theme that was consistent for both light and dark themes. I found that manipulating color transparency works really well for this because it lets you keep a color static for both modes but appear different because the lower transparency makes it overlay the theme.
- Final assessment of the project
I’m really grateful for the group I got to work with, they all have a good work ethic and were all very supportive and willing to help one another. There are many things I wish I could have been able to add to this project but I’m proud of what I was able to accomplish. There were some parts of React Native Expo that I found great to work with but there were other parts that made me want to scream my head off. Overall, this project was a good experience.

### Krystelle Barroso

- Pull Requests [here](https://github.com/krnagy-csu/CST-438-FALL-25-Project-1/issues?q=is%3Aopen%20is%3Apr%20author%3Akbarr1212)
- Issues [here](https://github.com/krnagy-csu/CST-438-FALL-25-Project-1/issues?q=state%3Aclosed%20assignee%3Akbarr1212)

#### What was your role / which stories did you work on
Mainly worked on the search bar functionality which included making an API call to get results. Also, worked on the front end design of the search page.

+ What was the biggest challenge?
	+ Managing conflicts after merging to main
+ Why was it a challenge?
	+ The app would break after merging to main sometimes which stunted our work
+ How was the challenge addressed?
	+ Some ChatGPT was used for one of my errors in the beginning
	+ Some help from the TA
+ Favorite / most interesting part of this project
	+ Using the API to find results for a user’s search query
+ If you could do it over, what would you change?
	+ Simulate the app on android earlier not just on the web
	+ Update current issue being worked on and close them accordingly on github
+ What is the most valuable thing you learned?
	+ Learning the flow of git branches, merges, and pushes


