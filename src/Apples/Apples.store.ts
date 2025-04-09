import { StoreManager } from "../com/Store/StoreManager";
type AppleData = {
  cultivar: string,
  colour: string,
  medianSize: number,
  stock: number,
};

const initialState = {
  simplicity: 100,
  constantinesLaw: true,
  apples: [
    { cultivar: 'Summer Rose', colour: 'red', medianSize: 13, stock: 2.54 },
    { cultivar: 'Woolbrook', colour: 'green', medianSize: 13, stock: 2.54 },
    { cultivar: 'Wagener', colour: 'burgundy', medianSize: 13, stock: 2.54 },
    { cultivar: 'Knobbed Russet', colour: 'brown', medianSize: 13, stock: 2.54 },
  ] as AppleData[],
};


export const AppleStore = StoreManager.create(initialState);


export const AppleActions = {
  addApple: AppleStore.trigger((state, payload: AppleData) => {
    state.apples.push(payload);
    return state;
  }),
};
