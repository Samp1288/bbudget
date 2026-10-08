const CONFIG = window.AP_BUDGET_CONFIG || { API_BASE_URL: "", APP_VERSION: "4.0.0" };
const DB_NAME = "ap-budget-pro";
const DB_VERSION = 2;
const LEGACY_KEY = "budget-alexis-v1";
const DEFAULT_CATEGORIES = {
  income: ["Salaire net"],
  expense: ["Auto", "Épicerie", "Restaurants", "Sorties", "Logement et factures"]
};
const COLORS = ["#658b66", "#92aa77", "#c5a463", "#d18163", "#8995b4", "#7ea69f", "#b288a0", "#8aa0a9", "#9a9c79", "#7d9a86", "#b58a72"];
const CATEGORY_EN = {
  "Salaire net": "Net salary", "Autres revenus": "Other income", "Remboursement": "Reimbursement", "Prime": "Bonus",
  "Auto": "Car", "Épicerie": "Groceries", "Restaurants": "Restaurants", "Sorties": "Entertainment", "Logement et factures": "Housing and bills", "Abonnements": "Subscriptions", "Santé": "Health", "Achats": "Shopping", "Épargne et fonds d’urgence": "Savings and emergency fund", "Remboursement de dettes": "Debt repayment", "Autres dépenses": "Other expenses"
};
const TRANSLATIONS = {
  fr: {
    appName: "Budget Boss", brandTagline: "Ton argent, au clair.", navDashboard: "Tableau de bord", navTransactions: "Transactions", navCalendar: "Calendrier", navBudgets: "Budgets", navRecurring: "Récurrences", navSettings: "Réglages",
    overview: "APERÇU", overviewMonth: "APERÇU DU MOIS", quickTransaction: "Ajouter une transaction", changeLanguage: "Changer de langue", changeTheme: "Changer de thème", enableNotifications: "Activer les notifications", filterByMonth: "Filtrer par mois", filterByType: "Filtrer par type", filterByStatus: "Filtrer par statut", previousMonthButton: "Mois précédent", nextMonthButton: "Mois suivant", today: "Aujourd’hui",
    dashboard: "Tableau de bord", available: "DISPONIBLE CE MOIS-CI", receivedIncome: "Revenus reçus", paidExpenses: "Dépenses payées", receivedLessPaid: "Revenus reçus moins dépenses payées", expensesExceedIncome: "Tes dépenses dépassent tes revenus reçus", forecast: "PRÉVISION DE FIN DE MOIS", forecastDescription: "Inclut les revenus et dépenses prévus.", usedBudget: "Budget utilisé", averageExpense: "Dépense moyenne", transactions: "Transactions", onElapsedDays: "Sur les jours écoulés", thisMonth: "Ce mois-ci", analysis: "ANALYSE", distribution: "Répartition", manageBudgets: "Gérer les budgets", evolution: "ÉVOLUTION", cumulativeNet: "Net cumulé", monthNet: "Net du mois", seeCalendar: "Voir le calendrier", recent: "RÉCENT", latestTransactions: "Dernières transactions", viewAll: "Tout voir", comparison: "COMPARAISON", previousMonth: "Avec le mois précédent", currentMonthExpenses: "Dépenses ce mois", previousMonthShort: "Mois précédent", currentMonthIncome: "Revenus ce mois", addExpenseForBreakdown: "Ajoute une dépense pour voir la répartition.", noTransactionsMonth: "Aucune transaction ce mois-ci.", noBudgetDefined: "Aucun budget défini", noPlannedOperation: "Aucune opération prévue", plannedOperation: "opération prévue", plannedOperations: "opérations prévues", included: "incluse", includedPlural: "incluses", newMonth: "Nouveau mois", expenses: "dépenses", spentMore: "Tu as dépensé", saved: "Tu as économisé", more: "de plus", less: "de moins", reliableComparison: "Ajoute des données au mois précédent pour obtenir une comparaison fiable.", min: "Min.", max: "Max.",
    journal: "JOURNAL", yourTransactions: "Tes transactions", transactionsDescription: "Ajoute, recherche et modifie rapidement tes mouvements.", add: "Ajouter", searchTransaction: "Rechercher une transaction…", allMonths: "Tous les mois", allTypes: "Tous les types", income: "Revenus", expense: "Dépenses", allStatuses: "Tous les statuts", received: "Payées / reçues", planned: "Prévues", resetFilters: "Réinitialiser les filtres", noFilterMatch: "Aucune transaction ne correspond aux filtres.", transaction: "transaction", transactionPlural: "transactions", realized: "Payée / reçue", paid: "Payée", receivedStatus: "Reçue", plannedShort: "Prévue", markPaid: "Marquer payée", markReceived: "Marquer reçue", markPlanned: "Remettre prévue",
    planning: "PLANIFICATION", financialCalendar: "Calendrier financier", calendarDescription: "Visualise les entrées et sorties jour par jour.", weekdays: ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"], calendarIncome: "Revenus", calendarExpense: "Dépenses", calendarPlanned: "Prévu", noTransactionsDay: "Aucune transaction ce jour-là.", day: "JOURNÉE", dayIncome: "Revenus", dayExpenses: "Dépenses", addThisDay: "Ajouter ce jour-là",
    control: "CONTRÔLE", monthlyBudgets: "Budgets", budgetDescription: "Fixe un montant par catégorie et par fréquence.", addBudget: "Ajouter un budget", noBudgetMonth: "Aucun budget pour ce mois. Commence par ajouter une catégorie.", used: "utilisé", remaining: "Reste", edit: "Modifier", methodKicker: "MÉTHODE RECOMMANDÉE", methodTitle: "Budget à base zéro, adapté à ta réalité", methodDescription: "Chaque dollar prévu reçoit une fonction : dépenses, épargne ou remboursement. Les opérations payées restent comparées aux prévisions.", plannedIncome: "Revenus prévus", allocatedBudget: "Montants affectés", toAllocate: "À affecter", balancedBudget: "Ton mois est équilibré : chaque dollar prévu a une fonction.", negativeAllocation: "Tes affectations dépassent les revenus prévus. Réduis une limite ou ajoute un revenu prévu.", positiveAllocation: "Il reste un montant à affecter. Donne-lui une fonction : épargne, dette ou dépense planifiée.", noIncomePlan: "Ajoute d’abord un revenu prévu pour calculer ce qui reste à affecter.",
    automation: "AUTOMATISATION", recurringTitle: "Dépenses et revenus récurrents", recurringDescription: "Prépare les opérations répétitives sans les saisir chaque mois.", recurringInfo: "Une opération prévue est générée automatiquement pour le mois courant. Tu peux ensuite la marquer comme reçue ou payée.", noRecurring: "Aucune récurrence configurée.", monthlyDay: "Le {day} de chaque mois", active: "Active", suspended: "Suspendue",
    personalization: "PERSONNALISATION", settings: "Réglages", settingsDescription: "Contrôle tes données, ton appareil et ta synchronisation.", appearance: "Apparence", appTheme: "Thème de l’application", themeDescription: "Clair, sombre ou selon ton appareil.", system: "Système", light: "Clair", dark: "Sombre", notifications: "Notifications", budgetReminders: "Rappels budgétaires", budgetReminderDescription: "Affiche une alerte lorsque le budget approche de sa limite.", upcomingRecurring: "Récurrences à venir", upcomingRecurringDescription: "Signale les opérations prévues dans les prochains jours.", allowBrowserNotifications: "Autoriser les notifications du navigateur", notificationsAllowed: "Notifications autorisées sur cet appareil.", notificationsBlocked: "Notifications bloquées dans le navigateur.", notificationsUnsupported: "Ce navigateur ne prend pas en charge les notifications.", notificationsOff: "Les notifications sont désactivées pour le moment.", workspace: "Espace budgétaire", workspaceDescription: "Chaque espace est indépendant. Le lien public ne partage aucune donnée. Sur un appareil utilisé par plusieurs personnes, crée un espace séparé.", newWorkspace: "Créer un nouvel espace", devices: "Appareils associés", devicesDescription: "Ton installation est anonyme. Pour utiliser les mêmes données sur un autre appareil, associe-le une seule fois.", pairDevice: "Associer un autre appareil", resetSync: "Réinitialiser la synchronisation", backups: "Sauvegardes et export", backupDescription: "Une copie locale est conservée automatiquement après chaque modification importante.", downloadJSON: "Télécharger une sauvegarde JSON", exportCSV: "Exporter les transactions CSV", restoreJSON: "Restaurer une sauvegarde JSON", localStorage: "Stockage local actif", versionLabel: "Version {version} · Données locales et synchronisables", anonymousId: "Identifiant anonyme : {id}…", apiNotConfigured: "Pour activer la synchronisation, configure l’URL de l’API après le déploiement.", workspaceLocal: "Espace local : {id}… · indépendant", workspaceReady: "prêt à synchroniser", workspacePaired: "associé",
    savedOnDevice: "Enregistré sur cet appareil", syncing: "Synchronisation…", synced: "Synchronisé automatiquement", offline: "Hors ligne · sauvegarde locale active", connectionRestored: "Connexion retrouvée…", localOnly: "Mode local · API non configurée",
    newTransaction: "Nouvelle transaction", editTransaction: "Modifier la transaction", movement: "MOUVEMENT", close: "Fermer", amountCAD: "Montant ($ CAD)", date: "Date", category: "Catégorie", status: "Statut", descriptionOptional: "Description", optional: "facultatif", expense: "Dépense", income: "Revenu", realizedPaid: "Payée / reçue", plannedStatus: "Prévu", save: "Enregistrer", deleteTransaction: "Supprimer cette transaction", checkTransaction: "Vérifie le montant, la date et la catégorie.", transactionSaved: "Transaction enregistrée", transactionDeleted: "Transaction supprimée", groceryExample: "Épicerie de la semaine",
    newBudget: "Nouveau budget", editBudget: "Modifier le budget", limit: "LIMITE", month: "Mois", plannedAmount: "Montant prévu ($ CAD)", deleteBudget: "Supprimer ce budget", checkBudget: "Vérifie le mois, la catégorie et le montant.", duplicateBudget: "Un budget existe déjà pour cette catégorie et ce mois.", budgetSaved: "Budget enregistré", budgetDeleted: "Budget supprimé",
    newRecurring: "Nouvelle récurrence", editRecurring: "Modifier la récurrence", recurring: "AUTOMATISATION", dayOfMonth: "Jour du mois", activeCheck: "Active", recurringExample: "Loyer, paie, abonnement", deleteRecurring: "Supprimer cette récurrence", recurringDeleteWarning: "Supprimer cette récurrence? Les transactions déjà générées seront conservées.", recurringSaved: "Récurrence enregistrée", recurringDeleted: "Récurrence supprimée", checkRecurring: "Vérifie le montant, le jour et la catégorie.",
    sync: "SYNCHRONISATION", pairTitle: "Associer un appareil", pairDescription: "Sur le nouvel appareil, colle le code ci-dessous. Il sera utilisé une seule fois pour récupérer tes données, sans compte ni mot de passe.", pairingCode: "Code d’association", copyCode: "Copier le code", importCode: "J’ai un code à importer", receivedCode: "Code reçu", pastePairCode: "Colle ici le code de ton autre appareil", importSync: "Importer et synchroniser", invalidPairing: "Code d’association invalide.", pairFailed: "Impossible d’associer cet appareil.", pairSuccess: "Appareil associé et données synchronisées", codeCopied: "Code copié", resetWorkspaceWarning: "Créer un nouvel espace? Une sauvegarde JSON de l’espace actuel sera téléchargée avant le changement. L’ancien espace restera inaccessible sans son code d’association.", resetSyncWarning: "Réinitialiser la synchronisation? Les autres appareils ne seront plus associés, mais les données de cet appareil seront conservées.", workspaceCreated: "Nouvel espace indépendant créé", restoreWarning: "Restaurer {count} transactions? Les données actuelles seront remplacées.", backupRestored: "Sauvegarde restaurée", invalidBackup: "Ce fichier n’est pas une sauvegarde valide.", backupDownloaded: "Sauvegarde JSON téléchargée.", csvDownloaded: "Export CSV téléchargé.", notificationsNotSupported: "Notifications non prises en charge", notificationsEnabled: "Notifications activées", notificationsNotEnabled: "Notifications non activées", deleteQuestion: "Supprimer cette transaction?", deleteBudgetQuestion: "Supprimer ce budget?"
  },
  en: {
    appName: "Budget Boss", brandTagline: "Your money, made clear.", navDashboard: "Dashboard", navTransactions: "Transactions", navCalendar: "Calendar", navBudgets: "Budgets", navRecurring: "Recurring", navSettings: "Settings",
    overview: "OVERVIEW", overviewMonth: "MONTH OVERVIEW", quickTransaction: "Add transaction", changeLanguage: "Change language", changeTheme: "Change theme", enableNotifications: "Enable notifications", filterByMonth: "Filter by month", filterByType: "Filter by type", filterByStatus: "Filter by status", previousMonthButton: "Previous month", nextMonthButton: "Next month", today: "Today",
    dashboard: "Dashboard", available: "AVAILABLE THIS MONTH", receivedIncome: "Income received", paidExpenses: "Expenses paid", receivedLessPaid: "Income received minus expenses paid", expensesExceedIncome: "Your expenses exceed your income received", forecast: "END-OF-MONTH FORECAST", forecastDescription: "Includes planned income and expenses.", usedBudget: "Budget used", averageExpense: "Average spending", transactions: "Transactions", onElapsedDays: "Over elapsed days", thisMonth: "This month", analysis: "ANALYSIS", whereMoney: "Where your money goes", manageBudgets: "Manage budgets", evolution: "TREND", cumulativeNet: "Cumulative net", seeCalendar: "View calendar", recent: "RECENT", latestTransactions: "Latest transactions", viewAll: "View all", comparison: "COMPARISON", previousMonth: "Compared with previous month", currentMonthExpenses: "Expenses this month", previousMonthShort: "Previous month", currentMonthIncome: "Income this month", addExpenseForBreakdown: "Add an expense to see the breakdown.", noTransactionsMonth: "No transactions this month.", noBudgetDefined: "No budget defined", noPlannedOperation: "No planned operation", plannedOperation: "planned operation", plannedOperations: "planned operations", included: "included", includedPlural: "included", newMonth: "New month", expenses: "expenses", spentMore: "You spent", saved: "You saved", more: "more", less: "less", reliableComparison: "Add data from the previous month for a reliable comparison.", min: "Min.", max: "Max.",
    journal: "LEDGER", yourTransactions: "Your transactions", transactionsDescription: "Add, search and quickly edit your movements.", add: "Add", searchTransaction: "Search a transaction…", allMonths: "All months", allTypes: "All types", income: "Income", expense: "Expenses", allStatuses: "All statuses", received: "Completed", planned: "Planned", resetFilters: "Reset filters", noFilterMatch: "No transaction matches these filters.", transaction: "transaction", transactionPlural: "transactions", realized: "Completed", paid: "paid", plannedShort: "Planned",
    planning: "PLANNING", financialCalendar: "Financial calendar", calendarDescription: "View income and expenses day by day.", weekdays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], calendarIncome: "Income", calendarExpense: "Expenses", calendarPlanned: "Planned", noTransactionsDay: "No transactions on this day.", day: "DAY", dayIncome: "Income", dayExpenses: "Expenses", addThisDay: "Add on this day",
    control: "CONTROL", monthlyBudgets: "Monthly budgets", budgetDescription: "Set a limit and track progress by category.", addBudget: "Add budget", noBudgetMonth: "No budget for this month. Start by adding a category.", used: "used", remaining: "Remaining", edit: "Edit", methodKicker: "RECOMMENDED METHOD", methodTitle: "Zero-based budgeting, adapted to you", methodDescription: "Every planned dollar gets a job: spending, saving or debt repayment. Actual operations remain compared with your plan.", plannedIncome: "Planned income", allocatedBudget: "Allocated amounts", toAllocate: "To allocate", balancedBudget: "Your month is balanced: every planned dollar has a job.", negativeAllocation: "Your allocations exceed planned income. Reduce a limit or add planned income.", positiveAllocation: "There is still money to allocate. Give it a job: savings, debt or planned spending.", noIncomePlan: "Add planned income first to calculate what remains to allocate.",
    automation: "AUTOMATION", recurringTitle: "Recurring income and expenses", recurringDescription: "Prepare repeating operations without entering them every month.", recurringInfo: "A planned operation is generated automatically for the current month. You can then mark it as received or paid.", noRecurring: "No recurring items configured.", monthlyDay: "On the {day} of each month", active: "Active", suspended: "Paused",
    personalization: "PERSONALIZATION", settings: "Settings", settingsDescription: "Control your data, device and synchronization.", appearance: "Appearance", appTheme: "App theme", themeDescription: "Light, dark or based on your device.", system: "System", light: "Light", dark: "Dark", notifications: "Notifications", budgetReminders: "Budget reminders", budgetReminderDescription: "Show an alert when a budget approaches its limit.", upcomingRecurring: "Upcoming recurring items", upcomingRecurringDescription: "Flag operations planned in the next few days.", allowBrowserNotifications: "Allow browser notifications", notificationsAllowed: "Notifications are allowed on this device.", notificationsBlocked: "Notifications are blocked in the browser.", notificationsUnsupported: "This browser does not support notifications.", notificationsOff: "Notifications are currently disabled.", workspace: "Budget space", workspaceDescription: "Each space is independent. The public link shares no data. On a device used by several people, create a separate space.", newWorkspace: "Create a new space", devices: "Paired devices", devicesDescription: "Your installation is anonymous. To use the same data on another device, pair it once.", pairDevice: "Pair another device", resetSync: "Reset synchronization", backups: "Backups and export", backupDescription: "A local copy is kept automatically after important changes.", downloadJSON: "Download JSON backup", exportCSV: "Export transactions CSV", restoreJSON: "Restore JSON backup", localStorage: "Local storage active", versionLabel: "Version {version} · Local and synchronizable data", anonymousId: "Anonymous ID: {id}…", apiNotConfigured: "To enable synchronization, configure the API URL after deployment.", workspaceLocal: "Local space: {id}… · independent", workspaceReady: "ready to sync", workspacePaired: "paired",
    savedOnDevice: "Saved on this device", syncing: "Synchronizing…", synced: "Synchronized automatically", offline: "Offline · local backup active", connectionRestored: "Connection restored…", localOnly: "Local mode · API not configured",
    newTransaction: "New transaction", editTransaction: "Edit transaction", movement: "MOVEMENT", close: "Close", amountCAD: "Amount (CAD $)", date: "Date", category: "Category", status: "Status", descriptionOptional: "Description", optional: "optional", expense: "Expense", income: "Income", realizedPaid: "Paid / received", plannedStatus: "Planned", save: "Save", deleteTransaction: "Delete this transaction", checkTransaction: "Check the amount, date and category.", transactionSaved: "Transaction saved", transactionDeleted: "Transaction deleted", groceryExample: "Weekly groceries",
    newBudget: "New budget", editBudget: "Edit budget", limit: "LIMIT", month: "Month", plannedAmount: "Planned amount (CAD $)", deleteBudget: "Delete this budget", checkBudget: "Check the month, category and amount.", duplicateBudget: "A budget already exists for this category and month.", budgetSaved: "Budget saved", budgetDeleted: "Budget deleted",
    newRecurring: "New recurring item", editRecurring: "Edit recurring item", recurring: "AUTOMATION", dayOfMonth: "Day of month", activeCheck: "Active", recurringExample: "Rent, paycheque, subscription", deleteRecurring: "Delete this recurring item", recurringDeleteWarning: "Delete this recurring item? Existing generated transactions will be kept.", recurringSaved: "Recurring item saved", recurringDeleted: "Recurring item deleted", checkRecurring: "Check the amount, day and category.",
    sync: "SYNCHRONIZATION", pairTitle: "Pair a device", pairDescription: "On the new device, paste the code below. It is used once to retrieve your data, without an account or password.", pairingCode: "Pairing code", copyCode: "Copy code", importCode: "I have a code to import", receivedCode: "Received code", pastePairCode: "Paste the code from your other device here", importSync: "Import and synchronize", invalidPairing: "Invalid pairing code.", pairFailed: "Unable to pair this device.", pairSuccess: "Device paired and data synchronized", codeCopied: "Code copied", resetWorkspaceWarning: "Create a new space? A JSON backup of the current space will download before the change. The old space remains inaccessible without its pairing code.", resetSyncWarning: "Reset synchronization? Other devices will no longer be paired, but this device's data will be kept.", workspaceCreated: "New independent space created", restoreWarning: "Restore {count} transactions? Current data will be replaced.", backupRestored: "Backup restored", invalidBackup: "This file is not a valid backup.", backupDownloaded: "JSON backup downloaded.", csvDownloaded: "CSV export downloaded.", notificationsNotSupported: "Notifications are not supported", notificationsEnabled: "Notifications enabled", notificationsNotEnabled: "Notifications not enabled", deleteQuestion: "Delete this transaction?", deleteBudgetQuestion: "Delete this budget?"
  }
};
Object.assign(TRANSLATIONS.fr, {
  appName: "Budget Boss",
  distribution: "Répartition",
  monthNet: "Net du mois",
  received: "Payées / reçues",
  realized: "Payée / reçue",
  realizedPaid: "Payée / reçue",
  paid: "Payée",
  receivedStatus: "Reçue",
  markPaid: "Marquer payée",
  markReceived: "Marquer reçue",
  markPlanned: "Remettre prévue",
  descriptionPlaceholder: "Description de l’opération",
  groceryExample: "Épicerie de la semaine",
  recurringExample: "Loyer, paie, abonnement",
  frequency: "Fréquence",
  weekly: "Hebdomadaire",
  biweekly: "Aux deux semaines",
  monthly: "Mensuelle",
  startDate: "Date de début",
  budgetAmountPerPeriod: "Montant par période ($ CAD)",
  frequencySummary: "{frequency} · à partir du {date}",
  categoriesTitle: "Catégories",
  categoriesDescription: "Garde seulement les catégories utiles et ajoute tes propres noms quand tu en as besoin.",
  addCategory: "Ajouter une catégorie",
  categorySettings: "CATÉGORIE",
  newCategory: "Nouvelle catégorie",
  categoryName: "Nom de la catégorie",
  categoryPlaceholder: "Transport",
  incomeCategory: "Revenus",
  expenseCategory: "Dépenses",
  deleteCategory: "Supprimer",
  deleteCategoryQuestion: "Supprimer cette catégorie? Les transactions existantes seront conservées.",
  categoryAlreadyExists: "Cette catégorie existe déjà.",
  categoryEmpty: "Saisis un nom de catégorie.",
  categoryUsed: "Cette catégorie est utilisée par des données existantes et sera conservée.",
  categorySaved: "Catégorie ajoutée",
  categoryDeleted: "Catégorie supprimée",
  budgetDescription: "Fixe un montant par catégorie avec une fréquence hebdomadaire, aux deux semaines ou mensuelle.",
  noBudgetMonth: "Aucun budget actif pour ce mois. Commence par ajouter une catégorie.",
  duplicateBudget: "Un budget existe déjà pour cette catégorie et cette fréquence.",
  checkBudget: "Vérifie la date de début, la catégorie et le montant.",
  dayOfMonth: "Jour du mois pour une fréquence mensuelle",
  recurringInfo: "Une opération prévue est générée automatiquement pour le mois courant et les prochains mois. Tu peux ensuite la marquer comme reçue ou payée."
});
Object.assign(TRANSLATIONS.en, {
  appName: "Budget Boss",
  quickTransaction: "Add transaction",
  distribution: "Breakdown",
  monthNet: "Month net",
  received: "Paid / received",
  realized: "Paid / received",
  realizedPaid: "Paid / received",
  paid: "Paid",
  receivedStatus: "Received",
  markPaid: "Mark paid",
  markReceived: "Mark received",
  markPlanned: "Set as planned",
  descriptionPlaceholder: "Operation description",
  groceryExample: "Weekly groceries",
  recurringExample: "Rent, paycheque, subscription",
  frequency: "Frequency",
  weekly: "Weekly",
  biweekly: "Every two weeks",
  monthly: "Monthly",
  startDate: "Start date",
  budgetAmountPerPeriod: "Amount per period (CAD $)",
  frequencySummary: "{frequency} · starting {date}",
  categoriesTitle: "Categories",
  categoriesDescription: "Keep only useful categories and add your own names whenever you need them.",
  addCategory: "Add category",
  categorySettings: "CATEGORY",
  newCategory: "New category",
  categoryName: "Category name",
  categoryPlaceholder: "Transport",
  incomeCategory: "Income",
  expenseCategory: "Expenses",
  deleteCategory: "Delete",
  deleteCategoryQuestion: "Delete this category? Existing transactions will be kept.",
  categoryAlreadyExists: "This category already exists.",
  categoryEmpty: "Enter a category name.",
  categoryUsed: "This category is used by existing data and will be kept.",
  categorySaved: "Category added",
  categoryDeleted: "Category deleted",
  budgetDescription: "Set an amount per category with a weekly, every-two-weeks or monthly frequency.",
  noBudgetMonth: "No active budget for this month. Start by adding a category.",
  duplicateBudget: "A budget already exists for this category and frequency.",
  checkBudget: "Check the start date, category and amount.",
  dayOfMonth: "Day of month for a monthly frequency",
  recurringInfo: "A planned operation is generated automatically for the current and upcoming months. You can then mark it as received or paid."
});
const $ = (id) => document.getElementById(id);
const q = (selector, root = document) => root.querySelector(selector);
const qa = (selector, root = document) => [...root.querySelectorAll(selector)];
const nowISO = () => new Date().toISOString();
const todayISO = () => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`; };
const monthISO = (date = todayISO()) => date.slice(0, 7);
const language = () => state?.settings?.language === "en" ? "en" : "fr";
const locale = () => language() === "en" ? "en-CA" : "fr-CA";
const t = (key, vars = {}) => { const template = TRANSLATIONS[language()]?.[key] ?? TRANSLATIONS.fr[key] ?? key; return String(template).replace(/\{(\w+)\}/g, (_, name) => vars[name] ?? ""); };
const categoryLabel = (category) => language() === "en" ? (CATEGORY_EN[category] || category) : category;
const money = (value) => new Intl.NumberFormat(locale(), { style: "currency", currency: "CAD", maximumFractionDigits: 2 }).format(Number(value) || 0);
const compactMoney = (value) => Math.abs(value) >= 1000 ? `${(value / 1000).toLocaleString(locale(), { maximumFractionDigits: 1 })} k$` : money(value);
const monthName = (month) => new Date(`${month}-01T12:00:00`).toLocaleDateString(locale(), { month: "long", year: "numeric" });
const dateLabel = (date, options = { day: "numeric", month: "short", year: "numeric" }) => new Date(`${date}T12:00:00`).toLocaleDateString(locale(), options);
const uid = () => crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
const sum = (rows, fn) => rows.reduce((total, row) => total + (fn(row) || 0), 0);
const isPlanned = (row) => row.status === "planned";
const actualRows = (rows) => rows.filter((row) => !isPlanned(row));
const signedAmount = (row) => row.type === "income" ? Number(row.amount) : -Number(row.amount);

let state;
let currentView = "dashboard";
let dashboardMonth = monthISO();
let calendarMonth = monthISO();
let budgetMonth = monthISO();
let editingTransactionId = null;
let editingBudgetId = null;
let editingRecurringId = null;
let syncTimer = null;
let toastTimer = null;

function defaultState() {
  const deviceId = uid();
  return {
    meta: { schemaVersion: 4, deviceId, workspaceId: uid(), workspaceSecret: randomSecret(), serverVersion: 0, createdAt: nowISO(), theme: "system" },
    settings: { currency: "CAD", language: "fr", notifyBudgets: true, notifyRecurring: true, categories: { income: [...DEFAULT_CATEGORIES.income], expense: [...DEFAULT_CATEGORIES.expense] } },
    transactions: [],
    budgets: [],
    recurring: []
  };
}

function normalizeState(input) {
  const base = defaultState();
  const source = input && typeof input === "object" ? input : {};
  const meta = { ...base.meta, ...(source.meta || {}) };
  const settings = { ...base.settings, ...(source.settings || {}), language: source.settings?.language === "en" ? "en" : "fr" };
  const hasCategoryConfig = source.settings?.categories && Array.isArray(source.settings.categories.income) && Array.isArray(source.settings.categories.expense);
  const categories = {
    income: Array.isArray(source.settings?.categories?.income) && source.settings.categories.income.length ? source.settings.categories.income.map(String).filter(Boolean) : [...DEFAULT_CATEGORIES.income],
    expense: Array.isArray(source.settings?.categories?.expense) && source.settings.categories.expense.length ? source.settings.categories.expense.map(String).filter(Boolean) : [...DEFAULT_CATEGORIES.expense]
  };
  const addUsedCategory = (type, value) => { const category = String(value || "").trim(); if (category && !categories[type].includes(category)) categories[type].push(category); };
  if (!hasCategoryConfig) {
    (source.transactions || []).forEach((row) => addUsedCategory(row.type === "income" ? "income" : "expense", row.category));
    (source.budgets || []).forEach((row) => addUsedCategory("expense", row.category));
    (source.recurring || []).forEach((row) => addUsedCategory(row.type === "income" ? "income" : "expense", row.category));
  }
  settings.categories = categories;
  const fallbackCategory = (type) => categories[type][0] || DEFAULT_CATEGORIES[type][0];
  const cleanRows = Array.isArray(source.transactions) ? source.transactions.map((row) => ({
    id: String(row.id || uid()), type: row.type === "income" ? "income" : "expense", amount: roundMoney(row.amount), date: validDate(row.date) ? row.date : todayISO(), category: String(row.category || fallbackCategory(row.type === "income" ? "income" : "expense")), description: String(row.description || ""), status: row.status === "planned" ? "planned" : "received", recurringId: row.recurringId ? String(row.recurringId) : null, createdAt: row.createdAt || nowISO(), updatedAt: row.updatedAt || row.createdAt || nowISO()
  })).filter((row) => row.amount > 0) : [];
  const cleanBudgets = Array.isArray(source.budgets) ? source.budgets.map((row) => {
    const startDate = validDate(row.startDate) ? row.startDate : validMonth(row.month) ? `${row.month}-01` : todayISO();
    return { id: String(row.id || uid()), month: monthISO(startDate), startDate, frequency: validFrequency(row.frequency), category: String(row.category || fallbackCategory("expense")), amount: roundMoney(row.amount), updatedAt: row.updatedAt || nowISO() };
  }).filter((row) => row.amount > 0) : [];
  const cleanRecurring = Array.isArray(source.recurring) ? source.recurring.map((row) => {
    const type = row.type === "income" ? "income" : "expense";
    const day = clamp(Number(row.day) || 1, 1, 31);
    const startDate = validDate(row.startDate) ? row.startDate : `${monthISO()}-${String(day).padStart(2, "0")}`;
    return { id: String(row.id || uid()), type, amount: roundMoney(row.amount), category: String(row.category || fallbackCategory(type)), description: String(row.description || ""), frequency: validFrequency(row.frequency), startDate, day, active: row.active !== false, updatedAt: row.updatedAt || nowISO() };
  }).filter((row) => row.amount > 0) : [];
  meta.schemaVersion = 4;
  return { meta, settings, transactions: cleanRows, budgets: cleanBudgets, recurring: cleanRecurring };
}

function roundMoney(value) { const n = Number(value); return Number.isFinite(n) ? Math.round(n * 100) / 100 : 0; }
function clamp(value, min, max) { return Math.min(max, Math.max(min, value)); }
function validDate(value) { return typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(new Date(`${value}T12:00:00`).getTime()); }
function validMonth(value) { return typeof value === "string" && /^\d{4}-\d{2}$/.test(value); }
const FREQUENCIES = ["weekly", "biweekly", "monthly"];
function validFrequency(value) { return FREQUENCIES.includes(value) ? value : "monthly"; }
function categoryList(type) { return state?.settings?.categories?.[type] || DEFAULT_CATEGORIES[type]; }
function frequencyLabel(value) { return t(validFrequency(value)); }
function frequencyDates(rule, month) {
  const frequency = validFrequency(rule.frequency);
  const startDate = validDate(rule.startDate) ? rule.startDate : `${month}-01`;
  const dates = [];
  if (frequency === "monthly") {
    const day = clamp(Number(rule.day) || Number(startDate.slice(8)) || 1, 1, 31);
    const date = `${month}-${String(Math.min(day, daysInMonth(month))).padStart(2, "0")}`;
    if (date >= startDate) dates.push(date);
    return dates;
  }
  const start = new Date(`${startDate}T12:00:00`);
  const step = frequency === "weekly" ? 7 : 14;
  for (let day = 1; day <= daysInMonth(month); day += 1) {
    const date = `${month}-${String(day).padStart(2, "0")}`;
    if (date < startDate) continue;
    const current = new Date(`${date}T12:00:00`);
    const difference = Math.round((current - start) / 86400000);
    if (difference >= 0 && difference % step === 0) dates.push(date);
  }
  return dates;
}
function budgetAllowance(budget, month) { return roundMoney(budget.amount * frequencyDates(budget, month).length); }
function previousMonth(month) { const [year, m] = month.split("-").map(Number); const d = new Date(year, m - 2, 1); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}`; }
function nextMonth(month) { const [year, m] = month.split("-").map(Number); const d = new Date(year, m, 1); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}`; }
function firstDayOffset(month) { return (new Date(`${month}-01T12:00:00`).getDay() + 6) % 7; }
function daysInMonth(month) { const [year, m] = month.split("-").map(Number); return new Date(year, m, 0).getDate(); }
function setText(id, text) { const element = $(id); if (element) element.textContent = text; }
function applyLanguage() {
  document.documentElement.lang = language() === "en" ? "en-CA" : "fr-CA";
  document.title = t("appName");
  qa("[data-i18n]").forEach((element) => { const textNode = [...element.childNodes].find((node) => node.nodeType === Node.TEXT_NODE); if (textNode && element.children.length) textNode.textContent = t(element.dataset.i18n); else element.textContent = t(element.dataset.i18n); });
  qa("[data-i18n-placeholder]").forEach((element) => { element.placeholder = t(element.dataset.i18nPlaceholder); });
  qa("[data-i18n-aria]").forEach((element) => { element.setAttribute("aria-label", t(element.dataset.i18nAria)); });
  const toggle = $("language-toggle"); if (toggle) { toggle.textContent = language() === "fr" ? "EN" : "FR"; toggle.title = t("changeLanguage"); }
  const theme = $("theme-select"); if (theme) { theme.options[0].textContent = t("system"); theme.options[1].textContent = t("light"); theme.options[2].textContent = t("dark"); }
  const typeFilter = $("transaction-type-filter"); if (typeFilter) { typeFilter.options[0].textContent = t("allTypes"); typeFilter.options[1].textContent = t("income"); typeFilter.options[2].textContent = t("expense"); }
  const statusFilter = $("transaction-status-filter"); if (statusFilter) { statusFilter.options[0].textContent = t("allStatuses"); statusFilter.options[1].textContent = t("received"); statusFilter.options[2].textContent = t("planned"); }
  const transactionStatus = $("transaction-status"); if (transactionStatus) { transactionStatus.options[0].textContent = t("received"); transactionStatus.options[1].textContent = t("planned"); }
  [$("budget-frequency"), $("recurring-frequency")].forEach((select) => { if (select) { select.options[0].textContent = t("weekly"); select.options[1].textContent = t("biweekly"); select.options[2].textContent = t("monthly"); } });
  const weekdays = qa(".calendar-weekdays span"); const names = TRANSLATIONS[language()].weekdays; weekdays.forEach((element, index) => { element.textContent = names[index]; });
  setText("version-label", t("versionLabel", { version: CONFIG.APP_VERSION || "4.0.0" }));
  updatePageTitle();
}

function randomSecret() {
  const bytes = new Uint8Array(32); crypto.getRandomValues(bytes); return bytesToBase64Url(bytes);
}
function bytesToBase64Url(bytes) { let binary = ""; bytes.forEach((byte) => binary += String.fromCharCode(byte)); return btoa(binary).replaceAll("+", "-").replaceAll("/", "_").replaceAll("=", ""); }
function base64UrlToBytes(value) { const padded = value.replaceAll("-", "+").replaceAll("_", "/") + "=".repeat((4 - value.length % 4) % 4); const binary = atob(padded); return Uint8Array.from(binary, (char) => char.charCodeAt(0)); }
async function sha256(text) { const hash = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text)); return bytesToBase64Url(new Uint8Array(hash)); }
async function encryptPayload(payload, secret) {
  const key = await crypto.subtle.importKey("raw", base64UrlToBytes(secret), { name: "AES-GCM" }, false, ["encrypt"]);
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const data = new TextEncoder().encode(JSON.stringify(payload));
  const encrypted = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, data);
  const result = new Uint8Array(iv.length + encrypted.byteLength); result.set(iv); result.set(new Uint8Array(encrypted), iv.length); return bytesToBase64Url(result);
}
async function decryptPayload(blob, secret) {
  const bytes = base64UrlToBytes(blob); const iv = bytes.slice(0, 12); const encrypted = bytes.slice(12);
  const key = await crypto.subtle.importKey("raw", base64UrlToBytes(secret), { name: "AES-GCM" }, false, ["decrypt"]);
  const decrypted = await crypto.subtle.decrypt({ name: "AES-GCM", iv }, key, encrypted); return JSON.parse(new TextDecoder().decode(decrypted));
}

function exportableState() { return { schemaVersion: 4, transactions: state.transactions, budgets: state.budgets, recurring: state.recurring, settings: state.settings }; }
function pairingCode() { return btoa(JSON.stringify({ v: 1, w: state.meta.workspaceId, s: state.meta.workspaceSecret })).replaceAll("+", "-").replaceAll("/", "_").replaceAll("=", ""); }
function parsePairingCode(value) { try { const parsed = JSON.parse(atob(value.trim().replaceAll("-", "+").replaceAll("_", "/") + "=".repeat((4 - value.trim().length % 4) % 4))); if (parsed.v !== 1 || typeof parsed.w !== "string" || typeof parsed.s !== "string") throw Error(); return parsed; } catch { throw Error("Code d’association invalide."); } }

function openDB() {
  return new Promise((resolve, reject) => { const request = indexedDB.open(DB_NAME, DB_VERSION); request.onupgradeneeded = () => { const db = request.result; if (!db.objectStoreNames.contains("state")) db.createObjectStore("state", { keyPath: "id" }); if (!db.objectStoreNames.contains("snapshots")) { const snapshots = db.createObjectStore("snapshots", { keyPath: "id", autoIncrement: true }); snapshots.createIndex("createdAt", "createdAt"); } }; request.onsuccess = () => resolve(request.result); request.onerror = () => reject(request.error); });
}
async function idbGet(storeName, key) { const db = await openDB(); return new Promise((resolve, reject) => { const tx = db.transaction(storeName, "readonly"); const req = tx.objectStore(storeName).get(key); req.onsuccess = () => resolve(req.result); req.onerror = () => reject(req.error); }); }
async function idbPut(storeName, value) { const db = await openDB(); return new Promise((resolve, reject) => { const tx = db.transaction(storeName, "readwrite"); tx.objectStore(storeName).put(value); tx.oncomplete = resolve; tx.onerror = () => reject(tx.error); }); }
async function idbAdd(storeName, value) { const db = await openDB(); return new Promise((resolve, reject) => { const tx = db.transaction(storeName, "readwrite"); const req = tx.objectStore(storeName).add(value); req.onsuccess = () => resolve(req.result); req.onerror = () => reject(req.error); }); }
async function idbAll(storeName) { const db = await openDB(); return new Promise((resolve, reject) => { const tx = db.transaction(storeName, "readonly"); const req = tx.objectStore(storeName).getAll(); req.onsuccess = () => resolve(req.result); req.onerror = () => reject(req.error); }); }
async function idbDelete(storeName, key) { const db = await openDB(); return new Promise((resolve, reject) => { const tx = db.transaction(storeName, "readwrite"); tx.objectStore(storeName).delete(key); tx.oncomplete = resolve; tx.onerror = () => reject(tx.error); }); }

async function loadState() {
  const saved = await idbGet("state", "current");
  if (saved?.value) return normalizeState(saved.value);
  let imported = null;
  try { const legacy = JSON.parse(localStorage.getItem(LEGACY_KEY) || "null"); if (Array.isArray(legacy)) imported = { transactions: legacy }; } catch { /* anciennes données invalides: on démarre proprement */ }
  const fresh = normalizeState(imported || defaultState());
  await idbPut("state", { id: "current", value: fresh, savedAt: nowISO() });
  if (imported) await idbAdd("snapshots", { createdAt: nowISO(), value: fresh, reason: "migration-localStorage" });
  return fresh;
}
async function saveLocal(makeSnapshot = true) {
  await idbPut("state", { id: "current", value: state, savedAt: nowISO() });
  if (makeSnapshot) { await idbAdd("snapshots", { createdAt: nowISO(), value: exportableState(), reason: "automatic" }); const snapshots = (await idbAll("snapshots")).sort((a,b) => String(b.createdAt).localeCompare(String(a.createdAt))); for (const item of snapshots.slice(5)) await idbDelete("snapshots", item.id); }
  setText("storage-status", `${language() === "en" ? "Last local backup" : "Dernière sauvegarde locale"} : ${new Date().toLocaleTimeString(locale(), { hour: "2-digit", minute: "2-digit" })}`);
}

function apiBase() { return String(CONFIG.API_BASE_URL || "").replace(/\/$/, ""); }
async function apiAuth() { return sha256(`${state.meta.workspaceId}:${state.meta.workspaceSecret}`); }
function setSyncStatus(kind, label) { const dot = $("sync-dot"); if (dot) dot.className = `sync-dot ${kind || ""}`; setText("sync-label", label); setText("footer-sync", label); }
async function syncNow() {
  if (!apiBase()) { setSyncStatus("", t("savedOnDevice")); return; }
  setSyncStatus("syncing", t("syncing"));
  try {
    const token = await apiAuth(); const blob = await encryptPayload(exportableState(), state.meta.workspaceSecret);
    const response = await fetch(`${apiBase()}/api/sync`, { method: "PUT", headers: { "content-type": "application/json" }, body: JSON.stringify({ workspaceId: state.meta.workspaceId, token, expectedVersion: state.meta.serverVersion || 0, blob }) });
    if (response.status === 409) { const conflict = await response.json(); const remote = await decryptPayload(conflict.blob, state.meta.workspaceSecret); state = mergeSharedState(state, remote); state.meta.serverVersion = Number(conflict.version) || 0; await saveLocal(false); return syncNow(); }
    if (!response.ok) throw Error(`HTTP ${response.status}`);
    const result = await response.json(); state.meta.serverVersion = Number(result.version) || state.meta.serverVersion; await saveLocal(false); setSyncStatus("online", t("synced"));
  } catch (error) { console.warn("Synchronisation indisponible", error); setSyncStatus("error", t("offline")); }
}
function scheduleSync() { clearTimeout(syncTimer); syncTimer = setTimeout(() => syncNow(), 900); }
async function pullRemote(replaceIfEmpty = false) {
  if (!apiBase()) throw Error("L’API de synchronisation n’est pas configurée.");
  const token = await apiAuth(); const response = await fetch(`${apiBase()}/api/sync?workspaceId=${encodeURIComponent(state.meta.workspaceId)}&token=${encodeURIComponent(token)}`);
  if (response.status === 404) { await syncNow(); return; }
  if (!response.ok) throw Error(`HTTP ${response.status}`);
  const result = await response.json(); const remote = await decryptPayload(result.blob, state.meta.workspaceSecret);
  if (replaceIfEmpty || state.transactions.length === 0 && state.budgets.length === 0 && state.recurring.length === 0) state = mergeSharedState(state, remote); else state = mergeSharedState(state, remote);
  state.meta.serverVersion = Number(result.version) || 0; await saveLocal(false); renderAll(); setSyncStatus("online", t("synced"));
}
function mergeSharedState(local, remote) {
  const mergeRows = (left, right) => { const map = new Map((left || []).map((row) => [row.id, row])); for (const row of (right || [])) { const current = map.get(row.id); if (!current || String(row.updatedAt || "") > String(current.updatedAt || "")) map.set(row.id, row); } return [...map.values()]; };
  return { meta: local.meta, settings: { ...local.settings, ...(remote.settings || {}) }, transactions: mergeRows(local.transactions, remote.transactions), budgets: mergeRows(local.budgets, remote.budgets), recurring: mergeRows(local.recurring, remote.recurring) };
}

async function commit(next, message = "Enregistré") { state = normalizeState(next); await saveLocal(true); renderAll(); scheduleSync(); if (message) showToast(message); checkNotifications(); }
function showToast(message) { const toast = $("toast"); toast.textContent = message; toast.classList.add("visible"); clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove("visible"), 2600); }

function applyTheme() {
  const theme = state.meta.theme || "system"; document.body.dataset.theme = theme; if ($("theme-select")) $("theme-select").value = theme; const isDark = theme === "dark" || theme === "system" && matchMedia("(prefers-color-scheme: dark)").matches; const toggle = $("theme-toggle"); if (toggle) { toggle.dataset.mode = isDark ? "dark" : "light"; toggle.setAttribute("aria-label", t("changeTheme")); }
}
function changeTheme(theme) { state.meta.theme = theme; saveLocal(false); applyTheme(); scheduleSync(); }
function changeLanguage() { state.settings.language = language() === "fr" ? "en" : "fr"; saveLocal(false); renderAll(); scheduleSync(); }
function updatePageTitle() { const labels = { dashboard: "dashboard", transactions: "navTransactions", calendar: "navCalendar", budgets: "navBudgets", recurring: "navRecurring", settings: "navSettings" }; setText("page-title", t(labels[currentView] || "dashboard")); setText("today-label", currentView === "dashboard" ? t("overviewMonth") : "BUDGET BOSS"); }
function setView(view) { currentView = view; qa(".nav-item").forEach((button) => button.classList.toggle("active", button.dataset.view === view)); qa("[data-view-panel]").forEach((panel) => panel.classList.toggle("active", panel.id === `view-${view}`)); updatePageTitle(); renderAll(); window.scrollTo({ top: 0, behavior: "smooth" }); }

function rowsInMonth(month) { return state.transactions.filter((row) => row.date.startsWith(month)); }
function actualTotals(rows) { const actual = actualRows(rows); return { income: sum(actual.filter((r) => r.type === "income"), (r) => r.amount), expense: sum(actual.filter((r) => r.type === "expense"), (r) => r.amount) }; }
function allTotals(rows) { return { income: sum(rows.filter((r) => r.type === "income"), (r) => r.amount), expense: sum(rows.filter((r) => r.type === "expense"), (r) => r.amount) }; }
function renderAll() { applyTheme(); renderDashboard(); renderTransactions(); renderCalendar(); renderBudgets(); renderRecurring(); renderSettings(); applyLanguage(); }
function renderDashboard() {
  const rows = rowsInMonth(dashboardMonth); const actual = actualTotals(rows); const forecast = allTotals(rows); const previous = actualTotals(rowsInMonth(previousMonth(dashboardMonth))); const balance = actual.income - actual.expense; const forecastBalance = forecast.income - forecast.expense;
  setText("month-label", monthName(dashboardMonth)); setText("dash-balance", money(balance)); setText("dash-income", money(actual.income)); setText("dash-expense", money(actual.expense)); setText("dash-forecast", money(forecastBalance)); setText("dash-balance-note", balance >= 0 ? t("receivedLessPaid") : t("expensesExceedIncome"));
  const trend = $("dash-trend"); const difference = previous.expense ? (actual.expense - previous.expense) / previous.expense * 100 : 0; trend.textContent = previous.expense ? `${difference > 0 ? "+" : ""}${difference.toFixed(0)} % ${t("expenses").toLowerCase()}` : t("newMonth"); trend.classList.toggle("down", difference > 0);
  const plannedCount = rows.filter(isPlanned).length; setText("forecast-bar-label", plannedCount ? `${plannedCount} ${plannedCount > 1 ? t("plannedOperations") : t("plannedOperation")} ${plannedCount > 1 ? t("includedPlural") : t("included")}` : t("noPlannedOperation")); const barMax = Math.max(Math.abs(forecast.income), Math.abs(forecast.expense), 1); $("forecast-bar-fill").style.width = `${Math.min(100, Math.max(0, Math.abs(forecastBalance) / barMax * 100))}%`;
  const budgets = state.budgets.filter((budget) => budgetAllowance(budget, dashboardMonth) > 0); const totalBudget = sum(budgets, (b) => budgetAllowance(b, dashboardMonth)); const used = totalBudget ? actual.expense / totalBudget * 100 : 0; setText("dash-budget-used", `${Math.round(used)} %`);
  setText("dash-budget-note", totalBudget ? `${money(actual.expense)} / ${money(totalBudget)}` : t("noBudgetDefined"));
  const elapsed = dashboardMonth < monthISO() ? daysInMonth(dashboardMonth) : dashboardMonth > monthISO() ? 0 : Number(todayISO().slice(8)); const averageNote = language() === "en" ? (elapsed ? `Over ${elapsed} elapsed day${elapsed > 1 ? "s" : ""}` : "The month has not started") : (elapsed ? `Sur ${elapsed} jour${elapsed > 1 ? "s" : ""} écoulé${elapsed > 1 ? "s" : ""}` : "Le mois n’a pas commencé"); setText("dash-average", elapsed ? money(actual.expense / elapsed) : "—"); setText("dash-average-note", averageNote); setText("dash-count", String(rows.length)); const completedLabel = language() === "en" ? "paid / received" : "payées / reçues"; const plannedLabel = language() === "en" ? "planned" : `prévue${rows.filter(isPlanned).length > 1 ? "s" : ""}`; setText("dash-count-note", `${actualRows(rows).length} ${completedLabel} · ${rows.filter(isPlanned).length} ${plannedLabel}`);
  renderCategoryBars(actual, budgets); renderLineChart(rows); renderRecent(rows); renderComparison(actual, previous);
}
function renderCategoryBars(totals, budgets) {
  const rows = rowsInMonth(dashboardMonth).filter((row) => row.type === "expense" && !isPlanned(row)); const grouped = categoryList("expense").map((category, index) => ({ category, amount: sum(rows.filter((r) => r.category === category), (r) => r.amount), budget: sum(state.budgets.filter((b) => b.category === category), (b) => budgetAllowance(b, dashboardMonth)), color: COLORS[index % COLORS.length] })).filter((row) => row.amount > 0 || row.budget > 0); const max = Math.max(...grouped.map((row) => row.amount), 1); $("category-bars").replaceChildren(); $("category-empty").hidden = grouped.length > 0; for (const row of grouped) { const item = document.createElement("div"); item.className = "category-row"; const percentage = totals.expense ? row.amount / totals.expense * 100 : 0; item.innerHTML = `<div class="category-line"><span>${escapeHTML(categoryLabel(row.category))}</span><b>${percentage.toFixed(0)} % <small style="color:var(--muted);font-weight:400">${money(row.amount)}${row.budget ? ` / ${money(row.budget)}` : ""}</small></b></div><div class="category-track"><i style="width:${Math.min(100, row.amount / max * 100)}%;background:${row.color}"></i></div>`; $("category-bars").append(item); }
}
function renderLineChart(rows) {
  const days = daysInMonth(dashboardMonth); let balance = 0; const values = [0]; for (let day = 1; day <= days; day++) { const date = `${dashboardMonth}-${String(day).padStart(2,"0")}`; balance += sum(rows.filter((r) => r.date === date && !isPlanned(r)), signedAmount); values.push(balance); }
  const width = 600, height = 180, padLeft = 15, padRight = 8, padTop = 15, padBottom = 25; const low = Math.min(0, ...values), high = Math.max(0, ...values), span = high - low || 1; const x = (index) => padLeft + index / days * (width - padLeft - padRight); const y = (value) => padTop + (high - value) / span * (height - padTop - padBottom); const path = values.map((value, index) => `${index ? "L" : "M"}${x(index).toFixed(1)},${y(value).toFixed(1)}`).join(" "); $("line-chart").innerHTML = `<svg viewBox="0 0 ${width} ${height}" role="img" aria-label="${escapeHTML(t("cumulativeNet"))}"><line x1="${padLeft}" y1="${y(0)}" x2="${width-padRight}" y2="${y(0)}" stroke="currentColor" opacity=".15" stroke-dasharray="4 4"/><path d="${path}" fill="none" stroke="#6f966a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><text x="${padLeft}" y="${height-3}" font-size="11" fill="currentColor" opacity=".55">1</text><text x="${width-padRight-15}" y="${height-3}" font-size="11" fill="currentColor" opacity=".55">${days}</text></svg>`; setText("line-chart-range", `${t("min")} ${money(low)} · ${t("max")} ${money(high)}`);
}
function renderRecent(rows) { const list = $("recent-list"); list.replaceChildren(); const sorted = [...rows].sort((a,b) => String(b.date).localeCompare(String(a.date)) || String(b.updatedAt).localeCompare(String(a.updatedAt))).slice(0, 5); $("recent-empty").hidden = sorted.length > 0; for (const row of sorted) list.append(transactionElement(row)); }
function renderComparison(current, previous) { const container = $("comparison-panel"); container.innerHTML = `<div class="comparison-item"><span>${t("currentMonthExpenses")}</span><b>${money(current.expense)}</b></div><div class="comparison-item"><span>${t("previousMonthShort")}</span><b>${money(previous.expense)}</b></div><div class="comparison-item"><span>${t("currentMonthIncome")}</span><b>${money(current.income)}</b></div>`; }

function transactionElement(row) { const item = document.createElement("div"); item.className = "transaction-row"; item.dataset.id = row.id; item.tabIndex = 0; const title = row.description || categoryLabel(row.category); const sign = row.type === "income" ? "+" : "−"; const status = isPlanned(row) ? t("plannedShort") : row.type === "income" ? t("receivedStatus") : t("paid"); const nextAction = isPlanned(row) ? row.type === "income" ? t("markReceived") : t("markPaid") : t("markPlanned"); item.innerHTML = `<span class="transaction-main"><span class="transaction-icon ${row.type}" aria-hidden="true"></span><span class="transaction-copy"><strong>${escapeHTML(title)}</strong><small>${escapeHTML(categoryLabel(row.category))} · ${dateLabel(row.date)} · ${status}</small></span></span><span class="transaction-actions"><span class="transaction-amount ${row.type} ${isPlanned(row) ? "planned" : ""}">${sign}${money(row.amount)}</span><button class="status-toggle ${isPlanned(row) ? "planned" : "paid"}" type="button" title="${escapeHTML(nextAction)}">${escapeHTML(nextAction)}</button></span>`; item.addEventListener("click", (event) => { if (!event.target.closest(".status-toggle")) openTransaction(row.id); }); item.addEventListener("keydown", (event) => { if (event.key === "Enter" && !event.target.closest(".status-toggle")) openTransaction(row.id); }); q(".status-toggle", item).addEventListener("click", (event) => { event.stopPropagation(); toggleTransactionStatus(row.id); }); return item; }
async function toggleTransactionStatus(id) { const row = state.transactions.find((item) => item.id === id); if (!row) return; const status = row.status === "planned" ? "received" : "planned"; await commit({ ...state, transactions: state.transactions.map((item) => item.id === id ? { ...item, status, updatedAt: nowISO() } : item) }, status === "planned" ? t("plannedShort") : row.type === "income" ? t("receivedStatus") : t("paid")); }
function escapeHTML(value) { return String(value).replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char])); }

function renderTransactions() { populateMonthFilter(); const search = $("transaction-search").value.trim().toLowerCase(); const month = $("transaction-month-filter").value; const type = $("transaction-type-filter").value; const status = $("transaction-status-filter").value; const filtered = state.transactions.filter((row) => (!search || `${row.description} ${categoryLabel(row.category)} ${row.amount}`.toLowerCase().includes(search)) && (!month || month === "all" || row.date.startsWith(month)) && (type === "all" || row.type === type) && (status === "all" || row.status === status)).sort((a,b) => String(b.date).localeCompare(String(a.date)) || String(b.updatedAt).localeCompare(String(a.updatedAt))); const list = $("transaction-list"); list.replaceChildren(); filtered.forEach((row) => list.append(transactionElement(row))); setText("transaction-count", `${filtered.length} ${filtered.length > 1 ? t("transactionPlural") : t("transaction")}`); $("transaction-empty").hidden = filtered.length > 0; }
function populateMonthFilter() { const select = $("transaction-month-filter"); const old = select.value; const months = new Set([monthISO(), ...state.transactions.map((row) => monthISO(row.date))]); select.replaceChildren(new Option(t("allMonths"), "all"), ...[...months].sort().reverse().map((month) => new Option(monthName(month), month))); if ([...select.options].some((option) => option.value === old)) select.value = old; }

function renderCalendar() { setText("calendar-title", monthName(calendarMonth)); const grid = $("calendar-grid"); grid.replaceChildren(); const offset = firstDayOffset(calendarMonth); for (let i = 0; i < offset; i++) { const cell = document.createElement("div"); cell.className = "calendar-cell outside"; grid.append(cell); } for (let day = 1; day <= daysInMonth(calendarMonth); day++) { const date = `${calendarMonth}-${String(day).padStart(2,"0")}`; const rows = state.transactions.filter((row) => row.date === date); const incomes = sum(rows.filter((r) => r.type === "income" && !isPlanned(r)), (r) => r.amount); const expenses = sum(rows.filter((r) => r.type === "expense" && !isPlanned(r)), (r) => r.amount); const planned = sum(rows.filter(isPlanned), (r) => r.amount); const cell = document.createElement("button"); cell.type = "button"; cell.className = `calendar-cell${date === todayISO() ? " today" : ""}`; cell.innerHTML = `<span class="calendar-date">${day}</span><span class="calendar-values">${incomes ? `<span class="income">+${compactMoney(incomes)}</span>` : ""}${expenses ? `<span class="expense">−${compactMoney(expenses)}</span>` : ""}${planned ? `<span class="planned">· ${compactMoney(planned)}</span>` : ""}</span>`; cell.addEventListener("click", () => openDay(date)); grid.append(cell); } }

function renderBudgets() { setText("budget-month-label", monthName(budgetMonth)); renderBudgetMethod(); const list = $("budget-list"); list.replaceChildren(); const budgets = state.budgets.filter((row) => budgetAllowance(row, budgetMonth) > 0).sort((a,b) => categoryLabel(a.category).localeCompare(categoryLabel(b.category), locale())); $("budget-empty").hidden = budgets.length > 0; for (const budget of budgets) { const allowance = budgetAllowance(budget, budgetMonth); const spent = sum(state.transactions.filter((row) => row.date.startsWith(budgetMonth) && row.category === budget.category && row.type === "expense" && !isPlanned(row)), (r) => r.amount); const percent = allowance ? spent / allowance * 100 : 0; const card = document.createElement("article"); card.className = "budget-card"; card.innerHTML = `<header><div><h3>${escapeHTML(categoryLabel(budget.category))}</h3><small class="frequency-badge">${escapeHTML(frequencyLabel(budget.frequency))}</small></div><button class="edit-link" type="button">${t("edit")}</button></header><div class="budget-values"><strong>${money(spent)}</strong><span>${language() === "en" ? "of" : "sur"} ${money(allowance)}</span></div><div class="progress-track"><i class="${percent > 100 ? "over" : ""}" style="width:${Math.min(100, percent)}%"></i></div><footer><span>${Math.round(percent)} % ${t("used")}</span><span>${t("remaining")} ${money(Math.max(0, allowance - spent))}</span></footer>`; q(".edit-link", card).addEventListener("click", () => openBudget(budget.id)); list.append(card); } }

function renderBudgetMethod() { const rows = rowsInMonth(budgetMonth); const income = sum(rows.filter((row) => row.type === "income"), (row) => row.amount); const allocated = sum(state.budgets, (budget) => budgetAllowance(budget, budgetMonth)); const remaining = roundMoney(income - allocated); setText("method-income", money(income)); setText("method-allocated", money(allocated)); setText("method-unassigned", money(remaining)); const tip = $("method-tip"); if (!tip) return; tip.className = `method-tip ${remaining < 0 ? "negative" : remaining === 0 && income > 0 ? "balanced" : ""}`; tip.textContent = income === 0 ? t("noIncomePlan") : remaining < 0 ? t("negativeAllocation") : remaining === 0 ? t("balancedBudget") : t("positiveAllocation"); }

function renderRecurring() { const list = $("recurring-list"); list.replaceChildren(); const rows = [...state.recurring].sort((a,b) => Number(b.active) - Number(a.active) || String(a.startDate).localeCompare(String(b.startDate))); $("recurring-empty").hidden = rows.length > 0; for (const row of rows) { const card = document.createElement("button"); card.type = "button"; card.className = "recurring-card"; const dateText = row.frequency === "monthly" ? dateLabel(row.startDate, { day: "numeric", month: "short" }) : dateLabel(row.startDate, { day: "numeric", month: "short", year: "numeric" }); card.innerHTML = `<span class="recurring-card-main"><span class="transaction-icon ${row.type}" aria-hidden="true"></span><span><h3>${escapeHTML(row.description || categoryLabel(row.category))}</h3><p>${escapeHTML(frequencyLabel(row.frequency))} · ${t("startDate").toLowerCase()} ${dateText} · ${escapeHTML(categoryLabel(row.category))} · ${row.active ? t("active") : t("suspended")}</p></span></span><aside><strong class="${row.type === "income" ? "transaction-amount income" : "transaction-amount"}">${row.type === "income" ? "+" : "−"}${money(row.amount)}</strong><small>${t("edit")}</small></aside>`; card.addEventListener("click", () => openRecurring(row.id)); list.append(card); } }

function renderSettings() { setText("device-code", apiBase() ? `${state.meta.workspaceId.slice(0, 8)} · ${state.meta.serverVersion ? t("workspacePaired") : t("workspaceReady")}` : t("localOnly")); $("budget-notifications").checked = state.settings.notifyBudgets !== false; $("recurring-notifications").checked = state.settings.notifyRecurring !== false; const permission = "Notification" in window ? Notification.permission : "unsupported"; setText("notification-status", permission === "granted" ? t("notificationsAllowed") : permission === "denied" ? t("notificationsBlocked") : permission === "unsupported" ? t("notificationsUnsupported") : t("notificationsOff")); setText("sync-detail", apiBase() ? t("anonymousId", { id: state.meta.workspaceId.slice(0, 8) }) : t("apiNotConfigured")); setText("workspace-detail", t("workspaceLocal", { id: state.meta.workspaceId.slice(0, 8) })); renderCategoryManager(); }

function renderCategoryManager() { const container = $("category-list"); if (!container) return; container.replaceChildren(); for (const type of ["income", "expense"]) { const group = document.createElement("section"); group.className = "category-group"; const heading = document.createElement("h4"); heading.textContent = type === "income" ? t("incomeCategory") : t("expenseCategory"); group.append(heading); const list = document.createElement("div"); list.className = "category-chips"; for (const category of categoryList(type)) { const chip = document.createElement("span"); chip.className = "category-chip"; chip.innerHTML = `<span>${escapeHTML(categoryLabel(category))}</span>`; if (!DEFAULT_CATEGORIES[type].includes(category)) { const remove = document.createElement("button"); remove.type = "button"; remove.className = "category-remove"; remove.textContent = "×"; remove.title = t("deleteCategory"); remove.setAttribute("aria-label", `${t("deleteCategory")} ${categoryLabel(category)}`); remove.onclick = () => deleteCategory(type, category); chip.append(remove); } list.append(chip); } group.append(list); container.append(group); } }
function openCategoryDialog() { $("category-form").reset(); $("category-error").textContent = ""; q('input[name="category-type"][value="expense"]').checked = true; $("category-dialog").showModal(); }
async function submitCategory(event) { event.preventDefault(); const type = q('input[name="category-type"]:checked').value; const name = $("category-name").value.trim(); if (!name) { $("category-error").textContent = t("categoryEmpty"); return; } if (categoryList(type).some((category) => category.toLocaleLowerCase(locale()) === name.toLocaleLowerCase(locale()))) { $("category-error").textContent = t("categoryAlreadyExists"); return; } const categories = { ...state.settings.categories, [type]: [...categoryList(type), name] }; $("category-dialog").close(); await commit({ ...state, settings: { ...state.settings, categories } }, t("categorySaved")); }
async function deleteCategory(type, category) { if (DEFAULT_CATEGORIES[type].includes(category)) return; if (!confirm(t("deleteCategoryQuestion"))) return; const categories = { ...state.settings.categories, [type]: categoryList(type).filter((item) => item !== category) }; await commit({ ...state, settings: { ...state.settings, categories } }, t("categoryDeleted")); }

function setTransactionCategories(type, selected) { const select = $("transaction-category"); select.replaceChildren(...categoryList(type).map((category) => new Option(categoryLabel(category), category))); if (selected && !categoryList(type).includes(selected)) select.append(new Option(categoryLabel(selected), selected)); if (selected) select.value = selected; }
function setRecurringCategories(type, selected) { const select = $("recurring-category"); select.replaceChildren(...categoryList(type).map((category) => new Option(categoryLabel(category), category))); if (selected && !categoryList(type).includes(selected)) select.append(new Option(categoryLabel(selected), selected)); if (selected) select.value = selected; }
function openTransaction(id = null, dateOverride = null) { editingTransactionId = id; const row = state.transactions.find((item) => item.id === id); $("transaction-form").reset(); $("transaction-dialog-title").textContent = row ? t("editTransaction") : t("newTransaction"); q(`input[name="transaction-type"][value="${row?.type || "expense"}"]`).checked = true; setTransactionCategories(row?.type || "expense", row?.category); $("transaction-amount").value = row?.amount || ""; $("transaction-date").value = row?.date || dateOverride || todayISO(); $("transaction-status").value = row?.status || "received"; $("transaction-description").value = row?.description || ""; $("transaction-delete").hidden = !row; $("transaction-error").textContent = ""; $("transaction-dialog").showModal(); }
async function submitTransaction(event) { event.preventDefault(); const type = q('input[name="transaction-type"]:checked').value; const amount = roundMoney($("transaction-amount").value); const date = $("transaction-date").value; const category = $("transaction-category").value; if (!(amount > 0) || !validDate(date) || !category) { $("transaction-error").textContent = t("checkTransaction"); return; } const row = { id: editingTransactionId || uid(), type, amount, date, category, status: $("transaction-status").value, description: $("transaction-description").value.trim(), recurringId: state.transactions.find((item) => item.id === editingTransactionId)?.recurringId || null, createdAt: state.transactions.find((item) => item.id === editingTransactionId)?.createdAt || nowISO(), updatedAt: nowISO() }; const rows = editingTransactionId ? state.transactions.map((item) => item.id === editingTransactionId ? row : item) : [...state.transactions, row]; dashboardMonth = monthISO(date); calendarMonth = monthISO(date); $("transaction-dialog").close(); await commit({ ...state, transactions: rows }, t("transactionSaved")); }

function openBudget(id = null) { editingBudgetId = id; const row = state.budgets.find((item) => item.id === id); $("budget-form").reset(); $("budget-dialog-title").textContent = row ? t("editBudget") : t("newBudget"); $("budget-category").replaceChildren(...categoryList("expense").map((category) => new Option(categoryLabel(category), category))); $("budget-start-date").value = row?.startDate || `${budgetMonth}-01`; $("budget-frequency").value = row?.frequency || "monthly"; if (row) $("budget-category").value = row.category; $("budget-amount").value = row?.amount || ""; $("budget-delete").hidden = !row; $("budget-error").textContent = ""; $("budget-dialog").showModal(); }
async function submitBudget(event) { event.preventDefault(); const startDate = $("budget-start-date").value; const category = $("budget-category").value; const frequency = validFrequency($("budget-frequency").value); const amount = roundMoney($("budget-amount").value); if (!validDate(startDate) || !category || !(amount > 0)) { $("budget-error").textContent = t("checkBudget"); return; } const duplicate = state.budgets.find((row) => row.startDate === startDate && row.category === category && validFrequency(row.frequency) === frequency && row.id !== editingBudgetId); if (duplicate) { $("budget-error").textContent = t("duplicateBudget"); return; } const row = { id: editingBudgetId || uid(), month: monthISO(startDate), startDate, frequency, category, amount, updatedAt: nowISO() }; const budgets = editingBudgetId ? state.budgets.map((item) => item.id === editingBudgetId ? row : item) : [...state.budgets, row]; $("budget-dialog").close(); budgetMonth = monthISO(startDate); dashboardMonth = monthISO(startDate); await commit({ ...state, budgets }, t("budgetSaved")); }

function updateRecurringFrequencyFields() { const frequency = validFrequency($("recurring-frequency").value); const dayLabel = $("recurring-day-label"); const day = $("recurring-day"); const monthly = frequency === "monthly"; if (dayLabel) dayLabel.hidden = !monthly; if (day) day.required = monthly; }
function openRecurring(id = null) { editingRecurringId = id; const row = state.recurring.find((item) => item.id === id); $("recurring-form").reset(); $("recurring-dialog-title").textContent = row ? t("editRecurring") : t("newRecurring"); q(`input[name="recurring-type"][value="${row?.type || "expense"}"]`).checked = true; setRecurringCategories(row?.type || "expense", row?.category); $("recurring-amount").value = row?.amount || ""; $("recurring-frequency").value = row?.frequency || "monthly"; $("recurring-start-date").value = row?.startDate || todayISO(); $("recurring-day").value = row?.day || Number((row?.startDate || todayISO()).slice(8)); $("recurring-description").value = row?.description || ""; $("recurring-active").checked = row?.active !== false; $("recurring-delete").hidden = !row; $("recurring-error").textContent = ""; updateRecurringFrequencyFields(); $("recurring-dialog").showModal(); }
async function submitRecurring(event) { event.preventDefault(); const type = q('input[name="recurring-type"]:checked').value; const amount = roundMoney($("recurring-amount").value); const frequency = validFrequency($("recurring-frequency").value); const startDate = $("recurring-start-date").value; const day = clamp(Number($("recurring-day").value) || Number(startDate.slice(8)), 1, 31); const category = $("recurring-category").value; if (!(amount > 0) || !category || !validDate(startDate)) { $("recurring-error").textContent = t("checkRecurring"); return; } const row = { id: editingRecurringId || uid(), type, amount, frequency, startDate, day, category, description: $("recurring-description").value.trim(), active: $("recurring-active").checked, updatedAt: nowISO() }; const recurring = editingRecurringId ? state.recurring.map((item) => item.id === editingRecurringId ? row : item) : [...state.recurring, row]; $("recurring-dialog").close(); await commit({ ...state, recurring }, t("recurringSaved")); await ensureRecurringTransactions(); renderAll(); scheduleSync(); }
async function ensureRecurringTransactions() { let changed = false; const rows = [...state.transactions]; const months = [monthISO()]; for (let index = 1; index <= 12; index += 1) months.push(nextMonth(months[index - 1])); for (const recurring of state.recurring.filter((row) => row.active)) { for (const month of months) for (const date of frequencyDates(recurring, month)) { const id = `${recurring.id}:${date}`; if (rows.some((row) => row.id === id || row.recurringId === recurring.id && row.date === date)) continue; rows.push({ id, type: recurring.type, amount: recurring.amount, date, category: recurring.category, description: recurring.description || recurring.category, status: "planned", recurringId: recurring.id, createdAt: nowISO(), updatedAt: nowISO() }); changed = true; } } if (changed) { state.transactions = rows; await saveLocal(true); scheduleSync(); } }

function openDay(date) { const rows = state.transactions.filter((row) => row.date === date).sort((a,b) => String(a.updatedAt).localeCompare(String(b.updatedAt))); setText("day-dialog-title", dateLabel(date, { weekday: "long", day: "numeric", month: "long" })); const totals = allTotals(rows); setText("day-dialog-total", `${t("dayIncome")} : ${money(totals.income)} · ${t("dayExpenses")} : ${money(totals.expense)}`); const list = $("day-dialog-list"); list.replaceChildren(); if (!rows.length) { const empty = document.createElement("div"); empty.className = "empty-state small"; empty.textContent = t("noTransactionsDay"); list.append(empty); } else rows.forEach((row) => list.append(transactionElement(row))); $("day-dialog-add").onclick = () => { $("day-dialog").close(); openTransaction(null, date); }; $("day-dialog").showModal(); }

function download(content, filename, type) { const link = document.createElement("a"); link.href = URL.createObjectURL(new Blob([content], { type })); link.download = filename; link.click(); setTimeout(() => URL.revokeObjectURL(link.href), 1000); }
function exportJSON() { download(JSON.stringify({ app: "Budget Boss", version: 4, exportedAt: nowISO(), ...exportableState() }, null, 2), `budget-boss-sauvegarde-${todayISO()}.json`, "application/json"); setText("backup-status", t("backupDownloaded")); }
function csvCell(value) { return `"${String(value ?? "").replaceAll('"', '""')}"`; }
function exportCSV() { const rows = [["ID", "Date", "Type", "Status", "Category", "Description", "Amount CAD"], ...state.transactions.sort((a,b) => a.date.localeCompare(b.date)).map((row) => [row.id, row.date, row.type === "income" ? t("income") : t("expense"), row.status === "planned" ? t("plannedShort") : row.type === "income" ? t("receivedStatus") : t("paid"), categoryLabel(row.category), row.description, row.amount.toFixed(2)])]; download("\ufeff" + rows.map((row) => row.map(csvCell).join(";" )).join("\r\n"), `budget-boss-transactions-${todayISO()}.csv`, "text/csv;charset=utf-8"); setText("backup-status", t("csvDownloaded")); }
async function importJSON(event) { try { const file = event.target.files?.[0]; if (!file) return; const imported = JSON.parse(await file.text()); if (!Array.isArray(imported.transactions)) throw Error(); if (!confirm(t("restoreWarning", { count: imported.transactions.length }))) return; const next = normalizeState({ ...state, transactions: imported.transactions, budgets: imported.budgets || [], recurring: imported.recurring || [], settings: imported.settings || state.settings }); next.meta = state.meta; state = next; await saveLocal(true); renderAll(); scheduleSync(); setText("backup-status", t("backupRestored")); showToast(t("backupRestored")); } catch { setText("backup-status", t("invalidBackup")); } finally { event.target.value = ""; } }

async function openPairing() { $("pair-code").value = pairingCode(); $("pair-import-wrap").hidden = true; $("import-pair-code").hidden = true; $("pair-error").textContent = ""; $("pair-dialog").showModal(); }
async function importPairing() { try { const parsed = parsePairingCode($("pair-import-code").value); state.meta.workspaceId = parsed.w; state.meta.workspaceSecret = parsed.s; state.meta.serverVersion = 0; await saveLocal(false); await pullRemote(true); $("pair-dialog").close(); showToast(t("pairSuccess")); } catch (error) { $("pair-error").textContent = error.message || t("pairFailed"); } }
async function resetPairing() { if (!confirm(t("resetSyncWarning"))) return; state.meta.workspaceId = uid(); state.meta.workspaceSecret = randomSecret(); state.meta.serverVersion = 0; await saveLocal(false); renderSettings(); scheduleSync(); showToast(t("workspaceCreated")); }
async function createNewWorkspace() { if (!confirm(t("resetWorkspaceWarning"))) return; exportJSON(); const languagePreference = state.settings.language; const themePreference = state.meta.theme; state = defaultState(); state.settings.language = languagePreference; state.meta.theme = themePreference; await saveLocal(true); renderAll(); scheduleSync(); showToast(t("workspaceCreated")); }

async function enableNotifications() { if (!("Notification" in window)) { showToast(t("notificationsNotSupported")); return; } const result = await Notification.requestPermission(); renderSettings(); showToast(result === "granted" ? t("notificationsEnabled") : t("notificationsNotEnabled")); if (result === "granted") checkNotifications(); }
function checkNotifications() { if (!("Notification" in window) || Notification.permission !== "granted") return; const noticeKey = `${todayISO()}-${dashboardMonth}`; if (state.settings.lastNoticeKey === noticeKey) return; const monthRows = rowsInMonth(monthISO()); const budgets = state.budgets.filter((budget) => budgetAllowance(budget, monthISO()) > 0); const alerts = []; for (const budget of budgets) { const allowance = budgetAllowance(budget, monthISO()); const spent = sum(monthRows.filter((row) => row.category === budget.category && row.type === "expense" && !isPlanned(row)), (row) => row.amount); if (state.settings.notifyBudgets && spent >= allowance * .8) alerts.push(`${budget.category} approche de sa limite.`); } if (state.settings.notifyRecurring) { const upcoming = state.transactions.some((row) => row.status === "planned" && row.date >= todayISO() && row.date <= addDays(todayISO(), 3)); if (upcoming) alerts.push("Une opération récurrente est prévue bientôt."); } if (alerts.length) { new Notification("Budget Boss", { body: alerts[0], icon: "icon.svg" }); state.settings.lastNoticeKey = noticeKey; saveLocal(false); } }
function addDays(date, count) { const d = new Date(`${date}T12:00:00`); d.setDate(d.getDate() + count); return d.toISOString().slice(0, 10); }

function bindEvents() {
  qa(".nav-item").forEach((button) => button.addEventListener("click", () => setView(button.dataset.view)));
  qa("[data-view-link]").forEach((button) => button.addEventListener("click", () => setView(button.dataset.viewLink)));
  $("quick-add").onclick = () => openTransaction(); $("transactions-add").onclick = () => openTransaction(); $("calendar-add").onclick = () => openTransaction(null, `${calendarMonth}-${String(Math.min(Number(todayISO().slice(8)), daysInMonth(calendarMonth))).padStart(2,"0")}`); $("budget-add").onclick = () => openBudget(); $("recurring-add").onclick = () => openRecurring();
  $("month-prev").onclick = () => { dashboardMonth = previousMonth(dashboardMonth); renderDashboard(); }; $("month-next").onclick = () => { dashboardMonth = nextMonth(dashboardMonth); renderDashboard(); }; $("month-current").onclick = () => { dashboardMonth = monthISO(); renderDashboard(); };
  $("calendar-prev").onclick = () => { calendarMonth = previousMonth(calendarMonth); renderCalendar(); }; $("calendar-next").onclick = () => { calendarMonth = nextMonth(calendarMonth); renderCalendar(); }; $("budget-prev").onclick = () => { budgetMonth = previousMonth(budgetMonth); renderBudgets(); }; $("budget-next").onclick = () => { budgetMonth = nextMonth(budgetMonth); renderBudgets(); };
  $("transaction-search").oninput = renderTransactions; $("transaction-month-filter").onchange = renderTransactions; $("transaction-type-filter").onchange = renderTransactions; $("transaction-status-filter").onchange = renderTransactions; $("clear-filters").onclick = () => { $("transaction-search").value = ""; $("transaction-month-filter").value = "all"; $("transaction-type-filter").value = "all"; $("transaction-status-filter").value = "all"; renderTransactions(); };
  $("transaction-form").addEventListener("submit", submitTransaction); $("transaction-delete").onclick = async () => { if (!editingTransactionId || !confirm(t("deleteQuestion"))) return; $("transaction-dialog").close(); await commit({ ...state, transactions: state.transactions.filter((row) => row.id !== editingTransactionId) }, t("transactionDeleted")); }; qa('input[name="transaction-type"]').forEach((input) => input.onchange = () => setTransactionCategories(input.value, null));
  $("budget-form").addEventListener("submit", submitBudget); $("budget-delete").onclick = async () => { if (!editingBudgetId || !confirm(t("deleteBudgetQuestion"))) return; $("budget-dialog").close(); await commit({ ...state, budgets: state.budgets.filter((row) => row.id !== editingBudgetId) }, t("budgetDeleted")); }; $("recurring-form").addEventListener("submit", submitRecurring); $("recurring-delete").onclick = async () => { if (!editingRecurringId || !confirm(t("recurringDeleteWarning"))) return; $("recurring-dialog").close(); await commit({ ...state, recurring: state.recurring.filter((row) => row.id !== editingRecurringId) }, t("recurringDeleted")); }; qa('input[name="recurring-type"]').forEach((input) => input.onchange = () => setRecurringCategories(input.value, null)); $("recurring-frequency").onchange = updateRecurringFrequencyFields;
  $("category-add").onclick = openCategoryDialog; $("category-form").addEventListener("submit", submitCategory);
  qa(".close-dialog").forEach((button) => button.onclick = () => button.closest("dialog").close()); $("day-dialog-add").onclick = () => openTransaction();
  $("language-toggle").onclick = changeLanguage; $("theme-select").onchange = () => changeTheme($("theme-select").value); $("theme-toggle").onclick = () => changeTheme((state.meta.theme || "system") === "dark" ? "light" : "dark"); $("budget-notifications").onchange = () => { state.settings.notifyBudgets = $("budget-notifications").checked; saveLocal(false); scheduleSync(); }; $("recurring-notifications").onchange = () => { state.settings.notifyRecurring = $("recurring-notifications").checked; saveLocal(false); scheduleSync(); }; $("enable-notifications").onclick = enableNotifications; $("new-workspace").onclick = createNewWorkspace;
  $("export-json").onclick = exportJSON; $("export-csv").onclick = exportCSV; $("import-json").onchange = importJSON; $("pair-device").onclick = openPairing; $("disconnect-device").onclick = resetPairing; $("copy-pair-code").onclick = async () => { await navigator.clipboard?.writeText($("pair-code").value); showToast(t("codeCopied")); }; $("use-pair-code").onclick = () => { $("pair-import-wrap").hidden = false; $("import-pair-code").hidden = false; }; $("import-pair-code").onclick = importPairing;
  window.addEventListener("online", () => { setSyncStatus("syncing", t("connectionRestored")); syncNow(); }); window.addEventListener("offline", () => setSyncStatus("", t("offline"))); window.matchMedia("(prefers-color-scheme: dark)").addEventListener?.("change", applyTheme);
}

async function init() {
  state = await loadState(); await ensureRecurringTransactions(); bindEvents(); renderAll(); if ("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js").catch(() => {}); if (apiBase()) { pullRemote().catch(() => setSyncStatus("error", t("offline"))); } else setSyncStatus("", t("savedOnDevice")); checkNotifications();
}
init().catch((error) => { console.error(error); document.body.innerHTML = `<main style="padding:40px;font-family:system-ui"><h1>Budget Boss</h1><p>Impossible de charger les données locales. Recharge la page ou utilise une sauvegarde JSON.</p></main>`; });
