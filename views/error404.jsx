const React = require('react')
const Def = require('./default')


function error404() {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <div>
                    <img src='/images/dessert.jpg' alt='melting ice cream' />
                    <div>   
                        Photo by <a href="https://unsplash.com/photos/F1OHZaD9sJk">Amanda Kloska</a> on <a href='https://unsplash.com/photos/F1OHZaD9sJk'>Unsplash</a>
                    </div>
                </div>
            </main>
        </Def>
    )
}


module.exports = error404