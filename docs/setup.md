## Local setup

This application uses the 2.5.1 ruby version and the last stable one for node.

We recommend managing your Ruby installation through [rvm](https://github.com/rvm/rvm). It's just an easy way to run multiple Ruby versions for different applications:

Install first the dependencies neccesaries:
```
brew install curl gpg2
```

and then

```
gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB
\curl -sSL https://get.rvm.io | bash -s stable
```

Finally run:
```
rvm install ruby-2.3.1
```
it will takes a while...

### Installing dependencies

```
npm install
```

and then

```
gem install bundler
bundle install
```

These will satisfy both the frontend and backend's dependency requirements.

#### Setting up the Rails environment

Copy the sample `.env.sample` file to `.env` and modify it as needed to fit the
project's settings. At the very least you'll need to have the `DATABASE_URL`
env variable.

```
DATABASE_URL=postgresql://postgres@localhost/cw-ndc-tracker_development
```

#### Setting up the database

```
rails db create
rails db migrate
```

These will create the development database and then run the database migration tasks.

### Launching The App

You'll need to run both the rails server and the webpack server, which will be used internally by rails. Run, separately:

```
yarn run rails:server
```

and

```
yarn run js:server
```

Point your browser to `http://localhost:3000/`. Ta-da!

### Launching the app with docker
```docker-compose up```

Ta-da!
