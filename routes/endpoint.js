module.exports = {
    name: "endpoint",
    run: async (req, res) => {
        const query = req.query.q;
        if (!query) return res.json({ error: "Provide something or Pop Cat will eat you!" })
        res.json({ jsonproperty: `Your query is: ${query}` })
    }
}