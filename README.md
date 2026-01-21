# OpenTeams

A self-hosted collaboration suite with unified authentication.

## Services

| Service | Description | Local URL |
|---------|-------------|-----------|
| **Nextcloud** | File storage & collaboration | cloud.localhost |
| **Rocket.Chat** | Team messaging | chat.localhost |
| **Wekan** | Kanban boards | boards.localhost |
| **Jitsi Meet** | Video conferencing | meet.localhost |
| **LLDAP** | Lightweight LDAP server | ldap.localhost |
| **Traefik** | Reverse proxy & SSL | localhost:8080 |

## Quick Start (Local Development)

```bash
# 1. Copy environment file
cp env.local.example .env

# 2. Start all services
docker compose -f docker-compose.local.yml up -d

# 3. Initialize MongoDB replica set (first time only)
docker exec openteams-mongodb mongosh --quiet --eval "rs.initiate({_id: 'rs0', members: [{_id: 0, host: 'mongodb:27017'}]})"
```

Access services at `http://<service>.localhost`

## Production Deployment

```bash
# 1. Copy and configure environment
cp env.example .env
# Edit .env with your domain and secrets

# 2. Deploy
docker compose -f docker-compose.prod.yml up -d

# 3. Initialize MongoDB replica set
docker exec openteams-mongodb mongosh --quiet --eval "rs.initiate({_id: 'rs0', members: [{_id: 0, host: 'mongodb:27017'}]})"
```

## Configuration

### Required Production Variables

| Variable | Description |
|----------|-------------|
| `DOMAIN_NAME` | Your domain (e.g., example.com) |
| `ACME_EMAIL` | Email for Let's Encrypt |
| `LLDAP_JWT_SECRET` | Random 32+ character string |
| `LLDAP_ADMIN_PASSWORD` | LLDAP admin password |
| `MONGO_ROOT_PASS` | MongoDB root password |
| `NEXTCLOUD_ADMIN_PASSWORD` | Nextcloud admin password |

### Default Credentials (Local Dev)

- **LLDAP Admin**: `admin` / `localadminpass123`
- **Nextcloud Admin**: `admin` / `localadminpass123`

## Files

```
├── docker-compose.local.yml  # Local development (HTTP)
├── docker-compose.prod.yml   # Production (HTTPS + Let's Encrypt)
├── env.local.example         # Local environment template
├── env.example               # Production environment template
└── mongo-init.js             # MongoDB initialization script
```

## License

MIT
