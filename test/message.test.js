const supertest = require('supertest')

describe("POST /messages", () => {
  const request = supertest('localhost:4000')
  const requestGetMessages = {
    name: "admin",
    message: "history 10"
  }
  const requestAddMessages = {
    name: "admin",
    message: "My message"
  }
  const requestAdmin = {
    name: "admin",
    password: "admin"
  }

  const token = async() => {
    const response = await request.post("/login").send(requestAdmin)
    return response.body.token
  }

  describe("when the authorization is missing", () => {
    test("should respond with a status code of 401", async () => {
      const response = await request.post("/messages").send(requestAddMessages)
      expect(response.statusCode).toBe(401)
    })
  })

  describe("when passed a name and message", () => {
    test("should respond with a 201 status code", async () => {
      const response = await request.post("/messages").set('Authorization', `Bearer_${await token()}`).send(requestAddMessages)
      expect(response.statusCode).toBe(201)
    })

    test("should specify json in the content type header", async () => {
      const response = await request.post("/messages").set('Authorization', `Bearer_${await token()}`).send(requestAddMessages)
      expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
    })

    test("response has id", async () => {
      const response = await request.post("/messages").set('Authorization', `Bearer_${await token()}`).send(requestAddMessages);
      expect(response.body.id).toBeDefined()
    })
  })

  describe("when passed a name and message history (10)", () => {
    test("should respond with a 200 status code", async () => {
      const response = await request.post("/messages").set('Authorization', `Bearer_${await token()}`).send(requestGetMessages)
      expect(response.statusCode).toBe(200)
    })

    test("should specify json in the content type header", async () => {
      const response = await request.post("/messages").set('Authorization', `Bearer_${await token()}`).send(requestGetMessages)
      expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
    })

    test("response has array messages", async () => {
      const response = await request.post("/messages").set('Authorization', `Bearer_${await token()}`).send(requestGetMessages);
      expect(Array.isArray(response.body)).toEqual(true)
    })
  })

  describe("when the name and message is missing", () => {
    test("should respond with a status code of 400", async () => {
      const bodyData = [
        {name: "admin"},
        {message: "admin"},
        {}
      ]
      for (const body of bodyData) {
        const response = await request.post("/messages").set('Authorization', `Bearer_${await token()}`).send(body)
        expect(response.statusCode).toBe(400)
      }
    })
  })
})
