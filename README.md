# Library-Front

Library-Front est une application web moderne de gestion de bibliothèque développée avec **Angular 19**. Elle offre une interface utilisateur intuitive pour la gestion des utilisateurs, l'authentification et le suivi des activités via un tableau de bord.

## 🚀 Fonctionnalités

* **Gestion de l'Authentification :** Système complet de connexion et d'inscription.
* **Sécurité par Guards :** Protection des routes sensibles (comme le tableau de bord) pour restreindre l'accès aux utilisateurs non authentifiés.
* **Tableau de Bord Dynamique :** Visualisation des données et des statistiques de la bibliothèque.
* **Interface Responsive :** Design moderne utilisant les dernières fonctionnalités d'Angular.

## 🛠️ Stack Technique

* **Framework :** Angular 19.0.5.
* **Langage :** TypeScript.
* **Gestion d'état :** Utilisation des `Signals` d'Angular pour une réactivité optimale.
* **Communication API :** Client HTTP Angular pour les requêtes REST.
* **Styles :** CSS3.

## 📂 Structure du Projet

L'application suit une architecture modulaire et structurée :

* **`src/app/core/` :** Contient les services globaux, comme `AuthService` pour la gestion de l'authentification et des jetons.
* **`src/app/features/` :** Regroupe les composants principaux par domaine fonctionnel :
    * `dashboard/` : Logique d'affichage des statistiques.
    * `login/` & `register/` : Formulaires d'accès utilisateur.
    * `layout/` : Éléments structurels comme la barre de navigation.
* **`src/app/shared/` :** Contient les modèles de données (interfaces) partagés dans toute l'application.

## 🛣️ Navigation (Routes)

L'application utilise le routeur Angular avec les chemins suivants :

| Chemin | Composant | Accès |
| :--- | :--- | :--- |
| `/login` | LoginComponent | Public |
| `/register` | RegisterComponent | Public |
| `/dashboard` | DashboardComponent | **Privé** (AuthGuard requis) |
| `/` (par défaut) | Redirection vers `/login` | Public |

## ⚙️ Configuration et Installation

### Prérequis
* [Node.js](https://nodejs.org/) (version compatible avec Angular 19)
* [Angular CLI](https://angular.io/cli) installé globalement (`npm install -g @angular/cli`)

### Étapes d'installation
1.  **Cloner le dépôt :**
    ```bash
    git clone <url-du-repo>
    cd LibraryManager_Angular_Front
    ```

2.  **Installer les dépendances :**
    ```bash
    npm install
    ```

3.  **Lancer le serveur de développement :**
    ```bash
    ng serve
    ```
    L'application sera accessible sur `http://localhost:4200/`.

## 🧪 Tests

Pour exécuter les tests unitaires via [Karma](https://karma-runner.github.io) :
```bash
ng test
