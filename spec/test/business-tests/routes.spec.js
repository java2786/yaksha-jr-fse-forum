var writeTestResult = require("./../../utils/write-test-result");
var testResultFiles = require("./../../utils/test-result-files");

var app = require('./../../../index');
var request = require('supertest');

describe('business', function () {
    describe('routes', function () {

        it("should return 404 with url /demo", function (done) {
            request(app)
                .get('/demo')
                .expect(function (res) {
                    expect(res.statusCode).toBe(404);
                    done();
                })
                .end(function (err) {
                    console.log(err);
                    expect(err).toBe(null);
                    done();
                })


            // done();
        })

        it("should return html with as welcome page", function (done) {
            request(app)
                .get('/')
                .expect('Content-Type', /html/)
                .expect(200)
                .expect(function (res) {
                    expect(res.statusCode).toBe(200);
                    done();
                })
                .end(function (err) {
                    console.log(err);
                    expect(err).toBe(null);
                    done();
                })


            // done();
        })


        afterEach(() => {
            writeTestResult(testResultFiles.businessTestFile);
        })


    })
})