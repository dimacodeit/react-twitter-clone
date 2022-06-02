import { lsGetItem } from '../ls-get-item';

describe('[utils] ls get item', () => {
  beforeEach(() => {
    localStorage.setItem('login', 'admin');
  });

  afterAll(() => {
    localStorage.removeItem('login');
  });

  test("don't get item", () => {
    expect(lsGetItem('wrongLogin', null)).toBe(null);
  });

  test('get item', () => {
    expect(lsGetItem('login', null)).toBe('admin');
  });

  test('get fallback', () => {
    expect(lsGetItem('wrongLogin', 'user')).toBe('user');
  });
});
