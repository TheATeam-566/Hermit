![](https://raw.githubusercontent.com/TheATeam-566/Hermit/main/logo.jpg)

# Hermit

Hermit is a Food Delivery App exclusively for use by The Cheesecake Factory. This project serves as The A Team's culminating capstone project, representing our time here at Seneca College.

Comprised of work between January and April 2021.

## Running Hermit

Hermit has two versions: `production` and `development`, aka `prod` and `dev` accordingly.

The `production` version represents the work that it ready to be publicly available, and thus only the most thoroughly tested code ends up here. This version is packaged and ultimately ends up deployed on our AWS EC2 Production Server.

The `development` version represents the version currently in development, and is what we as a team will be working on.

<ins>Please note that Hermit requires several private keys that only the core team has access to.</ins>

### Developing Hermit

In order to add code to the `dev` version of Hermit, follow the steps below accordingly:

1. Fork Hermit
1. Clone your forked project onto your local machine
1. Open your project with VSCODE (or your IDE of choice):
   1. `cd Hermit` and run `npm i`
   1. `cd src/frontend` and run `npm i`

To run **BOTH** the backend & the frontend:

1. `cd Hermit` and run `npm run dev`

To run **ONLY** the dev backend:

1. `cd Hermit` and run `npm run express`
   1. Navigate to `localhost:5000` to access the backend

To run **ONLY** the dev frontend:

1. `cd Hermit` and run `npm run frontend`
   1. Navigate to `localhost:3000` to access the frontend

### Production Hermit

To run the production version of Hermit (for testing purposes):

1. `cd Hermit` and run `npm run prod`.

Feel free to take a look at various other commands in `package.json` but the above commands should be all you need.

### Deploying Hermit

1. SSH into the EC2 box
1. `pm2 stop hermit`
1. `cd ~/Hermit`
1. `git pull origin main`
1. `npm i` and `cd src/frontend` and `npm i`
1. `pm2 start hermit`

## Contributing

In order to contribute to Hermit please carefully read and follow the instructions below:

- <ins>Make sure all your changes happen inside of a branch on your fork</ins>.
- Create a PR from your branch to Hermit's main branch.
- PRs must be approved by at least one core member of the team before merging is possible.

#### Notes

- Prettier should already be set up such that all our code should look the same. It should prompt you to install Prettier when you open your fork in VSCode.
- Ports:

  - Port 3000 is used by the frontend in `dev` mode (see above.)
  - Port 5000 is used by the frontend in `prod` mode (see above.)
  - Port 8000 is used by the backend (express) in both `dev` and `prod`.

- Technologies Used:
  - AWS (EC2)
  - SSH
  - Nginx
  - Git/GitHub
  - Postman
  - Firebase
  - CSS Libraries
  - Google oAuth 2.0
  - React
  - Express
  - Google Maps API
