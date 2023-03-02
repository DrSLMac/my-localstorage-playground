![localStorage](https://user-images.githubusercontent.com/102887963/222329519-a99f9d99-8ff8-4ed3-b88b-678a6ee9f5f9.png)

## Table of Contents 📖
- [Introduction](#introduction)
- [Technologies and Tools](#technologies-and-tools)
- [Illustrations & Demo](#illustrations-and-demo)
- [Project Reflections](#project-reflections)
- [Roadmap](#roadmap)
- [Deployed Page](#deployed-page)
- [Set Up](#set-up)
- [Contributors](#contributors)
- [Sources](#sources)

## Introduction
- The purpose of this repository is to practice working with `localStorage`. I created a simple form, taking in a name and email address to create a contact card. The contact cards can be displayed on the page. Putting the data into localStorage allows the user to still access the data, even after refreshing or closing the page. 

## Technologies and Tools
- ![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
- ![HTML](https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white)
- ![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
- ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
- ![JSON](https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white)
- ![Vercel](https://user-images.githubusercontent.com/101746747/188785090-4abee495-4f46-4dba-b554-e16ded576297.png)

## Illustrations and Demo
#### Main view with dev tools open to show local storage
<img width="1483" alt="Screenshot 2023-03-01 at 10 17 56 PM" src="https://user-images.githubusercontent.com/102887963/222330030-77913985-ccab-4d64-86d1-3ccce3c3d489.png">

----

## Project Reflections
#### Challenges
- The biggest challenge was recognizing where and when to trigger data being set into local storage, and maintaining that storage after page refresh. 


#### Wins
- I got stuck when, after setting my data to local storage, I refreshed the page and then attempted to add another element to the array. Instead the local storage would reset the array. I was very relieved to discover that if I created a conditional statement, first checking to see if the array already existed in local storage, then I could pull that from local storage using `.getItem()`. Once I pulled the data from local storage, I could push the new contact card into the array, and then use `localStorage.setItem()` again. 

## Roadmap
Future features could include:
- User should be able to filter out favorite contacts
- User should be able to drag and drop contact cards into customized order
- User should be able to pin favorite cards to top of page
- User should be able to sort alphabetically

## Deployed Page
Visit the published site [here](https://my-localstorage-playground.vercel.app/)

## Set Up
1. Fork this repo
2. Clone the repo to your local machine
3. `cd` into the root of the project directory

## Contributors
 Shauna MacFarlane-Okongo
 - [![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/shauna-macfarlane-okongo/)
- [![GitHub Badge](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/DrSLMac)
 
## Sources
 - [MDN](http://developer.mozilla.org/en-US/)
 - [YouTube](https://www.youtube.com/)
 - [W3Schools](https://www.w3schools.com/)
 - [Medium](https://medium.com/)
