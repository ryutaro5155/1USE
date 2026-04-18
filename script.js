const datasets = {
  lip: {
    metrics: ["4,860", "1,642", "34%", "78"],
    insight: "価格納得感と色味の想像しづらさが離脱を生んでいます。",
    body: "店頭テスターに触れる前の比較段階で、SNSの発色画像と口コミの具体性が購入判断に強く影響しています。",
    reasons: [
      ["価格が高く感じた", 36],
      ["自分に似合う色が分からない", 28],
      ["口コミが少ない", 19],
      ["競合商品の限定色を選んだ", 17],
    ],
    actions: [
      ["発色比較のUGCを増やす", "肌色別の投稿を学生アンバサダーから回収し、購入前の不安を減らす。", "高"],
      ["税込価格の納得材料を追加", "容量・持続時間・美容成分を同じ画面で比較できる訴求にする。", "中"],
      ["店頭POPに未購入理由を反映", "迷いが多い色番に、大学生レビューの短い引用を置く。", "高"],
    ],
    competitors: [
      ["ROM&ND", "発色の投稿が多く、失敗しにくい印象。", 42, "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=500&q=80"],
      ["CANMAKE", "価格が低く、授業後に買いやすい。", 31, "https://images.unsplash.com/photo-1631214540242-3cd8c6f5ee6f?auto=format&fit=crop&w=500&q=80"],
      ["KATE", "落ちにくさの口コミが具体的。", 18, "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=500&q=80"],
    ],
  },
  base: {
    metrics: ["3,120", "1,088", "29%", "72"],
    insight: "崩れにくさの証拠不足が、競合への比較検討を長引かせています。",
    body: "講義、アルバイト、サークル後の肌状態が分かるレビューが少なく、実生活での持ちを判断しにくい状態です。",
    reasons: [
      ["崩れ方が想像できない", 34],
      ["肌色に合うか不安", 27],
      ["厚塗り感が出そう", 21],
      ["価格差が説明されていない", 18],
    ],
    actions: [
      ["時間経過レビューを回収", "朝・昼・夜の写真つきレビューで、崩れ方への不安を減らす。", "高"],
      ["色選び診断を追加", "大学生の肌悩みと授業日の行動量から推奨色を出す。", "中"],
      ["比較表をECに展開", "競合と違う機能を1画面で確認できる状態にする。", "中"],
    ],
    competitors: [
      ["CEZANNE", "価格が低く、試し買いしやすい。", 38, "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=500&q=80"],
      ["TIRTIR", "SNSで崩れにくい投稿をよく見る。", 27, "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=500&q=80"],
      ["MAQuillAGE", "色展開の安心感がある。", 16, "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=500&q=80"],
    ],
  },
  skin: {
    metrics: ["5,430", "1,905", "25%", "81"],
    insight: "成分よりも、肌荒れ時に使える安心感が購入判断を左右しています。",
    body: "敏感肌、季節のゆらぎ、睡眠不足の実感レビューが購入前の信頼を作っています。",
    reasons: [
      ["肌に合うか不安", 41],
      ["効果が分かるまで長い", 24],
      ["香りが強そう", 18],
      ["口コミが自分ごと化できない", 17],
    ],
    actions: [
      ["肌悩み別レビューを分類", "ニキビ、乾燥、ゆらぎ肌のタグで意思決定を短くする。", "高"],
      ["少量トライアルを訴求", "初回購入の心理的ハードルを下げる導線を用意する。", "高"],
      ["香りの評価軸を追加", "香りの強さを5段階で集め、商品ページに表示する。", "中"],
    ],
    competitors: [
      ["無印良品", "低刺激の印象があり、失敗しにくそう。", 35, "https://images.unsplash.com/photo-1601612628452-9e99ced43524?auto=format&fit=crop&w=500&q=80"],
      ["Curel", "敏感肌でも使える安心感がある。", 28, "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=500&q=80"],
      ["VT", "SNSで肌荒れ時の投稿をよく見る。", 19, "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=500&q=80"],
    ],
  },
};

const tableRows = [
  ["価格", "36%", "限定色や韓国コスメと比較した時に、初回購入のハードルが高い。"],
  ["色選び", "28%", "自分の肌色に近い投稿が見つからず、似合うか判断できない。"],
  ["口コミ量", "19%", "公式投稿は多いが、同世代のリアルな使用感が少ない。"],
  ["購入導線", "17%", "店頭で見た後にECで比較し、そのまま他社商品に流れている。"],
];

const stemRows = [
  ["機能性", "33%", "成分や持続時間の説明は読むが、実感レビューがないと決めきれない。"],
  ["価格", "29%", "価格差の理由が数値で分かる商品を選びやすい。"],
  ["時短", "22%", "朝の準備時間が短くなるかを重視している。"],
  ["口コミ量", "16%", "同じ生活リズムの学生レビューを探している。"],
];

const quotes = [
  ["リップは失敗すると使わなくなるので、同じ肌色の人の写真があるブランドを選びました。", "大学2年・文系"],
  ["価格が少し高いなら、落ちにくさの比較があると納得できます。", "大学3年・アルバイト週3"],
  ["公式の説明より、授業後にどう見えるかのレビューを見たいです。", "大学1年・美容関心高"],
];

const reviews = [
  {
    title: "購入しなかった",
    text: "色はかわいいけれど、実際につけた写真が少なくて今回は見送りました。",
    meta: "大学2年・リップ検討者",
    image: "https://images.unsplash.com/photo-1607006344380-b6775a0824a7?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "競合を購入",
    text: "友達の投稿で発色が分かりやすかった別ブランドを選びました。",
    meta: "大学1年・SNS起点",
    image: "https://images.unsplash.com/photo-1598452963314-b09f397a5c48?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "購入した",
    text: "店頭POPに口コミがあり、色選びの不安が減ったので買いました。",
    meta: "大学4年・店頭購入",
    image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=700&q=80",
  },
];

const navItems = document.querySelectorAll(".nav-item");
const views = document.querySelectorAll(".view");
const categoryFilter = document.querySelector("#categoryFilter");
const reasonBars = document.querySelector("#reasonBars");
const actionGrid = document.querySelector("#actionGrid");
const reasonTable = document.querySelector("#reasonTable");
const competitorList = document.querySelector("#competitorList");
const quoteStack = document.querySelector("#quoteStack");
const reviewGrid = document.querySelector("#reviewGrid");
const toast = document.querySelector("#toast");
let stemMode = false;

function renderDashboard() {
  const data = datasets[categoryFilter.value];
  const metricIds = ["metricConsidered", "metricLost", "metricSwitch", "metricScore"];

  metricIds.forEach((id, index) => {
    document.querySelector(`#${id}`).textContent = data.metrics[index];
  });

  document.querySelector("#mainInsight").textContent = data.insight;
  document.querySelector("#mainInsightBody").textContent = data.body;

  reasonBars.innerHTML = data.reasons
    .map(
      ([label, value]) => `
        <div class="bar-row">
          <div class="bar-meta">
            <span>${label}</span>
            <strong>${value}%</strong>
          </div>
          <div class="bar-track"><div class="bar-fill" style="width: ${value}%"></div></div>
        </div>
      `,
    )
    .join("");

  actionGrid.innerHTML = data.actions
    .map(
      ([title, text, impact]) => `
        <article class="action-card">
          <span class="impact">効果 ${impact}</span>
          <strong>${title}</strong>
          <p>${text}</p>
        </article>
      `,
    )
    .join("");

  competitorList.innerHTML = data.competitors
    .map(
      ([name, reason, share, image]) => `
        <article class="competitor-item">
          <img src="${image}" alt="${name}の商品イメージ" />
          <div>
            <strong>${name}</strong>
            <p>${reason}</p>
            <div class="share" aria-label="流出比率 ${share}%"><span style="width: ${share}%"></span></div>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderReasonTable() {
  const rows = stemMode ? stemRows : tableRows;
  reasonTable.innerHTML = rows
    .map(
      ([reason, score, detail]) => `
        <div class="reason-line">
          <strong>${reason}</strong>
          <span class="score-pill">${score}</span>
          <span>${detail}</span>
        </div>
      `,
    )
    .join("");
}

function renderStaticSections() {
  quoteStack.innerHTML = quotes
    .map(
      ([quote, meta]) => `
        <article class="quote-card">
          <strong>${quote}</strong>
          <p>${meta}</p>
        </article>
      `,
    )
    .join("");

  reviewGrid.innerHTML = reviews
    .map(
      (review) => `
        <article class="review-card">
          <img src="${review.image}" alt="${review.title}のレビューイメージ" />
          <div>
            <small>${review.meta}</small>
            <h3>${review.title}</h3>
            <p>${review.text}</p>
          </div>
        </article>
      `,
    )
    .join("");
}

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navItems.forEach((nav) => nav.classList.remove("active"));
    views.forEach((view) => view.classList.remove("active"));
    item.classList.add("active");
    document.querySelector(`#${item.dataset.view}`).classList.add("active");
  });
});

categoryFilter.addEventListener("change", renderDashboard);

document.querySelector("#toggleSegment").addEventListener("click", () => {
  stemMode = !stemMode;
  document.querySelector("#toggleSegment").textContent = stemMode ? "全学生に戻す" : "理系学生に切替";
  renderReasonTable();
});

document.querySelector("#exportButton").addEventListener("click", () => {
  toast.classList.add("visible");
  window.setTimeout(() => toast.classList.remove("visible"), 1800);
});

renderDashboard();
renderReasonTable();
renderStaticSections();
