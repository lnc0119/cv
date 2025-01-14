import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { ChloeAvatar } from "@/images/avatars";

export const RESUME_DATA = {
  name: "李念慈 Chloe Lee",
  initials: "Chloe",
  location: "台北市, 台灣",
  locationLink: "https://www.google.com/maps/place/Taipei,+Taiwan",
  about:
    "",
  summary:
    "As a Full Stack Engineer, I have successfully taken multiple products from 0 to 1. I lead teams effectively, ensuring an environment where people can do their best work. Currently, I work mostly with TypeScript, React, Node.js, and GraphQL. I have over 8 years of experience in working remotely with companies all around the world.",
  avatarUrl: "https://avatars.githubusercontent.com/u/117889394?s=400&u=09b67cb189b76f0d401145b7f11a9cb4cecc6e2a&v=4",
  avatarImage: ChloeAvatar,
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "lnc3596@gmail.com",
    tel: "0983665402",
    social: [
      // {
      //   name: "GitHub",
      //   url: "https://github.com/lnc0119",
      //   icon: GitHubIcon,
      // },
      // {
      //   name: "LinkedIn",
      //   url: "https://www.linkedin.com/in/bjarocki/",
      //   icon: LinkedInIcon,
      // },
      // {
      //   name: "X",
      //   url: "https://x.com/BartoszJarocki",
      //   icon: XIcon,
      // },
    ],
  },
  education: [
    {
      school: "國立中興大學",
      degree: "資訊管理學系碩士",
      dissertation: "同儕互評品質提升之研究: 一個基於深度學習自然語言處理與自回饋機制之線上系統設計與實作",
      start: "2020/09",
      end: "2022/07",
      tags:["Python/Flask","Natural Language Processing","BERT"],
    },
  ],
  publication:"Lin, Kuan-Cheng, Nien-Tzu Li, and Mu-Yen Chen. \"Sustainable education on improving the quality of peer assessment: design and implementation of an online deep learning-based peer assessment system.\" Library Hi Tech (2024).",
  works: [
    {
      company: "國泰世華商業銀行-數位數據暨科技發展中心",
      link: "https://cathaybk.com.tw/cathaybk/",
      badges: [],
      title: "Junior Full-Stack Engineer",
      logo: "",
      start: "2022/09",
      end: "目前",
      description:[
        {title:"前端開發:",content:"使用Angular及TypeScript成功開發部門批次管理系統，優化VM批次設定流程，提升作業效率80%，加速部門內批次之執行效率。"},
        {title:"後端開發:",content:"用Java SpringBoot和.Net開發高效能、安全的RESTful API，支持前端功能和第三方服務的無縫整合，進一步加快數據處理速度。"}],
    },
  ],
  skills: [
    "TypeScript/Angular",
    "C#/.Net",
    "Java/Spring",
    "Python/Flask",
    "UI/UX Design (Sketch/Axure)",
  ],
  projects: [
    {
      title: "台灣自來水-資訊管理系統",
      content:"",
      techStack: [
        "企業合作案",
        "C#/ASP.NET",
        "Vue",
        "MSSQL",
      ],
      description: [
        "將原有的JSP後端邏輯和功能成功遷移至ASP.NET框架，確保邏輯一致，降低作業人員操作邏輯困難",
      ],
      start: "2023/09",
      end:  "2024/02",
      logo: null,
      link: {
        label: "",
        href: undefined,
      },
    },
    {
      title: "愛爾麗-資訊管理系統",
      content:"",
      techStack: [
        "企業合作案",
        "SpringBoot JPA",
        "Oracle",
      ],
      description: [
        "擔任團隊PM，協調工作進程並整合進度報告",
        "使用SpringBoot JPA開發內部資訊系統，協助工作人員新增修改查詢顧客之相關服務"
      ],
      start: "2022/09",
      end:  "2023/09",
      logo: null,
      link: {
        label: "",
        href: undefined,
      },
    },
    {
      title: "警政署-毒品檢測儀器",
      content:"",
      techStack: [
        "產學合作案",
        "UI/UX Design (Sketch)"
      ],
      description:
        [
          "擔任團隊PM，進行專案管理及系統分析",
          "串接硬體(光譜機)以及判斷儀器所檢測之資訊顯示於嵌入式系統",
          "UI/UX Design (Sketch)"
        ],
      start: "2019/04",
      end:  "2019/07",
      logo: null,
      link: {
        label: "",
        href: undefined,
      },
    },
    {
      title: "國健署-不抽菸的貓",
      content:"與國健署合作開發戒菸輔助工具，以輕鬆的養成介面提升青少年使用之意願。",
      techStack: ["產學合作案", "Swift", "UI/UX Design (Sketch)"],
      description:[
        "擔任團隊PM，協調工作進程並整合進度報告",
        "擔任雙系統UI設計以及UX規劃",
        "協助開發iOS系統"
      ],
      start: "2018/06",
      end:  "2019/06",
      logo: null,
      link: {
        label: "",
        href: undefined,
      },
    },

  ],
} as const;
