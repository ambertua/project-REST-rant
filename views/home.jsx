const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>REST-rant</h1>
                <div>
                    <img src='/images/toast.jpg' alt='egg on toast' />
                    <div>   
                        Photo by <a href="https://unsplash.com/photos/PTdm4YUtloY">Mae Mu</a> on <a href='https://unsplash.com/photos/PTdm4YUtloY'>Unsplash</a>
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = home 