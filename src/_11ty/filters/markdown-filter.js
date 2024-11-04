import markdownit from 'markdown-it';

export default function (str) {
  return markdownit().render(str);
};