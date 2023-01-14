const  html = (
    userEmail
  ) => {
    return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
     <style>
     img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 10%;
    transform: translateX(-10vw);
  }
  .content-wrapper {
    min-height: calc(100vh - 20px);
  }
  h1 {
    background-color : #D7C488;
  }
  body {
    margin: auto;
    width: 80%;
  }
  #the-content {
    background-color: rgba(3, 88, 140, 0.4);
    padding: 2%;
    margin-bottom: 2%;
    line-height: 1.5rem;
  }
  #main-footer {
    text-align: center;
    padding: 1rem;
    background: rgba(166, 3, 33, 0.9);
    color: white;
    height: 20px;
  }
     </style>
  </head>
  <body>
      <div class="content-wrapper">
          <header>
              <img src="https://user-images.githubusercontent.com/62290677/212469489-607ab310-937d-40cd-86cb-56790f212572.png" alt="logo" height="2%" width="2%">
              <h1>Welcome to Politi-Cal</h1>
          </header>
          <main>
              <div class="content">
                  <p>Welcome to Politi-Cal!

                  Thank you for registering with our app. We are excited to have you as a member of our community. With Politi-Cal, you'll have the ability to vote for the opinions of celebrities and journalists about political events that align with your beliefs and connect with like-minded individuals through our discussion platform.
                  
                  If you have any questions or need assistance navigating our app, please don't hesitate to reach out to our customer support team. We're here to help.
                  
                  Thank you again for joining Politi-Cal. We look forward to your participation and engagement in our community.
                  
                  Best,
                  The Politi-Cal Team</p>
              </div>
              <p id="append-content-here">This is the information i received from you</p>
              <div id="the-content">
                  <p>Your Email: ${userEmail} </p>
              </div>
          </main>
      </div>
      <img src="https://user-images.githubusercontent.com/62290677/212470977-c51bd86f-3041-473b-ace2-220fa7ef6e5b.gif" alt="logo" height="10%" >
      <footer id="main-footer">
        Politi-Cal Copytights &copy; 2023
      </footer>
  </body>
  </html>
  `;
  };
  
  module.exports = html;