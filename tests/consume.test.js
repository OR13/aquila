const { getSuggestion } = require("../src/consume");

jest.setTimeout(20 * 1000);

it("can get most recent article not processed", async () => {
  const suggestedDoc = await getSuggestion();
  expect(suggestedDoc).toBeDefined();
});
