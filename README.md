# Elastic-search-poc (In-progress - Contribution is Highly Appriciated)

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


Essentials Links:

**Official Node.js client for Elasticsearch**

https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/7.x/introduction.html

**Employees Sample Database**

https://github.com/datacharmer/test_db

**Usage:**


```
POST - http://localhost:3000/employee


{
    "emp_no":"113791115",
	"birth_date": "1987-08-1987",
	"first_name": "Jhon",
	"last_name": "doe",
	"gender": "M",
	"hire_date":"2017-11-10"
}
