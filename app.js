// エラーハンドリング
app.use(function(req, res, next) {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});
app.use(function(err, req, res, next) {
  // エラーステータスコードを設定（404以外）
  res.status(err.status || 500);
  if (err.status === 404) {
    // 404エラー用のカスタムページ
    res.sendFile(path.join(__dirname, 'public', '404.html'));
  } else {
    // その他のエラー
    res.send(err.message);
  }
});
