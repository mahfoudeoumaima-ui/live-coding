
#  Erreur JSON

### `Unexpected token '<'`

JavaScript attend une réponse JSON, mais reçoit du code PHP (`<?php`).

---

#  Causes possibles

1. Le serveur PHP n'est pas lancé.
2. Le chemin de l'API est incorrect.
3. Le code PHP n'est pas exécuté par le serveur.

---

#  Solutions

- Lancer le serveur PHP.
- Vérifier l'URL de l'API.
- Vérifier que PHP s'exécute correctement.
- Vérifier que l'API retourne un JSON valide.

---

#  Vérification

1. Ouvrir l'URL de l'API dans le navigateur.
2. Vérifier que la réponse est un JSON valide.
3. Tester à nouveau la requête `fetch()`.
