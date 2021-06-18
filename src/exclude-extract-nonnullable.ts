export {};

// Exclude 除外
type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type FunctionType = Exclude<SomeTypes, string | number>;
type NunFunctionType = Exclude<SomeTypes, DebugType>;
type TypeExcludeingTypeFuction = Exclude<SomeTypes, Function>;

// Extract 抽出
type FuctionTypeByExtract = Extract<SomeTypes, DebugType>;
type NonFuctionTypeByExtract = Extract<SomeTypes, string | number>;
type FuctionTypeExtractingFunction = Extract<SomeTypes, Function>;

// Nullable null,undefinedを除外
type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;
