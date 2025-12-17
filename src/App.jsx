import React, { useState } from 'react';
import { MapPin, Sun, Calendar, Info, CreditCard } from 'lucide-react';

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
        { type: '🐋', time: '全天', title: '美麗海水族館/萬座毛', nav: '沖繩美麗海水族館', tag: '預約制', note: '停留約 2.5 小時' },
        { type: '🍔', time: '下午', title: '美國村必吃美食', nav: 'American Village', tag: '必吃', note: '必點 A&W 漢堡、Blue Seal 冰淇淋' }
      ]
    },
    { 
      date: "12/29 (Day 4)", 
      title: "南部 & 深度遊", 
      items: [
        { type: '🐚', time: '中午', title: '系滿魚市場吃海鮮', nav: '系滿魚市場', tag: '美食', note: '南部觀光巴士行程' },
        { type: '🥞', time: '16:00', title: '瀨長島: 幸福鬆餅', nav: 'Happy Pancake Okinawa', tag: '重要預約', note: '深度攻略：預約 16:00 幸福鬆餅' }
      ]
    }
  ];

  return (
    <div className="max-w-md mx-auto bg-slate-50 min-h-screen pb-24 font-sans shadow-lg relative text-slate-800">
      <header className="bg-white p-6 border-b border-slate-100 sticky top-0 z-50">
        <h1 className="text-2xl font-black text-blue-600 tracking-tighter">沖繩冬日旅 12.26</h1>
        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">不開車自由行小助手</p>
      </header>

      {activeTab === 'itinerary' ? (
        <div className="p-4 space-y-8 mt-2">
          {itinerary.map((day, idx) => (
            <div key={idx} className="space-y-4">
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
                  
                  <div className="flex gap-4 items-