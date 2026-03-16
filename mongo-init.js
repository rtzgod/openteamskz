// =============================================================================
// MongoDB Initialization Script
// Creates scoped database users for Rocket.Chat and Wekan
// =============================================================================

// --- Rocket.Chat Database & User ---
db = db.getSiblingDB('rocketchat');
db.createUser({
  user: 'rocketchat',
  pwd: _getEnv('RC_DB_PASS'),
  roles: [{ role: 'readWrite', db: 'rocketchat' }]
});

// --- Wekan Database & User ---
db = db.getSiblingDB('wekan');
db.createUser({
  user: 'wekan',
  pwd: _getEnv('WEKAN_DB_PASS'),
  roles: [{ role: 'readWrite', db: 'wekan' }]
});
