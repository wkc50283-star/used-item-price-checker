const STORAGE_KEY = "usedItemPriceCheckerRecordsV2";
const LANG_KEY = "usedItemPriceCheckerLang";

const translations = {
  en: {
    brand: "Used Item Price Checker",
    navChecker: "Checker",
    navRecords: "Records",
    eyebrow: "Used item selling tool",
    heroTitle: "Don’t Sell Your Used Item Too Low",
    heroText: "Check your payout, bottom price, and buyer offer before selling.",
    quickHint: "Enter price and costs. Results update instantly.",
    sectionPrice: "Price",
    itemNameLabel: "Item name",
    itemNamePlaceholder: "Used chair",
    sellingPriceLabel: "Selling price",
    buyerOfferLabel: "Buyer offer",
    minimumCashLabel: "Minimum cash back",
    sectionCosts: "Costs",
    platformFeeLabel: "Platform fee %",
    shippingLabel: "Shipping",
    moreCosts: "More costs",
    paymentFeeLabel: "Payment fee",
    packagingLabel: "Packaging",
    cleaningRepairLabel: "Cleaning / repair",
    otherCostLabel: "Other cost",
    buyInCostLabel: "Buy-in cost",
    sectionMarket: "Market",
    competitorPriceLabel: "Competitor price",
    sectionRecord: "Record",
    recordQtyLabel: "Qty",
    recordNoteLabel: "Note",
    recordNotePlaceholder: "Pickup, buyer paid shipping, small scratch...",
    resetBtn: "Reset",
    resultReady: "Result",
    bottomPriceLabel: "Bottom price",
    buyerOfferResult: "Buyer offer",
    netPayoutLabel: "Net payout",
    totalCostsLabel: "Total costs",
    gapLabel: "Gap",
    competitionTitle: "Competition",
    replyTitle: "Reply",
    addRecordBtn: "Add to records",
    recordsEyebrow: "Records",
    recordsTitle: "Sold records",
    recordsNote: "Records are saved in this browser. Download records if you want a backup.",
    downloadRecordsBtn: "Download records",
    clearBtn: "Clear",
    tableDate: "Date",
    tableItem: "Item",
    tableQty: "Qty",
    tableSoldPrice: "Sold price",
    tableNetPayout: "Net payout",
    tableResult: "Result",
    tableNote: "Note",
    noRecords: "No records yet.",
    disclaimer: "This tool is for personal calculation only. It is not an appraisal, receipt, invoice, or guaranteed selling price.",
    accept: "Accept",
    caution: "Be careful",
    reject: "Reject",
    notChecked: "Not checked yet",
    enterData: "Enter price and costs first.",
    acceptText: "Looks acceptable",
    cautionText: "Close to your bottom line",
    rejectText: "Not recommended",
    competitionDefault: "Enter competitor price if needed.",
    competitionReject: "Competitor price is below your bottom line. Do not blindly match.",
    competitionCaution: "Competitor price is close to your bottom line. Be careful.",
    competitionAccept: "You still have room to compete.",
    replyDefault: "Enter a buyer offer to get a short reply.",
    replyAccept: "Thanks. I can accept this offer.",
    replyCaution: "Thanks. I can consider this price, but I cannot go lower.",
    replyReject: "Thanks for the offer, but this is below my bottom line after fees and costs.",
    unnamedItem: "Unnamed item",
    deleteBtn: "Delete",
    noRecordsDownload: "No records to download.",
    clearConfirm: "Clear all records?",
    guideEyebrow: "Guide",
    guideTitle: "How to use this tool",
    guideWhatTitle: "What does this tool do?",
    guideWhatText: "It helps you check your payout, bottom price, and buyer offer before selling a used item.",
    guideUseTitle: "How to use",
    guideUse1: "Enter your selling price.",
    guideUse2: "Enter buyer offer if someone negotiates.",
    guideUse3: "Enter your minimum cash back.",
    guideUse4: "Add fees, shipping, and other costs.",
    guideUse5: "Check the result on the right.",
    guideResultTitle: "How to read results",
    guideResultText: "Bottom price means the price you should avoid going below. Net payout is what you keep after costs.",
    guideRecordTitle: "What are sold records?",
    guideRecordText: "If an item is sold, you can add it to records. Records are saved only in this browser.",
    guideNoteTitle: "Note",
    guideNoteText: "This is not an appraisal or market price tool. You enter all prices and decide whether to sell."
  },

  "zh-TW": {
    brand: "二手商品售價檢查器",
    navChecker: "檢查器",
    navRecords: "紀錄",
    eyebrow: "二手商品銷售工具",
    heroTitle: "不要把二手商品賣得太低",
    heroText: "賣之前先檢查實際入帳、底線價格和買家出價。",
    quickHint: "輸入價格與成本，右側會同步顯示結果。",
    sectionPrice: "價格",
    itemNameLabel: "商品名稱",
    itemNamePlaceholder: "二手椅子",
    sellingPriceLabel: "想賣價格",
    buyerOfferLabel: "買家出價",
    minimumCashLabel: "最低想拿回金額",
    sectionCosts: "成本",
    platformFeeLabel: "平台手續費 %",
    shippingLabel: "運費",
    moreCosts: "更多成本",
    paymentFeeLabel: "金流手續費",
    packagingLabel: "包材",
    cleaningRepairLabel: "清潔／維修",
    otherCostLabel: "其他成本",
    buyInCostLabel: "買入成本",
    sectionMarket: "市場",
    competitorPriceLabel: "競爭價格",
    sectionRecord: "紀錄",
    recordQtyLabel: "數量",
    recordNoteLabel: "備註",
    recordNotePlaceholder: "面交、買家付運費、小刮傷...",
    resetBtn: "重設",
    resultReady: "試算結果",
    bottomPriceLabel: "建議底價",
    buyerOfferResult: "買家出價",
    netPayoutLabel: "實際入帳",
    totalCostsLabel: "總成本",
    gapLabel: "差距",
    competitionTitle: "競爭價格",
    replyTitle: "回覆",
    addRecordBtn: "加入紀錄",
    recordsEyebrow: "紀錄",
    recordsTitle: "售出紀錄",
    recordsNote: "紀錄只存在目前瀏覽器，需要備份可下載紀錄。",
    downloadRecordsBtn: "下載紀錄",
    clearBtn: "清除",
    tableDate: "日期",
    tableItem: "商品",
    tableQty: "數量",
    tableSoldPrice: "售出價",
    tableNetPayout: "實際入帳",
    tableResult: "結果",
    tableNote: "備註",
    noRecords: "目前沒有紀錄。",
    disclaimer: "本工具僅供個人試算，不是鑑價、收據、發票或保證成交價格。",
    accept: "可以接受",
    caution: "要小心",
    reject: "不建議",
    notChecked: "尚未判斷",
    enterData: "請先輸入價格與成本。",
    acceptText: "可以接受",
    cautionText: "接近底線",
    rejectText: "不建議接受",
    competitionDefault: "需要時可輸入競爭價格。",
    competitionReject: "競爭價格低於你的底線，不建議盲目跟價。",
    competitionCaution: "競爭價格接近你的底線，要小心。",
    competitionAccept: "仍有空間可以競爭。",
    replyDefault: "輸入買家出價後會產生簡短回覆。",
    replyAccept: "謝謝，可以接受這個出價。",
    replyCaution: "謝謝，這個價格可以考慮，但沒辦法再更低。",
    replyReject: "謝謝你的出價，但扣掉費用與成本後，這已經低於我的底線。",
    unnamedItem: "未命名商品",
    deleteBtn: "刪除",
    noRecordsDownload: "目前沒有紀錄可下載。",
    clearConfirm: "確定要清除全部紀錄嗎？",
    guideEyebrow: "使用說明",
    guideTitle: "如何使用這個工具",
    guideWhatTitle: "這個工具在做什麼？",
    guideWhatText: "幫你在賣二手商品前，快速檢查實際入帳、建議底價與買家出價是否合理。",
    guideUseTitle: "怎麼使用？",
    guideUse1: "輸入想賣價格。",
    guideUse2: "如果有買家殺價，輸入買家出價。",
    guideUse3: "輸入最低想拿回金額。",
    guideUse4: "輸入平台手續費、運費與其他成本。",
    guideUse5: "查看右側結果。",
    guideResultTitle: "怎麼看結果？",
    guideResultText: "建議底價是不建議再低於的價格。實際入帳是扣掉費用後真正拿到的金額。",
    guideRecordTitle: "售出紀錄是什麼？",
    guideRecordText: "如果商品已售出，可以加入紀錄，方便之後回看。紀錄只存在目前瀏覽器。",
    guideNoteTitle: "注意事項",
    guideNoteText: "這不是正式估價或行情判斷工具。所有價格都由你自行輸入，是否出售請自行判斷。"
  },

  "zh-CN": {
    brand: "二手商品售价检查器",
    navChecker: "检查器",
    navRecords: "记录",
    eyebrow: "二手商品销售工具",
    heroTitle: "不要把二手商品卖得太低",
    heroText: "卖之前先检查实际入账、底线价格和买家出价。",
    quickHint: "输入价格与成本，右侧会同步显示结果。",
    sectionPrice: "价格",
    itemNameLabel: "商品名称",
    itemNamePlaceholder: "二手椅子",
    sellingPriceLabel: "想卖价格",
    buyerOfferLabel: "买家出价",
    minimumCashLabel: "最低想拿回金额",
    sectionCosts: "成本",
    platformFeeLabel: "平台手续费 %",
    shippingLabel: "运费",
    moreCosts: "更多成本",
    paymentFeeLabel: "支付手续费",
    packagingLabel: "包装",
    cleaningRepairLabel: "清洁／维修",
    otherCostLabel: "其他成本",
    buyInCostLabel: "买入成本",
    sectionMarket: "市场",
    competitorPriceLabel: "竞争价格",
    sectionRecord: "记录",
    recordQtyLabel: "数量",
    recordNoteLabel: "备注",
    recordNotePlaceholder: "面交、买家付运费、小刮伤...",
    resetBtn: "重置",
    resultReady: "试算结果",
    bottomPriceLabel: "建议底价",
    buyerOfferResult: "买家出价",
    netPayoutLabel: "实际入账",
    totalCostsLabel: "总成本",
    gapLabel: "差距",
    competitionTitle: "竞争价格",
    replyTitle: "回复",
    addRecordBtn: "加入记录",
    recordsEyebrow: "记录",
    recordsTitle: "售出记录",
    recordsNote: "记录只保存在当前浏览器，需要备份可下载记录。",
    downloadRecordsBtn: "下载记录",
    clearBtn: "清除",
    tableDate: "日期",
    tableItem: "商品",
    tableQty: "数量",
    tableSoldPrice: "售出价",
    tableNetPayout: "实际入账",
    tableResult: "结果",
    tableNote: "备注",
    noRecords: "目前没有记录。",
    disclaimer: "本工具仅供个人试算，不是鉴价、收据、发票或保证成交价格。",
    accept: "可以接受",
    caution: "要小心",
    reject: "不建议",
    notChecked: "尚未判断",
    enterData: "请先输入价格与成本。",
    acceptText: "可以接受",
    cautionText: "接近底线",
    rejectText: "不建议接受",
    competitionDefault: "需要时可输入竞争价格。",
    competitionReject: "竞争价格低于你的底线，不建议盲目跟价。",
    competitionCaution: "竞争价格接近你的底线，要小心。",
    competitionAccept: "仍有空间可以竞争。",
    replyDefault: "输入买家出价后会生成简短回复。",
    replyAccept: "谢谢，可以接受这个出价。",
    replyCaution: "谢谢，这个价格可以考虑，但没办法再更低。",
    replyReject: "谢谢你的出价，但扣掉费用和成本后，这已经低于我的底线。",
    unnamedItem: "未命名商品",
    deleteBtn: "删除",
    noRecordsDownload: "目前没有记录可下载。",
    clearConfirm: "确定要清除全部记录吗？",
    guideEyebrow: "使用说明",
    guideTitle: "如何使用这个工具",
    guideWhatTitle: "这个工具在做什么？",
    guideWhatText: "帮你在卖二手商品前，快速检查实际入账、建议底价与买家出价是否合理。",
    guideUseTitle: "怎么使用？",
    guideUse1: "输入想卖价格。",
    guideUse2: "如果有买家砍价，输入买家出价。",
    guideUse3: "输入最低想拿回金额。",
    guideUse4: "输入平台手续费、运费与其他成本。",
    guideUse5: "查看右侧结果。",
    guideResultTitle: "怎么看结果？",
    guideResultText: "建议底价是不建议再低于的价格。实际入账是扣掉费用后真正拿到的金额。",
    guideRecordTitle: "售出记录是什么？",
    guideRecordText: "如果商品已售出，可以加入记录，方便之后回看。记录只保存在当前浏览器。",
    guideNoteTitle: "注意事项",
    guideNoteText: "这不是正式估价或行情判断工具。所有价格都由你自行输入，是否出售请自行判断。"
  },

  ja: {
    brand: "中古品価格チェッカー",
    navChecker: "チェック",
    navRecords: "記録",
    eyebrow: "中古品販売ツール",
    heroTitle: "中古品を安く売りすぎないように",
    heroText: "販売前に手取り額、下限価格、購入希望額を確認します。",
    quickHint: "価格と費用を入力すると、右側に結果がすぐ表示されます。",
    sectionPrice: "価格",
    itemNameLabel: "商品名",
    itemNamePlaceholder: "中古の椅子",
    sellingPriceLabel: "販売したい価格",
    buyerOfferLabel: "購入希望額",
    minimumCashLabel: "最低限ほしい手取り額",
    sectionCosts: "費用",
    platformFeeLabel: "プラットフォーム手数料 %",
    shippingLabel: "送料",
    moreCosts: "その他の費用",
    paymentFeeLabel: "決済手数料",
    packagingLabel: "梱包費",
    cleaningRepairLabel: "清掃／修理",
    otherCostLabel: "その他費用",
    buyInCostLabel: "仕入れ価格",
    sectionMarket: "市場",
    competitorPriceLabel: "競合価格",
    sectionRecord: "記録",
    recordQtyLabel: "数量",
    recordNoteLabel: "メモ",
    recordNotePlaceholder: "直接引き渡し、送料は購入者負担、小さな傷...",
    resetBtn: "リセット",
    resultReady: "計算結果",
    bottomPriceLabel: "目安下限価格",
    buyerOfferResult: "購入希望額",
    netPayoutLabel: "手取り額",
    totalCostsLabel: "総費用",
    gapLabel: "差額",
    competitionTitle: "競合価格",
    replyTitle: "返信",
    addRecordBtn: "記録に追加",
    recordsEyebrow: "記録",
    recordsTitle: "販売記録",
    recordsNote: "記録はこのブラウザに保存されます。バックアップが必要な場合は記録をダウンロードしてください。",
    downloadRecordsBtn: "記録をダウンロード",
    clearBtn: "削除",
    tableDate: "日付",
    tableItem: "商品",
    tableQty: "数量",
    tableSoldPrice: "販売価格",
    tableNetPayout: "手取り額",
    tableResult: "結果",
    tableNote: "メモ",
    noRecords: "記録はまだありません。",
    disclaimer: "このツールは個人用の計算目的のみです。査定、領収書、請求書、販売価格の保証ではありません。",
    accept: "受け入れ可",
    caution: "注意",
    reject: "非推奨",
    notChecked: "未確認",
    enterData: "価格と費用を入力してください。",
    acceptText: "受け入れ可能です",
    cautionText: "下限に近いです",
    rejectText: "おすすめしません",
    competitionDefault: "必要に応じて競合価格を入力してください。",
    competitionReject: "競合価格はあなたの下限を下回っています。安易に合わせない方がよいです。",
    competitionCaution: "競合価格はあなたの下限に近いです。注意してください。",
    competitionAccept: "まだ競争する余地があります。",
    replyDefault: "購入希望額を入力すると短い返信文が表示されます。",
    replyAccept: "ありがとうございます。この価格でお受けできます。",
    replyCaution: "ありがとうございます。この価格は検討できますが、これ以上の値下げは難しいです。",
    replyReject: "ありがとうございます。ただし、費用を差し引くと私の下限を下回っています。",
    unnamedItem: "無名の商品",
    deleteBtn: "削除",
    noRecordsDownload: "ダウンロードできる記録がありません。",
    clearConfirm: "すべての記録を削除しますか？",
    guideEyebrow: "ガイド",
    guideTitle: "このツールの使い方",
    guideWhatTitle: "このツールでできること",
    guideWhatText: "中古品を販売する前に、手取り額、目安下限価格、購入希望額を確認できます。",
    guideUseTitle: "使い方",
    guideUse1: "販売したい価格を入力します。",
    guideUse2: "値下げ交渉がある場合は購入希望額を入力します。",
    guideUse3: "最低限ほしい手取り額を入力します。",
    guideUse4: "手数料、送料、その他の費用を入力します。",
    guideUse5: "右側の結果を確認します。",
    guideResultTitle: "結果の見方",
    guideResultText: "目安下限価格は、これ以下では売らない方がよい価格です。手取り額は費用を差し引いた後の金額です。",
    guideRecordTitle: "販売記録とは",
    guideRecordText: "商品が売れたら記録に追加できます。記録はこのブラウザにのみ保存されます。",
    guideNoteTitle: "注意事項",
    guideNoteText: "これは査定や市場価格を判断するツールではありません。価格はすべて自分で入力し、販売判断も自分で行ってください。"
  },

  ko: {
    brand: "중고 물품 가격 확인기",
    navChecker: "확인기",
    navRecords: "기록",
    eyebrow: "중고 판매 도구",
    heroTitle: "중고 물품을 너무 싸게 팔지 마세요",
    heroText: "판매 전에 실제 수령액, 하한 가격, 구매자 제안가를 확인하세요.",
    quickHint: "가격과 비용을 입력하면 오른쪽에 결과가 바로 표시됩니다.",
    sectionPrice: "가격",
    itemNameLabel: "물품 이름",
    itemNamePlaceholder: "중고 의자",
    sellingPriceLabel: "판매 희망 가격",
    buyerOfferLabel: "구매자 제안가",
    minimumCashLabel: "최소 회수 금액",
    sectionCosts: "비용",
    platformFeeLabel: "플랫폼 수수료 %",
    shippingLabel: "배송비",
    moreCosts: "추가 비용",
    paymentFeeLabel: "결제 수수료",
    packagingLabel: "포장비",
    cleaningRepairLabel: "청소／수리",
    otherCostLabel: "기타 비용",
    buyInCostLabel: "매입 비용",
    sectionMarket: "시장",
    competitorPriceLabel: "경쟁 가격",
    sectionRecord: "기록",
    recordQtyLabel: "수량",
    recordNoteLabel: "메모",
    recordNotePlaceholder: "직거래, 구매자 배송비 부담, 작은 흠집...",
    resetBtn: "초기화",
    resultReady: "계산 결과",
    bottomPriceLabel: "하한 가격",
    buyerOfferResult: "구매자 제안",
    netPayoutLabel: "실제 수령액",
    totalCostsLabel: "총비용",
    gapLabel: "차이",
    competitionTitle: "경쟁 가격",
    replyTitle: "답장",
    addRecordBtn: "기록에 추가",
    recordsEyebrow: "기록",
    recordsTitle: "판매 기록",
    recordsNote: "기록은 이 브라우저에 저장됩니다. 백업이 필요하면 기록을 다운로드하세요.",
    downloadRecordsBtn: "기록 다운로드",
    clearBtn: "삭제",
    tableDate: "날짜",
    tableItem: "물품",
    tableQty: "수량",
    tableSoldPrice: "판매가",
    tableNetPayout: "실제 수령액",
    tableResult: "결과",
    tableNote: "메모",
    noRecords: "아직 기록이 없습니다.",
    disclaimer: "이 도구는 개인 계산용입니다. 감정, 영수증, 청구서 또는 판매 가격 보장이 아닙니다.",
    accept: "수락 가능",
    caution: "주의",
    reject: "비추천",
    notChecked: "아직 확인 전",
    enterData: "가격과 비용을 먼저 입력하세요.",
    acceptText: "수락 가능해 보입니다",
    cautionText: "하한선에 가깝습니다",
    rejectText: "추천하지 않습니다",
    competitionDefault: "필요하면 경쟁 가격을 입력하세요.",
    competitionReject: "경쟁 가격이 당신의 하한선보다 낮습니다. 무작정 맞추지 마세요.",
    competitionCaution: "경쟁 가격이 당신의 하한선에 가깝습니다. 주의하세요.",
    competitionAccept: "아직 경쟁할 여지가 있습니다.",
    replyDefault: "구매자 제안가를 입력하면 짧은 답장이 표시됩니다.",
    replyAccept: "감사합니다. 이 가격이면 가능합니다.",
    replyCaution: "감사합니다. 이 가격은 고려할 수 있지만 더 낮추기는 어렵습니다.",
    replyReject: "제안 감사합니다. 하지만 비용을 제외하면 제 하한선보다 낮습니다.",
    unnamedItem: "이름 없는 물품",
    deleteBtn: "삭제",
    noRecordsDownload: "다운로드할 기록이 없습니다.",
    clearConfirm: "모든 기록을 삭제하시겠습니까?",
    guideEyebrow: "사용 설명",
    guideTitle: "이 도구 사용 방법",
    guideWhatTitle: "이 도구는 무엇을 하나요?",
    guideWhatText: "중고 물품을 판매하기 전에 실제 수령액, 하한 가격, 구매자 제안가를 확인할 수 있습니다.",
    guideUseTitle: "사용 방법",
    guideUse1: "판매 희망 가격을 입력합니다.",
    guideUse2: "구매자가 가격을 제안하면 구매자 제안가를 입력합니다.",
    guideUse3: "최소 회수 금액을 입력합니다.",
    guideUse4: "수수료, 배송비, 기타 비용을 입력합니다.",
    guideUse5: "오른쪽 결과를 확인합니다.",
    guideResultTitle: "결과 보는 법",
    guideResultText: "하한 가격은 그보다 낮게 팔지 않는 것이 좋은 가격입니다. 실제 수령액은 비용을 뺀 뒤 남는 금액입니다.",
    guideRecordTitle: "판매 기록이란?",
    guideRecordText: "물품이 판매되면 기록에 추가할 수 있습니다. 기록은 이 브라우저에만 저장됩니다.",
    guideNoteTitle: "주의 사항",
    guideNoteText: "이 도구는 감정이나 시장 가격 판단 도구가 아닙니다. 모든 가격은 직접 입력하고 판매 여부도 직접 판단해야 합니다."
  }
};

const fields = {
  itemName: document.getElementById("itemName"),
  sellingPrice: document.getElementById("sellingPrice"),
  buyerOffer: document.getElementById("buyerOffer"),
  minimumCash: document.getElementById("minimumCash"),
  platformFee: document.getElementById("platformFee"),
  shipping: document.getElementById("shipping"),
  paymentFee: document.getElementById("paymentFee"),
  packaging: document.getElementById("packaging"),
  cleaningRepair: document.getElementById("cleaningRepair"),
  otherCost: document.getElementById("otherCost"),
  buyInCost: document.getElementById("buyInCost"),
  competitorPrice: document.getElementById("competitorPrice"),
  recordQty: document.getElementById("recordQty"),
  recordNote: document.getElementById("recordNote")
};

const output = {
  decisionBadge: document.getElementById("decisionBadge"),
  bottomPrice: document.getElementById("bottomPrice"),
  offerDecision: document.getElementById("offerDecision"),
  netPayout: document.getElementById("netPayout"),
  totalCosts: document.getElementById("totalCosts"),
  gapAmount: document.getElementById("gapAmount"),
  competitionMessage: document.getElementById("competitionMessage"),
  replyMessage: document.getElementById("replyMessage"),
  recordsBody: document.getElementById("recordsBody")
};

let currentLang = localStorage.getItem(LANG_KEY) || "en";
let latestResult = null;

function t(key) {
  return translations[currentLang][key] || translations.en[key] || key;
}

function getNumber(input) {
  const value = parseFloat(input.value);
  return Number.isFinite(value) ? value : 0;
}

function getInteger(input) {
  const value = parseInt(input.value, 10);
  return Number.isFinite(value) ? value : 0;
}

function hasUserInput() {
  return (
    getNumber(fields.sellingPrice) > 0 ||
    getNumber(fields.buyerOffer) > 0 ||
    getNumber(fields.minimumCash) > 0
  );
}

function formatNumber(value) {
  const number = Number.isFinite(value) ? value : 0;

  return number.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

function getToday() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem(LANG_KEY, lang);
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    element.textContent = t(key);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.getAttribute("data-i18n-placeholder");
    element.setAttribute("placeholder", t(key));
  });

  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
  });

  calculate();
  renderRecords();
}

function calculate() {
  const sellingPrice = getNumber(fields.sellingPrice);
  const buyerOffer = getNumber(fields.buyerOffer);
  const priceUsed = buyerOffer > 0 ? buyerOffer : sellingPrice;

  const minimumCash = getNumber(fields.minimumCash);
  const platformRate = getNumber(fields.platformFee) / 100;

  const paymentFee = getNumber(fields.paymentFee);
  const shipping = getNumber(fields.shipping);
  const packaging = getNumber(fields.packaging);
  const cleaningRepair = getNumber(fields.cleaningRepair);
  const otherCost = getNumber(fields.otherCost);
  const buyInCost = getNumber(fields.buyInCost);
  const competitorPrice = getNumber(fields.competitorPrice);

  if (platformRate >= 1) {
    return;
  }

  const platformFeeAmount = priceUsed * platformRate;
  const fixedCosts = paymentFee + shipping + packaging + cleaningRepair + otherCost;

  const totalCosts = platformFeeAmount + fixedCosts;
  const netPayout = priceUsed - totalCosts;

  const bottomPrice = (minimumCash + fixedCosts) / (1 - platformRate);
  const gap = netPayout - minimumCash;

  const userHasInput = hasUserInput();

  const decision = userHasInput
    ? getDecision(gap, minimumCash)
    : getNeutralDecision();

  const competition = userHasInput
    ? getCompetitionMessage(competitorPrice, bottomPrice)
    : t("competitionDefault");

  const reply = userHasInput
    ? getReplyMessage(decision, buyerOffer)
    : t("replyDefault");

  latestResult = {
    itemName: fields.itemName.value.trim(),
    sellingPrice,
    buyerOffer,
    priceUsed,
    minimumCash,
    platformRate,
    paymentFee,
    shipping,
    packaging,
    cleaningRepair,
    otherCost,
    buyInCost,
    competitorPrice,
    platformFeeAmount,
    fixedCosts,
    totalCosts,
    netPayout,
    bottomPrice,
    gap,
    decision,
    competition,
    reply,
    userHasInput
  };

  renderResult(latestResult);
}

function getNeutralDecision() {
  return {
    label: t("resultReady"),
    className: "neutral",
    text: t("notChecked")
  };
}

function getDecision(gap, minimumCash) {
  if (gap < 0) {
    return {
      label: t("reject"),
      className: "reject",
      text: t("rejectText")
    };
  }

  const base = minimumCash > 0 ? minimumCash : 1;
  const ratio = gap / base;

  if (ratio <= 0.08) {
    return {
      label: t("caution"),
      className: "caution",
      text: t("cautionText")
    };
  }

  return {
    label: t("accept"),
    className: "accept",
    text: t("acceptText")
  };
}

function getCompetitionMessage(competitorPrice, bottomPrice) {
  if (!competitorPrice || competitorPrice <= 0) {
    return t("competitionDefault");
  }

  if (competitorPrice < bottomPrice) {
    return t("competitionReject");
  }

  if (competitorPrice <= bottomPrice * 1.08) {
    return t("competitionCaution");
  }

  return t("competitionAccept");
}

function getReplyMessage(decision, buyerOffer) {
  if (!buyerOffer || buyerOffer <= 0) {
    return t("replyDefault");
  }

  if (decision.className === "reject") {
    return t("replyReject");
  }

  if (decision.className === "caution") {
    return t("replyCaution");
  }

  return t("replyAccept");
}

function renderResult(result) {
  output.decisionBadge.textContent = result.decision.label;
  output.decisionBadge.className = `decision-badge ${result.decision.className}`;

  output.bottomPrice.textContent = formatNumber(result.bottomPrice);
  output.offerDecision.textContent = result.userHasInput ? result.decision.text : t("notChecked");
  output.netPayout.textContent = formatNumber(result.netPayout);
  output.totalCosts.textContent = formatNumber(result.totalCosts);
  output.gapAmount.textContent = formatNumber(result.gap);
  output.competitionMessage.textContent = result.competition;
  output.replyMessage.textContent = result.userHasInput ? result.reply : t("replyDefault");
}

function addRecord() {
  calculate();

  if (!latestResult || !latestResult.userHasInput) {
    return;
  }

  const qty = Math.max(getInteger(fields.recordQty), 1);
  const itemName = latestResult.itemName || t("unnamedItem");
  const note = fields.recordNote.value.trim();

  const record = {
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    date: getToday(),
    itemName,
    qty,
    soldPrice: latestResult.priceUsed,
    netPayout: latestResult.netPayout,
    result: latestResult.decision.label,
    note
  };

  const records = loadRecords();
  records.unshift(record);
  saveRecords(records);
  renderRecords();
}

function loadRecords() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveRecords(records) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
}

function renderRecords() {
  const records = loadRecords();

  if (!records.length) {
    output.recordsBody.innerHTML = `
      <tr>
        <td colspan="8" class="empty-row">${t("noRecords")}</td>
      </tr>
    `;
    return;
  }

  output.recordsBody.innerHTML = records
    .map((record) => {
      return `
        <tr>
          <td>${escapeHtml(record.date)}</td>
          <td>${escapeHtml(record.itemName)}</td>
          <td>${escapeHtml(record.qty)}</td>
          <td>${formatNumber(record.soldPrice)}</td>
          <td>${formatNumber(record.netPayout)}</td>
          <td>${escapeHtml(record.result)}</td>
          <td>${escapeHtml(record.note)}</td>
          <td>
            <button class="delete-btn" data-id="${record.id}" type="button">
              ${t("deleteBtn")}
            </button>
          </td>
        </tr>
      `;
    })
    .join("");

  document.querySelectorAll(".delete-btn").forEach((button) => {
    button.addEventListener("click", () => {
      deleteRecord(button.dataset.id);
    });
  });
}

function deleteRecord(id) {
  const records = loadRecords().filter((record) => record.id !== id);
  saveRecords(records);
  renderRecords();
}

function clearRecords() {
  const confirmed = confirm(t("clearConfirm"));
  if (!confirmed) return;

  saveRecords([]);
  renderRecords();
}

function downloadCsv() {
  const records = loadRecords();

  if (!records.length) {
    alert(t("noRecordsDownload"));
    return;
  }

  const headers = [
    "Date",
    "Item",
    "Qty",
    "Sold Price",
    "Net Payout",
    "Result",
    "Note"
  ];

  const rows = records.map((record) => [
    record.date,
    record.itemName,
    record.qty,
    record.soldPrice,
    record.netPayout,
    record.result,
    record.note
  ]);

  const csvContent = [headers, ...rows]
    .map((row) =>
      row
        .map((value) => {
          const text = String(value ?? "");
          return `"${text.replaceAll('"', '""')}"`;
        })
        .join(",")
    )
    .join("\n");

  const blob = new Blob(["\uFEFF" + csvContent], {
    type: "text/csv;charset=utf-8;"
  });

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = `used-item-records-${getToday()}.csv`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(url);
}

function resetForm() {
  fields.itemName.value = "";
  fields.sellingPrice.value = 0;
  fields.buyerOffer.value = 0;
  fields.minimumCash.value = 0;
  fields.platformFee.value = 0;
  fields.shipping.value = 0;
  fields.paymentFee.value = 0;
  fields.packaging.value = 0;
  fields.cleaningRepair.value = 0;
  fields.otherCost.value = 0;
  fields.buyInCost.value = 0;
  fields.competitorPrice.value = 0;
  fields.recordQty.value = 1;
  fields.recordNote.value = "";

  calculate();
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function bindEvents() {
  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.addEventListener("click", () => {
      applyLanguage(button.dataset.lang);
    });
  });

  const form = document.getElementById("checkerForm");

  form.querySelectorAll("input, textarea").forEach((field) => {
    field.addEventListener("input", calculate);
    field.addEventListener("change", calculate);
    field.addEventListener("keyup", calculate);

    field.addEventListener("paste", () => {
      setTimeout(calculate, 0);
    });
  });

  document.querySelectorAll('input[type="number"]').forEach((input) => {
    input.addEventListener("focus", () => {
      input.select();
    });

    input.addEventListener("mouseup", (event) => {
      event.preventDefault();
    });
  });

  document.getElementById("resetBtn").addEventListener("click", resetForm);
  document.getElementById("addRecordBtn").addEventListener("click", addRecord);
  document.getElementById("downloadCsvBtn").addEventListener("click", downloadCsv);
  document.getElementById("clearRecordsBtn").addEventListener("click", clearRecords);
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();

  bindEvents();
  applyLanguage(currentLang);
  calculate();
  renderRecords();
});
