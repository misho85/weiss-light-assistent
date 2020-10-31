/* eslint-disable react/jsx-props-no-spreading */

export const FormFalse = ({ fill = '#d31654', ...props }) => (
  <svg viewBox="0 0 16.33 16.33" fill={fill} {...props}>
    <path d="M16.33 2.83L13.5 0 8.17 5.34 2.83 0 0 2.83l5.34 5.34L0 13.5l2.83 2.83 5.34-5.34 5.33 5.34 2.83-2.83-5.34-5.33 5.34-5.34z" />
  </svg>
);

export const FormTrue = ({ fill = '#027cb2', ...props }) => (
  <svg viewBox="0 0 17.83 14.37" fill={fill} {...props}>
    <path d="M6.29 14.37L0 8.08l2.83-2.83 3.46 3.46L15 0l2.83 2.83L6.29 14.37z" />
  </svg>
);
