const prepareRoutes = async (app) => {
    app.get('/', (req,res) => res.json('Test endpoint! Success!'));
}

export default prepareRoutes;