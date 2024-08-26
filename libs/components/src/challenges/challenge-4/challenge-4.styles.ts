import { css, CSSResult, unsafeCSS } from 'lit';

export const alertVariants = [
  'primary',
  'success',
  'neutral',
  'warning',
  'danger',
] as const;
export type AlertVariant = (typeof alertVariants)[number];

const alertColors = {
  primary: 'hsl(200.4 98% 39.4%)',
  success: 'hsl(142.1 76.2% 36.3%)',
  neutral: 'hsl(240 5.2% 33.9%)',
  warning: 'hsl(32.1 94.6% 43.7%)',
  danger: 'hsl(0 72.2% 50.6%)',
};

const variantStyles: Array<CSSResult> = [];

alertVariants.forEach((variant) => {
  const selector = unsafeCSS(`:host([variant=${variant}])`);
  const color = unsafeCSS(alertColors[variant]);

  return variantStyles.push(css`
    ${selector} .alert {
      border-top-color: ${color};
    }

    .alert-${unsafeCSS(variant)} {
      border-top-color: ${color};
    }
  `);
});

export const styles = [
  css`
    .alert {
      background-color: white;
      border: 1px solid hsl(240 5.9% 90%);
      border-radius: 0.25rem;
      border-top-width: 3px;
      color: hsl(240 5.3% 26.1%);
      display: none;
      padding: 1.25rem;
    }

    .alert-open {
      display: flex;
    }

    .message {
      flex: 1 1 auto;

      .title {
        font-weight: bold;
      }
    }

    .close-button {
      align-items: center;
      display: flex;
      flex: 0 0 auto;

      button {
        background: none;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        min-block-size: 2rem;
        min-inline-size: 2rem;
        padding: 0.5rem;

        &:hover {
          background-color: hsl(240 5.9% 90%);
        }
      }
    }
  `,
  ...variantStyles,
];
