


// Get hotspots for a specific hobby
app.get('/hotspots/hobby/:hobbyId', (req, res) => {
    const hobbyId = parseInt(req.params.hobbyId);
    const result = hotspots.filter(hs => hs.hobby_id === hobbyId);
    res.json(result);
});

// Get hotspots by state
app.get('/hotspots/state/:state', (req, res) => {
    const state = req.params.state;
    const result = hotspots.filter(hs => hs.state === state);
    res.json(result);
});