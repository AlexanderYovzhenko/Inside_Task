# Inside_Task

## Downloading

```bash
git clone https://github.com/GoldenManBel/Inside_Task.git
```

## Installing NPM modules

```bash
npm install
```

## Running application in docker

```bash
docker pull goldenmanbel/inside_task
```
```bash
docker-compose up
```
```bash
npm run test
```

## Running application local and bd in docker
### Need change POSTGRES_HOST=localhost in .env file
```bash
docker build -t postgres database. 
```
```bash
docker run -dp 5432:5432 --rm -e POSTGRES_HOST_AUTH_METHOD=trust postgres
```
```bash
npm run migration:generate
```
```bash
npm run start
```

## Migrations generate

```bash
npm run migration:generate
```

## Testing

```bash
npm run test
```

## Auto-fix and format

```bash
npm run lint
```

<p>
  <h2 align="center">Documentation for endpoints</h2>
  <ul>
    <li><h3><u>localhost:4000/login</u> - authorization</h3> 
      <ul>
        <li><font color="4040ff">POST</font> <u>login</u> - get token <br> { <br> "name": "admin", <br> "password": "admin" <br> } </li> 
      </ul>
      <ul>
        <li><font color="green">GET</font> <u>login</u> - get user admin</li> 
      </ul>
    </li>
    <br>
    <li><h3><u>localhost:4000/users</u> - requires authorization(header: authorization Bearer_token)</h3> 
      <ul>
        <li><font color="4040ff">POST</font> <u>messages</u> - add user and get users  <br> { <br> "name": "admin", <br> "message": "Your message" <br> } <br> or <br> { <br> "name": "admin", <br> "message": "history 10" <br> } <br> or <br> { <br> "name": "admin", <br> "message": "history 10", <br> "userId": "uuid of user" <br> } </li> 
      </ul>
    </li>
</ul>
</p>
