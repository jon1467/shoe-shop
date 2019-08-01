# shoe-shop
A prototype solution based on a case study for a digital consultancy.

React > Rails > PSQL + Redis >>> Heroku: https://jp-shoe-shop.herokuapp.com

This is a very simple design mostly to demonstrate three features: responsive design, unique link order tracking pages, and live stock reporting through web sockets.

## Running
`./dev.sh`

Requires [https://www.docker.com/get-started](Docker)/[https://docs.docker.com/compose/gettingstarted/](Docker Compose). Access at http://localhost:3000.

## Deploying To Heroku
`./heroku_push.sh`

You may need to change your app name to match your deployment.

### Credentials Issues
There is a master.key file not committed to this repository. You will have problems building for production without it. Look at [this issue](https://github.com/rails/rails/issues/32718) for guidance on how to get around that.
