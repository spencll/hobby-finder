


// Get specific hobby
// Add hobby. 
// Get hotspots by state
app.get('/hotspots/state/:state', (req, res) => {
    const state = req.params.state;
    const result = hotspots.filter(hs => hs.state === state);
    res.json(result);
});

// Add hotspot to hobby
app.post('/hobby/:hobbyId/hotspot', (req, res) => {
    const hobbyId = parseInt(req.params.hobbyId);
    const { name, state } = req.body;
    const newHotspot = {
        id: hotspots.length + 1,
        name,
        state,
        hobby_id: hobbyId,
        user_id: null
    };
    hotspots.push(newHotspot);
    res.json({ message: 'Hotspot added to hobby', newHotspot });
});