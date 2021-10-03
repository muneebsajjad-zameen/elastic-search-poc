# Elastic-search-poc

**Challenges**

- Sync Leads to ES from lead creation/update points points e.g
    - Staff-app
    - lms
    - Affilate app
    - Mobile app
- Evaluate and Decide the Demoralised structure we want to move to ES Side.

**Possible Solutions(open for new ideas)**:

1.  We might have to add trigger at DB level. Which insert a lead-Id in a table whenever a lead is  inserted/updated. later on a job can pick them up and sync on the ES.
2. A ES service that needs can be used on both TS/JS side.
3. Lead Data correctness and syncing mechanism is required.
    1. we can use sequlize hooks  on `creation/update/delete` to sync data to ES.
