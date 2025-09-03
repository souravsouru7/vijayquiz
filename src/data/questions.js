export const LEVELS = ["easy", "medium", "hard"];

export const QUESTIONS = {
  easy: [
    {
      id: "e1",
      question:
        "A stakeholder asks for a quick snapshot of monthly sales by region. Which chart is most appropriate?",
      options: [
        "Line chart",
        "Stacked bar chart",
        "Scatter plot",
        "Box plot",
      ],
      correctIndex: 1,
      explanation:
        "Stacked bar charts give a side‑by‑side comparison across categories (regions) over time (months).",
    },
    {
      id: "e2",
      question:
        "You find duplicate customer IDs in a CSV before analysis. What should you do first?",
      options: [
        "Remove all rows with duplicates",
        "Deduplicate using a clear rule and document it",
        "Ignore since counts are large",
        "Fill duplicates with averages",
      ],
      correctIndex: 1,
      explanation:
        "Define and apply a deterministic deduplication rule (e.g., most recent record) and document the logic.",
    },
    {
      id: "e3",
      question:
        "A PM wants a single KPI for e‑commerce performance combining conversion and AOV. Which is best?",
      options: [
        "Sessions",
        "Revenue per session",
        "Bounce rate",
        "Cart adds",
      ],
      correctIndex: 1,
      explanation:
        "Revenue per session captures both conversion rate and average order value in one metric.",
    },
    {
      id: "e4",
      question:
        "Which metric best indicates acquisition channel efficiency?",
      options: ["CPC", "CPA", "Impressions", "Pages per session"],
      correctIndex: 1,
      explanation:
        "Cost per acquisition (CPA) ties spend to acquired customers/leads, reflecting efficiency.",
    },
    {
      id: "e5",
      question:
        "For a simple categorical comparison (3 product lines), which central tendency is appropriate?",
      options: ["Mean", "Median", "Mode", "Standard deviation"],
      correctIndex: 2,
      explanation:
        "Mode is suitable for nominal categorical data; mean/median need numeric data.",
    },
  ],
  medium: [
    {
      id: "m1",
      question:
        "You must segment customers by recency, frequency, and monetary value. What technique is standard?",
      options: ["RFM scoring", "A/B testing", "ARIMA", "Causal inference"],
      correctIndex: 0,
      explanation: "RFM scoring segments customers using recency, frequency, and monetary dimensions.",
    },
    {
      id: "m2",
      question:
        "A dashboard shows a sudden traffic drop after site redesign. First action?",
      options: [
        "Revert redesign",
        "Check tracking/UTM/tagging deployment",
        "Run t‑test",
        "Change attribution model",
      ],
      correctIndex: 1,
      explanation:
        "Verify instrumentation before analysis; implementation issues commonly cause sudden metric changes.",
    },
    {
      id: "m3",
      question:
        "You compare conversion rate between two variants with 5,000 sessions each. Appropriate test?",
      options: ["Chi‑square test", "Paired t‑test", "ANOVA", "Mann‑Whitney U"],
      correctIndex: 0,
      explanation:
        "For proportions across independent groups, a chi‑square or z‑test for proportions is standard.",
    },
    {
      id: "m4",
      question:
        "Which approach best handles seasonality when forecasting weekly demand?",
      options: ["Moving average", "SARIMA", "Linear regression", "LOESS only"],
      correctIndex: 1,
      explanation: "SARIMA explicitly models seasonal components in time series.",
    },
    {
      id: "m5",
      question:
        "To quantify impact of marketing spend on revenue while controlling for trend, you use:",
      options: ["Logistic regression", "Time‑series regression", "K‑means", "PCA"],
      correctIndex: 1,
      explanation:
        "Time‑series regression (e.g., dynamic regression) accounts for autocorrelation and trend.",
    },
  ],
  hard: [
    {
      id: "h1",
      question:
        "You suspect selection bias in an observational uplift study. Which method mitigates it?",
      options: [
        "Random sub‑sampling",
        "Propensity score matching",
        "Grid search",
        "Min‑max scaling",
      ],
      correctIndex: 1,
      explanation:
        "Propensity score methods balance covariates between treated and control to reduce selection bias.",
    },
    {
      id: "h2",
      question:
        "Attribution across multiple touchpoints with diminishing returns is best modeled by:",
      options: [
        "First‑click",
        "Last‑click",
        "Data‑driven multi‑touch attribution",
        "Linear rule‑based attribution",
      ],
      correctIndex: 2,
      explanation:
        "Data‑driven MTA (e.g., Shapley value/Markov chains) captures multi‑touch effects and nonlinearity.",
    },
    {
      id: "h3",
      question:
        "You detect strong multicollinearity among features explaining revenue. What helps?",
      options: [
        "Add more features",
        "Ridge regression",
        "Lower learning rate",
        "Randomize labels",
      ],
      correctIndex: 1,
      explanation:
        "Ridge (L2) regularization stabilizes coefficients under collinearity by shrinking them.",
    },
    {
      id: "h4",
      question:
        "To evaluate a churn model designed for ranking, which metric fits best?",
      options: ["RMSE", "AUC‑ROC", "MAPE", "R²"],
      correctIndex: 1,
      explanation: "AUC‑ROC assesses ranking/threshold‑free separation for binary classification.",
    },
    {
      id: "h5",
      question:
        "You must estimate causal lift of a feature rollout with staggered timing across regions. Use:",
      options: [
        "Simple before‑after",
        "Difference‑in‑differences",
        "KNN",
        "FFT",
      ],
      correctIndex: 1,
      explanation:
        "Difference‑in‑differences leverages treated vs control over time; staggered adoption variants exist.",
    },
  ],
};

export const PASSING_RULE = {
  easy: { total: 5, requiredCorrect: 3 },
  medium: { total: 5, requiredCorrect: 3 },
  hard: { total: 5, requiredCorrect: 3 },
};


