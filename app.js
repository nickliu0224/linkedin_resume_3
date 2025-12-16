import React, { useState } from 'react';

// --- 內建圖示 (無需外部套件) ---
const IconUser = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
const IconBriefcase = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>;
const IconGraduationCap = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>;
const IconMail = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;
const IconLinkedin = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>;
const IconGithub = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 6 6 6 9.81 1 2.22.65 3.33 3.33 3.33 5.33-4 1.25-5.91 3.5-9.45 3.5H9a2 2 0 0 1-2-2v-4H3c-1 0-2 1-2 2v10"/><path d="M16 22h4v-3a2 2 0 0 0-2-2h-2"/><path d="M9 22H5v-2a2 2 0 0 1 2-2h2"/></svg>;
const IconMapPin = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>;
const IconGlobe = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>;
const IconCheckCircle = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>;
const IconChevronRight = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>;
const IconAward = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>;
const IconMenu = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>;
const IconX = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 18 12"/></svg>;

// --- Data ---
const profile = {
  name: "Nick Liu",
  title: "資深專案經理 (Senior Project Manager)",
  location: "台灣 新北市 (New Taipei City, Taiwan)",
  email: "ashin524@gmail.com",
  linkedin: "www.linkedin.com/in/nick-liu-177155117",
  github: "github.com/username", 
  summary: "擁有超過 10 年經驗的資深專案經理，專精於軟體開發、遊戲平台及行動應用程式專案管理。具備領導跨職能團隊（前端、後端、設計、QA）的豐富經驗，擅長與國際客戶溝通需求、風險管理及流程優化。英語流利，具備 PMP 思維與敏捷開發實務經驗。",
  skills: [
    "專案管理 (Project Management)",
    "團隊領導 (Team Leadership)",
    "軟體測試與品質保證 (QA & Testing)",
    "跨部門溝通 (Cross-functional Comm.)",
    "需求分析 (Requirements Analysis)",
    "敏捷開發 (Agile/Scrum)",
    "風險管理 (Risk Management)",
    "JIRA & Confluence"
  ],
  languages: [
    { name: "中文 (Chinese)", level: "母語 (Native)" },
    { name: "英文 (English)", level: "精通 (Full Professional)" }
  ]
};

const experiences = [
  {
    company: "91APP, Inc.",
    title: "專案經理 (Project Manager)",
    period: "2024年9月 - Present",
    location: "台灣 臺北市",
    details: [
      "負責新零售軟體專案管理與交付。",
      "協調跨部門資源，確保專案按時上線。"
    ]
  },
  {
    company: "奕特資訊有限公司 (前晶峰科技)",
    title: "資深專案經理 (Senior Project Manager)",
    period: "2018年5月 - 2024年5月",
    location: "台灣 台北市 內湖區",
    note: "2020年9月由晶峰科技改名為奕特資訊",
    details: [
      "負責管理遊戲入口網站專案（PC, Mobile, APP）的開發與維運。",
      "擔任專案負責人，領導包含前後端工程師、設計師與測試人員的開發團隊。",
      "與國際客戶協調，理解、分析並確認需求。",
      "規劃專案時程、分派任務、管理風險，促進溝通直至專案上線。",
      "建立開發滿意度調查機制，識別並解決問題，提升團隊服務品質。",
      "優化並導入測試案例 (Test Cases)、程式碼審查 (Code Review) 及工作日誌 (Worklog) 機制。",
      "協助建立並維護公司專案知識庫 (使用 Confluence 與 JIRA)。"
    ]
  },
  {
    company: "TutorABC",
    title: "資深產品經理 (Senior Product Manager)",
    period: "2016年6月 - 2018年5月",
    location: "台灣",
    details: [
      "管理多個軟體應用程式專案，負責時程控制、議題管理與版本更新。",
      "開發並管理新軟體需求，管理外包解決方案。",
      "與 Android, iOS, Infra, Backend, Creative 及 QA 等跨職能團隊合作。",
      "確保 UI/UX 設計的技術可行性。",
      "確保軟體專案在範疇與預算內按時交付。",
      "管理已發布應用程式的維護流程與 Bug 修復。"
    ]
  },
  {
    company: "Acer (宏碁)",
    title: "軟體產品經理 (Software Product Manager)",
    period: "2014年6月 - 2016年6月",
    location: "台北",
    details: [
      "管理 Acer 智慧型手機產品的軟體時程與規格定義。",
      "建立並整合不同產品間的使用者體驗一致性。",
      "領導 ODM 軟體團隊按時達成各項軟體里程碑。",
      "建立 SOP 與權責劃分 (R&R)，加速產品交付。",
      "監控系統效能、音訊、相機、觸控及 UI 體驗的驗證結果。",
      "為電信商 (CHT, T-Mobile, Telenor 等) 提供軟體客製化服務。",
      "監督 WHQL 與 Google CTS 等認證提交。",
      "Provided prompt recovery plans for risk management at different project stages."
    ]
  },
  {
    company: "Acer (宏碁)",
    title: "資深專案工程師 (Senior Project Engineer)",
    period: "2010年9月 - 2014年6月",
    location: "台北",
    details: [
      "領導 Acer 行動產品跨平台測試，安排時程、資源並處理議題。",
      "在海內外進行場測 (Field Trial)，識別通訊與系統問題。",
      "除錯、驗證並排除軟硬體及電信商問題。",
      "根據規格與電信商需求建立測試案例。",
      "與客戶（電信商與零售商）進行現場支援與聯合測試。"
    ]
  }
];

const educations = [
  {
    school: "淡江大學 (Tamkang University)",
    degree: "資訊管理學系 學士 (Bachelor, Information Management)",
    period: "2004 - 2008"
  }
];

const certifications = [
  {
    name: "TOEIC 805",
    issuer: "ETS"
  },
  {
    name: "Google Analytics Individual Qualification",
    issuer: "Google"
  }
];

// --- Components ---

// 移除 TypeScript 定義 ({ currentPage, setPage }: { ... }) 改為一般 JS ({ currentPage, setPage })
const NavBar = ({ currentPage, setPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: '個人簡介 (Profile)', icon: <IconUser /> },
    { id: 'experience', label: '工作經歷 (Experience)', icon: <IconBriefcase /> },
    { id: 'education', label: '學歷與證照 (Edu & Certs)', icon: <IconGraduationCap /> },
  ];

  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Name */}
          <div 
            className="font-bold text-xl cursor-pointer flex items-center gap-2 hover:text-blue-400 transition-colors"
            // 移除 'as Page' 型別斷言
            onClick={() => setPage('home')}
          >
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
              NL
            </div>
            <span>Nick Liu</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setPage(item.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-md transition-all duration-300 ${
                  currentPage === item.id 
                    ? 'bg-blue-600 text-white font-medium shadow-md' 
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-white p-2">
              {isOpen ? <IconX /> : <IconMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setPage(item.id);
                  setIsOpen(false);
                }}
                className={`flex items-center gap-3 w-full text-left px-3 py-3 rounded-md text-base font-medium ${
                  currentPage === item.id 
                    ? 'bg-blue-600 text-white' 
                    : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const HomePage = () => (
  <div className="animate-fade-in space-y-8 pb-12">
    {/* Hero Section */}
    <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white rounded-3xl overflow-hidden shadow-2xl p-8 md:p-16 text-center md:text-left">
      <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <div>
            <h2 className="text-blue-400 font-medium tracking-wider uppercase mb-2">Portfolio</h2>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-2">
              {profile.name}
            </h1>
            <h3 className="text-xl md:text-2xl text-slate-300 font-light">
              {profile.title}
            </h3>
          </div>
          
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">
            {profile.summary}
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-all shadow-lg hover:shadow-blue-500/30">
              <IconMail />
              聯絡我 (Email)
            </a>
            <a href={`https://${profile.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-full font-medium transition-all border border-slate-600">
              <IconLinkedin />
              LinkedIn
            </a>
             {/* New GitHub Button */}
             <a href={`https://${profile.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full font-medium transition-all border border-gray-600">
              <IconGithub />
              GitHub
            </a>
          </div>
        </div>

        {/* Contact Card */}
        <div className="w-full md:w-auto bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-slate-100 min-w-[300px]">
          <h4 className="font-bold text-lg mb-4 border-b border-white/20 pb-2">聯絡資訊 (Contact)</h4>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-blue-400 shrink-0 mt-1"><IconMail /></span>
              <span className="text-sm break-all">{profile.email}</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-400 shrink-0 mt-1"><IconMapPin /></span>
              <span className="text-sm">{profile.location}</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-400 shrink-0 mt-1"><IconGlobe /></span>
              <div className="flex flex-col gap-1 text-sm">
                {profile.languages.map((lang, idx) => (
                  <span key={idx} className="bg-white/10 px-2 py-0.5 rounded text-xs inline-block w-fit">
                    {lang.name} - {lang.level}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Skills Section */}
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-10">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
          <IconCheckCircle />
        </div>
        <h2 className="text-2xl font-bold text-slate-800">專業技能 (Skills)</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {profile.skills.map((skill, index) => (
          <div 
            key={index} 
            className="flex items-center gap-3 p-4 bg-slate-50 border border-slate-100 rounded-xl hover:border-blue-200 hover:bg-blue-50/50 transition-all cursor-default group"
          >
            <div className="w-2 h-2 rounded-full bg-blue-400 group-hover:bg-blue-600 transition-colors"></div>
            <span className="text-slate-700 font-medium group-hover:text-blue-700">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ExperiencePage = () => (
  <div className="animate-fade-in bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12 min-h-screen">
    <div className="flex items-center gap-3 mb-10 border-b border-slate-100 pb-6">
      <div className="p-3 bg-indigo-100 text-indigo-600 rounded-xl">
        <IconBriefcase />
      </div>
      <div>
        <h2 className="text-3xl font-bold text-slate-800">工作經歷</h2>
        <p className="text-slate-500">Professional Experience</p>
      </div>
    </div>

    <div className="relative border-l-2 border-indigo-100 space-y-12 ml-3 md:ml-6 pl-8 md:pl-12 py-2">
      {experiences.map((exp, index) => (
        <div key={index} className="relative group">
          {/* Timeline Dot */}
          <div className="absolute -left-[41px] md:-left-[59px] top-0 w-6 h-6 rounded-full border-4 border-white bg-indigo-500 shadow-md group-hover:scale-110 transition-transform duration-300"></div>

          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
            <div>
              <h3 className="text-xl font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">
                {exp.company}
              </h3>
              <div className="text-lg font-medium text-indigo-600 mt-1">{exp.title}</div>
            </div>
            <div className="text-right flex flex-col items-start md:items-end">
              <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm font-medium mb-1">
                {exp.period}
              </span>
              <span className="flex items-center gap-1 text-slate-400 text-sm">
                <IconMapPin /> {exp.location}
              </span>
            </div>
          </div>
          
          {exp.note && (
             <div className="text-sm text-amber-600 bg-amber-50 px-3 py-1 rounded inline-block mb-3 border border-amber-100">
               ⚠️ {exp.note}
             </div>
          )}

          <ul className="space-y-3">
            {exp.details.map((detail, idx) => (
              <li key={idx} className="flex items-start gap-3 text-slate-600 leading-relaxed">
                <span className="text-indigo-400 mt-1 shrink-0"><IconChevronRight /></span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

const EducationPage = () => (
  <div className="animate-fade-in space-y-8 min-h-screen">
    {/* Education Section */}
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">
      <div className="flex items-center gap-3 mb-8 border-b border-slate-100 pb-4">
        <div className="p-3 bg-emerald-100 text-emerald-600 rounded-xl">
          <IconGraduationCap />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-slate-800">學歷</h2>
          <p className="text-slate-500">Education</p>
        </div>
      </div>

      <div className="grid gap-6">
        {educations.map((edu, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-6 p-6 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm text-2xl border border-slate-100 shrink-0">
              🎓
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-slate-800">{edu.school}</h3>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mt-2 md:mt-0">
                  {edu.period}
                </span>
              </div>
              <p className="text-lg text-slate-600">{edu.degree}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Certifications Section */}
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">
      <div className="flex items-center gap-3 mb-8 border-b border-slate-100 pb-4">
        <div className="p-3 bg-orange-100 text-orange-600 rounded-xl">
          <IconAward />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-slate-800">證照與資格</h2>
          <p className="text-slate-500">Certifications</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <div key={index} className="flex items-center gap-4 p-5 bg-gradient-to-r from-slate-50 to-white rounded-xl border border-slate-200 hover:border-orange-300 transition-colors group">
            <div className="p-3 bg-white rounded-full shadow-sm text-orange-500 group-hover:scale-110 transition-transform">
              <IconAward />
            </div>
            <div>
              <h3 className="font-bold text-slate-800">{cert.name}</h3>
              <p className="text-sm text-slate-500 mt-1">Issuer: {cert.issuer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    
    {/* CTA / Footer for Edu Page */}
    <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-12 text-center">
      <h3 className="text-2xl font-bold mb-4">有興趣進一步合作嗎？</h3>
      <p className="text-slate-300 mb-8 max-w-xl mx-auto">
        憑藉著跨領域的專案管理經驗與專業技能，我隨時準備好迎接新的挑戰。
      </p>
      <a 
        href={`mailto:${profile.email}`} 
        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105"
      >
        <IconMail />
        發送郵件給我
      </a>
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-white border-t border-slate-200 mt-12 py-8">
    <div className="max-w-6xl mx-auto px-4 text-center">
      <p className="text-slate-500 text-sm">
        © {new Date().getFullYear()} Nick Liu. All rights reserved.
      </p>
      <p className="text-slate-400 text-xs mt-2">
        Designed based on PDF Profile
      </p>
    </div>
  </footer>
);

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* !! 關鍵設定 (Universal Loader) !!
        這裡同時載入 Tailwind CSS 並提供基礎樣式重置。
        即使 Tailwind 載入失敗，基本的 style 標籤也能防止跑版。
      */}
      <div dangerouslySetInnerHTML={{ __html: `
        <script src="https://cdn.tailwindcss.com"></script>
        <style>
          body { margin: 0; font-family: system-ui, sans-serif; background: #f8fafc; color: #0f172a; }
          img, svg { vertical-align: middle; }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
          @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        </style>
      `}} />

      <NavBar currentPage={currentPage} setPage={setCurrentPage} />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'experience' && <ExperiencePage />}
        {currentPage === 'education' && <EducationPage />}
      </main>

      <Footer />
    </div>
  );
}
