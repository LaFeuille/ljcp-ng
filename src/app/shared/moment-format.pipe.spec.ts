import { MomentFormatPipe } from './moment-format.pipe';

describe('MomentFormatPipe', () => {
  it('create an instance', () => {
    const pipe = new MomentFormatPipe();
    expect(pipe).toBeTruthy();
  });

  it('format a string', () => {
    const pipe = new MomentFormatPipe();
    const text = pipe.transform('2001-01-01');
    expect(text).toBe('January 1, 2001');
  });
});
