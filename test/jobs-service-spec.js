var expect = require("chai").expect;

describe("save jobs", function() {
	it("should validate that title is greater than 4 characters");
	it("should validate that title is less than 40 characters");
	it("should validate that description is greater than 4 characters");
	it("should validate that description is less than 250 characters");

	it("should pass the job to the database save");
	it("should return a status of 200 to the front end if the database saved");
	it("should return a job with an id");
	it("should return an error if the database failed");
});