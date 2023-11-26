const isWin = process.platform === 'win32';

module.exports = {
  '**/*.{js,jsx,ts,tsx,json}': (filenames) => {
    const escapedFileNames = filenames
      .map(
        (filename) =>
          `"${isWin ? filename.replace(/\[|\]/g, '[$&]') : escape([filename])}"`
      )
      .join(' ');
    return [`prettier --write --ignore-unknown ${escapedFileNames}`];
  },
  '**/*.{json,md,mdx,css,html,yml,yaml,scss}': (filenames) => {
    const escapedFileNames = filenames
      .map(
        (filename) =>
          `"${isWin ? filename.replace(/\[|\]/g, '[$&]') : escape([filename])}"`
      )
      .join(' ');
    return [`prettier --write --ignore-unknown ${escapedFileNames}`];
  },
};
