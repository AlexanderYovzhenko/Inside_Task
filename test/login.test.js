const supertest = require('supertest')

describe("POST /login", () => {
  const request = supertest('localhost:4000')
  const requestAdmin = {
    name: "admin",
    password: "admin"
  }

  describe("when passed a name and password", () => {
    test("should respond with a 200 status code", async () => {
      const response = await request.post("/login").send(requestAdmin)
      
      expect(response.statusCode).toBe(200)
    })

    test("should specify json in the content type header", async () => {
      const response = await request.post("/login").send(requestAdmin)
      expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
    })

    test("response has token", async () => {
      const response = await request.post("/login").send(requestAdmin)
      expect(response.body.token).toBeDefined()
    })
  })

  describe("when the name and password is missing", () => {
    test("should respond with a status code of 400", async () => {
      const bodyData = [
        {name: "admin"},
        {password: "admin"},
        {}
      ]
      for (const body of bodyData) {
        const response = await request.post("/login").send(body)
        expect(response.statusCode).toBe(400)
      }
    })
  })
})

describe("GET /login", () => {
  const request = supertest('localhost:4000')

  describe("when passed get", () => {
    test("should respond with object user admin", async () => {
      const response = await request.get("/login")
      expect(response.body.userAdmin).toBeDefined()
    })

    test("should specify json in the content type header", async () => {
      const response = await request.get("/login")
      expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
    })
  })
})
