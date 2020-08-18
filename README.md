# ContaCat Manager

[![Netlify Status](https://api.netlify.com/api/v1/badges/649efe0c-0ef0-45de-a4f5-c67466d25c98/deploy-status)](https://app.netlify.com/sites/mini-contact-manager/deploys)

### [Demo](https://mini-contact-manager.netlify.app/#)


## Project scope
### Create a basic contact manager with 3 requirements:
- view a list of contacts
- view full details of a specific contact
- add a new contact to the list

## Specs
### File structure
```
src/
├── App.vue
├── assets
│   ├── css
│   │   └── global.css
│   └── icons
│       ├── IconAddress.svg
│       ├── IconClose.svg
│       ├── IconEmail.svg
│       ├── IconPhone.svg
│       └── IconUser.svg
├── components
│   ├── contactDetails.vue
│   ├── contactFormModal.vue
│   └── contactList.vue
├── main.js
└── store
    └── index.js
```

### Persist data
I'm using Vuex to centralize data flow and browser Local Storage to persist data between sessions.
Everytime when store gets initialized, it'll check Local Storage and keep data in sync.



### Space to improve with more time
- Check duplicated records
- More strict form validation
- Add tests
- CSS enhancement (Transition effects, layout etc)
- Improve avatar image display
- Enable deleting and updating entires
- Searching and sorting

### References
_[https://www.mikestreety.co.uk/blog/vue-js-using-localstorage-with-the-vuex-store](https://www.mikestreety.co.uk/blog/vue-js-using-localstorage-with-the-vuex-store)_

_[https://cataas.com/#/](https://cataas.com/#/)_

_[https://forum.vuejs.org/t/can-figure-out-how-to-use-v-show-for-particular-index/25705](https://forum.vuejs.org/t/can-figure-out-how-to-use-v-show-for-particular-index/25705)_

_[https://vuejs.org/v2/examples/modal.html](https://vuejs.org/v2/examples/modal.html)_


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
