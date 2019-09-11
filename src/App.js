import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'

class App extends Component {
  render() {
    return (
      <html>
        <head lang="en">
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Day 3</title>
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="stylesheet" href="/screen.css" />
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>The Daily Kitteh</h1>
            </div>
            <nav class="navbar-top">
              <a href="#">Feral Adventure</a>
              <a href="#">Kibble Kibbitz</a>
              <a href="#">Tail Twitch Tales</a>
              <a href="#">Sunny Window Reviews</a>
            </nav>
            <div class="blue-background">
              <div class="right-content">
                <p>
                  <strong>Busy Kitteh Very Busy</strong> <br />
                  Lorem ipsum dolor sit amet,consectetur adipiscing elit. Nunc
                  vestibulum orci dignissim dolor pretium, congue consequat
                  lectus auctor. Ut congue aliquet lacus in tempor. Aenean leo
                  massa, eleifend congue ex ornare, mollis dictum neque.
                  Pellentesque iaculis, diam vel dignissim suscipit, risus metus
                  rutrum purus, in dapibus urna velit vel eros. Proin laoreet
                  consequat risus, quis tristique metus porttitor in. Nam rutrum
                  quam eu leo volutpat dapibus. Vestibulum tristique cursus ante
                  ut pulvinar. Nullam condimentum et magna vitae efficitur.
                  Phasellus faucibus mattis odio, sed posuere eros. Suspendisse
                  viverra iaculis laoreet. Maecenas eleifend rutrum sem. Quisque
                  accumsan ex ac mi accumsan, quis feugiat nulla elementum.
                </p>
              </div>
              <div class="side-div">
                <img src="../kitteh.png" />
                <h3>Kitteh of the Day</h3>
                <ul class="kitteh-list">
                  <li>Spot</li>
                  <li>Adeline</li>
                  <li>Perspex</li>
                  <li>Mr. Grumpy</li>
                </ul>
              </div>
            </div>
            <div class="footer">
              <nav class="navbar-bottom">
                <a href="#">Subscribe</a>
                <a href="#">Pat the Editors</a>
                <a href="#">Send us Catnip</a>
              </nav>
            </div>
          </div>
        </body>
      </html>
    )
  }
}

export default App
