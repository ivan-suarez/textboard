# textboard
Smart contract oriented textboard

![Alt text](screenshots/textboard1.png?raw=true)

# Requirements

Node.js

Truffle Framework

# Recommended

Ganache

Metamask Browser Extension

# Execution with Docker
~~~
docker build -t textboard .
~~~

~~~
truffle run --name textboard -p 3000:3000 -d textboard
~~~


# Execution

Run Ganache

Deploy the smart contracts 

~~~
truffle migrate --reset
~~~

Run node
~~~
npm run dev
~~~

Make sure you are logged in Metamask and are connected to the Ganache blockchain. Import one of the account from it.

When you make a post, Metamask will ask you if you want to comfirm the transaction. Accept it and refresh the page, you will see your new post

![Alt text](screenshots/textboard2.png?raw=true)
