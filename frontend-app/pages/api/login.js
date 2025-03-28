export default function handler(req, res) {
  const { username, password } = req.body;

  // ここでユーザー認証を行います
  if (username === 'admin' && password === 'password') {
    res.status(200).json({ message: 'ログイン成功' });
  } else {
    res.status(401).json({ message: 'ユーザー名またはパスワードが間違っています' });
  }
}
