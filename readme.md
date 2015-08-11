# Announcements

Pulls the most recent 1000 messages and looks for ones with a group mention.

## Local Setup

    $ git clone https://github.com/wdidc/announcements
    $ npm install

### Get Slack API Token

Visit https://ga-students.slack.com/services/new/bot and create a new bot integration.

Copy the API token.

Create a file named `env.js` in the root of the project:

```js
// env.js

module.exports = {
  token: "###", // your api token
  group: "###" // the group id you wanna search.
}

```
```
$ node app.js
```