const locationsCreate = (req, res) => {
    Loc
.findById(req.params.locationid)
.exec((err, location) => {
if (!location) {
return res
.status(404)
.json({
"message": "location not found"
});
} else if (err) {
return res
.status(404)
.json(err);
}
res
.status(200)
.json(location);
});
 };


module.exports = {
    locationsListByDistance,
    locationsCreate,
    locationsReadOne,
    locationsUpdateOne,
    locationsDeleteOne
    };

