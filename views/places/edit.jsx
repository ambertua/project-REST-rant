const React = require('react')
const Def = require('../default.jsx')

function edit_form () {
    return (
        <Def>
          <main>
            <h1>Edit Place</h1>
            <form method="GET" action={`/places/${data.place.id}?_method=GET`}>
          <div className="form-group">
            <label htmlFor="name">Place Name</label>
            <input type="url" className="form-control" id="name" value={data.place.name} name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="pic">Place Picture</label>
            <input type="url" className="form-control" id="pic" name="pic" />
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input type="url" className="form-control" id="city" name="city" />
          </div>
          <div className="form-group">
            <label htmlFor="state">State</label>
            <input type="url" className="form-control" id="state" name="state" />
          </div>
          <div className="form-group">
            <label htmlFor="cuisines">Cuisines</label>
            <input type="url" className="form-control" id="cuisines" name="cuisines" required />
          </div>
          <input className="btn btn-primary" type="submit" value="Add Place" />
        </form>
          </main>
        </Def>
    )
}

module.exports = edit_form
