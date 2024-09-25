const {test,expect} =require('@playwright/test');



test("First test",async function ({page}) {
    expect(16).toBe(16);
})

test("Second Test",async function ({page}) {
    expect('First').toBe('First');
})

test.skip("Third test",async function ({page}) {
    expect(8.0).toBe(8);
})

test("Fourth test",async function ({page}) {
    expect('Switzerland').toContain('z');
    expect(true).toBeTruthy();
    })

test("Fifth test",async function ({page}) {
    expect(false).toBeFalsy();
})