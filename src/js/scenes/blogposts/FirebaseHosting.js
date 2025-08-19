const FirebaseHosting = () => {
  return (
    <div className="blog-container">
      <header className="blog-header">
        <h1>How to Host Your Website on Firebase</h1>
        <div className="meta">
          <span>By Suman Mondal</span> · <span>August 19, 2025</span>
        </div>
      </header>

      <article className="blog-content">
        <section>
          <h2>Prerequisites</h2>
          <ul>
            <li>Node.js and npm installed</li>
            <li>A Google account</li>
            <li>A static site (React/Vite/Cra/build folder or plain HTML/CSS/JS)</li>
          </ul>
        </section>

        <hr />

        <section>
          <h2>1) Install Firebase CLI</h2>
          <pre>
            <code>{`npm install -g firebase-tools`}</code>
          </pre>
        </section>

        <section>
          <h2>2) Login</h2>
          <pre>
            <code>{`firebase login`}</code>
          </pre>
        </section>

        <section>
          <h2>3) Initialize Hosting</h2>
          <p>Run this in your project root and follow the prompts:</p>
          <pre>
            <code>{`firebase init hosting`}</code>
          </pre>

          <p>
            Following firebase initialization, we need to answer a set of questions. 
            These questions are used to configure the firebase project -
          </p>

          <pre>
            <code>
              Are you ready to proceed? (y/n)
            </code>
            <br></br>
            <code>
              Please select an option: (Use an existing project/Create a new project)
            </code>
            <br></br>
            <code>
              What do you want to use as your public directory? (build/dist/public)
            </code>
            <br></br>
            <code>
              Configure as a single-page app (rewrite all urls to /index.html)? (y/n)
            </code>
            <br></br>
            <code>
              Set up automatic builds and deploys with GitHub? (y/n)
            </code>
            <br/>
            <br/>

          </pre>
          
          <p>
              After above command, github connection will be established. Once github authentication is successful, set up will continue - 
            </p>
          <pre>
            <code>
              For which GitHub repository would you like to set up a GitHub workflow? (format: user/repository)
            </code>
            <br></br>
            <code>
              Created service account service_account_example with Firebase Hosting admin permissions.
            </code>
            <br></br>
            <code>
              Uploaded service account JSON to GitHub as secret FIREBASE_SERVICE_ACCOUNT_EXAMPLE.
            </code>
            <br></br>
            <code>
              You can manage your secrets at https://github.com/repo_details.
            </code>
            <br></br>
            <code>
              Set up the workflow to run a build script before every deploy? (y/n)
            </code>
            <br></br>
            <code>
              What script should be run before every deploy? (npm ci && npm run build)
            </code>
            <br></br>
            <code>
              Created workflow file at project_folder
            </code>
            <br></br>
            <code>
              Set up automatic deployment to your site's live channel when a PR is merged? (y/n)
            </code>
            <br></br>
            <code>
              What is the name of the GitHub branch associated with your site's live channel? (main)
            </code>
            <br></br>
            <code>
              Created workflow file at project_folder
            </code>
            <br></br>
            <code>
              Action required: Push any new workflow file(s) to your repo
            </code>
            <br></br>
            <code>
              Writing configuration info to firebase.json...
            </code>
            <br></br>
            <code>
              Writing project information to .firebaserc...
            </code>
            <br></br>
            <code>
              Firebase initialization complete!
            </code>
          </pre>



          <p>
            Choose your Firebase project, set the public directory (e.g. <code>build</code>
            or <code>dist</code>), configure as a single-page app if using React, and skip overwriting
            your existing index if prompted.
          </p>
        </section>

        <section>
          <h2>4) Build your app (for React/Vite)</h2>
          <pre>
            <code>{`npm run build`}</code>
          </pre>
        </section>

        <section>
          <h2>5) Deploy</h2>
          <pre>
            <code>{`firebase deploy`}</code>
          </pre>
          <p>After a successful deploy, the CLI prints your live Hosting URL.</p>
        </section>

        <hr />

        <section>
          <h2>Troubleshooting</h2>
          <ul>
            <li>Ensure the public directory matches your built output (e.g. <code>build</code>).</li>
            <li>For React Router, enable single-page app rewrite during init.</li>
            <li>If permissions fails, try <code>firebase login --reauth</code>. If error still persists, try <code>firebase logout</code> and then <code>firebase login</code>.</li>
          </ul>
        </section>
      </article>
    </div>
  );
};

export default FirebaseHosting;


