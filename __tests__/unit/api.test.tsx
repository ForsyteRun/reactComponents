describe('render Home Page', () => {
  it('native fetch return 200 without query params', async () => {
    const response = await fetch('https://www.googleapis.com/books/v1/volumes');

    expect(response.status).toBe(200);
    expect(response.statusText).toBe('OK');
  });

  it('receives a mocked resp', async () => {
    const response = await fetch(
      'https://www.googleapis.com/books/v1/volumes/D75NDwAAQBAJ'
    );
    expect(response.status).toBe(404);
  });
});
