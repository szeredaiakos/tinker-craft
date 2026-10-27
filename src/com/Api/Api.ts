class _Api {
  // implement yr transport here //

  async getOranges() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { cultivar: 'Jumpy', colour: 'orange', medianSize: 12, stock: 3.54 },
          { cultivar: 'Bouncy', colour: 'yellow', medianSize: 12, stock: 3.54 },
          { cultivar: 'Squishy', colour: 'pink', medianSize: 12, stock: 3.54 },
          { cultivar: 'Zippy', colour: 'gold', medianSize: 12, stock: 3.54 },
          { cultivar: 'Fuzzy', colour: 'amber', medianSize: 12, stock: 3.54 },
        ]);
      }, 1000);
    });
  }

  async getApples() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { cultivar: 'Summer Rose', colour: 'red', medianSize: 13, stock: 2.54 },
          { cultivar: 'Woolbrook', colour: 'green', medianSize: 13, stock: 2.54 },
          { cultivar: 'Wagener', colour: 'burgundy', medianSize: 13, stock: 2.54 },
          { cultivar: 'Knobbed Russet', colour: 'brown', medianSize: 13, stock: 2.54 },
        ]);
      }, 1000);
    });
  }
}

export const Api = new _Api();