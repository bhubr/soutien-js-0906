# soutien-js-0906

How to use it:

* Under `front` and `back`, run `npm install` (you already knew that didn't you?)
* Create a new database (e.g. `insta_clone`) and inject the DB schema, by running from the terminal (**not** MySQL's terminal): `mysql -uroot -p insta_clone < back/sql/schema.sql`
* Replace the hardcoded password (bad Dobby) in `back/routes/config.js` with yours!
