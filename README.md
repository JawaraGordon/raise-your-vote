# README

# Raise Your Vote

A non-partisan web app that educates users about voting! 

Earn badges, track your progress and compete with friends to earn your spot on the leader board. 


## Description

A fullstack web application that uses a React front-end, a Ruby on Rails back-end and a PostgresQL database. 

## Challenges

- Creating data models with one-to-many relationships.

- Using full CRUD actions on the user model.

- Client-side routing that works in unison with server side custom routes. 

- Authentication/authorization using a session hash to allow user login status to persist. Using the Bcrypt gem to generate salted password hashes stored on a password_digest data table.

- Using ActiveRecord methods with strong params, built in security features and serialization.

- Learning to use React Styled Components 

- In the future I want to add: 
    - Calendar of important dates     
    - Leaderboard 
    - Which party represents you quiz
    - Day-of voting checklist 
    - Find your poll map
    - Volunteer for an event pledge


### How to Install Project

- Fork and clone both the "raiseyourvote" repo from GitHub [here] https://github.com/JawaraGordon/raise-your-vote

# Navigating the application

- Create a new user or login with an existing account

- Logout with the top-right navbar button 

- Edit or Delete your User profile from the home screen

- View your progress bar and badges by scrolling down the home screen

- Get more information about Activities by clicking on the individually named Activity buttons 

- Each Activity button will navigate to a new component screen. You can click the "learn more" button to go to an external link about the topic. Check the checkbox to save your progress to the database as completed. Click the "home" button to go back to the main page. 

## Setup

`src` folder contains the following files:

```txt
../src/
├── index.css
├── index.js
└── components/
    ├── App.js
    ├── EditUserForm.js
    ├── Home.js
    ├── Login.js
    ├── LoginForm.js
    ├── NavBar.js
    └── SignUpForm.js
└── pages/
    ├── Activities.js
    ├── Badges.js
    ├── FirstSteps.js
    ├── GetInvolved.js
    ├── GetSupplies.js
    ├── HelpAFriend.js
    ├── LastSteps.js
    ├── MakeAPlan.js
    ├── Progress.js
    ├── RaiseYourVote.js
    ├── Register.js
    └── User.js
└── styles/
    ├── Box.js
    ├── Button.js
    ├── Error.js
    ├── FormField.js
    ├── index.js
    ├── Input.js
    ├── Label.js
    ├── Logo.js
    ├── LogoImg.js
    ├── Nav.js
    ├── NavWrapper.js
    ├── ProgressBarContainer.js
    ├── ProgressBarLabel.js
    ├── Textarea.js
    └── Wrapper.js
```

### index.js

import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

 Imports `BrowserRouter` component from React Router, wraps `App` as the top level component.

## Resources

- [React Router](https://v5.reactrouter.com/web/guides/quick-start)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

[dbdiagram.io]: https://dbdiagram.io/

[postman download]: https://www.postman.com/downloads/

[network tab]: https://developer.chrome.com/docs/devtools/network/

* Ruby version
3.1.2

* React version
18.2.0

* Database 
(PostgreSQL) 14.4

* System dependencies
macOS 10+
Homebrew
npm
rvm

Windows 10+


### Using Heroku 

Windows Instructions [here](https://devcenter.heroku.com/articles/getting-started-with-jruby) 

## macOS

```
$ brew tap heroku/brew && brew install heroku

$ heroku login

```

```
 $ rvm install 3.1.2 --default
 $ gem install bundler
 $ gem install rails

```

Heroku requires Postgresql add 'pg gem' to Gemfile. 

//Gemfile
gem "pg", "~> 1.1"


Install Postgres.

```
$ brew install postgresql

$ brew services start postgresql

```

### Rails App

Initiate a new git repository inside of your project directory using `git init`

Tell the app to use PostgreSQL. 

```
 $ rails new your-project-name --api --minimal --database=postgresql

# This will configure our gemfile.lock to work with the same OS Heroku uses:
 
 $ bundle lock --add-platform x86_64-linux --add-platform ruby

#Build the app as normal 
```

### React App

Configure React to work in Rails production environment.

From the root directory:

```
 npm install --prefix client

# Create a Procfile in the root of your directory. 

Add this code:

web: bundle exec rails s
release: bin/rake db:migrate

# Create a Procfile.dev in the root of your directory with the following:

web: PORT=4000 npm start --prefix client
api: PORT=3000 bundle exec rails s


 # Create a React APP that is being served from Rails
 $ npm run build --prefix client

 # Move the these files to public: 

  mv client/build/* public

# Configure client side routing

# routes.rb
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

# terminal 
  $ rails g controller fallback_controller

# app/controllers/fallback_controller.rb
class FallbackController < ActionController::Base
  def index
    render file: 'public/index.html'
  end
end


```

## Deploy 

``` 
# Add a package.json to the root of your Rails app:

Add this code:
```

```
{
    "name": "heroku-deploy",
    "description": "Build scripts for Heroku",
    "engines": {
      "node": "15.6.0"
    },
    "scripts": {
      "clean": "rm -rf public",
      "build": "npm install --prefix client && npm run build --prefix client",
      "deploy": "cp -a client/build/. public/",
      "heroku-postbuild": "npm run clean && npm run build && npm run deploy"
    }
  }
```


```
$ heroku create

$ git add .
$ git commit -m 'Initial commit'

$ heroku buildpacks:add heroku/nodejs --index 1
$ heroku buildpacks:add heroku/ruby --index 2

$ git push heroku main

# seed and migrate
$ heroku run rails db:migrate db:seed

#open your heroku app 
$ heroku open

# See the url that your app is being hosted at
$ git config --list --local | grep heroku

# run heroku locally
 heroku local -f Procfile.dev

```

