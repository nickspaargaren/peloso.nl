info: 
	@echo "\n=== Available commands ===\n"
	@egrep '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) |  awk 'BEGIN {FS = ":.*?## "}; {printf "\033[33m%-15s\033[0m %s\n", $$1, $$2}'

## Snippets
set-ids = USERID=$$(id -u) GROUPID=$$(id -g)
docker-compose-exec = docker compose exec -u $$(id -u):$$(id -g)
docker-compose-run = docker compose run --interactive=false --rm -u $$(id -u):$$(id -g)

build: ## Build the project images.
	@docker compose build
	@echo ""
	@make start
	@make do-install-dependencies
	@make start

start: ## Start the project containers.
	@${set-ids} docker compose up -d
	@echo ""
	@echo "  The frontend is running on http://localhost:3000/."
	@echo "  The backend  is running on http://localhost:3333/."
	@echo ""

stop: ## Stop the project containers.
	@docker compose stop

dev: ## Start the project containers including dev output.
	@docker compose up

test: ## Run the project tests.
	@make start
	@make do-frontend-tests

lint: ## Run the linters.
	@make start
	@make do-frontend-lint

update: ## Update all dependencies in frontend and backend folders.
	@make do-update-frontend-dependencies
	@make do-update-backend-dependencies

down: ## Reset the project containers, volumes and networks.
	@docker compose down --volumes

# Installing dependencies
do-install-dependencies:
	@make do-install-frontend-dependencies
	@make do-install-backend-dependencies

do-install-frontend-dependencies:
	@echo ""
	@echo "Installing local dependencies for frontend.."
	@${docker-compose-run} frontend yarn install

do-install-backend-dependencies:
	@echo ""
	@echo "Installing local dependencies for backend.."
	@${docker-compose-run} backend yarn install

# Upgrade dependencies
do-update-frontend-dependencies:
	@echo ""
	@echo "Updating dependencies for frontend.."
	@cd frontend && yarn upgrade-interactive --latest

do-update-backend-dependencies:
	@echo ""
	@echo "Updating dependencies for backend.."
	@cd backend && yarn upgrade-interactive --latest

do-frontend-tests:
	@echo "Starting frontend tests.."
	@${docker-compose-exec} frontend yarn test

do-frontend-lint:
	@echo "Starting frontend linter.."
	@${docker-compose-exec} frontend yarn lint

do-frontend-typescript-check:
	@echo "Starting frontend typescript check.."
	@${docker-compose-exec} frontend yarn tsc --noEmit