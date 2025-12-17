import React, { useState } from 'react';
import { Calendar, MapPin, Info, CreditCard, Navigation } from 'lucide-react';

const TravelApp = () => {
  const [activeTab, setActiveTab] = useState('itinerary');

  const itinerary = [
    { 
      date: "12/26 (Day 1)", 
      title: "抵達 & 夕陽", 
      items: [
        { type: '🏨', time: '下午', title: '飯店寄行李', nav: '那霸國際通大和ROYNET飯店', note: '住國際通入口，搭公車極方便' },
        { type: '🌅', time: '16:30', title: '瀨長島看夕陽', nav: 'Umikaji Terrace', tag: '看夕陽', note: '搭 TK02 巴士，看飛機起降' }
      ]
    },
    { 
      date: "12/27 (Day 2)", 
      title: "北部一日遊", 
      items: [
        { type: '🐋', time: '全天', title: '美麗海水族館/萬座毛', nav: '沖繩美麗海水族館', tag: '預約制', note: '停留約 2.5 小時' }
      ]
    }
  ];

  return (
    <div className="max-w-md mx-auto bg-slate-50 min-h-screen pb-24 font-sans text-slate-800">
      <header className="bg-white p-6 border-b border-slate-100 sticky top-0 z-50 shadow-sm">
        <h1 className="text-2xl font-black text-blue-600 tracking-tighter">沖繩冬日旅 12.26</h1>
        <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">Travel Assistant</p>
      </header>

      {activeTab === 'itinerary' ? (
        <div className="p-4 space-y-8">
          {itinerary.map((day, idx) => (
            <div key={idx} className="space-y-4">
              <div className="flex items-center gap-2 bg-blue-600 text-white w-fit px-4 py-1.5 rounded-full shadow-md">
                <Calendar size={14} />
                <span className="text-xs font-bold tracking-wide">{day.date}</span>
              </div>
              {day.items.map((item, i) => (
                <div key={i} className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[10px] bg-slate-100 text-slate-500 px-2.5 py-1 rounded font-mono font-bold">{item.time}</span>
                    {item.tag && <span className="text-[10px] bg-orange-100 text-orange-600 px-3 py-1 rounded-full font-black">{item.tag}</span>}
                  </div>
                  <div className="flex gap-4 items-start text-left">
                    <span className="text-3xl">{item.type}</span>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-800 text-base">{item.title}</h3>
                      <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">{item.note}</p>
                      <button 
                        onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.nav)}`)}
                        className="mt-4 flex items-center justify-center gap-2 bg-slate-900 text-white text-[11px] py-3 rounded-2xl font-bold w-full active:scale-95 transition-all shadow-lg"
                      >
                        <Navigation size={14} /> 開啟導航
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <div className="p-8 text-center text-slate-400">工具分頁開發中...</div>
      )}

      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/90 backdrop-blur-xl border-t border-slate-100 flex justify-around py-4 shadow-2xl">
        <button onClick={() => setActiveTab('itinerary')} className={`flex flex-col items-center ${activeTab === 'itinerary' ? 'text-blue-600' : 'text-slate-300'}`}>
          <Calendar size={20} /><span className="text-[9px] font-black mt-1 uppercase tracking-widest">行程</span>
        </button>
        <button onClick={() => setActiveTab('tools')} className={`flex flex-col items-center ${activeTab === 'tools' ? 'text-blue-600' : 'text-slate-300'}`}>
          <CreditCard size={20} /><span className="text-[9px] font-black mt-1 uppercase tracking-widest">工具</span>
        </button>
      </nav>
    </div>
  );
};

export default TravelApp;