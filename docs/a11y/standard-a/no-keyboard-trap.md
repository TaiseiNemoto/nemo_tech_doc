# 2.1.2 キーボードトラップなし
## 達成基準
キーボードインタフェースを用いてキーボードフォーカスをそのウェブページのあるコンポーネントに移動できる場合、キーボードインタフェースだけを用いてそのコンポーネントからフォーカスを外すことが可能である。さらに、修飾キーを伴わない矢印キー、Tabキー、又はフォーカスを外すその他の標準的な方法でフォーカスを外せない場合は、フォーカスを外す方法が利用者に通知される。
## 達成方法
利用者がコンテンツ内に閉じ込められないことを確認する
## 実装ガイドライン
- モーダルやポップアップメニューを開いた場合、マウスクリックだけでなく、ESCキーでも閉じることができるようにする。
また、モーダルの最下部までフォーカスした際、次のフォーカスがモーダルの先頭になるように制御する。

## 参考
[達成基準 2.1.2 を理解する | WCAG 2.0解説書](https://waic.jp/docs/UNDERSTANDING-WCAG20/keyboard-operation-trapping.html)