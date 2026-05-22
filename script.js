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
    howToTitle: "How to use",
    howTo1: "Enter your selling price and buyer offer.",
    howTo2: "Add platform fees, shipping, and other costs.",
    howTo3: "Check the bottom price, net payout, and offer decision.",
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
    ready: "Ready",
    dontSellBelow: "Don’t sell below",
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
    clearConfirm: "Clear all records?"
  },

  "zh-TW": {
    brand: "二手商品售價檢查器",
    navChecker: "檢查器",
    navRecords: "紀錄",
    eyebrow: "二手商品銷售工具",
    heroTitle: "不要把二手商品賣得太低",
    heroText: "賣之前先檢查實際入帳、底線價格和買家出價。",
    howToTitle: "使用方式",
    howTo1: "輸入想賣價格和買家出價。",
    howTo2: "填入平台手續費、運費和其他成本。",
    howTo3: "查看不建議低於價格、實際入帳和出價判斷。",
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
    ready: "準備中",
    dontSellBelow: "不建議低於",
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
    clearConfirm: "確定要清除全部紀錄嗎？"
  },

  "zh-CN": {
    brand: "二手商品售价检查器",
    navChecker: "检查器",
    navRecords: "记录",
    eyebrow: "二手商品销售工具",
    heroTitle: "不要把二手商品卖得太低",
    heroText: "卖之前先检查实际入账、底线价格和买家出价。",
    howToTitle: "使用方式",
    howTo1: "输入想卖价格和买家出价。",
    howTo2: "填入平台手续费、运费和其他成本。",
    howTo3: "查看不建议低于价格、实际入账和出价判断。",
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
    ready: "准备中",
    dontSellBelow: "不建议低于",
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
    clearConfirm: "确定要清除全部记录吗？"
  },

  ja: {
    brand: "中古品価格チェッカー",
    navChecker: "チェック",
    navRecords: "記録",
    eyebrow: "中古品販売ツール",
    heroTitle: "中古品を安く売りすぎないように",
    heroText: "販売前に手取り額、下限価格、購入希望額を確認します。",
    howToTitle: "使い方",
    howTo1: "販売したい価格と購入希望者の提示額を入力します。",
    howTo2: "プラットフォーム手数料、送料、その他の費用を入力します。",
    howTo3: "これ以下では売らない方がよい価格、手取り額、提示額の判断を確認します。",
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
    ready: "準備中",
    dontSellBelow: "これ以下では売らない",
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
    clearConfirm: "すべての記録を削除しますか？"
  },

  ko: {
    brand: "중고 물품 가격 확인기",
    navChecker: "확인기",
    navRecords: "기록",
    eyebrow: "중고 판매 도구",
    heroTitle: "중고 물품을 너무 싸게 팔지 마세요",
    heroText: "판매 전에 실제 수령액, 하한 가격, 구매자 제안가를 확인하세요.",
    howToTitle: "사용 방법",
    howTo1: "판매 희망 가격과 구매자 제안가를 입력합니다.",
    howTo2: "플랫폼 수수료, 배송비, 기타 비용을 입력합니다.",
    howTo3: "이 가격보다 낮게 팔지 말아야 할 금액, 실제 수령액, 제안가 판단을 확인합니다.",
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
    ready: "준비",
    dontSellBelow: "이 가격 아래로 팔지 않기",
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
    clearConfirm: "모든 기록을 삭제하시겠습니까?"
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

  const decision = getDecision(gap, minimumCash);
  const competition = getCompetitionMessage(competitorPrice, bottomPrice);
  const reply = getReplyMessage(decision, buyerOffer);

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
    reply
  };

  renderResult(latestResult);
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
  output.offerDecision.textContent = result.decision.text;
  output.netPayout.textContent = formatNumber(result.netPayout);
  output.totalCosts.textContent = formatNumber(result.totalCosts);
  output.gapAmount.textContent = formatNumber(result.gap);
  output.competitionMessage.textContent = result.competition;
  output.replyMessage.textContent = result.reply;
}

function addRecord() {
  calculate();

  if (!latestResult) {
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