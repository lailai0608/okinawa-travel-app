import React, { useState } from 'react';
import { MapPin, Sun, Calendar, Info, Navigation, CreditCard } from 'lucide-react';

const TravelApp = () => {
  const [activeTab, setActiveTab] = useState('itinerary');

  // 根據 PDF 行程內容自動分析
  const itinerary = [
    { date: "12/26 (Day 1)", title: "抵達 & 夕陽", items: [
      { type: '🏨', time: '下午', title: '飯店寄行李', nav: '那霸國際通大和ROYNET飯店', note: '住國際通入口，搭公車極方便 [cite: 3, 4]' },
      { type: '🌅', time: '16:30', title: '瀨長島看夕陽', nav: 'Umikaji Terrace', tag: '看夕陽', note: '搭 TK02 巴士，看飛機起降 [cite: 8, 9]' }
    ]},
    { date: "12/27 (Day 2)", title: "北部一日遊", items: [
      { type: '🐋', time: '全天', title: '美麗海水族館/萬座毛', nav: '沖繩美麗海水族館', tag: '預約制 [cite: 11]', note: '停留約 2.5 小時 [cite: 13]' },
      { type: '🍔', time: '下午', title: '美國村必吃美食', nav: 'American Village', tag: '必吃', note: '必點 A&W 漢堡、Blue Seal 冰淇淋 [cite: 14]' }
    ]},
    { date: "12/29 (Day 4)", title: "南部 & 深度遊", items: [
      { type: '🐚', time: '中午', title: '系滿魚市場吃海鮮', nav: '系滿魚市場', tag: '美食', note: '南部觀光巴士行程 [cite: 21, 23]' },
      { type: '🥞', time: '16:00', title: '瀨長島: 幸福鬆餅', nav: 'Happy Pancake Okinawa', tag: '重要預約', note: '深度攻略：預約 16:00 幸福鬆餅 [cite: 25]' }
    ]}
  ];

  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen pb-20 font-sans shadow-lg">
      <header className="bg-white p-6 border-b sticky top-0 z-50">
        <h1 className="text-xl font-bold text-blue-600">沖繩冬日旅 12.26</h1>
        <p className="text-[10px] text-gray-400 mt-1">不開車自由行小助手 [cite: 1]</p>
      </header>

      {activeTab === 'itinerary' ? (
        <div className="p-4 space-y-6">
          {itinerary.map((day, idx) => (
            <div key={idx} className="space-y-4">
              <div className="flex items-center gap-2 bg-blue-50 w-fit px-3 py-1 rounded-full text-blue-700 font-bold text-xs shadow-sm">
                <Calendar size={14}/> {day.date}
              </div>
              {day.items.map((item, i) => (
                <div key={i} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded font-mono font-bold">{item.time}</span>
                    {item.tag && <span className="text-[10px] bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full font-black">{item.tag}</span>}
                  </div>
                  <div className="flex gap-4 items-start">
                    <span className="text-2xl">{item.type}</span>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 leading-tight">{item.title}</h3>
                      <p className="text-[11px] text-gray-500 mt-1 leading-relaxed">{item.note}</p>
                      <button 
                        onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.nav)}`)}
                        className="mt-3 flex items-center justify-center gap-2 bg-slate-900 text-white text-[10px] py-2 px-4 rounded-xl font-black w-full active:scale-95 transition-all"
                      >
                        <MapPin size={12} /> 開啟導航
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <div className="p-6 text-center text-gray-400">
          <Info className="mx-auto mb-2" />
          <p className="text-xs">緊急聯絡：110/119 [cite: 21]</p>
        </div>
      )}

      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/80 backdrop-blur-md border-t flex justify-around py-3 shadow-2xl">
        <button onClick={() => setActiveTab('itinerary')} className={`flex flex-col items-center ${activeTab === 'itinerary' ? 'text-blue-600' : 'text-gray-400'}`}>
          <Calendar size={22} /><span className="text-[10px] font-bold mt-1">行程</span>
        </button>
        <button onClick={() => setActiveTab('tools')} className={`flex flex-col items-center ${activeTab === 'tools' ? 'text-blue-600' : 'text-gray-400'}`}>
          <CreditCard size={22} /><span className="text-[10px] font-bold mt-1">工具</span>
        </button>
      </nav>
    </div>
  );
};

export default TravelApp;