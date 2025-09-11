import checkMatch from "@/components/registrationComponents/registrationComponents"
test("comparison works as expected", () => {
    expect (checkMatch("aster","aster")).toBeTruthy();
});