import Reveal from './reveal/reveal.esm.js';
import RevealMarkdown from './reveal/plugin/markdown/markdown.esm.js';

export default function config () {
  Reveal.initialize({
    transition: 'convex',
    plugins: [ RevealMarkdown ]
  });
}
