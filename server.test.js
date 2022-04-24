afterEach(() => {
  jest.restoreAllMocks();
});

describe('Fake test', () => {
  it('should return whatever', async () => {
    expect(2).toEqual(2);
  });
});
