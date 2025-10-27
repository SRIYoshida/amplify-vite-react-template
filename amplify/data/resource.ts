import { type ClientSchema, a, defineData } from "@aws-amplify/backend";
const schema = a.schema({
  // 既存のTodoモデル
  Todo: a
    .model({
      content: a.string(),
      status: a.string(),
    })
    .authorization((allow) => [allow.authenticated()]),
  // 👇 ここから新しいモデルを追加
  Receipt: a
    .model({
      // 主キーを 'receiptId' として定義
      receiptId: a.id().required(),
      storeName: a.string(),
      // 'details'は'ReceiptDetail'モデルの'receiptId'フィールドを介して関連付けられる
      details: a.hasMany("ReceiptDetail", ["receiptId"]),
    })
    .identifier(["receiptId"]) // 主キーとして 'receiptId' を指定
    .authorization((allow) => [allow.authenticated()]),
  ReceiptDetail: a
    .model({
      // --- リレーション定義 ---
      // 外部キー(receiptId)と関連付けることで、どのレシートに属するかを定義
      receipt: a.belongsTo("Receipt", ["receiptId"]),
      receiptId: a.id().required(), // 外部キーを明示的に定義し、必須項目とする
      // --- 明細データ ---
      productName: a.string().required(),
      quantity: a.integer().required(),
      // --- OCR結果 ---
      ocrResult: a.json(),
    })
    .authorization((allow) => [allow.authenticated()]),
});
export type Schema = ClientSchema<typeof schema>;
export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
  },
});
