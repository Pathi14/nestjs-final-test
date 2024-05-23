# 🏗️ Projet ToDoList avec Nest.js et TypeORM

## 📌 Description

Ce projet est une API de TodoList, l'objectif est de faire passer tous les tests du dossier test.

## 📌 Fonctionnalité

        🔴  Creation d'un utilisateur
        🔴  Affichage des utilisateur
        🔴  Creation de tâche pour utilisateur
        🔴  Affichage des tâches par utilisateur

## 📌 Environnement de developpement

        🔴  NestJS
        🔴  TypeORM
        🔴  PostgreSQL
        🔴  Docker
        🔴  Windows

## 📌 Installation et démarrage du projet

    📝  Prérequis
        1. Node.js (v14 ou supérieur)
        2. Docker (pour PostgreSQL)
        3. npm (gestionnaire de paquets Node)

    📈  Suivez les étapes ci-dessous pour cloner le projet, installer les dépendances et démarrer le serveur de votre API

1. Clonez le dépôt GitHub du projet.
    ```bash
    git clone https://github.com/Pathi14/nestjs-final-test.git
    ```

2. Accédez au répertoire du projet.
    ```bash
    cd nestjs-final-test
    ```

3. Installez les dépendances necessaire.
    ```bash
    npm install
    ```

4. Démarrez le projet selon votre environnement.
    ```bash
    npm run start:postgres
    npm run start:postgres:windows
    ```

5. Script utilisé pour lancer les tests 
    ```bash
    npm run test:e2e:postgres
    npm run test:e2e:postgres:windows
    ```

# 📌 Utilisation

    📍 Backend

        Le serveur backend est accessible à l'adresse suivante :
        http://localhost:3000

    📍 Endpoints de l'API
        
        ➡️ Utilisateurs

            POST /user
            Crée un nouvel utilisateur.
            Payload : { "email": "user@example.com" }

            GET /user
            Récupère la liste de tous les utilisateurs.
        
        ➡️ Tâches
        
            POST /task
            Crée une nouvelle tâche pour un utilisateur.
            Payload : { "name": "task name", "userId": 1, "priority": "1" }

            GET /task/user/:userId
            Récupère toutes les tâches d'un utilisateur spécifique.

---

