var writeTestResult = require("./../../utils/write-test-result");
var testResultFiles = require("./../../utils/test-result-files");
var mongooseObjectId = require("mongoose").Types.ObjectId;

describe('service', function () {
    
    it("should Save Comment", async function () {
      
    })
    it("should View All Posts", function () {

        const repo = require("./../../../src/repository/crud")
 

        repo.getSpecificFields('post', {}, (err, data)=>{
            expect(err).toBeNull();
        });
    })
    it("should View All Comments", function () {
        const repo = require("./../../../src/repository/crud")
 

        repo.getSpecificFields('comment', {tags: 0, description: 0}, (err, data)=>{
            expect(err).toBeNull();

        });
    })
    it("should View All Discussions", function () {

        // const Post = require("./../../../src/entities/post");
        const repo = require("./../../../src/repository/crud")
 

        repo.getSpecificFields('post', {tags: 0, description: 0}, (err, data)=>{
            // expect(data.length).toBeGreaterThanOrEqual(0);
            expect(err).toBeNull();
        });
    })


    // it("should Loading Page Url", function () { })
    // it("should Add Post", function () { })
    // it("should Save Posts", function () { })
    // it("should Save Posts Case", function () { })
    // it("should View All Posts", function () { })
    // it("should View All Posts Case", function () { })
    // it("should Add Comments", function () { })
    // it("should Save Comments", function () { })
    // it("should Save Comments Case", function () { })
    // it("should View All Discussions", function () { })
    // it("should View All Discussions Case", function () { })


    afterEach(()=>{
        writeTestResult(testResultFiles.boundaryTestFile);
    })
    

})