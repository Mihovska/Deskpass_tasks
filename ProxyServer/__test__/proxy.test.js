const request = require('supertest');
const app = require('../index');

const agent = request.agent(app);

describe('proxy endpoint', () => {
    afterAll((done) => {
        app.close(() => {
            done();
        });
    });

    it('should not forward request but return a simple text response',async () => {
        const res = await agent.get('/info');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toEqual('This is a simple proxy server');
    });

    it('should return 403 if the Authorization Header is missing', async () => {
        const res = await agent.get('/json_placeholder/posts/1');
        expect(res.statusCode).toEqual(403);
        expect(res.text).toEqual('Forbidden');
    });

    it('should be forwarded if Authorization is set', async () => {
        const res = await agent.get('/json_placeholder/posts/1')
           .set('Authorization', 'test_user')
        expect(res.statusCode).toEqual(200);
        expect(res.body.id).toEqual(1);
    });

    it('should deny IP access', async () => {
       const blacklistedIP = process.env.BLACKLIST;
       const text = `${blacklistedIP} IP address is not in the Whitelist`;
       const res = await agent.get('/json_placeholder/posts/1')
           .set('Authorization', 'test_user')
           .set('X-Forwarded-For', blacklistedIP)
       expect(res.status).toEqual(403);
       expect(res.text).toEqual(text);
    });
});