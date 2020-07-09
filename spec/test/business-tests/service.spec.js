var writeTestResult = require("./../../utils/write-test-result");
var testResultFiles = require("./../../utils/test-result-files");

const commentService = require("./../../../src/services/comments");
const postService = require("./../../../src/services/posts");

var mocks = require('node-mocks-http');

var mongooseObjectId = require("mongoose").Types.ObjectId;


describe('business', function () {
    describe('service', function () {




        it("should Save Post", async function () {
            let now = Date.now();
            let title = "title_" + now;
            let description = "description_" + now;
            let tags = "tags_" + now;

            req = mocks.createRequest(
                {
                    method: 'POST',
                    // url: '/a/b',
                    body: {
                        title,
                        description,
                        tags
                    }
                }
            );

            res = mocks.createResponse({
                eventEmitter: require('events').EventEmitter
            });



            res.on('end', function () {

                expect(res.statusCode).toBe(200);

            })

            postService.post(req, res);
        })

        it("should SaveComments", function () {
            req = mocks.createRequest(
                {
                    method: 'POST',
                    // url: '/a/b',
                    body: {
                        postid: new mongooseObjectId(),
                        tags: "some tag tt",
                        comment: "some comment tt"
                    }
                }
            );
            res = mocks.createResponse({
                eventEmitter: require('events').EventEmitter
            });



            res.on('end', function () {

                expect(res.statusCode).toBe(200);

            })

            commentService.post(req, res);

        })

        it("should ViewAllComments", function () {
            req = mocks.createRequest();
            res = mocks.createResponse({
                eventEmitter: require('events').EventEmitter
            });



            res.on('end', function () {

                expect(res.statusCode).toBe(200);

            })

            commentService.getAll(req, res);
        })


        it("should ViewAllPosts", function () {
            req = mocks.createRequest();
            res = mocks.createResponse({
                eventEmitter: require('events').EventEmitter
            });



            res.on('end', function () {

                expect(res.statusCode).toBe(200);

            })

            postService.getAll(req, res);
        })


        it("should ViewAllDescriptions", function () {
            req = mocks.createRequest();
            res = mocks.createResponse({
                eventEmitter: require('events').EventEmitter
            });



            res.on('end', function () {

                expect(res.statusCode).toBe(200);

            })

            postService.getTitles(req, res);
            
        })




    })

    afterEach(() => {
        writeTestResult(testResultFiles.businessTestFile);
    })

})
