import type { FAQItem, StageTab, Team } from "./types";

export const stageTabs: StageTab[] = [
  { id: "initial-48", label: "Initial 48", disabled: false },
  { id: "round-32", label: "Round of 32", disabled: true },
  { id: "round-16", label: "Round of 16", disabled: true },
  { id: "quarter-finals", label: "Quarter Finals", disabled: true },
  { id: "semi-finals", label: "Semi Finals", disabled: true },
  { id: "final", label: "Final", disabled: true },
];

const logo = (name: string) => `/team-logos/${name}.png`;

export const teams: Team[] = [
  { id: "mexico", group: "A", order: 1, zhName: "墨西哥", name: "Mexico", logoUrl: logo("Mexico"), stage: "initial-48", selectable: true },
  { id: "south-africa", group: "A", order: 2, zhName: "南非", name: "South Africa", logoUrl: logo("South Africa"), stage: "initial-48", selectable: true },
  { id: "south-korea", group: "A", order: 3, zhName: "南韓", name: "South Korea", logoUrl: logo("South Korea"), stage: "initial-48", selectable: true },
  { id: "czech-republic", group: "A", order: 4, zhName: "捷克", name: "Czech Republic", logoUrl: logo("Czech Republic"), stage: "initial-48", selectable: true },
  { id: "canada", group: "B", order: 1, zhName: "加拿大", name: "Canada", logoUrl: logo("Canada"), stage: "initial-48", selectable: true },
  { id: "bosnia-and-herzegovina", group: "B", order: 2, zhName: "波士尼亞與赫塞哥維納", name: "Bosnia and Herzegovina", logoUrl: logo("Bosnia and Herzegovina"), stage: "initial-48", selectable: true },
  { id: "qatar", group: "B", order: 3, zhName: "卡達", name: "Qatar", logoUrl: logo("Qatar"), stage: "initial-48", selectable: true },
  { id: "switzerland", group: "B", order: 4, zhName: "瑞士", name: "Switzerland", logoUrl: logo("Switzerland"), stage: "initial-48", selectable: true },
  { id: "brazil", group: "C", order: 1, zhName: "巴西", name: "Brazil", logoUrl: logo("Brazil"), stage: "initial-48", selectable: true },
  { id: "morocco", group: "C", order: 2, zhName: "摩洛哥", name: "Morocco", logoUrl: logo("Morocco"), stage: "initial-48", selectable: true },
  { id: "haiti", group: "C", order: 3, zhName: "海地", name: "Haiti", logoUrl: logo("Haiti"), stage: "initial-48", selectable: true },
  { id: "scotland", group: "C", order: 4, zhName: "蘇格蘭", name: "Scotland", logoUrl: logo("Scotland"), stage: "initial-48", selectable: true },
  { id: "usa", group: "D", order: 1, zhName: "美國", name: "USA", logoUrl: logo("USA"), stage: "initial-48", selectable: true },
  { id: "paraguay", group: "D", order: 2, zhName: "巴拉圭", name: "Paraguay", logoUrl: logo("Paraguay"), stage: "initial-48", selectable: true },
  { id: "australia", group: "D", order: 3, zhName: "澳洲", name: "Australia", logoUrl: logo("Australia"), stage: "initial-48", selectable: true },
  { id: "turkey", group: "D", order: 4, zhName: "土耳其", name: "Turkey", logoUrl: logo("Turkey"), stage: "initial-48", selectable: true },
  { id: "germany", group: "E", order: 1, zhName: "德國", name: "Germany", logoUrl: logo("Germany"), stage: "initial-48", selectable: true },
  { id: "curacao", group: "E", order: 2, zhName: "庫拉索", name: "Curacao", logoUrl: logo("Curacao"), stage: "initial-48", selectable: true },
  { id: "cote-divoire", group: "E", order: 3, zhName: "象牙海岸", name: "Côte d'Ivoire", logoUrl: logo("Côte d'Ivoire"), stage: "initial-48", selectable: true },
  { id: "ecuador", group: "E", order: 4, zhName: "厄瓜多", name: "Ecuador", logoUrl: logo("Ecuador"), stage: "initial-48", selectable: true },
  { id: "netherlands", group: "F", order: 1, zhName: "荷蘭", name: "Netherlands", logoUrl: logo("Netherlands"), stage: "initial-48", selectable: true },
  { id: "japan", group: "F", order: 2, zhName: "日本", name: "Japan", logoUrl: logo("Japan"), stage: "initial-48", selectable: true },
  { id: "sweden", group: "F", order: 3, zhName: "瑞典", name: "Sweden", logoUrl: logo("Sweden"), stage: "initial-48", selectable: true },
  { id: "tunisia", group: "F", order: 4, zhName: "突尼西亞", name: "Tunisia", logoUrl: logo("Tunisia"), stage: "initial-48", selectable: true },
  { id: "belgium", group: "G", order: 1, zhName: "比利時", name: "Belgium", logoUrl: logo("Belgium"), stage: "initial-48", selectable: true },
  { id: "egypt", group: "G", order: 2, zhName: "埃及", name: "Egypt", logoUrl: logo("Egypt"), stage: "initial-48", selectable: true },
  { id: "iran", group: "G", order: 3, zhName: "伊朗", name: "Iran", logoUrl: logo("Iran"), stage: "initial-48", selectable: true },
  { id: "new-zealand", group: "G", order: 4, zhName: "紐西蘭", name: "New Zealand", logoUrl: logo("New Zealand"), stage: "initial-48", selectable: true },
  { id: "spain", group: "H", order: 1, zhName: "西班牙", name: "Spain", logoUrl: logo("Spain"), stage: "initial-48", selectable: true },
  { id: "cabo-verde", group: "H", order: 2, zhName: "維德角", name: "Cabo Verde", logoUrl: logo("Cabo Verde"), stage: "initial-48", selectable: true },
  { id: "saudi-arabia", group: "H", order: 3, zhName: "沙烏地阿拉伯", name: "Saudi Arabia", logoUrl: logo("Saudi Arabia"), stage: "initial-48", selectable: true },
  { id: "uruguay", group: "H", order: 4, zhName: "烏拉圭", name: "Uruguay", logoUrl: logo("Uruguay"), stage: "initial-48", selectable: true },
  { id: "france", group: "I", order: 1, zhName: "法國", name: "France", logoUrl: logo("France"), stage: "initial-48", selectable: true },
  { id: "senegal", group: "I", order: 2, zhName: "塞內加爾", name: "Senegal", logoUrl: logo("Senegal"), stage: "initial-48", selectable: true },
  { id: "iraq", group: "I", order: 3, zhName: "伊拉克", name: "Iraq", logoUrl: logo("Iraq"), stage: "initial-48", selectable: true },
  { id: "norway", group: "I", order: 4, zhName: "挪威", name: "Norway", logoUrl: logo("Norway"), stage: "initial-48", selectable: true },
  { id: "argentina", group: "J", order: 1, zhName: "阿根廷", name: "Argentina", logoUrl: logo("Argentina"), stage: "initial-48", selectable: true },
  { id: "algeria", group: "J", order: 2, zhName: "阿爾及利亞", name: "Algeria", logoUrl: logo("Algeria"), stage: "initial-48", selectable: true },
  { id: "austria", group: "J", order: 3, zhName: "奧地利", name: "Austria", logoUrl: logo("Austria"), stage: "initial-48", selectable: true },
  { id: "jordan", group: "J", order: 4, zhName: "約旦", name: "Jordan", logoUrl: logo("Jordan"), stage: "initial-48", selectable: true },
  { id: "portugal", group: "K", order: 1, zhName: "葡萄牙", name: "Portugal", logoUrl: logo("Portugal"), stage: "initial-48", selectable: true },
  { id: "congo-dr", group: "K", order: 2, zhName: "剛果民主共和國", name: "Congo DR", logoUrl: logo("Congo DR"), stage: "initial-48", selectable: true },
  { id: "uzbekistan", group: "K", order: 3, zhName: "烏茲別克", name: "Uzbekistan", logoUrl: logo("Uzbekistan"), stage: "initial-48", selectable: true },
  { id: "colombia", group: "K", order: 4, zhName: "哥倫比亞", name: "Colombia", logoUrl: logo("Colombia"), stage: "initial-48", selectable: true },
  { id: "england", group: "L", order: 1, zhName: "英格蘭", name: "England", logoUrl: logo("England"), stage: "initial-48", selectable: true },
  { id: "croatia", group: "L", order: 2, zhName: "克羅埃西亞", name: "Croatia", logoUrl: logo("Croatia"), stage: "initial-48", selectable: true },
  { id: "ghana", group: "L", order: 3, zhName: "迦納", name: "Ghana", logoUrl: logo("Ghana"), stage: "initial-48", selectable: true },
  { id: "panama", group: "L", order: 4, zhName: "巴拿馬", name: "Panama", logoUrl: logo("Panama"), stage: "initial-48", selectable: true },
];

export const faqItems: FAQItem[] = [
  {
    id: "key-rules",
    question: "Key Rules Summary",
    answer:
      "Start with 1 prediction chance, earn up to 5 invite rewards, lock predictions before the deadline, and share the jackpot equally if your champion wins.",
  },
  {
    id: "prediction-work",
    question: "How Predictions Work",
    answer:
      "Select one champion for each available tournament stage. Confirmed predictions are final once submitted.",
  },
  {
    id: "deadline",
    question: "Prediction Deadline",
    answer:
      "Predictions must be submitted before the published deadline for each stage. Locked stages cannot be edited.",
  },
  {
    id: "invite-rewards",
    question: "Invite Rewards",
    answer:
      "Each successful referral adds one extra voting chance, up to a maximum of five successful referrals.",
  },
  {
    id: "jackpot-sharing",
    question: "Jackpot Sharing",
    answer:
      "If your predicted champion wins, the shared jackpot is split equally between all eligible winning participants.",
  },
  {
    id: "finality",
    question: "Finality of Predictions",
    answer:
      "Confirmed predictions cannot be changed after submission or after the stage deadline has passed.",
  },
];
