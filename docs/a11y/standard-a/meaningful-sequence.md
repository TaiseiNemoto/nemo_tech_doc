# 1.3.2 意味のある順序

## 達成基準
コンテンツが提示されている順序が意味に影響を及ぼす場合には、正しく読む順序はプログラムによる解釈が可能である。
## 達成方法
- コンテンツを意味のある順序で並べる
- **次の達成方法のどれか一つを用いて、コンテンツの並び順を意味のあるものにする、かつ、その並び順については、コンテンツを意味のある順序で並べる**
  - インラインでテキストの方向を混在させるために、Unicodeの`right-to-left mark (RLM)`又は`left-to-right mark (LRM)`を使用する
  - 入れ子になったテキストの表記方向に伴う問題を解決するために、インライン要素の`dir`属性を使用する
  - 構造を示すマークアップに基づいてコンテンツを配置する
  - 単語内の文字間隔を制御するために、CSSの`letter-spacing`を使用する
- DOMの順序を表示順序と一致させる

## 実装ガイドライン
- DOMの順序と表示順序を一致させる
- 単語内の文字間隔を調整する際には、CSSの`letter-spacing`を利用する。
```HTML
<h2>Museum</h2>

<style>
h2 { letter-spacing: 1em; }
</style>
```

## 参考
[達成基準 1.3.2 を理解する | WCAG 2.0解説書](https://waic.jp/docs/UNDERSTANDING-WCAG20/content-structure-separation-sequence.html)