/**
 * Development environment settings
 *
 * This file can include shared settings for a development team,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */

module.exports = {

  /* **************************************************************************
   * Set the default database connection for models in the development       *
   * environment (see config/connections.js and config/models.js )           *
   ***************************************************************************/

  connections: {
    main_sql: {
      adapter: 'sails-mysql',
      host: 'status.hardfight.fr',
      user: process.env.SQL_USER || 'mineweb',
      password: process.env.SQL_PWD || 'mineweb42', // optional
      database: process.env.SQL_DB || 'mineweb' // optional
    }
  },

  orm: {
    _hookTimeout: 16000
  },

  dedipass: {
    publicKeys: {
      license: 'a4e7b35c40c18f69431cd8e29f4d9bba',
      hosting: '45fd9efcda58b6d009ce44cdc7dc73e8'
    }
  },

  paypal: {
    sandbox: true,
    // merchantEmail: 'paypal@mineweb.org'
    merchantEmail: 'paypal-facilitator@mineweb.org'
  },

  pushbullet: {
    apiKey: 'o.t2qhJTBxN65oDTc35GN69IeKhYM7OrGv',
    principalEmail: 'mineconstruct@gmail.com'
    // channelTag: 'minewebsupport'
  },

  servers: {
    hosting: {
      host: '188.165.141.113',
      user: 'root',
      password: 'Ly9bt5Q2',
      port: '2435'
    }
  },

  stats: {
    email: 'contact@eywek.fr'
  },

  api: {
    endpoint: 'http://api.mineweb.org/v2/',
    endpointWithoutVersion: 'http://api.mineweb.org/',
    storage: {
      getCMS: 'storage/get_cms',
      upload: 'api/storage/upload'
    }
  },

  developer: {
    upload: {
      folders: {
        plugins: 'uploads/plugins',
        themes: 'uploads/themes'
      }
    }
  },

  permissionsList: require('../permissions').list,

  permissionsAccess: require('../permissions').access,

  ticket: {
    'fr-fr': {
      hello: {
        day: 'Bonjour,',
        night: 'Bonsoir,'
      },
      signature: 'Cordialement,<br>{USERNAME}.<br>{ROLENAME}'
    }
  }

}
