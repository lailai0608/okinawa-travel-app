import React, { useState } from 'react';
import { MapPin, Sun, Calendar, Info, CreditCard } from 'lucide-react';

const TravelApp = () => {
  const [activeTab, setActiveTab] = useState('itinerary');

  [cite_start]// 根據 PDF 行程內容自動分析 [cite: 1]
  const itinerary = [
    { 
      date: "12/26 (Day 1)", 
      title: "抵達 & 夕陽", 
      items: [
        [cite_start]{ type: '🏨', time: '下午', title: '飯店寄行李', nav: '那霸國際通大和ROYNET飯店', note: '住國際通入口，搭公車極方便 [cite: 3, 4]' },
        [cite_start]{ type: '🌅', time: '16:30', title: '瀨長島看夕陽', nav: 'Umikaji Terrace', tag: '看夕陽', note: '搭 TK02 巴士，看飛機起降 [cite: 8, 9]' }
      ]
    },
    { 
      date: "12/27 (Day 2)", 
      title: "北部一日遊", 
      items: [
        [cite_start]{ type: '🐋', time: '全天', title: '美麗海水族館/萬座毛', nav: '沖繩美麗海水族館', tag: '預約制 [cite: 11][cite_start]', note: '停留約 2.5 小時 [cite: 13]' },
        [cite_start]{ type: '🍔', time: '下午', title: '美國村必吃美食', nav: 'American Village', tag: '必吃', note: '必點 A&W 漢堡、Blue Seal 冰淇淋 [cite: 14]' }
      ]
    },
    { 
      date: "12/29 (Day 4)", 
      title: "南部 & 深度遊", 
      items: [
        [cite_start]{ type: '🐚', time: '中午', title: '系滿魚市場吃海鮮', nav: '系滿魚市場', tag: '美食', note: '南部觀光巴士行程 [cite: 21, 23]' },
        [cite_start]{ type: '🥞', time: '16:00', title: '瀨長島: 幸福鬆餅', nav: 'Happy Pancake Okinawa', tag: '重要預約', note: '深度攻略：預約 16:00 幸福鬆餅 [cite: 25]' }
      ]
    }
  ];

  return (
    // 使用 Tailwind 類別定義日式極簡風格
    <div className="max-w-md mx-auto bg-slate-50 min-h-screen pb-24 font-sans shadow-lg relative">
      {/* Header */}
      <header className="bg-white p-6 border-b border-slate-100 sticky top-0 z-50">
        <h1 className="text-2xl font-black text-blue-600 tracking-tighter">沖繩冬日旅 12.26</h1>
        [cite_start]<p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">不開車自由行小助手 [cite: 1]</p>
      </header>

      {activeTab === 'itinerary' ? (
        <div className="p-4 space-y-8 mt-2">
          {itinerary.map((day, idx) => (
            <div key={idx} className="space-y-4">
              {/* 日期標籤 */}
              <div className="flex items-center gap-2 bg-blue-600 text-white w-fit px-4 py-1.5 rounded-full shadow-md">
                <Calendar size={14} />
                <span className="text-xs font-bold tracking-wide">{day.date}</span>
              </div>
              
              {day.items.map((item, i) => (
                <div key={i} className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm transition-transform active:scale-95">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[10px] bg-slate-100 text-slate-500 px-2.5 py-1 rounded-lg font-mono font-bold tracking-wider">{item.time}</span>
                    {item.tag && (
                      <span className="text-[10px] bg-orange-100 text-orange-600 px-3 py-1 rounded-full font-black tracking-tight">
                        {item.tag}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <span className="text-3xl filter drop-shadow-sm">{item.type}</span>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-800 text-base leading-snug">{item.title}</h3>
                      <p className="text-[11px] text-slate-400 mt-1.5 leading-relaxed font-medium">{item.note}</p>
                      
                      {/* 導航按鈕修復：改為正確的 Google Maps URL 格式 */}
                      <button 
                        onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.nav)}`)}
                        className="mt-4 flex items-center justify-center gap-2 bg-slate-900 text-white text-[11px] py-3 px-4 rounded-2xl font-bold w-full hover:bg-blue-600 transition-colors shadow-lg shadow-slate-200"
                      >
                        <MapPin size={14} /> 開啟導航
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <div className="p-8 space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
            <h2 className="font-bold text-slate-800 flex items-center gap-2 mb-4">
              <Info size={18} className="text-blue-500" /> 緊急聯絡資訊
            </h2>
            <div className="space-y-2 text-sm text-slate-600">
              <p className="flex justify-between font-medium"><span>🚑 救護車/火警</span><span className="text-red-500 font-bold">119</span></p>
              <p className="flex justify-between font-medium"><span>👮 警察局</span><span className="text-blue-500 font-bold">110</span></p>
              [cite_start]<p className="text-[10px] text-slate-400 mt-4 italic">[cite: 21]</p>
            </div>
          </div>
        </div>
      )}

      {/* Tab Bar */}
      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/90 backdrop-blur-xl border-t border-slate-100 flex justify-around py-4 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
        <button 
          onClick={() => setActiveTab('itinerary')} 
          className={`flex flex-col items-center transition-colors ${activeTab === 'itinerary' ? 'text-blue-600' : 'text-slate-300'}`}
        >
          <Calendar size={20} />
          <span className="text-[9px] font-black mt-1.5 uppercase tracking-wider">行程 Itinerary</span>
        </button>
        <button 
          onClick={() => setActiveTab('tools')} 
          className={`flex flex-col items-center transition-colors ${activeTab === 'tools' ? 'text-blue-600' : 'text-slate-300'}`}
        >
          <CreditCard size={20} />
          <span className="text-[9px] font-black mt-1.5 uppercase tracking-wider">工具 Tools</span>
        </button>
      </nav>
    </div>
  );
};

export default TravelApp;