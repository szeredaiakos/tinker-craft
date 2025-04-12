import { Api } from "../com/Api/Api";
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
  ] as AppleData[],
};


export const AppleStore = StoreManager.create(initialState);


export const AppleActions = {
  addApple: AppleStore.trigger((state, payload: AppleData) => {
    state.apples.push(payload);
    return state;
  }),
  getApples: AppleStore.trigger(async (state) => {
    const result = await Api.get();
    state.apples = result as AppleData[];
    return state;
  })
};
