import type { TypographyProps } from '@portal-types/ui/typography';

import { render } from '@testing-library/react';

import Typography from 'components/UI/Typography';

const multiTypographiesData: Array<[TypographyProps['variant'], string]> = [
  ['headerWeb', 'H1'],
  ['headerWebMobile', 'H1'],
  ['headerWebBold', 'H1'],
  ['headerWebBoldMobile', 'H1'],
  ['subtitleWeb', 'H2'],
  ['subtitleWebMobile', 'H2'],
  ['subtitleWebBold', 'H2'],
  ['subtitleWebBoldMobile', 'H2'],
  ['subtitleWebUppercase', 'H2'],
  ['subtitleWebUppercaseSmall', 'H2'],
  ['bodyWeb', 'P'],
  ['bodyWebBold', 'P'],
  ['captionWeb', 'SPAN'],
  ['textLinkWeb', 'SPAN'],
  ['textLinkWebBold', 'SPAN'],
];

test.each(multiTypographiesData)('It should display a %s typography with your relative tag', (variant, tagExpected) => {
  const { getByText } = render(<Typography variant={variant}>{variant}</Typography>);

  expect(getByText(variant).tagName).toBe(tagExpected);
});

test('It should display a typograph with the props of MUI', () => {
  const heroH1 = render(
    <Typography variant="bodyWeb" component="h1" gutterBottom color="secondary">
      Teste hero
    </Typography>,
  );

  let element = heroH1.getByText('Teste hero');
  let style = window.getComputedStyle(element);

  expect(element.tagName).toBe('H1');
  expect(style.color).toBe('rgb(245, 0, 87)');
  expect(style.marginBottom).toBe('0.35em');

  const bodyP = render(
    <Typography variant="bodyWeb" paragraph noWrap display="inline">
      Teste body
    </Typography>,
  );

  element = bodyP.getByText('Teste body');
  style = window.getComputedStyle(element);

  expect(style.marginBottom).toBe('16px');
  expect(style.overflow).toBe('hidden');
  expect(style.whiteSpace).toBe('nowrap');
  expect(style.textOverflow).toBe('ellipsis');
  expect(style.display).toBe('inline');
});
