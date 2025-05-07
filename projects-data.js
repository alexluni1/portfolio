const projectsData = [
    {
        name: `CSS Button V.1`,
        description: `Pure CSS Button with Ring Indicator`,
        imageUrl: `000001.png`,
        languagesUsed: [`HTML`, `CSS`],
        sourceCodes: [
            {
                languageName: `HTML`,
                codeContent: `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>CSS Button V.1</title>
    </head>
    <body>
        <div class="wrap">
            <button class="button">Submit</a>
          </div>
    </body>
    </html>`
            },
            {
                languageName: `CSS`,
                codeContent: `html, body {
      height: 100%;
    }
    
    .wrap {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .button {
      min-width: 300px;
      min-height: 60px;
      display: inline-flex;
      font-family: 'Nunito', sans-serif;
      font-size: 22px;
      align-items: center;
      justify-content: center;
      text-transform: uppercase;
      text-align: center;
      letter-spacing: 1.3px;
      font-weight: 700;
      color: #313133;
      background: #4FD1C5;
    background: linear-gradient(90deg, rgba(129,230,217,1) 0%, rgba(79,209,197,1) 100%);
      border: none;
      border-radius: 1000px;
      box-shadow: 12px 12px 24px rgba(79,209,197,.64);
      transition: all 0.3s ease-in-out 0s;
      cursor: pointer;
      outline: none;
      position: relative;
      padding: 10px;
      }
    
    .button::before {
    content: '';
      border-radius: 1000px;
      min-width: calc(300px + 12px);
      min-height: calc(60px + 12px);
      border: 6px solid #00FFCB;
      box-shadow: 0 0 60px rgba(0,255,203,.64);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
      transition: all .3s ease-in-out 0s;
    }
    
    .button:hover, 
    .button:focus {
      color: #313133;
      transform: translateY(-6px);
    }
    
    .button:hover::before, 
    .button:focus::before {
      opacity: 1;
    }
    
    .button::after {
      content: '';
      width: 30px; height: 30px;
      border-radius: 100%;
      border: 6px solid #00FFCB;
      position: absolute;
      z-index: -1;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      animation: ring 1.5s infinite;
    }
    
    .button:hover::after, 
    .button:focus::after {
      animation: none;
      display: none;
    }
    
    @keyframes ring {
      0% {
        width: 30px;
        height: 30px;
        opacity: 1;
      }
      100% {
        width: 300px;
        height: 300px;
        opacity: 0;
      }
    }`
            }
        ]
    },
    {
      name: `CSS Animated Button v.1`,
      description: `This button has a subtle shine effect that moves across it on hover, drawing attention to it.`,
      imageUrl: `000002.png`,
      languagesUsed: [`HTML`, `CSS`],
      sourceCodes: [
          {
              languageName: `HTML`,
              codeContent: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>CSS Animated Button v.1 (Enhanced Background)</title>
      <link rel="stylesheet" href="styles.css">
  </head>
  <body>
  
      <button class="animated-button-v1">
          Shine On Hover
      </button>
  
  </body>
  </html>`
          },
          {
              languageName: `CSS`,
              codeContent: `  /* CSS Animated Button v.1 */
          .animated-button-v1 {
              background-color: #007bff; /* Primary blue */
              color: white;
              border: none;
              padding: 15px 30px;
              text-align: center;
              text-decoration: none;
              display: inline-block;
              font-size: 16px;
              font-weight: bold;
              font-family: Arial, sans-serif;
              border-radius: 8px;
              cursor: pointer;
              position: relative;
              overflow: hidden; /* Important for the shine effect */
              transition: background-color 0.3s ease;
          }
  
          .animated-button-v1:hover {
              background-color: #0056b3; /* Darker blue on hover */
          }
  
          .animated-button-v1::before {
              content: "";
              position: absolute;
              top: 0;
              left: -100%; /* Start off-screen to the left */
              width: 50%;
              height: 100%;
              background: linear-gradient(
                  90deg,
                  transparent,
                  rgba(255, 255, 255, 0.4), /* Shine color */
                  transparent
              );
              transition: left 0.5s ease-in-out; /* Speed of the shine */
          }
  
          .animated-button-v1:hover::before {
              left: 150%; /* Move shine across and off-screen to the right */
          }
  
          /* UPDATED: Just for centering the button on the page for the demo */
          body {
              display: flex;
              justify-content: center;
              align-items: center;
              min-height: 100vh;
              /* OLD: background-color: #f0f0f0; */
              /* NEW: Subtle gradient background */
              background: linear-gradient(135deg, #f0f4f8 0%, #d9e2ec 100%);
              margin: 0;
              font-family: Arial, sans-serif; /* Added for overall page consistency */
          }`
          }
      ]
  }
];