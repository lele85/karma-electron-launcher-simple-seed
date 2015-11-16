describe("Test framework", function() {
    it("should work with app modules", function() {
        var calc = require("app/Calc");
        expect(calc.add(1,2)).toBe(3);
    });

    it("should work with npm installed modules", function() {
        var electronPath = require("electron-prebuilt");
        expect(electronPath).toEqual(jasmine.any(String));
    });
});