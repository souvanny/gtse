# Squelette de projet

Squelette vierge pour un nouveau projet.

- **Frontend** : Angular 18 (PWA) — `frontend/`
- **API** : Symfony 7.4 — `symfony-app/`
- **Base de données** : MySQL 8
- **Infra** : Docker (local + prod)

## Prérequis

- Docker & Docker Compose
- Make (optionnel)

## Démarrage local

```bash
make up
```

| Service | URL |
|---------|-----|
| Frontend (Angular dev) | http://localhost:8184 |
| API | http://localhost:8084/api |
| phpMyAdmin | http://localhost:8284 |

Le front proxifie `/api` vers l'API (voir `frontend/proxy.conf.json`).

## Commandes utiles

| Commande | Description |
|----------|-------------|
| `make up` | Démarre tous les services |
| `make down` | Arrête et supprime les conteneurs |
| `make logs` | Logs en direct |
| `make bash` | Shell dans le conteneur PHP |
| `make console ARGS="..."` | `bin/console` Symfony |
| `make composer ARGS="..."` | Composer dans le conteneur |
| `make migrate` | Migrations Doctrine |

## Personnalisation

Avant de démarrer le nouveau projet :

1. Renommer le projet dans `.env` (`PROJECT_NAME`, `PROJECT_DBNAME`, `DATABASE_URL`).
2. Modifier les ports si un autre projet tourne en parallèle.
3. Changer les secrets (`APP_SECRET`, `MYSQL_PASSWORD`, `VAPID_*`).
4. Régénérer la paire de clés JWT :
   ```bash
   make console ARGS='lexik:jwt:generate-keypair'
   ```

## Structure

```
.
├── symfony-app/            # API Symfony (scaffold vierge)
├── frontend/               # Angular PWA (scaffold vierge)
├── docker/
│   ├── php/                # PHP-FPM + Composer + supercronic
│   ├── node/               # Dockerfiles dev et prod Angular
│   └── cron/crontab        # Tâches planifiées (à définir)
├── nginx/                  # Config Nginx de l'API
├── mysql/conf.d/           # Config MySQL
├── docker-compose.yml      # Local
├── docker-compose.prod.yml # Production
├── .env                    # Variables (ports, DB, secrets)
└── Makefile
```

## Production

```bash
make prod-build
make prod-up
```

Le frontend est buildé (`ng build --configuration=production`) et servi par Nginx.
