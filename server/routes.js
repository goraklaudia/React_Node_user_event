import { addUser } from "./controllers/users.js";

const prepareRoutes = async (app, database) => {
    app.get('/', (req, res) => res.json('Test endpoint! Success!'));

    app.post('/user', async (req, res) => addUser(req, res, database));
}

export default prepareRoutes;