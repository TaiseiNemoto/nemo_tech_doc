# ★2.5.3 名前 (name) のラベル

## 達成基準
ユーザインタフェースコンポーネントがテキスト又は文字画像を含むラベルを持つ場合、視覚的に提示されたテキストが名前 (name) に含まれている。
## 達成方法
- アクセシブルな名前 (accessible name) の一部として可視ラベルのテキストを含める
- アクセシブルな名前 (accessible name) を視覚的なラベルと一致させる
## 実装ガイドライン
- 可視ラベルとアクセシブルな名前を一致させる
```HTML
<button aria-label="search">search</button>
```
## 参考
[達成基準 2.5.3 を理解する | WCAG 2.1解説書](https://waic.jp/docs/WCAG21/Understanding/label-in-name.html)