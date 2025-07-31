
'use client';

import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ScrollToTopButton from '../../components/ScrollToTopButton';

export default function Activities() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (sectionId: string) => {
    setOpenSection(openSection === sectionId ? null : sectionId);
  };

  const activities = [
    {
      id: 'geodetic',
      title: 'Инженерно-геодезические',
      content: `インジェニアリング・地理空間情報の調査には以下が含まれます：
      
• 基準地理空間情報ネットワークの作成および開発
• 1:500〜1:5000スケールでの土地測量
• 線形施設のトレース
• 地下管路の調整
• 建設された施設の実施測量
• 建物や構造物の変形および沈下のモニタリング
• 建物や構造物へのプロジェクトの実施
      
すべての作業は、現代の測量機器およびGNSS衛星テクノロジーを使用して実施されます。専門家は、任意の複雑さのオブジェクトで作業するための適切な資格および認証書を保持しています。`
    },
    {
      id: 'geological',
      title: 'インジェニアリング地質',
      content: `インジェニアリング地質の調査には以下が含まれます：
      
• 探索ボーリングおよびシャフトの通行
• 地盤の静的および動的音探り
• 地盤の物理機械的特性の実験室調査
• 地盤および地下水の腐食性の評価
• ハイドロジオロジー調査
• 建設用地の地質学的状況の評価
• 地質学的状況の変更予測
      
私たちの認定されたラボラトリーにより、すべての種類の地盤および地下水の試験を、GOSTおよびSP要件に従って実施できます。`
    },
    {
      id: 'hydrometeorological',
      title: '水文気象学的',
      content: `水文気象学的調査には以下が含まれます：
      
• 地域気候条件の調査
• 地表水域の調査
• 水流量の水文学的特性の決定
• 危険な水文気象学的プロセスの評価
• 水文学的レジームの変更予測
• 水の最大流量の計算
• 建設の水域への影響の評価
• 現代の水文気象学的機器および水文学的プロセスの数学的モデリング手法を使用した作業。`
    },
    {
      id: 'environmental',
      title: '環境',
      content: `環境調査には以下が含まれます：
      
• 自然環境要素の調査
• 地域の現代的な環境状況の評価
• 建設時の自然環境の変更予測
• 環境保護に関する勧告の開発
• 環境への影響源の調査
• 大気、地表水および地下水への影響の評価
• 土壌および地盤の汚染調査
• 植物および動物の王国の調査
      
すべての調査は、ロシア連邦の自然保護法の要件に従って実施されます。`
    },
    {
      id: 'design',
      title: '設計',
      content: `セキュリティのためのエンジニアリング技術的手段の設計には以下が含まれます：
      
• セキュリティシステムの設計文書の開発
• ビデオ監視システムの設計
• アクセス制御システム
• 保安および火災警報システム
• 警報および避難管理システム
•統合されたセキュリティシステム
• 周囲のセキュリティシステム
• 通信およびディスパッチシステム
      
設計は、現代のCADシステムおよびセキュリティシステムの計算およびシミュレーションのためのプログラム複合を使用して実施されます。`
    },
    {
      id: 'supervision',
      title: '監視',
      content: `著者監視は、以下の目的で実施されます：
      
• 作業文書に含まれる決定が、設計文書の要件を満たしていることを保証する
• 建設作業中に発生する問題に対する迅速な解決
• 隠し工作の検証への参加
• 作業品質の監視
• 技術機器のテストへの参加
• オブジェクトの受け入れへの参加
• 実施文書の作成
      
専門家は、建設のすべての段階で著者監視を実施し、設計上の決定および規制要件の遵守を保証します。`
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      {/* メインコンテンツ */}
      <main className="pt-40 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* ページタイトル */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              活動
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              株式会社「スヴァゾイガスプロエクト」は、石油・ガス複合体および産業施設の設計・建設における、エンジニアリング調査、設計、監視に関するサービスを提供しています。
            </p>
          </div>

          {/* サービスセクション */}
          <div className="mb-16">
            <div className="bg-slate-800/50 rounded-2xl p-8 md:p-12 shadow-xl border border-slate-700/50">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                複合エンジニアリング調査の実施
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8 text-center">
                株式会社「スヴァゾイガスプロエクト」は、設計作業の実施に必要なすべての基本的な種類の調査を実施しています。
              </p>
              
              <div className="space-y-4">
                {activities.map((activity) => (
                  <div key={activity.id} className="border border-slate-700/50 rounded-xl overflow-hidden">
                    <button
                      onClick={() => toggleSection(activity.id)}
                      className="w-full px-6 py-4 text-left bg-slate-800/30 hover:bg-slate-700/50 transition-colors duration-200 flex items-center justify-between cursor-pointer"
                    >
                      <h3 className="text-xl font-semibold text-white">
                        {activity.title}
                      </h3>
                      <div className="w-6 h-6 flex items-center justify-center">
                        <i className={`ri-arrow-${openSection === activity.id ? 'up' : 'down'}-s-line text-xl text-gray-300`}></i>
                      </div>
                    </button>
                    
                    {openSection === activity.id && (
                      <div className="px-6 py-6 bg-slate-900/30 border-t border-slate-700/50">
                        <div className="text-gray-300 text-base leading-relaxed whitespace-pre-line">
                          {activity.content}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 追加情報 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 rounded-2xl p-8 shadow-xl border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-4">
                私たちと協力するメリット
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <div className="w-6 h-6 flex items-center justify-center mt-1">
                    <i className="ri-check-line text-green-400"></i>
                  </div>
                  <span className="ml-3">認定されたラボラトリー</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 flex items-center justify-center mt-1">
                    <i className="ri-check-line text-green-400"></i>
                  </div>
                  <span className="ml-3">現代的な機器およびテクノロジー</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 flex items-center justify-center mt-1">
                    <i className="ri-check-line text-green-400"></i>
                  </div>
                  <span className="ml-3">資格を持つ専門家</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 flex items-center justify-center mt-1">
                    <i className="ri-check-line text-green-400"></i>
                  </div>
                  <span className="ml-3">自主規制組織への参加</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-8 shadow-xl border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-4">
                品質と信頼性
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <div className="w-6 h-6 flex items-center justify-center mt-1">
                    <i className="ri-shield-check-line text-blue-400"></i>
                  </div>
                  <span className="ml-3">規制要件の遵守</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 flex items-center justify-center mt-1">
                    <i className="ri-shield-check-line text-blue-400"></i>
                  </div>
                  <span className="ml-3">すべての段階での品質管理</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 flex items-center justify-center mt-1">
                    <i className="ri-shield-check-line text-blue-400"></i>
                  </div>
                  <span className="ml-3">保証</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 flex items-center justify-center mt-1">
                    <i className="ri-shield-check-line text-blue-400"></i>
                  </div>
                  <span className="ml-3">締め切りの遵守</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
