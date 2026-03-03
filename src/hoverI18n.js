const { registerHoverProvider } = require('./utils/vs');
const { provideHover } = require('./lib/provideHover');
module.exports = (context) => {
  context.subscriptions.push(
    registerHoverProvider(
      [
        { scheme: 'file', language: 'vue' },
        { scheme: 'file', language: 'javascript' },
        { scheme: 'file', language: 'typescript' },
        { scheme: 'file', language: 'typescriptreact' },
        { scheme: 'file', language: 'javascriptreact' },
      ],
      {
        provideHover,
      },
    ),
  );
};
