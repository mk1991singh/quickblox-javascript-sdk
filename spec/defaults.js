
/*
 *  Contains the default expected settings etc
 *
 */

var DEFAULTS =  {
    config: {
      appId: '',
      authKey: '',
      authSecret: '',
      debug: false
    },
    urls:  {
      base: 'https://api.quickblox.com/',
      session: 'session',
      users: 'users',
      type: '.json'
    }
};

// Default timeout for calls to the API
var TIMEOUT = 2000;