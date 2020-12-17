# Hermit
Hermit is a Food Delivery App exclusively for use by The Cheesecake Factory. This project serves as The A Team's culminating capstone project, representing our time here at Seneca College.

## Running Hermit
Hermit has two versions: `production` and `development`, aka `prod` and `dev` accordingly.

The `production` version represents the work that it ready to be publicly available, and thus only the most thoroughly tested code ends up here. This version is packaged and ultimately ends up deployed on our AWS EC2 Prod Server.

The `development` version represents the version currently in development, and is what we as a team will be working on.

#### Developing Hermit 
In order to add code to the `dev` version of Hermit, follow the steps below accordingly:
1) Create your own Fork from THEATEAM-566/Hermit 
2) Clone your forked project onto your local machine
3) Open your project with VSCODE (or your IDE of choice)
4) `cd Hermit` and run `npm i`
5) `cd src/frontend` and run `npm i`

To run **BOTH** the backend & the frontend:
1) `cd Hermit` and run `npm run dev`

To run **ONLY** the dev backend:
1) `cd Hermit` and run `npm run express`
    1) Navigate to `localhost:5000` to access the backend

To run **ONLY** the dev frontend, in a new terminal:
1) `cd src/frontend` and run `npm run frontend`
    1) Navigate to `localhost:3000` to access the frontend

To run the production version of Hermit:
1) `cd Hermit` and run `npm run build`
2) After `build` finishes, run `npm run prod`. This will launch both the backend and the frontend.

## Contributing
#### In order to contribute to Hermit please carefully read and follow the instructions below:
1) <ins>Make sure all your changes happen inside of a branch on your fork</ins>
2) Create a PR from your branch to Hermit's main branch
3) Do not merge your own PR (for now)

#### Notes
* Prettier should already be set up suchthat all our code should look the same. It should prompt you to install Prettier when you open your fork in VSCode
* Ports:
  * Port 3000 is used by the frontend in `dev` mode (see above.)
  * Port 5000 is used by the frontend in `prod` mode (see above.)
  * Port 8000 is used by the backend (express) in both `dev` and `prod`.
