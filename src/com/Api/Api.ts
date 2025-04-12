
class _Api {
  async get() {
    // implement yr transport here //
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { cultivar: 'Summer Rose', colour: 'red', medianSize: 13, stock: 2.54 },
          { cultivar: 'Woolbrook', colour: 'green', medianSize: 13, stock: 2.54 },
          { cultivar: 'Wagener', colour: 'burgundy', medianSize: 13, stock: 2.54 },
          { cultivar: 'Knobbed Russet', colour: 'brown', medianSize: 13, stock: 2.54 },
        ]);
      }, 2000);
    });
  }
}

export const Api = new _Api();