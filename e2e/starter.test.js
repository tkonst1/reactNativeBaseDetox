describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  const buttonTestId1 = 'testStartButtonId1';
  const buttonTestId2 = 'testStartButtonId2';
  const inputFieldId = 'inputFieldId';
  const scroalbleViewId = 'scrollViewId';

  it('lick button1 Test 1', async () => {
    await expect(element(by.id(buttonTestId1))).toBeVisible();
    await element(by.id(buttonTestId1)).tap();
  });

  it('Check any Text Test', async () => {
    await expect(element(by.text('Step One'))).toBeVisible();
  });

  it('Click button2 Test 3', async () => {
    //type text and check if it is visible
    let textToType = 'passcode';
    await element(by.id(inputFieldId)).typeText(textToType);

    await expect(element(by.id(buttonTestId2))).toBeVisible();
    await element(by.id(buttonTestId2)).tap();
  });

  it('Swipe Test 4', async () => {
    await expect(element(by.id(scroalbleViewId))).toBeVisible();
    await element(by.id(scroalbleViewId)).scroll(1000, 'down');
    await element(by.id(scroalbleViewId)).scroll(1000, 'up');
  });
});
