/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your controllers.
 * You can apply one or more policies to a given controller, or protect
 * its actions individually.
 *
 * Any policy file (e.g. `api/policies/authenticated.js`) can be accessed
 * below by its filename, minus the extension, (e.g. "authenticated")
 *
 * For more information on how policies work, see:
 * http://sailsjs.org/#!/documentation/concepts/Policies
 *
 * For more information on configuring policies, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.policies.html
 */


module.exports.policies = {

  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions (`true` allows public     *
  * access)                                                                  *
  *                                                                          *
  ***************************************************************************/

  '*': ['isAuthenticated', 'flash', 'notification'],
  // '*': true,

  /***************************************************************************
  *                                                                          *
  * Here's an example of mapping some policies to run before a controller    *
  * and its actions                                                          *
  *                                                                          *
  ***************************************************************************/

  UserController: {
    '*': ['isAuthenticated', 'flash', 'notification'],
    profile: ['isAuthenticated', 'sessionAuth', 'flash', 'notification'],
    editEmail: ['isAuthenticated', 'sessionAuth', 'flash', 'notification'],
    editPassword: ['isAuthenticated', 'sessionAuth', 'flash', 'notification'],
    disableTwoFactorAuthentification: ['isAuthenticated', 'sessionAuth', 'flash', 'notification'],
    enableTwoFactorAuthentificationPage: ['isAuthenticated', 'sessionAuth', 'flash', 'notification'],
    enableTwoFactorAuthentification: ['isAuthenticated', 'sessionAuth', 'flash', 'notification']
  },

  StaticController: {
    '*': ['isAuthenticated', 'flash', 'notification'],
    buyLicense: ['isAuthenticated', 'sessionAuth', 'flash', 'notification'],
    rentHosting: ['isAuthenticated', 'sessionAuth', 'flash', 'notification']
  },

  PurchaseController: {
    '*': ['isAuthenticated', 'flash', 'notification'],
    paypal: ['isAuthenticated', 'sessionAuth', 'flash', 'notification'],
    dedipass: ['isAuthenticated', 'sessionAuth', 'flash', 'notification'],
    dedipassIPN: ['isAuthenticated', 'sessionAuth', 'flash', 'notification']
  }

	// RabbitController: {

		// Apply the `false` policy as the default for all of RabbitController's actions
		// (`false` prevents all access, which ensures that nothing bad happens to our rabbits)
		// '*': false,

		// For the action `nurture`, apply the 'isRabbitMother' policy
		// (this overrides `false` above)
		// nurture	: 'isRabbitMother',

		// Apply the `isNiceToAnimals` AND `hasRabbitFood` policies
		// before letting any users feed our rabbits
		// feed : ['isNiceToAnimals', 'hasRabbitFood']
	// }
};
