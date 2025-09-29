# Project 01 Retrospective and overview


## Overview
This is a book application we built using this API: (https://github.com/public-apis/public-apis?tab=readme-ov-file).

Most of the software on this assignment was built with the help of the expo documentation for SQLite, jest testing, and styling:
https://docs.expo.dev/

## Introduction

* How was communication managed
* How many stories/issues were initially considered
* How many stories/issues were completed

## Team Retrospective

### Gabe Gallagher

- Pull requests: https://github.com/krnagy-csu/CST-438-FALL-25-Project-1/pulls?q=is%3Apr+is%3Aclosed+author%3Agabe-tommi
- My issues: https://github.com/krnagy-csu/CST-438-FALL-25-Project-1/issues?q=is%3Aissue%20state%3Aopen%20author%3Agabe-tommi

#### What was your role / which stories did you work on
I worked primarily with SQL and authentication. I developed a new component for authenticatioin, built the initial database, did some routing, and attempted to insert data from API calls to the database.

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
+ An impossible task isn't always a challenge. Taking breaks is important to solve the worst of problems. Even though I didn't end up solving many, I can at least be proud of what I did get done and know that if I did have the time I'm sure I could fix.

## Conclusion

- How successful was the project?
  - Somewhat. The highlights are the formatting, authentication and the API call and search functionality. 
- What was the largest victory?
- Being able to get done what we got done in such a short time frame, especially with no experience and little guidance regarding React and expo.
- Final assessment of the project
- We're all proud of what we got done and how well we worked together to get a difficult task done.
