import { Api } from "../com/Api/Api";
import { StoreManager } from "../com/Store/StoreManager";
type OrangeData = {
  cultivar: string,
  colour: string,
  medianSize: number,
  stock: number,
};

const initialState = {
  simplicity: 100,
  constantinesLaw: true,
  oranges: [
  ] as OrangeData[],
};


export const OrangeStore = StoreManager.create(initialState);


export const OrangeActions = {
  addOrange: OrangeStore.trigger((state, payload?: OrangeData) => {
    payload && state.oranges.push(payload);
    return state;
  }),
  getOranges: OrangeStore.trigger(async (state) => {
    const result = await Api.getOranges();
    state.oranges = result as OrangeData[];
    return state;
  })
};
