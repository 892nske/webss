   // pages/dashboard.js
   import Link from 'next/link';

   const Dashboard = () => {
    return (
      <div>
        <nav>
          <ul>
            <li><Link href="#">ホーム</Link></li>
            <li><Link href="#">ログアウト</Link></li>
          </ul>
        </nav>
        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
          <button style={{ padding: '20px', fontSize: '16px' }}>新規顧客登録</button>
          <button style={{ padding: '20px', fontSize: '16px' }}>顧客リスト</button>
          <button style={{ padding: '20px', fontSize: '16px' }}>計算機</button>
          <button style={{ padding: '20px', fontSize: '16px' }}>アカウント設定</button>
        </div>
      </div>
    );
  }

  export default Dashboard;