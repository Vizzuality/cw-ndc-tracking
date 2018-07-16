# Local setup

This application uses the 2.5.1 ruby version and the last stable one for node.

We recommend managing your Ruby installation through [rvm](https://github.com/rvm/rvm). It's just an easy way to run multiple Ruby versions for different applications:

Install first the dependencies neccesaries:

With RVM:

```text
brew install curl gpg2
```

and then

```text
gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB
\curl -sSL https://get.rvm.io | bash -s stable
```

Finally run:

```text
rvm install ruby-2.5.1
```

With RBENV:

```text
rbenv install 2.5.1
rbenv local 2.5.1
```

it will take a while...

## Installing dependencies

```text
yarn install
```

and then

```text
gem install bundler
bundle install
```

These will satisfy both the frontend and backend's dependency requirements.

### Setting up the Rails environment

Copy the sample `.env.sample` file to `.env` and modify it as needed to fit the project's settings. At the very least you'll need to have the `POSTGRES_URL` env variable.

```text
POSTGRES_URL=postgresql://postgres@localhost/cw-ndc-tracker_development
```

### Setting up the database

```text
rails db:create db:migrate db:seed
```

These will create the development database and then run the database migration tasks.

## Launching The App

You'll need to run both the rails server and the webpack server, which will be used internally by rails. Run, separately:

```text
rails server
```

and

```text
yarn start
```

Point your browser to `http://localhost:3000/`. Ta-da!

## Launching the app with docker

`docker-compose up`

Ta-da!

## Running gitbook locally

First install gitbook (via npm).

```text
npm install -g gitbook
npm install -g gitbook-cli
```

Thereafter, from the root of the repo you're working on, you run...

```text
gitbook build .
```

And it will generate a subfolder called "_book" which contains "index.html" and all the other html of the finished book.
(You may want to add _book to your .gitignore)

You can view that _book\index.html file directly in a browser, or serve the content locally from a mini webserver by running:

```text
gitbook serve .
```

And then browse to
http://localhost:4000/