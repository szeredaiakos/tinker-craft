class Type1 { prop = 12; }
class Type2 { }
class Type3 { }
class Known { }

const theConst = [
  { name1: new Type1(), reducer: new Known() },
  { name2: new Type2(), reducer: new Known() },
  { name3: new Type3(), reducer: new Known() },
  { name4: 'asd', reducer: new Known() },
] as const;

// ---------------------------
// Type Utilities
// ---------------------------

type UnionFromArray<T extends readonly any[]> = T[number];

type ValueMap<T> = {
  [K in keyof T as K extends 'reducer' ? never : K]: T[K]
}

type UnionToIntersection<U> =
  (U extends any ? (k: U) => void : never) extends
  (k: infer I) => void ? I : never;

type ExtractedTypeFromConst<T extends readonly any[]> =
  UnionToIntersection<ValueMap<UnionFromArray<T>>>;

// ---------------------------
// Function Definition
// ---------------------------
function addActions<T extends readonly { reducer: Known;[key: string]: any }[]>(
  arr: T
): ExtractedTypeFromConst<T> {
  // You can actually build this object dynamically if needed
  return {} as ExtractedTypeFromConst<T>;
}

// ---------------------------
// Usage
// ---------------------------
const actions = addActions(theConst);

// ✅ Fully typed:
console.log(actions.name1.prop); // TypeScript knows this is a number

