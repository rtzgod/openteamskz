// MongoDB initialization script
// Creates databases and users for Rocket.Chat and Wekan

// Switch to admin and authenticate
db = db.getSiblingDB('admin');

// Create rocketchat database and user
db = db.getSiblingDB('rocketchat');
db.createUser({
    user: 'rocketchat',
    pwd: process.env.RC_DB_PASS || 'rcpass123',
    roles: [{ role: 'readWrite', db: 'rocketchat' }]
});

// Create wekan database and user
db = db.getSiblingDB('wekan');
db.createUser({
    user: 'wekan',
    pwd: process.env.WEKAN_DB_PASS || 'wekanpass123',
    roles: [{ role: 'readWrite', db: 'wekan' }]
});

print('MongoDB initialization complete: rocketchat and wekan users created');
