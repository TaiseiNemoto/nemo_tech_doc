# 4.1.1 構文解析

## 達成基準
マークアップ言語を用いて実装されているコンテンツにおいては、要素には完全な開始タグ及び終了タグがあり、要素は仕様に準じて入れ子になっていて、要素には重複した属性がなく、どのIDも一意的である。ただし、仕様で認められているものを除く。
## 達成方法
- ウェブページをバリデートする
- 仕様に完全に準拠する
- 仕様に準じてHTMLを使用する
- **以下のいずれかの方法で、ウェブページが正しく解析できることを確認する**
    - 開始タグ及び終了タグを仕様に準じて使用していることを確認する、かつ、ウェブページの`id`属性値が一意的（ユニーク）であるようにする、かつ、要素には重複した属性がないようにする
    - ウェブページが`well-formed`であることを確認する

## 実装ガイドライン
- 開始タグ及び終了タグを仕様に準じて使用する。
```HTML
<div>コンテンツです。</div>
```
- 要素は仕様に準じて入れ子にする。
```HTML
<ul>
  <li><a>メニュー１</a></li>
</ul>
```
- `id`属性を重複させない。
```HTML
<div id="uniqueId">コンテンツです。</div>
```

## 参考
[達成基準 4.1.1 を理解する | WCAG 2.0解説書](https://waic.jp/docs/UNDERSTANDING-WCAG20/ensure-compat-parses.html)