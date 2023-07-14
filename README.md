# Reto Full Stack - Liberet - Módulo de descuentos

# See the project Online

To see the project in the cloud you just need to visit this [URL](https://products-offers-app.vercel.app/). It will open the 404 page, but just click on the button in the center.

If the page takes some time to load, it is normal, the API is hosted in [Render](https://dashboard.render.com/) so it shut down the service automatically after 15 minutes of inactivity and needs 1 minute to start again once someone make an API call.

# Development Intructions

To run the app in a local environment just need to have the next:

- Install node
- Clone the repo
- In the proyect folder exec:
    - npm install
- In a terinal window navigate to the /app folder and exec:
	- npm run front:dev
- In a terinal window navigate to the /api folder and exec:
	- npm run back:dev
- Navigate to http://localhost:5173
- Test the app

# DB Diagram

![DB Diagram](https://firebasestorage.googleapis.com/v0/b/crafting-table-77516.appspot.com/o/Screenshot_3.png?alt=media&token=190cfed1-d8e2-4fe7-9e70-772d467bca13 "DB diagram")

I tried to make a diagram that can be reusable no matter what kind and how many offers are saved in the DB.

But I just make it work only having in count the current product that it is added to the Order.
