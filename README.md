# Budget Boss

Application de budget personnelle, locale et synchronisable, sans compte utilisateur et sans courriel.

## Version 4.0

- Bouton Français / English, mémorisé sur chaque appareil.
- Chaque ouverture sur un nouvel appareil crée un espace indépendant avec un identifiant et un secret aléatoires.
- Le lien public ne contient aucun budget partagé. La synchronisation ne commence qu’après l’import volontaire d’un code d’association.
- Le bouton « Créer un nouvel espace » permet à plusieurs personnes de partager le même navigateur sans partager leurs données. Une sauvegarde JSON est téléchargée avant le changement.
- Méthode de budget à base zéro : revenus prévus, montants affectés par catégorie, montant restant à affecter, comparaison prévu/réel.
- Budgets et récurrences hebdomadaires, aux deux semaines ou mensuels.
- Une opération est soit prévue, soit payée/reçue, avec un bouton de changement rapide dans les listes.
- Catégories initiales réduites à Salaire net et cinq catégories de dépenses; les catégories personnelles sont ajoutables et mémorisées.
- Répartition avec pourcentage par catégorie, thème clair/sombre et affichage adapté à l’ordinateur, à la tablette et au téléphone.

## Fonctionnement

- Les données sont d’abord enregistrées dans IndexedDB sur l’appareil.
- L’application fonctionne hors ligne grâce au service worker.
- La synchronisation entre appareils est facultative et se fait avec un code d’association.
- Les données envoyées au serveur sont chiffrées dans le navigateur avant leur envoi.
- Le serveur ne reçoit pas les montants lisibles.
- Les transactions héritées de l’ancienne version `localStorage` `budget-alexis-v1` sont importées automatiquement à la première ouverture.
- Une mise à jour conserve la base IndexedDB existante et migre les budgets et catégories automatiquement.

## Règle d’isolation des budgets

Deux personnes qui ouvrent le lien sur deux appareils ou deux navigateurs différents commencent avec deux espaces locaux différents. Pour utiliser les mêmes données sur plusieurs appareils, il faut importer le code d’association; ce code ne doit pas être partagé publiquement. Si deux personnes utilisent le même navigateur, chacune doit cliquer sur « Créer un nouvel espace » avant de commencer.

## Utilisation locale

Un serveur HTTPS ou localhost est nécessaire pour IndexedDB, le service worker et les notifications. Dans le dossier `budget-pro`, utilise par exemple :

```bash
python3 -m http.server 8080
```

Puis ouvre `http://localhost:8080`.

## Déploiement de l’interface

1. Créer un dépôt GitHub privé ou public.
2. Copier le contenu de `budget-pro` à la racine du dépôt.
3. Créer un projet Cloudflare Pages connecté au dépôt.
4. Choisir « Direct Upload » ou l’intégration Git.
5. Laisser la commande de build vide et utiliser le dossier racine comme dossier de sortie.
6. L’application sera disponible sur une adresse `pages.dev` gratuite.

Pour un usage uniquement sur un appareil, laisser `API_BASE_URL` vide dans `config.js`.

## Déploiement de la synchronisation

Le dossier `sync-api` contient une API Cloudflare Worker et une base D1. Les étapes détaillées sont dans `sync-api/README.md`.

Après avoir déployé l’API, remplacer `API_BASE_URL` dans `config.js` par l’URL Worker, puis redéployer Pages.

## Limites importantes

- Sans API, les données restent sur l’appareil.
- Pour associer un autre appareil, l’appareil initial doit afficher le code d’association.
- La perte du code d’association signifie qu’un nouvel appareil ne peut pas récupérer les données existantes.
- Les notifications du navigateur nécessitent une permission et ne remplacent pas une application native.
- Un export JSON régulier est recommandé.
