Session management middleware
==============================

1. Install session management - npm install cookie-session
2. In server.js file require cookie session.  Use the cookie session - e.g. app.use(cookieSession({ name: 'session', keys: ['kljkjlkjlk', 'lkjkljlj']}))

N.b. if using a web server add app.set('trust proxy', 1); otherwise the cookie system might fail in the application

3. use the cookie in a route
