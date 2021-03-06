<div id="top"></div>

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/alperemreeren/alpersan-manager">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">ALPERSAN Manager</h3>

  <p align="center">
    A Web Application with the purpose of Project and Task Management
    <br />
    <br />
    <a href="https://alpersan-manager.web.app">View Demo App</a>
    ·
    <a href="https://github.com/alperemreeren/alpersan-manager/issues">Report Bug</a>
    ·
    <a href="https://github.com/alperemreeren/alpersan-manager/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://alpersan-manager.web.app)

This is a Project Management Web App I built for my portfolio

Main Features:
* Create Projects and Assign them to Users
* Filter through Projects
* Comment in Projects

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* [React.js](https://reactjs.org/)
* [Firebase](https://firebase.google.com/)
* Firebase Authentication
* Firebase Firestore
* Firebase Storage

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these steps.

### Dependencies

* date-fns
* firebase@8.5
* react-router-dom@5.1
  ```sh
  npm install
  ```
* firebase-tools
```
npm install -g firebase-tools
``` 

### Building

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Create a New Project at [Firebase Console](https://console.firebase.google.com)
2. Create a New Web App in [Firebase Console](https://console.firebase.google.com)
3. Install the Firebase CLI globally
   ```sh
   npm install -g firebase-tools
   ```
4. Login to Firebase
   ```sh
   firebase login
   ```
6. Clone the repo
   ```sh
   git clone https://github.com/alperemreeren/alpersan-manager.git
   ```
5. Initialize the Firebase
6. Select the project you've created
8. Install NPM packages
   ```sh
   npm install
   ```
7. Enter your configuration codes in `src/firebase/config.js`
   ```js
    import firebase from 'firebase/app'
    import 'firebase/firestore'
    import 'firebase/auth'
    import 'firebase/storage'

    const firebaseConfig = {
        apiKey: "API_KEY",
        authDomain: "DOMAIN.firebaseapp.com",
        projectId: "PROJECT_ID",
        storageBucket: "BUCKET.appspot.com",
        messagingSenderId: "MESSAGING_SENDER_ID",
        appId: "APP_ID"
    };

    // init firebase
    firebase.initializeApp(firebaseConfig)

    // init services
    const firestoreInst = firebase.firestore()
    const authInst = firebase.auth()
    const storageInst = firebase.storage()

    // timestamp
    const timestamp = firebase.firestore.Timestamp

    export { firestoreInst, authInst, storageInst, timestamp }
   ```
8. Deploy your App
   ```sh
   firebase deploy
   ```
<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Add Comments feature
- [ ] Add Group Chat for Projects and Live Chat feature between users
- [ ] Add Notifications

See the [open issues](https://github.com/alperemreeren/alpersan-manager/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Alper Emre Eren - [LinkedIn](https://www.linkedin.com/in/alper-emre-eren/)

Project Link: [https://github.com/alperemreeren/alpersan-manager](https://github.com/alperemreeren/alpersan-manager)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
<!--
## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)
* [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#top">back to top</a>)</p>
-->



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/alperemreeren/alpersan-manager/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/alperemreeren/alpersan-manager/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/alperemreeren/alpersan-manager/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/alperemreeren/alpersan-manager/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/alperemreeren/alpersan-manager/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/alper-emre-eren/
[product-screenshot]: https://github.com/alperemreeren/alpersan-manager/blob/introduction/screenshot.png
